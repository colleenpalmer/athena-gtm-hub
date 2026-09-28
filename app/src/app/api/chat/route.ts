import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';
import { getReferenceFile, listReferenceFiles } from '@/lib/storage';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    // Load reference context
    const refFiles = await listReferenceFiles();
    const referenceContext = await Promise.all(
      refFiles.slice(0, 5).map(async (file) => {
        const content = await getReferenceFile(file);
        return `## ${file}\n\n${content}`;
      })
    );

    const systemPrompt = `You are a GTM (Go-To-Market) strategy assistant for Athena, an AI study coach.

You have access to the following reference materials:

${referenceContext.join('\n\n---\n\n')}

Use this context to provide strategic, data-driven GTM advice. Always ground your recommendations in:
- The positioning and messaging framework
- The defined ICPs and personas
- The Bullseye traction channel framework
- Approved brand voice and tone

Be specific, actionable, and honest about what's validated vs. what's assumption.`;

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
