'use client';

import { useState, useRef } from 'react';
import { LayoutDashboard, FlaskConical, MessageSquare, Keyboard } from 'lucide-react';
import ProjectList from '@/components/ProjectList';
import ExperimentTracker from '@/components/ExperimentTracker';
import ChatInterface from '@/components/ChatInterface';
import KeyboardShortcuts from '@/components/KeyboardShortcuts';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'projects' | 'experiments' | 'chat'>('projects');
  const [showShortcuts, setShowShortcuts] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Athena GTM Hub</h1>
              <p className="text-sm text-gray-500 mt-0.5">
                Go-to-Market command center
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="w-2 h-2 bg-success-500 rounded-full"></div>
              <span className="font-medium">Connected</span>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-1" data-active-tab={activeTab}>
              <button
                onClick={() => setActiveTab('projects')}
                className={`flex items-center gap-2 px-3 py-2.5 border-b-2 transition-all text-sm ${
                  activeTab === 'projects'
                    ? 'border-gray-900 text-gray-900 font-medium'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <LayoutDashboard size={18} />
                Projects
                <kbd className="hidden sm:inline-block ml-2 px-1.5 py-0.5 text-xs bg-gray-100 text-gray-600 rounded font-mono">⌘ 1</kbd>
              </button>
              <button
                onClick={() => setActiveTab('experiments')}
                className={`flex items-center gap-2 px-3 py-2.5 border-b-2 transition-all text-sm ${
                  activeTab === 'experiments'
                    ? 'border-gray-900 text-gray-900 font-medium'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <FlaskConical size={18} />
                Experiments
                <kbd className="hidden sm:inline-block ml-2 px-1.5 py-0.5 text-xs bg-gray-100 text-gray-600 rounded font-mono">⌘ 2</kbd>
              </button>
              <button
                onClick={() => setActiveTab('chat')}
                className={`flex items-center gap-2 px-3 py-2.5 border-b-2 transition-all text-sm ${
                  activeTab === 'chat'
                    ? 'border-gray-900 text-gray-900 font-medium'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <MessageSquare size={18} />
                GTM Assistant
                <kbd className="hidden sm:inline-block ml-2 px-1.5 py-0.5 text-xs bg-gray-100 text-gray-600 rounded font-mono">⌘ 3</kbd>
              </button>
            </div>
            <button
              onClick={() => setShowShortcuts(!showShortcuts)}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
              title="Keyboard shortcuts"
            >
              <Keyboard size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Keyboard Shortcuts Help */}
      {showShortcuts && (
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <div>
                <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-mono text-gray-700">⌘ 1/2/3</kbd>
                <span className="ml-2 text-gray-600">Switch tabs</span>
              </div>
              <div>
                <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-mono text-gray-700">⌘ K</kbd>
                <span className="ml-2 text-gray-600">New project/experiment</span>
              </div>
              <div>
                <kbd className="px-2 py-1 bg-white border border-gray-200 rounded text-xs font-mono text-gray-700">ESC</kbd>
                <span className="ml-2 text-gray-600">Close modal</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className={activeTab === 'chat' ? 'h-[calc(100vh-200px)]' : ''}>
          {activeTab === 'projects' && <ProjectList />}
          {activeTab === 'experiments' && <ExperimentTracker />}
          {activeTab === 'chat' && <ChatInterface />}
        </div>
      </main>

      {/* Keyboard Shortcuts Handler */}
      <KeyboardShortcuts
        onSwitchTab={setActiveTab}
        onNewProject={() => {
          // This will be handled by ProjectList component
          if (activeTab === 'projects') {
            const button = document.querySelector('[data-new-project-btn]') as HTMLButtonElement;
            button?.click();
          }
        }}
      />

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-500">
          <p>
            Data stored in <code className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-mono">../data/</code> •{' '}
            Reference files from <code className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded font-mono">../reference/</code>
          </p>
        </div>
      </footer>
    </div>
  );
}
