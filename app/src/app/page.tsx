'use client';

import { useState } from 'react';
import { LayoutDashboard, FlaskConical, MessageSquare } from 'lucide-react';
import ProjectList from '@/components/ProjectList';
import ExperimentTracker from '@/components/ExperimentTracker';
import ChatInterface from '@/components/ChatInterface';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'projects' | 'experiments' | 'chat'>('projects');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Athena GTM Hub</h1>
              <p className="text-sm text-gray-600 mt-1">
                Go-to-Market command center — track projects, experiments & strategy
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                Connected to Reference
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab('projects')}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                activeTab === 'projects'
                  ? 'border-blue-600 text-blue-600 font-medium'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <LayoutDashboard size={20} />
              Projects
            </button>
            <button
              onClick={() => setActiveTab('experiments')}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                activeTab === 'experiments'
                  ? 'border-blue-600 text-blue-600 font-medium'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <FlaskConical size={20} />
              Experiments
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                activeTab === 'chat'
                  ? 'border-blue-600 text-blue-600 font-medium'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              <MessageSquare size={20} />
              GTM Assistant
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className={activeTab === 'chat' ? 'h-[calc(100vh-200px)]' : ''}>
          {activeTab === 'projects' && <ProjectList />}
          {activeTab === 'experiments' && <ExperimentTracker />}
          {activeTab === 'chat' && <ChatInterface />}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-600">
          <p>
            Data stored in <code className="text-xs bg-gray-100 px-2 py-1 rounded">../data/</code> •{' '}
            Reference files from <code className="text-xs bg-gray-100 px-2 py-1 rounded">../reference/</code>
          </p>
        </div>
      </footer>
    </div>
  );
}
