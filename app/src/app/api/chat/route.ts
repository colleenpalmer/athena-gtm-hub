import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';
import { getReferenceFile, listReferenceFiles, getDesignContextFile } from '@/lib/storage';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Check if this is a deadite summon
    const lastMessage = messages[messages.length - 1]?.content || '';
    const isDeaditeSummon = /summon|deadite|necronomicon|dead by dawn|unleash.*horde/i.test(lastMessage);

    // Load reference context
    const refFiles = await listReferenceFiles();
    const referenceContext = await Promise.all(
      refFiles.slice(0, 5).map(async (file) => {
        const content = await getReferenceFile(file);
        return `## reference/${file}\n\n${content}`;
      })
    );

    // Load design context (for deadite reviews)
    const designContextFiles = ['brand.md', 'voice-and-tone.md', 'audience.md', 'positioning.md'];
    const designContext = await Promise.all(
      designContextFiles.map(async (file) => {
        const content = await getDesignContextFile(file);
        if (content) {
          return `## design-context/${file}\n\n${content}`;
        }
        return null;
      })
    );

    const validDesignContext = designContext.filter(Boolean);

    let systemPrompt = '';

    if (isDeaditeSummon) {
      // Deadite mode - load appropriate director skill
      const directorSkills = `
# Design Director Skills

You are acting as one of the AI design directors. Follow these instructions:

## Brand Director
**If summoned deadite-style**, open with one brief tongue-in-cheek Evil Dead-flavored line, then deliver rigorous, professional review.

You review brand consistency, visual identity, personality, and differentiation. Review criteria:
1. **Coherence** — Does this feel like the rest of the brand?
2. **Distinctiveness** — The competitor test: swap logos, does it still work?
3. **Personality** — Name 2-3 traits this projects. Match the brand?
4. **Craft signals** — Alignment, icon consistency, typographic care.

## Copy Director
**If summoned deadite-style**, open with one brief tongue-in-cheek Evil Dead-flavored line, then deliver rigorous, professional review.

You review voice, tone, clarity, microcopy, and editorial. Review criteria:
1. **Clarity** — Can a first-time reader understand each sentence once?
2. **Concision** — Every word earns its place. Show the tighter cut.
3. **Voice & tone** — Consistent voice; tone calibrated to the moment.
4. **Reader-first framing** — Benefits before features.

## Product Design Director
**If summoned deadite-style**, open with one brief tongue-in-cheek Evil Dead-flavored line, then deliver rigorous, professional review.

You review UX, IA, visual hierarchy, interaction design, and accessibility.

## Product Marketing Director
**If summoned deadite-style**, open with one brief tongue-in-cheek Evil Dead-flavored line, then deliver rigorous, professional review.

You review positioning, messaging strategy, value propositions, audience fit, and competitive framing.

## GTM Director
**If summoned deadite-style**, open with one brief tongue-in-cheek Evil Dead-flavored line, then deliver rigorous, professional review.

You review launch readiness, channel strategy, funnel design, activation, and adoption plans.

## Design Team Review (Full Horde)
**If summoned deadite-style** ("unleash the horde", "dead by dawn", etc.), open with one brief Evil Dead-flavored line, then run reviews from ALL directors and synthesize.
`;

      systemPrompt = `${directorSkills}\n\n## Design Context\n\n${validDesignContext.join('\n\n---\n\n')}\n\n## GTM Reference\n\n${referenceContext.join('\n\n---\n\n')}\n\nProvide your review based on the director role summoned. Be rigorous, specific, and professional (after the Evil Dead greeting if applicable).`;
    } else {
      // Normal GTM assistant mode
      systemPrompt = `You are a GTM (Go-To-Market) strategy assistant for Athena, an AI study coach.\n\nYou have access to the following reference materials:\n\n${referenceContext.join('\n\n---\n\n')}\n\nUse this context to provide strategic, data-driven GTM advice. Always ground your recommendations in:\n- The positioning and messaging framework\n- The defined ICPs and personas\n- The Bullseye traction channel framework\n- Approved brand voice and tone\n\nBe specific, actionable, and honest about what's validated vs. what's assumption.\n\n**You can also summon the design deadites** for feedback on specific work:\n- Brand Director: "summon the brand deadite"\n- Copy Director: "summon the copy deadite"\n- Product Design Director: "summon the product design deadite"\n- Product Marketing Director: "summon the PMM deadite"\n- GTM Director: "summon the GTM deadite"\n- Full Team: "unleash the deadite horde" or "dead by dawn"\n\nThey'll give you rigorous feedback with an Evil Dead-style greeting.`;
    }

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      system: systemPrompt,
      messages: messages,
    });

    const content = response.content[0];
    const text = content.type === 'text' ? content.text : '';

    return NextResponse.json({ message: text });
  } catch (error: any) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process chat' },
      { status: 500 }
    );
  }
}
