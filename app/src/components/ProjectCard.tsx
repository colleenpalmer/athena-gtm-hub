'use client';

import { useState } from 'react';
import { Edit, Trash2, CheckCircle2, Clock, AlertCircle, Pause, XCircle, ChevronDown, ChevronUp, Pin, MessageSquarePlus, Link2, X, StickyNote } from 'lucide-react';
import type { Project } from '@/types';
import TaskList from './TaskList';

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
  onQuickStatusChange: (id: string, status: Project['status']) => void;
  onTasksChange: (id: string, tasks: Project['tasks']) => void;
  onNotesChange: (id: string, notes: Project['notes']) => void;
  onPinToggle: (id: string) => void;
}

// Extract URLs from text
const extractLinks = (text: string): { url: string; label: string }[] => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const matches = text.match(urlRegex) || [];
  return matches.map(url => {
    // Clean trailing punctuation
    const cleanUrl = url.replace(/[.,;:!?)]+$/, '');
    // Try to get a readable label from the URL
    try {
      const urlObj = new URL(cleanUrl);
      const pathParts = urlObj.pathname.split('/').filter(Boolean);
      const label = pathParts.length > 0 
        ? `${urlObj.hostname}/${pathParts.slice(-1)[0].substring(0, 20)}${pathParts.slice(-1)[0].length > 20 ? '...' : ''}`
        : urlObj.hostname;
      return { url: cleanUrl, label };
    } catch {
      return { url: cleanUrl, label: cleanUrl.substring(0, 30) + '...' };
    }
  });
};

// Render text with clickable links
const renderNoteWithLinks = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  
  return parts.map((part, i) => {
    if (part.match(urlRegex)) {
      const cleanUrl = part.replace(/[.,;:!?)]+$/, '');
      const trailing = part.slice(cleanUrl.length);
      return (
        <span key={i}>
          <a 
            href={cleanUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent-600 hover:text-accent-700 underline"
          >
            {cleanUrl}
          </a>
          {trailing}
        </span>
      );
    }
    return part;
  });
};

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

