'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, Edit } from 'lucide-react';
import type { Project } from '@/types';

const statusColors = {
  'not-started': 'bg-gray-100 text-gray-800',
  'in-progress': 'bg-yellow-100 text-yellow-800',
  'active': 'bg-green-100 text-green-800',
  'on-hold': 'bg-orange-100 text-orange-800',
  'complete': 'bg-blue-100 text-blue-800',
  'killed': 'bg-red-100 text-red-800',
};

const statusIcons = {
  'not-started': '🔵',
  'in-progress': '🟡',
  'active': '🟢',
  'on-hold': '⚫',
  'complete': '✅',
  'killed': '❌',
};

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Project>>({});

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch('/api/projects');
    const data = await res.json();
    setProjects(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const project: Project = {
      id: editingId || Date.now().toString(),
      name: formData.name || '',
      status: formData.status || 'not-started',
      owner: formData.owner,
      nextAction: formData.nextAction,
      deadline: formData.deadline,
      folder: formData.folder,
      description: formData.description,
    };

    if (editingId) {
      await fetch('/api/projects', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      });
    } else {
      await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(project),
      });
    }

    setFormData({});
    setIsAdding(false);
    setEditingId(null);
    fetchProjects();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this project?')) {
      await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
      fetchProjects();
    }
  };

  const handleEdit = (project: Project) => {
    setFormData(project);
    setEditingId(project.id);
    setIsAdding(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">GTM Projects</h2>
        <button
          onClick={() => {
            setIsAdding(!isAdding);
            setEditingId(null);
            setFormData({});
          }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Project
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Project Name *</label>
            <input
              type="text"
              required
              value={formData.name || ''}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="e.g., Educator Segment Exploration"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Status *</label>
              <select
                value={formData.status || 'not-started'}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as Project['status'] })}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="not-started">Not Started</option>
                <option value="in-progress">In Progress</option>
                <option value="active">Active</option>
                <option value="on-hold">On Hold</option>
                <option value="complete">Complete</option>
                <option value="killed">Killed</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Owner</label>
              <input
                type="text"
                value={formData.owner || ''}
                onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="Person responsible"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Next Action</label>
            <input
              type="text"
              value={formData.nextAction || ''}
              onChange={(e) => setFormData({ ...formData, nextAction: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="What needs to happen next?"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Deadline</label>
              <input
                type="date"
                value={formData.deadline || ''}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Folder</label>
              <input
                type="text"
                value={formData.folder || ''}
                onChange={(e) => setFormData({ ...formData, folder: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="work-in-progress/..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg"
              rows={3}
              placeholder="Brief description of the project"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {editingId ? 'Update' : 'Add'} Project
            </button>
            <button
              type="button"
              onClick={() => {
                setIsAdding(false);
                setEditingId(null);
                setFormData({});
              }}
              className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-4 rounded-lg border hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{statusIcons[project.status]}</span>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[project.status]}`}>
                    {project.status.replace('-', ' ')}
                  </span>
                </div>
                
                {project.description && (
                  <p className="text-sm text-gray-600 mb-2">{project.description}</p>
                )}

                <div className="grid grid-cols-2 gap-4 text-sm">
                  {project.owner && (
                    <div>
                      <span className="text-gray-500">Owner:</span> {project.owner}
                    </div>
                  )}
                  {project.deadline && (
                    <div>
                      <span className="text-gray-500">Deadline:</span> {project.deadline}
                    </div>
                  )}
                  {project.nextAction && (
                    <div className="col-span-2">
                      <span className="text-gray-500">Next:</span> {project.nextAction}
                    </div>
                  )}
                  {project.folder && (
                    <div className="col-span-2">
                      <span className="text-gray-500">Folder:</span>{' '}
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded">{project.folder}</code>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit(project)}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {projects.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No projects yet. Click "Add Project" to get started.
          </div>
        )}
      </div>
    </div>
  );
}
