import { NextRequest, NextResponse } from 'next/server';
import { getDecisions, saveDecisions } from '@/lib/storage';
import type { Decision } from '@/types';

export async function GET() {
  try {
    const decisions = await getDecisions();
    return NextResponse.json(decisions);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const decision: Decision = await req.json();
    const decisions = await getDecisions();
    decisions.push(decision);
    await saveDecisions(decisions);
    return NextResponse.json(decision);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const updatedDecision: Decision = await req.json();
    const decisions = await getDecisions();
    const index = decisions.findIndex((d) => d.id === updatedDecision.id);
    if (index === -1) {
      return NextResponse.json({ error: 'Decision not found' }, { status: 404 });
    }
    decisions[index] = updatedDecision;
    await saveDecisions(decisions);
    return NextResponse.json(updatedDecision);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'ID required' }, { status: 400 });
    }
    const decisions = await getDecisions();
    const filtered = decisions.filter((d) => d.id !== id);
    await saveDecisions(filtered);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
