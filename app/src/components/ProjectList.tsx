'use client';

import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import type { Project } from '@/types';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';
import ToDoView from './ToDoView';

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'all' | Project['status'] | 'tasks'>('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const res = await fetch('/api/projects');
    const data = await res.json();
    // Completed projects sink to the bottom; otherwise keep stored order (Array.sort is stable).
    const sorted = data.sort((a: Project, b: Project) => {
      const completeA = a.status === 'complete' ? 1 : 0;
      const completeB = b.status === 'complete' ? 1 : 0;
      return completeA - completeB;
    });
    setProjects(sorted);
  };

  const handleSubmit = async (project: Project) => {
    if (editingProject) {
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

    setShowForm(false);
    setEditingProject(null);
    fetchProjects();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this project?')) {
      await fetch(`/api/projects?id=${id}`, { method: 'DELETE' });
      fetchProjects();
    }
  };

  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setShowForm(true);
  };

  const handleQuickStatusChange = async (id: string, status: Project['status']) => {
    const project = projects.find(p => p.id === id);
    if (!project) return;

    const updated = { ...project, status };
    await fetch('/api/projects', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    fetchProjects();
  };

  const handleTasksChange = async (projectId: string, tasks: Project['tasks']) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const updated = { ...project, tasks };
    await fetch('/api/projects', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    fetchProjects();
  };

  const handleTaskComplete = async (projectId: string, taskId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (!project || !project.tasks) return;

    const updatedTasks = project.tasks.map(task =>
      task.id === taskId
        ? { ...task, completed: true, completedAt: new Date().toISOString() }
        : task
    );

    await handleTasksChange(projectId, updatedTasks);
  };

  const handleNotesChange = async (projectId: string, notes: Project['notes']) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const updated = { ...project, notes };
    await fetch('/api/projects', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updated),
    });
    fetchProjects();
  };

  // The API unpins any other project when one is pinned, so this keeps a single pin.
  const handlePinToggle = async (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    await fetch('/api/projects', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...project, pinned: !project.pinned }),
    });
    fetchProjects();
  };

  const matchingProjects = filter === 'all' 
    ? projects 
    : filter === 'tasks'
    ? projects.filter(p => p.tasks && p.tasks.some(t => !t.completed))
    : projects.filter(p => p.status === filter);

  // Pinned project (if it matches the current filter) sits full-width above the grid.
  const pinnedProject = matchingProjects.find(p => p.pinned);
  const filteredProjects = matchingProjects.filter(p => !p.pinned);

  const cardProps = {
    onEdit: handleEdit,
    onDelete: handleDelete,
    onQuickStatusChange: handleQuickStatusChange,
    onTasksChange: handleTasksChange,
    onNotesChange: handleNotesChange,
    onPinToggle: handlePinToggle,
  };

  const statusCounts = {
    all: projects.length,
    'not-started': projects.filter(p => p.status === 'not-started').length,
    'in-progress': projects.filter(p => p.status === 'in-progress').length,
    'active': projects.filter(p => p.status === 'active').length,
    'complete': projects.filter(p => p.status === 'complete').length,
    'tasks': projects.filter(p => p.tasks?.some(t => !t.completed)).length, // Count projects with next tasks
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      {filter !== 'tasks' && (
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">GTM Projects</h2>
            <p className="text-sm text-gray-600 mt-1">
              {matchingProjects.length} {filter === 'all' ? 'total' : filter.replace('-', ' ')} project{matchingProjects.length !== 1 ? 's' : ''}
            </p>
          </div>
          <button
            onClick={() => {
              setEditingProject(null);
              setShowForm(true);
            }}
            data-new-project-btn
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Plus size={18} />
            New Project
          </button>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-md font-medium text-sm whitespace-nowrap transition-all ${
            filter === 'all'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
          }`}
        >
          All <span className="opacity-60">({statusCounts.all})</span>
        </button>
        <button
          onClick={() => setFilter('tasks')}
          className={`px-3 py-1.5 rounded-md font-medium text-sm whitespace-nowrap transition-all ${
            filter === 'tasks'
              ? 'bg-accent-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
          }`}
        >
          To Do <span className="opacity-60">({statusCounts.tasks})</span>
        </button>
        <button
          onClick={() => setFilter('in-progress')}
          className={`px-3 py-1.5 rounded-md font-medium text-sm whitespace-nowrap transition-all ${
            filter === 'in-progress'
              ? 'bg-accent-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
          }`}
        >
          In Progress <span className="opacity-60">({statusCounts['in-progress']})</span>
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-3 py-1.5 rounded-md font-medium text-sm whitespace-nowrap transition-all ${
            filter === 'active'
              ? 'bg-gray-900 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
          }`}
        >
          Active <span className="opacity-60">({statusCounts.active})</span>
        </button>
        <button
          onClick={() => setFilter('not-started')}
          className={`px-3 py-1.5 rounded-md font-medium text-sm whitespace-nowrap transition-all ${
            filter === 'not-started'
              ? 'bg-gray-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
          }`}
        >
          Not Started <span className="opacity-60">({statusCounts['not-started']})</span>
        </button>
        <button
          onClick={() => setFilter('complete')}
          className={`px-3 py-1.5 rounded-md font-medium text-sm whitespace-nowrap transition-all ${
            filter === 'complete'
              ? 'bg-success-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
          }`}
        >
          Complete <span className="opacity-60">({statusCounts.complete})</span>
        </button>
      </div>

      {/* To Do View or Project Grid */}
      {filter === 'tasks' ? (
        <ToDoView
          projects={projects}
          onTaskComplete={handleTaskComplete}
          onProjectClick={(project) => {
            setFilter('all');
            // Optionally could scroll to project or open it
          }}
        />
      ) : (
        <div className="space-y-4">
        {pinnedProject && (
          <ProjectCard key={pinnedProject.id} project={pinnedProject} {...cardProps} />
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} {...cardProps} />
            ))
          ) : !pinnedProject ? (
            <div className="col-span-full text-center py-16 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
              <p className="text-gray-400 text-sm mb-4">
                {filter === 'all' 
                  ? 'No projects yet' 
                  : `No ${filter.replace('-', ' ')} projects`}
              </p>
              <button
                onClick={() => {
                  setEditingProject(null);
                  setShowForm(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Plus size={18} />
                Create Your First Project
              </button>
            </div>
          ) : null}
        </div>
        </div>
      )}

      {/* Form Modal */}
      {showForm && (
        <ProjectForm
          project={editingProject || undefined}
          onSubmit={handleSubmit}
          onCancel={() => {
            setShowForm(false);
            setEditingProject(null);
          }}
        />
      )}
    </div>
  );
}
