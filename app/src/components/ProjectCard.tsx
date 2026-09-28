'use client';

import { useState } from 'react';
import { Edit, Trash2, CheckCircle2, Clock, AlertCircle, Pause, XCircle } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
  onQuickStatusChange: (id: string, status: Project['status']) => void;
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

export default function ProjectCard({ project, onEdit, onDelete, onQuickStatusChange }: ProjectCardProps) {
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const config = statusConfig[project.status];
  const StatusIcon = config.icon;

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
          <div className="flex gap-1 ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
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
      </div>
    </div>
  );
}
