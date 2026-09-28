'use client';

import { useState } from 'react';
import { Edit, Trash2, CheckCircle2, Clock, AlertCircle, Pause, XCircle, ChevronDown, ChevronUp, ArrowUp, ArrowDown } from 'lucide-react';
import type { Project } from '@/types';
import TaskList from './TaskList';

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
  onQuickStatusChange: (id: string, status: Project['status']) => void;
  onTasksChange: (id: string, tasks: Project['tasks']) => void;
  onRankChange?: (id: string, direction: 'up' | 'down') => void;
  isFirst?: boolean;
  isLast?: boolean;
}

const statusConfig = {
  'not-started': {
    icon: Clock,
    color: 'bg-white text-gray-600 border-gray-200',
    badge: 'bg-gray-100 text-gray-700',
    label: 'Not Started',
  },
  'in-progress': {
    icon: AlertCircle,
    color: 'bg-white text-gray-900 border-accent-200',
    badge: 'bg-accent-100 text-accent-700',
    label: 'In Progress',
  },
  'active': {
    icon: CheckCircle2,
    color: 'bg-white text-gray-900 border-gray-900',
    badge: 'bg-gray-900 text-white',
    label: 'Active',
  },
  'on-hold': {
    icon: Pause,
    color: 'bg-white text-gray-500 border-gray-300',
    badge: 'bg-gray-200 text-gray-600',
    label: 'On Hold',
  },
  'complete': {
    icon: CheckCircle2,
    color: 'bg-white text-success-600 border-success-200',
    badge: 'bg-success-50 text-success-700',
    label: 'Complete',
  },
  'killed': {
    icon: XCircle,
    color: 'bg-white text-gray-400 border-gray-200',
    badge: 'bg-gray-100 text-gray-500',
    label: 'Killed',
  },
};

export default function ProjectCard({ project, onEdit, onDelete, onQuickStatusChange, onTasksChange, onRankChange, isFirst, isLast }: ProjectCardProps) {
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [showTasks, setShowTasks] = useState(true);
  const [showAllTasks, setShowAllTasks] = useState(false);
  const config = statusConfig[project.status];
  const StatusIcon = config.icon;
  
  const incompleteTasks = project.tasks?.filter(t => !t.completed) || [];
  const hasMultipleTasks = incompleteTasks.length > 1;

  const quickStatuses: Project['status'][] = ['not-started', 'in-progress', 'active', 'complete'];

  return (
    <div className={`bg-white rounded-lg border-2 ${config.color} hover:shadow-lg transition-all group`}>
      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3 flex-1">
            <StatusIcon size={24} className="mt-1 shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 break-words">
                {project.name}
              </h3>
              {project.description && (
                <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-1 ml-4">
            {/* Rank controls - always visible */}
            {onRankChange && (
              <div className="flex flex-col gap-0.5 mr-1">
                <button
                  onClick={() => onRankChange(project.id, 'up')}
                  disabled={isFirst}
                  className="p-0.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Move up"
                >
                  <ArrowUp size={14} />
                </button>
                <button
                  onClick={() => onRankChange(project.id, 'down')}
                  disabled={isLast}
                  className="p-0.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  title="Move down"
                >
                  <ArrowDown size={14} />
                </button>
              </div>
            )}
            {/* Edit/Delete - show on hover */}
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => onEdit(project)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
                title="Edit"
              >
                <Edit size={18} />
              </button>
              <button
                onClick={() => onDelete(project.id)}
                className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                title="Delete"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Status Pills */}
        <div className="flex flex-wrap gap-2 mb-3">
          {quickStatuses.map((status) => {
            const isActive = project.status === status;
            const statusConf = statusConfig[status];
            return (
              <button
                key={status}
                onClick={() => !isActive && onQuickStatusChange(project.id, status)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                  isActive
                    ? statusConf.badge + ' ring-1 ring-inset ring-gray-900/10'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
                disabled={isActive}
              >
                {statusConf.label}
              </button>
            );
          })}
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          {project.nextAction && (
            <div className="col-span-2">
              <span className="font-medium text-gray-700">Next:</span>{' '}
              <span className="text-gray-900">{project.nextAction}</span>
            </div>
          )}
          {project.owner && (
            <div>
              <span className="font-medium text-gray-700">Owner:</span>{' '}
              <span className="text-gray-900">{project.owner}</span>
            </div>
          )}
          {project.deadline && (
            <div>
              <span className="font-medium text-gray-700">Due:</span>{' '}
              <span className="text-gray-900">{new Date(project.deadline).toLocaleDateString()}</span>
            </div>
          )}
          {project.folder && (
            <div className="col-span-2">
              <span className="font-medium text-gray-700">Folder:</span>{' '}
              <code className="text-xs bg-gray-100 px-2 py-0.5 rounded ml-1">{project.folder}</code>
            </div>
          )}
        </div>

        {/* Tasks Section */}
        {(project.tasks && project.tasks.length > 0) || showTasks ? (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center justify-between mb-2">
              <button
                onClick={() => setShowTasks(!showTasks)}
                className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {showTasks ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                Tasks {project.tasks && project.tasks.length > 0 && `(${incompleteTasks.length}/${project.tasks.length})`}
              </button>
              {showTasks && hasMultipleTasks && (
                <button
                  onClick={() => setShowAllTasks(!showAllTasks)}
                  className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showAllTasks ? 'Show next only' : 'View all'}
                </button>
              )}
            </div>
            {showTasks && (
              <TaskList
                projectId={project.id}
                tasks={project.tasks || []}
                onTasksChange={(tasks) => onTasksChange(project.id, tasks)}
                highlightNext={!showAllTasks}
                showOnlyNext={!showAllTasks && incompleteTasks.length > 1}
              />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
}
