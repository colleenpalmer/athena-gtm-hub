'use client';

import { Check, ChevronRight } from 'lucide-react';
import type { Project } from '@/types';

interface ToDoViewProps {
  projects: Project[];
  onTaskComplete: (projectId: string, taskId: string) => void;
  onProjectClick: (project: Project) => void;
}

const statusConfig = {
  'not-started': { emoji: '🔵', color: 'text-gray-600' },
  'in-progress': { emoji: '🟡', color: 'text-accent-600' },
  'active': { emoji: '⚫', color: 'text-gray-900' },
  'on-hold': { emoji: '⏸️', color: 'text-gray-500' },
  'complete': { emoji: '✅', color: 'text-success-600' },
  'killed': { emoji: '❌', color: 'text-gray-400' },
};

export default function ToDoView({ projects, onTaskComplete, onProjectClick }: ToDoViewProps) {
  // Get projects with tasks, along with their next (first incomplete) task
  const projectsWithNextTask = projects
    .map(project => {
      const nextTask = project.tasks?.find(t => !t.completed);
      return nextTask ? { project, nextTask } : null;
    })
    .filter(Boolean) as Array<{ project: Project; nextTask: NonNullable<Project['tasks']>[0] }>;

  if (projectsWithNextTask.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">All caught up!</h3>
        <p className="text-sm text-gray-500">No pending tasks across your projects.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900">To Do</h2>
        <p className="text-sm text-gray-500 mt-1">
          Next action for each project ({projectsWithNextTask.length} item{projectsWithNextTask.length !== 1 ? 's' : ''})
        </p>
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {projectsWithNextTask.map(({ project, nextTask }) => {
          const config = statusConfig[project.status];
          const taskCount = project.tasks?.length || 0;
          const completedCount = project.tasks?.filter(t => t.completed).length || 0;
          
          return (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                {/* Checkbox */}
                <button
                  onClick={() => onTaskComplete(project.id, nextTask.id)}
                  className="mt-1 w-5 h-5 rounded border-2 border-gray-300 hover:border-gray-900 flex items-center justify-center shrink-0 transition-all hover:scale-110"
                  title="Mark complete"
                >
                  {nextTask.completed && <Check size={14} className="text-gray-900" />}
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Project Info */}
                  <div className="flex items-center gap-2 mb-2">
                    <button
                      onClick={() => onProjectClick(project)}
                      className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors group/project"
                    >
                      <span className={config.color}>{config.emoji}</span>
                      <span className="font-medium">{project.name}</span>
                      <ChevronRight size={14} className="opacity-0 group-hover/project:opacity-100 transition-opacity" />
                    </button>
                    {taskCount > 1 && (
                      <span className="text-xs text-gray-400">
                        {completedCount}/{taskCount} done
                      </span>
                    )}
                  </div>

                  {/* Task Title */}
                  <div className="text-base text-gray-900">
                    {nextTask.title}
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                    {project.owner && (
                      <span>Owner: {project.owner}</span>
                    )}
                    {project.deadline && (
                      <span>Due: {new Date(project.deadline).toLocaleDateString()}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer hint */}
      <div className="text-center pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-400">
          💡 Complete a task to see the next one from that project
        </p>
      </div>
    </div>
  );
}
