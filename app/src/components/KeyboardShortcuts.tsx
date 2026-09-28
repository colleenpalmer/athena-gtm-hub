'use client';

import { useEffect } from 'react';

interface KeyboardShortcutsProps {
  onNewProject?: () => void;
  onNewExperiment?: () => void;
  onFocusSearch?: () => void;
  onSwitchTab?: (tab: 'projects' | 'experiments') => void;
}

export default function KeyboardShortcuts({
  onNewProject,
  onNewExperiment,
  onFocusSearch,
  onSwitchTab,
}: KeyboardShortcutsProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K = New (context-dependent)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        const activeTab = document.querySelector('[data-active-tab]')?.getAttribute('data-active-tab');
        if (activeTab === 'projects' && onNewProject) onNewProject();
        if (activeTab === 'experiments' && onNewExperiment) onNewExperiment();
      }

      // Cmd/Ctrl + 1/2 = Switch tabs
      if ((e.metaKey || e.ctrlKey) && onSwitchTab) {
        if (e.key === '1') {
          e.preventDefault();
          onSwitchTab('projects');
        }
        if (e.key === '2') {
          e.preventDefault();
          onSwitchTab('experiments');
        }
      }

      // / = Focus search (if available)
      if (e.key === '/' && onFocusSearch) {
        e.preventDefault();
        onFocusSearch();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNewProject, onNewExperiment, onFocusSearch, onSwitchTab]);

  return null; // This component only handles events
}
