'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, Edit } from 'lucide-react';
import type { Experiment } from '@/types';

const statusColors = {
  planned: 'bg-gray-100 text-gray-800',
  running: 'bg-yellow-100 text-yellow-800',
  complete: 'bg-green-100 text-green-800',
};

export default function ExperimentTracker() {
  const [experiments, setExperiments] = useState<Experiment[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState<Partial<Experiment>>({});

  useEffect(() => {
    fetchExperiments();
  }, []);

  const fetchExperiments = async () => {
    const res = await fetch('/api/experiments');
    const data = await res.json();
    setExperiments(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const experiment: Experiment = {
      id: editingId || Date.now().toString(),
      date: formData.date || new Date().toISOString().split('T')[0],
      channel: formData.channel || '',
      segment: formData.segment || 'D2C',
      hypothesis: formData.hypothesis || '',
      result: formData.result,
      decision: formData.decision,
      status: formData.status || 'planned',
    };

    if (editingId) {
      await fetch('/api/experiments', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(experiment),
      });
    } else {
      await fetch('/api/experiments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(experiment),
      });
    }

    setFormData({});
    setIsAdding(false);
    setEditingId(null);
    fetchExperiments();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Delete this experiment?')) {
      await fetch(`/api/experiments?id=${id}`, { method: 'DELETE' });
      fetchExperiments();
    }
  };

  const handleEdit = (experiment: Experiment) => {
    setFormData(experiment);
    setEditingId(experiment.id);
    setIsAdding(true);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Channel Experiments</h2>
        <button
          onClick={() => {
            setIsAdding(!isAdding);
            setEditingId(null);
            setFormData({});
          }}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus size={20} />
          Add Experiment
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg border space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input
                type="date"
                value={formData.date || new Date().toISOString().split('T')[0]}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select
                value={formData.status || 'planned'}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as Experiment['status'] })}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="planned">Planned</option>
                <option value="running">Running</option>
                <option value="complete">Complete</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Channel *</label>
              <input
                type="text"
                required
                value={formData.channel || ''}
                onChange={(e) => setFormData({ ...formData, channel: e.target.value })}
                className="w-full px-3 py-2 border rounded-lg"
                placeholder="e.g., Targeting Blogs, SEM, Community"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Segment *</label>
              <select
                value={formData.segment || 'D2C'}
                onChange={(e) => setFormData({ ...formData, segment: e.target.value as Experiment['segment'] })}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="D2C">D2C</option>
                <option value="Institutional">Institutional</option>
                <option value="Educator">Educator</option>
                <option value="Parent">Parent</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Hypothesis *</label>
            <textarea
              required
              value={formData.hypothesis || ''}
              onChange={(e) => setFormData({ ...formData, hypothesis: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg"
              rows={2}
              placeholder="What are you testing? What do you expect to happen?"
            />
          </div>

          <div className="border-t pt-4">
            <h3 className="font-medium mb-3">Results (fill when complete)</h3>
            
            <div className="grid grid-cols-3 gap-4 mb-3">
              <div>
                <label className="block text-sm font-medium mb-1">CAC ($)</label>
                <input
                  type="number"
                  step="0.01"
                  value={formData.result?.cac || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    result: { ...formData.result, cac: parseFloat(e.target.value) } as any
                  })}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Conversion (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={formData.result?.conversion || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    result: { ...formData.result, conversion: parseFloat(e.target.value) } as any
                  })}
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Fit</label>
                <select
                  value={formData.result?.fit || ''}
                  onChange={(e) => setFormData({
                    ...formData,
                    result: { ...formData.result, fit: e.target.value } as any
                  })}
                  className="w-full px-3 py-2 border rounded-lg"
                >
                  <option value="">-</option>
                  <option value="Good">Good</option>
                  <option value="Meh">Meh</option>
                  <option value="Bad">Bad</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label className="block text-sm font-medium mb-1">Notes</label>
              <textarea
                value={formData.result?.notes || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  result: { ...formData.result, notes: e.target.value } as any
                })}
                className="w-full px-3 py-2 border rounded-lg"
                rows={2}
                placeholder="Key learnings, observations, next steps"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Decision</label>
              <select
                value={formData.decision || ''}
                onChange={(e) => setFormData({ ...formData, decision: e.target.value as Experiment['decision'] })}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="">-</option>
                <option value="Scale">Scale</option>
                <option value="Iterate">Iterate</option>
                <option value="Kill">Kill</option>
              </select>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              {editingId ? 'Update' : 'Add'} Experiment
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
        {experiments.map((experiment) => (
          <div key={experiment.id} className="bg-white p-4 rounded-lg border">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${statusColors[experiment.status]}`}>
                    {experiment.status}
                  </span>
                  <span className="text-sm text-gray-600">{experiment.date}</span>
                  <span className="text-sm font-medium">{experiment.channel}</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">{experiment.segment}</span>
                </div>
                
                <p className="text-sm mb-3">{experiment.hypothesis}</p>

                {experiment.result && (
                  <div className="bg-gray-50 p-3 rounded-lg text-sm">
                    <div className="grid grid-cols-3 gap-4 mb-2">
                      {experiment.result.cac && (
                        <div>
                          <span className="text-gray-600">CAC:</span> ${experiment.result.cac}
                        </div>
                      )}
                      {experiment.result.conversion && (
                        <div>
                          <span className="text-gray-600">Conversion:</span> {experiment.result.conversion}%
                        </div>
                      )}
                      {experiment.result.fit && (
                        <div>
                          <span className="text-gray-600">Fit:</span> {experiment.result.fit}
                        </div>
                      )}
                    </div>
                    {experiment.result.notes && (
                      <p className="text-gray-700">{experiment.result.notes}</p>
                    )}
                  </div>
                )}

                {experiment.decision && (
                  <div className="mt-2">
                    <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${
                      experiment.decision === 'Scale' ? 'bg-green-100 text-green-800' :
                      experiment.decision === 'Iterate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      Decision: {experiment.decision}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex gap-2 ml-4">
                <button
                  onClick={() => handleEdit(experiment)}
                  className="p-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  <Edit size={18} />
                </button>
                <button
                  onClick={() => handleDelete(experiment.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {experiments.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No experiments yet. Click "Add Experiment" to track your first channel test.
          </div>
        )}
      </div>
    </div>
  );
}
