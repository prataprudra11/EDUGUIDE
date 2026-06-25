import React, { useState } from 'react';
import { Search, Filter, TrendingUp, AlertCircle } from 'lucide-react';
import { cutoffData } from '../data/mockData';

export default function CollegesCutoffs() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">Colleges & Cutoffs</h1>
        <p className="text-on-surface-variant font-sans">Historical cutoff analysis and admission probability estimator.</p>
      </div>

      {/* Estimator Tool */}
      <div className="surface-glass p-6 rounded-xl border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none"></div>
        <div className="relative z-10 flex flex-col md:flex-row gap-6 items-end">
          <div className="flex-1">
            <label className="block text-xs font-mono text-outline uppercase tracking-[0.1em] mb-2">Your Target Rank</label>
            <input 
              type="number" 
              placeholder="e.g. 4500"
              className="w-full px-4 py-3 bg-surface-container-low border border-white/10 rounded-md text-white focus:outline-none focus:border-neon-cyan transition-colors"
            />
          </div>
          <div className="flex-1">
            <label className="block text-xs font-mono text-outline uppercase tracking-[0.1em] mb-2">Category</label>
            <select className="w-full px-4 py-3 bg-surface-container-low border border-white/10 rounded-md text-white focus:outline-none focus:border-neon-cyan transition-colors appearance-none">
              <option>General</option>
              <option>OBC-NCL</option>
              <option>SC</option>
              <option>ST</option>
            </select>
          </div>
          <button className="bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan/30 px-6 py-3 rounded-md font-bold transition-colors flex items-center gap-2">
            <TrendingUp className="w-5 h-5" /> Analyze Probability
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className="surface-glass rounded-xl overflow-hidden border border-white/10">
        <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 bg-surface-container-lowest">
          <div className="relative w-full sm:w-64">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input 
              type="text" 
              placeholder="Search colleges..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-surface border border-white/5 rounded-md text-white focus:outline-none focus:border-secondary-dim transition-colors text-sm"
            />
          </div>
          <button className="flex items-center gap-2 text-on-surface-variant hover:text-white px-4 py-2 rounded-md hover:bg-surface-container transition-colors text-sm font-sans">
            <Filter className="w-4 h-4" /> Filter Data
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-lowest text-xs font-mono text-outline uppercase tracking-wider border-b border-white/10">
                <th className="p-4 font-medium">Institution</th>
                <th className="p-4 font-medium">Branch</th>
                <th className="p-4 font-medium">2023 Cutoff</th>
                <th className="p-4 font-medium">2022 Cutoff</th>
                <th className="p-4 font-medium">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-sm font-sans text-on-surface">
              {cutoffData.filter(d => d.college.toLowerCase().includes(searchTerm.toLowerCase())).map((row, i) => (
                <tr key={i} className="hover:bg-surface-container/50 transition-colors">
                  <td className="p-4 font-medium text-white">{row.college}</td>
                  <td className="p-4">{row.branch}</td>
                  <td className="p-4 text-primary-dim font-mono">{row.cutoff2023}</td>
                  <td className="p-4 text-on-surface-variant font-mono">{row.cutoff2022}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-mono ${row.trend === 'Up' ? 'bg-error/10 text-error' : 'bg-neon-cyan/10 text-neon-cyan'}`}>
                      {row.trend === 'Up' ? '▲' : '▼'} {row.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
