'use client';

import { Ghost, Skull, Users, Rocket, TrendingUp, Palette } from 'lucide-react';

interface DeaditeSummonProps {
  onSummon: (deadite: string, message: string) => void;
}

const deadites = [
  {
    id: 'brand-director',
    name: 'Brand Director',
    icon: Palette,
    color: 'purple',
    summon: 'Necronomicon, release the brand demon!',
    description: 'Reviews brand consistency, identity, personality & differentiation',
  },
  {
    id: 'copy-director',
    name: 'Copy Director',
    icon: Ghost,
    color: 'blue',
    summon: 'Summon the copy deadite!',
    description: 'Reviews voice, tone, clarity & microcopy',
  },
  {
    id: 'product-design-director',
    name: 'Product Design Director',
    icon: Palette,
    color: 'green',
    summon: 'Summon the product design deadite!',
    description: 'Reviews UX, IA, visual hierarchy & accessibility',
  },
  {
    id: 'product-marketing-director',
    name: 'Product Marketing Director',
    icon: TrendingUp,
    color: 'pink',
    summon: 'Summon the PMM deadite!',
    description: 'Reviews positioning, messaging & value props',
  },
  {
    id: 'gtm-director',
    name: 'GTM Director',
    icon: Rocket,
    color: 'orange',
    summon: 'Necronomicon, release the launch demon!',
    description: 'Reviews launch readiness, channels & funnel',
  },
  {
    id: 'design-team',
    name: 'THE ENTIRE HORDE',
    icon: Users,
    color: 'red',
    summon: 'Dead by dawn! Unleash the deadite horde!',
    description: 'Full design team review from all directors',
  },
];

const colorClasses = {
  purple: 'bg-purple-100 text-purple-800 hover:bg-purple-200 border-purple-300',
  blue: 'bg-blue-100 text-blue-800 hover:bg-blue-200 border-purple-300',
  green: 'bg-green-100 text-green-800 hover:bg-green-200 border-green-300',
  pink: 'bg-pink-100 text-pink-800 hover:bg-pink-200 border-pink-300',
  orange: 'bg-orange-100 text-orange-800 hover:bg-orange-200 border-orange-300',
  red: 'bg-red-100 text-red-800 hover:bg-red-200 border-red-300',
};

export default function DeaditeSummon({ onSummon }: DeaditeSummonProps) {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 border-2 border-gray-700">
      <div className="flex items-center gap-3 mb-4">
        <Skull className="text-red-500" size={24} />
        <h3 className="text-xl font-bold text-white">Summon the Design Deadites</h3>
      </div>
      
      <p className="text-gray-300 text-sm mb-6">
        Call upon the AI design directors for feedback. Click to summon one, or unleash the entire horde.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {deadites.map((deadite) => {
          const Icon = deadite.icon;
          const colorClass = colorClasses[deadite.color as keyof typeof colorClasses];
          
          return (
            <button
              key={deadite.id}
              onClick={() => onSummon(deadite.id, deadite.summon)}
              className={`p-4 rounded-lg border-2 transition-all ${colorClass} text-left group relative`}
            >
              <div className="flex items-start gap-3">
                <Icon size={20} className="mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm mb-1">{deadite.name}</div>
                  <div className="text-xs opacity-80 line-clamp-2">{deadite.description}</div>
                </div>
              </div>
              
              {deadite.id === 'design-team' && (
                <div className="absolute top-1 right-1">
                  <span className="text-xs font-bold animate-pulse">🔥</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-4 p-3 bg-gray-800 rounded border border-gray-700">
        <p className="text-xs text-gray-400 italic">
          💀 Evil Dead-style summons get you a tongue-in-cheek greeting, then rigorous professional feedback.
        </p>
      </div>
    </div>
  );
}
