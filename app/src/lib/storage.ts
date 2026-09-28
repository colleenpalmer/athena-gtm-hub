import fs from 'fs/promises';
import path from 'path';
import type { Project, Experiment, Decision } from '@/types';

const DATA_DIR = path.join(process.cwd(), '..', 'data');

// Ensure data directory exists
async function ensureDataDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

// Projects
export async function getProjects(): Promise<Project[]> {
  await ensureDataDir();
  try {
    const data = await fs.readFile(path.join(DATA_DIR, 'projects.json'), 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function saveProjects(projects: Project[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(
    path.join(DATA_DIR, 'projects.json'),
    JSON.stringify(projects, null, 2)
  );
}

// Experiments
export async function getExperiments(): Promise<Experiment[]> {
  await ensureDataDir();
  try {
    const data = await fs.readFile(path.join(DATA_DIR, 'experiments.json'), 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function saveExperiments(experiments: Experiment[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(
    path.join(DATA_DIR, 'experiments.json'),
    JSON.stringify(experiments, null, 2)
  );
}

// Decisions
export async function getDecisions(): Promise<Decision[]> {
  await ensureDataDir();
  try {
    const data = await fs.readFile(path.join(DATA_DIR, 'decisions.json'), 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function saveDecisions(decisions: Decision[]): Promise<void> {
  await ensureDataDir();
  await fs.writeFile(
    path.join(DATA_DIR, 'decisions.json'),
    JSON.stringify(decisions, null, 2)
  );
}

// Reference files
export async function getReferenceFile(filename: string): Promise<string> {
  const filePath = path.join(process.cwd(), '..', 'reference', filename);
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch {
    return '';
  }
}

export async function listReferenceFiles(): Promise<string[]> {
  const refPath = path.join(process.cwd(), '..', 'reference');
  try {
    const files = await fs.readdir(refPath);
    return files.filter(f => f.endsWith('.md'));
  } catch {
    return [];
  }
}

// Design context files
export async function getDesignContextFile(filename: string): Promise<string> {
  const filePath = path.join(process.cwd(), '..', 'design-context', filename);
  try {
    return await fs.readFile(filePath, 'utf-8');
  } catch {
    return '';
  }
}

export async function listDesignContextFiles(): Promise<string[]> {
  const designPath = path.join(process.cwd(), '..', 'design-context');
  try {
    const files = await fs.readdir(designPath);
    return files.filter(f => f.endsWith('.md'));
  } catch {
    return [];
  }
}
