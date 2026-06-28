import React, { useState } from 'react';
import { Search, Filter, TrendingUp, TrendingDown, GraduationCap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { cutoffData, collegesData } from '../data/mockData';
import { motion } from 'framer-motion';

export default function CollegesCutoffs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCollege, setSelectedCollege] = useState(collegesData[0]?.id || '');
  const [targetRank, setTargetRank] = useState('');
  const [category, setCategory] = useState('General');

  // ASSUMPTION: Admission probability is a simple mock calculation. Real implementation requires backend API.
  const calculateProbability = () => {
    if (!targetRank) return null;
    const rank = parseInt(targetRank);
    const college = collegesData.find(c => c.id === selectedCollege);
    if (!college) return null;
    const latestCutoff = college.cutoffs[college.cutoffs.length - 1]?.rank || 100;
    if (rank <= latestCutoff) return { text: 'Very High', percent: 94, color: 'text-mint' };
    if (rank <= latestCutoff * 2) return { text: 'Moderate', percent: 58, color: 'text-amber-500' };
    if (rank <= latestCutoff * 5) return { text: 'Low', percent: 22, color: 'text-coral' };
    return { text: 'Very Low', percent: 5, color: 'text-coral' };
  };

  const probability = calculateProbability();

  // Prepare chart data from selected college
  const currentCollege = collegesData.find(c => c.id === selectedCollege);
  const chartData = currentCollege?.cutoffs || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-display font-bold mb-1">Colleges & Cutoffs</h1>
        <p className="text-slate-500 dark:text-slate-400 font-sans text-sm">Historical cutoff analysis and admission probability estimator.</p>
      </div>

      {/* Rank Estimator Tool */}
      <div className="card p-6">
        <h3 className="font-display font-bold text-sm flex items-center gap-2 mb-5">
          <TrendingUp className="w-4 h-4 text-horizon" /> Admission Probability Estimator
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="section-label block mb-2">Target College</label>
            <select 
              value={selectedCollege}
              onChange={(e) => setSelectedCollege(e.target.value)}
              className="input-field"
            >
              {collegesData.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="section-label block mb-2">Your Rank</label>
            <input 
              type="number" 
              placeholder="e.g. 4500"
              value={targetRank}
              onChange={(e) => setTargetRank(e.target.value)}
              className="input-field"
            />
          </div>
          <div>
            <label className="section-label block mb-2">Category</label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input-field"
            >
              <option>General</option>
              <option>OBC-NCL</option>
              <option>SC</option>
              <option>ST</option>
            </select>
          </div>
          <div>
            {probability ? (
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 text-center border border-slate-100 dark:border-white/5">
                <p className="section-label mb-1">Probability</p>
                <p className={`text-2xl font-display font-black ${probability.color}`}>{probability.percent}%</p>
                <p className="text-xs text-slate-400 font-mono">{probability.text}</p>
              </div>
            ) : (
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-3 text-center border border-slate-100 dark:border-white/5">
                <p className="text-xs text-slate-400 font-sans">Enter rank to estimate</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 5-Year Cutoff Trend Chart — DESIGN: This was in the PRD but missing from original code */}
      <div className="card p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-display font-bold text-sm">Closing Cutoff Trends (5 Years)</h3>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-sans mt-0.5">
              {currentCollege?.fullName || 'Select a college'} — Computer Science (General)
            </p>
          </div>
          <div className="flex gap-2">
            {collegesData.map(c => (
              <button 
                key={c.id}
                onClick={() => setSelectedCollege(c.id)}
                className={`chip text-[10px] ${selectedCollege === c.id ? 'chip-active' : 'chip-inactive'}`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 5, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148,163,184,0.15)" />
              <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 11, fontFamily: 'JetBrains Mono'}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 11, fontFamily: 'JetBrains Mono'}} domain={['dataMin - 10', 'dataMax + 10']} />
              <Tooltip 
                contentStyle={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', fontFamily: 'DM Sans' }}
                itemStyle={{ color: '#2563EB' }}
                formatter={(value) => [`Rank ${value}`, 'Closing Cutoff']}
              />
              <Line type="monotone" dataKey="rank" stroke="#2563EB" strokeWidth={2.5} dot={{ fill: '#2563EB', strokeWidth: 0, r: 4 }} activeDot={{ r: 6, fill: '#7C3AED' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Data Table */}
      <div className="card overflow-hidden">
        <div className="p-4 border-b border-slate-200 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 bg-slate-50/50 dark:bg-slate-800/50">
          <h3 className="font-display font-bold text-sm flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-orchid" /> Cutoff Comparison Table
          </h3>
          <div className="relative w-full sm:w-56">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search colleges..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input-field pl-9 text-xs"
            />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider border-b border-slate-200 dark:border-white/10">
                <th className="p-4 font-medium">Institution</th>
                <th className="p-4 font-medium">Branch</th>
                <th className="p-4 font-medium">2023 Cutoff</th>
                <th className="p-4 font-medium">2022 Cutoff</th>
                <th className="p-4 font-medium">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 text-sm font-sans">
              {cutoffData.filter(d => d.college.toLowerCase().includes(searchTerm.toLowerCase())).map((row, i) => (
                <motion.tr 
                  key={i} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  <td className="p-4 font-semibold text-slate-900 dark:text-white">{row.college}</td>
                  <td className="p-4 text-slate-500 dark:text-slate-400">{row.branch}</td>
                  <td className="p-4 text-horizon font-mono font-semibold">{row.cutoff2023}</td>
                  <td className="p-4 text-slate-400 dark:text-slate-500 font-mono">{row.cutoff2022}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-mono font-semibold ${
                      row.trend === 'Up' 
                        ? 'bg-coral/10 text-coral dark:bg-coral/20' 
                        : 'bg-mint/10 text-mint dark:bg-mint/20'
                    }`}>
                      {row.trend === 'Up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {row.trend === 'Up' ? 'Stricter' : 'Relaxed'}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Campus Catalog */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {collegesData.map((college, i) => (
          <motion.div 
            key={college.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="card card-hover p-5"
          >
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-display font-bold text-base">{college.name}</h3>
                <p className="text-xs text-slate-400 dark:text-slate-500 font-sans">{college.location}</p>
              </div>
              <span className="px-2 py-1 bg-orchid/10 text-orchid dark:bg-orchid/20 dark:text-orchid-300 text-xs font-mono rounded-md font-semibold">
                NIRF #{college.nirf}
              </span>
            </div>
            <div className="flex items-center gap-6 pt-3 border-t border-slate-100 dark:border-white/5">
              <div>
                <p className="section-label mb-0.5">Avg. Package</p>
                <p className="text-lg font-display font-bold text-horizon">₹{college.avgLpa} LPA</p>
              </div>
              <div>
                <p className="section-label mb-0.5">Latest Cutoff</p>
                <p className="text-lg font-display font-bold text-slate-900 dark:text-white">
                  Rank {college.cutoffs[college.cutoffs.length - 1]?.rank}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
