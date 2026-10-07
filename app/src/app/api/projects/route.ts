import { NextRequest, NextResponse } from 'next/server';
import { getProjects, saveProjects } from '@/lib/storage';
import type { Project } from '@/types';

// Only one project can be pinned at a time.
function unpinOthers(projects: Project[], keepId: string) {
  for (const p of projects) {
    if (p.id !== keepId && p.pinned) p.pinned = false;
  }
}

export async function GET() {
  try {
    const projects = await getProjects();
    return NextResponse.json(projects);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const project: Project = await req.json();
    const projects = await getProjects();
    if (project.pinned) unpinOthers(projects, project.id);
    projects.push(project);
    await saveProjects(projects);
    return NextResponse.json(project);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const updatedProject: Project = await req.json();
    const projects = await getProjects();
    const index = projects.findIndex((p) => p.id === updatedProject.id);
    if (index === -1) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    if (updatedProject.pinned) unpinOthers(projects, updatedProject.id);
    projects[index] = updatedProject;
    await saveProjects(projects);
    return NextResponse.json(updatedProject);
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
    const projects = await getProjects();
    const filtered = projects.filter((p) => p.id !== id);
    await saveProjects(filtered);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
