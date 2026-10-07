'use client';

import { useState, useEffect } from 'react';
import { X, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import type { Project } from '@/types';
import { generateTaskSuggestions } from '@/lib/taskSuggestions';

interface ProjectFormProps {
  project?: Project;
  onSubmit: (project: Project) => void;
  onCancel: () => void;
}

export default function ProjectForm({ project, onSubmit, onCancel }: ProjectFormProps) {
  const [formData, setFormData] = useState<Partial<Project>>(
    project || {
      name: '',
      status: 'not-started',
      nextAction: '',
      tasks: [],
    }
  );
  const [showOptional, setShowOptional] = useState(
    !!(project?.owner || project?.deadline || project?.folder || project?.description)
  );
  const [showSuggestedTasks, setShowSuggestedTasks] = useState(false);

  // Auto-suggest tasks when name changes (for new projects only)
  useEffect(() => {
    if (!project && formData.name && formData.name.length > 3) {
      setShowSuggestedTasks(true);
    }
  }, [formData.name, project]);

  const handleUseSuggestedTasks = () => {
    const suggested = generateTaskSuggestions(formData.name || '', formData.description);
    setFormData({ ...formData, tasks: suggested });
    setShowSuggestedTasks(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...project, // preserve fields the form doesn't edit (notes, pageUrl, pinned)
      id: project?.id || Date.now().toString(),
      name: formData.name || '',
      status: formData.status || 'not-started',
      owner: formData.owner,
      nextAction: formData.nextAction,
      deadline: formData.deadline,
      folder: formData.folder,
      description: formData.description,
      tasks: formData.tasks,
    });
  };

  return (
    <div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-xl">
          <h2 className="text-lg font-semibold text-gray-900">
            {project ? 'Edit Project' : 'New Project'}
          </h2>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500 hover:text-gray-700"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Required Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Project Name *
              </label>
              <input
                type="text"
                required
                autoFocus
                value={formData.name || ''}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-base"
                placeholder="e.g., Educator Segment Exploration"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Status *
                </label>
                <select
                  value={formData.status || 'not-started'}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as Project['status'] })}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-sm"
                >
                  <option value="not-started">🔵 Not Started</option>
                  <option value="in-progress">🟡 In Progress</option>
                  <option value="active">🟢 Active</option>
                  <option value="on-hold">⚫ On Hold</option>
                  <option value="complete">✅ Complete</option>
                  <option value="killed">❌ Killed</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Next Action <span className="text-gray-400">(recommended)</span>
                </label>
                <input
                  type="text"
                  value={formData.nextAction || ''}
                  onChange={(e) => setFormData({ ...formData, nextAction: e.target.value })}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-sm"
                  placeholder="What's next?"
                />
              </div>
            </div>
          </div>

          {/* Optional Fields Toggle */}
          <button
            type="button"
            onClick={() => setShowOptional(!showOptional)}
            className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            {showOptional ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {showOptional ? 'Hide' : 'Show'} optional fields
          </button>

          {/* Optional Fields */}
          {showOptional && (
            <div className="space-y-4 pt-2 border-t">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Owner
                  </label>
                  <input
                    type="text"
                    value={formData.owner || ''}
                    onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-sm"
                    placeholder="Person responsible"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deadline
                  </label>
                  <input
                    type="date"
                    value={formData.deadline || ''}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Folder
                </label>
                <input
                  type="text"
                  value={formData.folder || ''}
                  onChange={(e) => setFormData({ ...formData, folder: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-sm"
                  placeholder="work-in-progress/..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description || ''}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 text-sm"
                  rows={3}
                  placeholder="Brief description of the project"
                />
              </div>
            </div>
          )}

          {/* Actions */}
          {/* Suggested Tasks (for new projects) */}
          {!project && showSuggestedTasks && formData.name && (
            <div className="p-4 bg-accent-50 border border-accent-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Sparkles size={20} className="text-accent-600 mt-0.5 shrink-0" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    Add suggested tasks for this project?
                  </p>
                  <p className="text-xs text-gray-600 mb-3">
                    Based on "{formData.name}", we can add {generateTaskSuggestions(formData.name, formData.description).length} common tasks to get you started. You can edit or delete them after.
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={handleUseSuggestedTasks}
                      className="px-3 py-1.5 bg-accent-600 text-white text-sm font-medium rounded-md hover:bg-accent-700 transition-colors"
                    >
                      Yes, add suggested tasks
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowSuggestedTasks(false)}
                      className="px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors"
                    >
                      No thanks, I'll add my own
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 bg-gray-900 text-white font-medium text-sm rounded-lg hover:bg-gray-800 transition-colors"
            >
              {project ? 'Save Changes' : 'Create Project'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2.5 bg-white border border-gray-300 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
