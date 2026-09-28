'use client';

import { useState } from 'react';
import { Plus, Check, X, Edit2, ArrowUp, ArrowDown } from 'lucide-react';
import type { Task } from '@/types';

interface TaskListProps {
  projectId: string;
  tasks: Task[];
  onTasksChange: (tasks: Task[]) => void;
  compact?: boolean;
  highlightNext?: boolean;
  showOnlyNext?: boolean;
}

export default function TaskList({ projectId, tasks = [], onTasksChange, compact = false, highlightNext = false, showOnlyNext = false }: TaskListProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      projectId,
      title: newTaskTitle,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    onTasksChange([...tasks, newTask]);
    setNewTaskTitle('');
    setIsAdding(false);
  };

  const handleToggleTask = (taskId: string) => {
    const updated = tasks.map(task =>
      task.id === taskId
        ? { ...task, completed: !task.completed, completedAt: !task.completed ? new Date().toISOString() : undefined }
        : task
    );
    onTasksChange(updated);
  };

  const handleDeleteTask = (taskId: string) => {
    onTasksChange(tasks.filter(task => task.id !== taskId));
  };

  const handleStartEdit = (task: Task) => {
    setEditingTaskId(task.id);
    setEditingText(task.title);
  };

  const handleSaveEdit = () => {
    if (!editingText.trim() || !editingTaskId) return;

    const updated = tasks.map(task =>
      task.id === editingTaskId
        ? { ...task, title: editingText }
        : task
    );
    onTasksChange(updated);
    setEditingTaskId(null);
    setEditingText('');
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setEditingText('');
  };

  const handleMoveTask = (taskId: string, direction: 'up' | 'down') => {
    const incompleteIds = tasks.filter(t => !t.completed).map(t => t.id);
    const currentIndex = incompleteIds.indexOf(taskId);
    if (currentIndex === -1) return;

    const targetIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (targetIndex < 0 || targetIndex >= incompleteIds.length) return;

    // Swap in the incomplete list
    const newIncompleteIds = [...incompleteIds];
    [newIncompleteIds[currentIndex], newIncompleteIds[targetIndex]] = 
      [newIncompleteIds[targetIndex], newIncompleteIds[currentIndex]];

    // Rebuild full task list: reordered incomplete + completed
    const completedTasks = tasks.filter(t => t.completed);
    const reorderedIncomplete = newIncompleteIds.map(id => tasks.find(t => t.id === id)!).filter(Boolean);
    onTasksChange([...reorderedIncomplete, ...completedTasks]);
  };

  const incompleteTasks = tasks.filter(t => !t.completed);
  const completedTasks = tasks.filter(t => t.completed);
  const nextTask = incompleteTasks[0];

  if (compact && tasks.length === 0) return null;

  return (
    <div className="space-y-2">
      {/* Task List */}
      {incompleteTasks.length > 0 && (
        <div className="space-y-1">
          {(showOnlyNext ? [incompleteTasks[0]] : incompleteTasks).filter(Boolean).map((task, index) => {
            const actualIndex = incompleteTasks.findIndex(t => t.id === task.id);
            const isNext = highlightNext && index === 0;
            const isEditing = editingTaskId === task.id;
            
            return (
              <div
                key={task.id}
                className={`group flex items-start gap-2 text-sm -mx-2 px-2 py-1.5 rounded transition-all ${
                  isNext 
                    ? 'bg-accent-50 border border-accent-200 hover:bg-accent-100' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <button
                  onClick={() => handleToggleTask(task.id)}
                  className={`mt-0.5 w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 transition-all ${
                    isNext
                      ? 'border-accent-500 hover:border-accent-600'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  {task.completed && <Check size={12} className="text-gray-600" />}
                </button>
                
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleSaveEdit();
                        if (e.key === 'Escape') handleCancelEdit();
                      }}
                      autoFocus
                      className="flex-1 px-2 py-0.5 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                    />
                    <button
                      onClick={handleSaveEdit}
                      className="text-gray-900 hover:bg-gray-100 p-1 rounded transition-colors"
                      title="Save"
                    >
                      <Check size={14} />
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="text-gray-400 hover:bg-gray-100 p-1 rounded transition-colors"
                      title="Cancel"
                    >
                      <X size={14} />
                    </button>
                  </>
                ) : (
                  <>
                    <span className={`flex-1 ${
                      isNext ? 'text-gray-900 font-medium' : 'text-gray-700'
                    }`}>
                      {isNext && <span className="text-accent-600 mr-1.5">→</span>}
                      {task.title}
                    </span>
                    {/* Reorder controls */}
                    <div className="flex gap-0.5 opacity-0 group-hover:opacity-100 transition-all">
                      <button
                        onClick={() => handleMoveTask(task.id, 'up')}
                        disabled={actualIndex === 0}
                        className="text-gray-400 hover:text-gray-600 p-1 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        title="Move up"
                      >
                        <ArrowUp size={12} />
                      </button>
                      <button
                        onClick={() => handleMoveTask(task.id, 'down')}
                        disabled={actualIndex === incompleteTasks.length - 1}
                        className="text-gray-400 hover:text-gray-600 p-1 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        title="Move down"
                      >
                        <ArrowDown size={12} />
                      </button>
                    </div>
                    <button
                      onClick={() => handleStartEdit(task)}
                      className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-gray-600 p-1 rounded transition-all"
                      title="Edit"
                    >
                      <Edit2 size={12} />
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 p-1 rounded transition-all"
                      title="Delete"
                    >
                      <X size={14} />
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Completed Tasks (Collapsed) */}
      {completedTasks.length > 0 && !compact && (
        <details className="text-sm">
          <summary className="cursor-pointer text-gray-500 hover:text-gray-700 text-xs font-medium">
            {completedTasks.length} completed
          </summary>
          <div className="mt-1 space-y-1 pl-2">
            {completedTasks.map(task => (
              <div
                key={task.id}
                className="group flex items-start gap-2 text-sm opacity-50 hover:opacity-100 hover:bg-gray-50 -mx-2 px-2 py-1 rounded transition-all"
              >
                <button
                  onClick={() => handleToggleTask(task.id)}
                  className="mt-0.5 w-4 h-4 rounded border-2 border-gray-300 bg-gray-900 flex items-center justify-center shrink-0"
                >
                  <Check size={12} className="text-white" />
                </button>
                <span className="flex-1 text-gray-500 line-through">{task.title}</span>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-600 transition-all shrink-0"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </details>
      )}

      {/* Add Task */}
      {isAdding ? (
        <div className="flex gap-2 items-center">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleAddTask();
              if (e.key === 'Escape') {
                setIsAdding(false);
                setNewTaskTitle('');
              }
            }}
            placeholder="Task name..."
            autoFocus
            className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
          />
          <button
            onClick={handleAddTask}
            className="p-1 text-gray-900 hover:bg-gray-100 rounded transition-colors"
            title="Add task"
          >
            <Check size={16} />
          </button>
          <button
            onClick={() => {
              setIsAdding(false);
              setNewTaskTitle('');
            }}
            className="p-1 text-gray-400 hover:bg-gray-100 rounded transition-colors"
            title="Cancel"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Plus size={14} />
          <span>Add task</span>
        </button>
      )}
    </div>
  );
}
