import { NextRequest, NextResponse } from 'next/server';
import { getExperiments, saveExperiments } from '@/lib/storage';
import type { Experiment, ExperimentHistoryEntry } from '@/types';

// Fields to track changes for
const TRACKED_FIELDS = ['hypothesis', 'status', 'decision', 'channel', 'segment'] as const;

function trackChanges(oldExp: Experiment, newExp: Experiment): ExperimentHistoryEntry[] {
  const changes: ExperimentHistoryEntry[] = [];
  const now = new Date().toISOString();

  for (const field of TRACKED_FIELDS) {
    const oldVal = oldExp[field];
    const newVal = newExp[field];
    if (oldVal !== newVal) {
      changes.push({
        date: now,
        field,
        from: oldVal?.toString() || '(empty)',
        to: newVal?.toString() || '(empty)',
      });
    }
  }

  // Track result.fit changes
  if (oldExp.result?.fit !== newExp.result?.fit) {
    changes.push({
      date: now,
      field: 'result.fit',
      from: oldExp.result?.fit || '(empty)',
      to: newExp.result?.fit || '(empty)',
    });
  }

  return changes;
}

export async function GET() {
  try {
    const experiments = await getExperiments();
    return NextResponse.json(experiments);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const experiment: Experiment = await req.json();
    const experiments = await getExperiments();
    experiments.push(experiment);
    await saveExperiments(experiments);
    return NextResponse.json(experiment);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const updatedExperiment: Experiment = await req.json();
    const experiments = await getExperiments();
    const index = experiments.findIndex((e) => e.id === updatedExperiment.id);
    if (index === -1) {
      return NextResponse.json({ error: 'Experiment not found' }, { status: 404 });
    }
    
    // Auto-track history of changes
    const oldExperiment = experiments[index];
    const newChanges = trackChanges(oldExperiment, updatedExperiment);
    
    if (newChanges.length > 0) {
      updatedExperiment.history = [
        ...(oldExperiment.history || []),
        ...newChanges,
      ];
    } else {
      // Preserve existing history
      updatedExperiment.history = oldExperiment.history;
    }
    
    experiments[index] = updatedExperiment;
    await saveExperiments(experiments);
    return NextResponse.json(updatedExperiment);
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
    const experiments = await getExperiments();
    const filtered = experiments.filter((e) => e.id !== id);
    await saveExperiments(filtered);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