export default function ProjectCard({ project, onEdit, onDelete, onQuickStatusChange, onTasksChange, onNotesChange, onPinToggle }: ProjectCardProps) {
  const [showStatusMenu, setShowStatusMenu] = useState(false);
  const [showTasks, setShowTasks] = useState(true);
  const [showAllTasks, setShowAllTasks] = useState(false);
  const [showNotes, setShowNotes] = useState(true);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [showLinks, setShowLinks] = useState(false);
  const config = statusConfig[project.status];
  const StatusIcon = config.icon;
  const isComplete = project.status === 'complete';
  const isPinned = !!project.pinned;
  
  const incompleteTasks = project.tasks?.filter(t => !t.completed) || [];
  const hasMultipleTasks = incompleteTasks.length > 1;

  // Collect all links from all notes
  const allLinks = (project.notes || []).flatMap(n => 
    extractLinks(n.note).map(link => ({ ...link, noteDate: n.date }))
  );

  const handleAddNote = () => {
    if (!newNote.trim()) return;
    const note = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      note: newNote,
    };
    onNotesChange(project.id, [...(project.notes || []), note]);
    setNewNote('');
    setIsAddingNote(false);
  };

  const handleDeleteNote = (noteId: string) => {
    onNotesChange(project.id, (project.notes || []).filter(n => n.id !== noteId));
  };

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className={`bg-white rounded-lg border-2 ${config.color} hover:shadow-lg transition-all group flex`}>

      <div className="p-4 flex-1 min-w-0">
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex-1 min-w-0">
              <h3 className={`text-lg font-semibold mb-1 break-words ${
                isComplete ? 'text-gray-400 line-through' : 'text-gray-900'
              }`}>
                {project.pageUrl ? (
                  <a
                    href={project.pageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent-600 hover:underline"
                    title="Open project page"
                  >
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              {project.description && (
                <p className="text-sm text-gray-600 line-clamp-2">{project.description}</p>
              )}
          </div>

          {/* Pin (always visible when pinned) + Edit/Delete (on hover) */}
          <div className="flex gap-0.5 shrink-0">
            <button
              onClick={() => onPinToggle(project.id)}
              className={`p-1.5 rounded transition-all ${
                isPinned
                  ? 'text-accent-600 bg-accent-50 hover:bg-accent-100'
                  : 'text-gray-600 hover:bg-gray-100 opacity-0 group-hover:opacity-100'
              }`}
              title={isPinned ? 'Unpin project' : 'Pin to top'}
              aria-pressed={isPinned}
            >
              <Pin size={16} className={isPinned ? 'fill-current' : ''} />
            </button>
            <button
              onClick={() => onEdit(project)}
              className="p-1.5 text-gray-600 hover:bg-gray-100 rounded transition-all opacity-0 group-hover:opacity-100"
              title="Edit"
            >
              <Edit size={16} />
            </button>
            <button
              onClick={() => onDelete(project.id)}
              className="p-1.5 text-red-600 hover:bg-red-50 rounded transition-all opacity-0 group-hover:opacity-100"
              title="Delete"
            >
              <Trash2 size={16} />
            </button>
          </div>
        </div>

        {/* Complete toggle */}
        <button
          onClick={() => onQuickStatusChange(project.id, isComplete ? 'in-progress' : 'complete')}
          className={`inline-flex items-center gap-1.5 mb-3 px-2.5 py-1.5 text-xs font-medium rounded-md border transition-colors ${
            isComplete
              ? 'bg-success-50 text-success-700 border-success-200 hover:bg-success-100'
              : 'text-gray-600 border-gray-200 hover:bg-gray-50 hover:text-gray-900'
          }`}
          title={isComplete ? 'Reopen project' : 'Mark project complete'}
        >
          <CheckCircle2 size={14} />
          {isComplete ? 'Completed' : 'Mark complete'}
        </button>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
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

        {/* Notes Section */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={() => setShowNotes(!showNotes)}
              className="flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              {showNotes ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              <StickyNote size={14} />
              Notes {project.notes && project.notes.length > 0 && `(${project.notes.length})`}
            </button>
            <div className="flex items-center gap-2">
              {allLinks.length > 0 && (
                <button
                  onClick={() => setShowLinks(!showLinks)}
                  className={`flex items-center gap-1 text-xs px-2 py-1 rounded transition-colors ${
                    showLinks ? 'bg-accent-100 text-accent-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Link2 size={12} />
                  {allLinks.length} link{allLinks.length !== 1 ? 's' : ''}
                </button>
              )}
              <button
                onClick={() => setIsAddingNote(!isAddingNote)}
                className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700 px-2 py-1 rounded hover:bg-gray-100 transition-colors"
              >
                <MessageSquarePlus size={14} />
                Add
              </button>
            </div>
          </div>

          {/* Links Panel */}
          {showLinks && allLinks.length > 0 && (
            <div className="mb-3 p-2 bg-accent-50 rounded-lg">
              <div className="text-xs font-medium text-accent-700 mb-1.5">Quick Links</div>
              <div className="flex flex-wrap gap-2">
                {allLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs bg-white px-2 py-1 rounded border border-accent-200 text-accent-700 hover:bg-accent-100 transition-colors"
                  >
                    <Link2 size={10} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Add Note Form */}
          {isAddingNote && (
            <div className="mb-3">
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.metaKey) handleAddNote();
                  if (e.key === 'Escape') {
                    setIsAddingNote(false);
                    setNewNote('');
                  }
                }}
                placeholder="Add a note... (paste links and they'll be tracked)"
                autoFocus
                rows={2}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  onClick={() => {
                    setIsAddingNote(false);
                    setNewNote('');
                  }}
                  className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddNote}
                  className="px-3 py-1.5 text-sm bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
                >
                  Add Note
                </button>
              </div>
            </div>
          )}

          {/* Notes List */}
          {showNotes && (project.notes || []).length > 0 && (
            <div className="space-y-2">
              {[...(project.notes || [])].reverse().map((note) => (
                <div key={note.id} className="group/note text-sm bg-gray-50 rounded-lg p-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-gray-400">{formatDate(note.date)}</span>
                      <p className="text-gray-700 mt-0.5 break-words">{renderNoteWithLinks(note.note)}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteNote(note.id)}
                      className="opacity-0 group-hover/note:opacity-100 p-1 text-gray-400 hover:text-red-600 rounded transition-all"
                      title="Delete note"
                    >
                      <X size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {showNotes && (!project.notes || project.notes.length === 0) && !isAddingNote && (
            <p className="text-xs text-gray-400 italic">No notes yet</p>
          )}
        </div>
      </div>
    </div>
  );
}
