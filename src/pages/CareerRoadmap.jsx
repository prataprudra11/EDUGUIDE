import React, { useState } from 'react';
import { roadmapMilestones, salaryGrowth } from '../data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Award, Briefcase, FileCode2, Target } from 'lucide-react';
import { cn } from '../utils/cn';

export default function CareerRoadmap() {
  const [activeNode, setActiveNode] = useState(roadmapMilestones[0]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col">
      <header className="mb-4">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Interactive Career Roadmap</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              Inspect milestone stages, acquire target skills, and map salary brackets.
            </p>
          </div>
          <select className="bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white px-4 py-2 rounded-lg font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer">
            <option>AI & Machine Learning Engineer</option>
            <option>Full Stack Developer</option>
            <option>Data Scientist</option>
          </select>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        {/* Left Col - Nodes */}
        <div className="glass-card p-6 lg:col-span-5 h-[650px] overflow-y-auto custom-scrollbar">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-slate-800 dark:text-white">Milestone Path Flowchart</h3>
            <span className="text-xs font-bold px-2 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 rounded uppercase tracking-wider">
              Science Stream
            </span>
          </div>
          
          <div className="relative border-l-2 border-slate-200 dark:border-slate-700 ml-4 space-y-8 pb-4">
            {roadmapMilestones.map((node, index) => {
              const isActive = activeNode.id === node.id;
              return (
                <div 
                  key={node.id}
                  className="relative pl-8 cursor-pointer group"
                  onClick={() => setActiveNode(node)}
                >
                  <div className={cn(
                    "absolute -left-[17px] top-1 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ring-4 ring-background-light dark:ring-background-dark",
                    isActive ? "bg-primary-600 text-white shadow-lg shadow-primary-500/40" : "bg-slate-200 dark:bg-slate-700 text-slate-500 dark:text-slate-400 group-hover:bg-slate-300 dark:group-hover:bg-slate-600"
                  )}>
                    {index + 1}
                  </div>
                  <div className="transition-all duration-300">
                    <h4 className={cn("font-bold text-lg", isActive ? "text-primary-600 dark:text-primary-400" : "text-slate-800 dark:text-slate-200")}>
                      {node.title}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-medium mb-1">{node.subtitle}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {node.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Col - Details */}
        <div className="lg:col-span-7 flex flex-col gap-6 h-[650px]">
          
          {/* Active Stage Directives */}
          <div className="glass-card p-6 flex-1 flex flex-col">
            <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Target className="w-4 h-4" /> Active Stage Directives
            </h3>
            
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-1">Stage {activeNode.id}: {activeNode.title}</h2>
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{activeNode.subtitle}</p>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              {activeNode.description}
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                <FileCode2 className="w-4 h-4 text-slate-500" /> Target Core Skillset
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeNode.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {activeNode.certifications.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-slate-500" /> Acquisition Certifications
                </h4>
                <ul className="space-y-2">
                  {activeNode.certifications.map((cert, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Salary Graph */}
          <div className="glass-card p-6 h-[250px]">
            <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Salary Growth Trajectory
            </h3>
            <p className="text-xs text-slate-500 mb-4">Historical averages represented in LPA (Lakhs Per Annum)</p>
            <div className="h-[150px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salaryGrowth} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                    itemStyle={{ color: '#fff' }}
                    formatter={(value) => [`${value} LPA`, 'Average Salary']}
                    labelFormatter={(label) => `Year ${label}`}
                  />
                  <Line type="monotone" dataKey="salary" stroke="#0ea5e9" strokeWidth={3} dot={{ fill: '#0ea5e9', strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
