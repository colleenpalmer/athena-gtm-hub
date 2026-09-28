export interface Project {
  id: string;
  name: string;
  status: 'not-started' | 'in-progress' | 'active' | 'on-hold' | 'complete' | 'killed';
  owner?: string;
  nextAction?: string;
  deadline?: string;
  folder?: string;
  description?: string;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  completed: boolean;
  createdAt: string;
  completedAt?: string;
}

export interface Experiment {
  id: string;
  date: string;
  channel: string;
  segment: 'D2C' | 'Institutional' | 'Educator' | 'Parent';
  hypothesis: string;
  result?: {
    cac?: number;
    conversion?: number;
    fit: 'Good' | 'Meh' | 'Bad';
    notes: string;
  };
  decision?: 'Scale' | 'Iterate' | 'Kill';
  status: 'planned' | 'running' | 'complete';
}

export interface Decision {
  id: string;
  date: string;
  title: string;
  context: string;
  options: string[];
  decision: string;
  reasoning: string;
  owner?: string;
  status: 'pending' | 'in-progress' | 'validated' | 'killed';
  successCriteria?: string;
  updates?: Array<{
    date: string;
    note: string;
  }>;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
