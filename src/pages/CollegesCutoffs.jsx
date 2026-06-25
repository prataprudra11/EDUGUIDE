import React, { useState } from 'react';
import { collegesData } from '../data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { GraduationCap, Filter, Plus, Bookmark } from 'lucide-react';
import { cn } from '../utils/cn';

export default function CollegesCutoffs() {
  const [mockRank, setMockRank] = useState(150);
  
  // Calculate a mock probability based on the rank for demonstration
  const probability = Math.max(0, Math.min(100, 100 - (mockRank / 20)));

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-6 flex flex-col md:flex-row justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
            Colleges & Cutoff Analytics <GraduationCap className="w-8 h-8 text-teal-500" />
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
            Inspect previous closing trends, calculate probability indexes, and compile side-by-side matrices.
          </p>
        </div>
        <div className="relative w-full md:w-64">
          <input 
            type="text" 
            placeholder="Search campuses, fees..." 
            className="w-full pl-4 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-white"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        
        {/* Main Analytics Area (Left) */}
        <div className="xl:col-span-8 space-y-6">
          
          {/* Search Settings */}
          <div className="glass-card p-6">
            <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2 mb-4">
              <Filter className="w-4 h-4 text-slate-500" /> Cutoff Search Settings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">Target Branch</label>
                <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white px-3 py-2 rounded-lg font-medium focus:ring-2 focus:ring-primary-500 outline-none cursor-pointer">
                  <option>Computer Science</option>
                  <option>Electronics</option>
                  <option>Mechanical</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">Category</label>
                <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white px-3 py-2 rounded-lg font-medium focus:ring-2 focus:ring-primary-500 outline-none cursor-pointer">
                  <option>General</option>
                  <option>OBC</option>
                  <option>SC/ST</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">Location State</label>
                <select className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white px-3 py-2 rounded-lg font-medium focus:ring-2 focus:ring-primary-500 outline-none cursor-pointer">
                  <option>All States</option>
                  <option>Maharashtra</option>
                  <option>Delhi</option>
                </select>
              </div>
            </div>
          </div>

          {/* Line Chart */}
          <div className="glass-card p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">Closing Cutoff Rank Variations (5 Years)</h3>
                <p className="text-sm text-slate-500 mt-1">Evaluating: IIT Bombay (Computer Science • General)</p>
              </div>
              <span className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-xs font-bold rounded uppercase">
                General Category
              </span>
            </div>
            
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={collegesData[0].cutoffs} margin={{ top: 20, right: 30, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value) => [`Rank ${value}`, 'Closing Rank']}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rank" 
                    stroke="#06b6d4" 
                    strokeWidth={3} 
                    dot={{ fill: '#06b6d4', strokeWidth: 2, r: 6 }} 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="xl:col-span-4 space-y-6">
          
          {/* Predictive Calculator */}
          <div className="glass-card p-6 border-t-4 border-t-primary-500">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">Admission Odds Gauge</h3>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Predictive Seat Calculator</h2>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">Enter mock JEE Rank / Score:</label>
              <input 
                type="number" 
                value={mockRank}
                onChange={(e) => setMockRank(Number(e.target.value))}
                className="w-full px-4 py-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl font-bold text-slate-800 dark:text-white text-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>

            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Estimated Probability</p>
              <div className="flex items-end gap-3">
                <span className={cn(
                  "text-5xl font-black",
                  probability > 50 ? "text-emerald-500" : probability > 10 ? "text-amber-500" : "text-rose-500"
                )}>
                  {probability.toFixed(0)}%
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">Based on previous 2025 closing boundaries (59 closing rank).</p>
            </div>
          </div>

          {/* Campus Catalogs */}
          <div className="glass-card p-6">
            <h3 className="font-bold text-slate-800 dark:text-white mb-4">Campus Catalogs (2)</h3>
            <div className="space-y-4">
              {collegesData.map(college => (
                <div key={college.id} className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700 group hover:border-primary-200 dark:hover:border-primary-800 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold text-slate-800 dark:text-white">{college.name}</h4>
                      <p className="text-xs text-slate-500">{college.location} • NIRF Rank #{college.nirf}</p>
                    </div>
                    <button className="text-slate-400 hover:text-primary-500">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {college.avgLpa} LPA Average
                    </span>
                    <button className="flex items-center gap-1 text-xs font-bold text-primary-600 hover:text-primary-700 bg-primary-50 dark:bg-primary-900/30 px-2 py-1 rounded">
                      <Plus className="w-3 h-3" /> Compare
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
