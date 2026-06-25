import React, { useState } from 'react';
import { roadmapMilestones, salaryGrowth } from '../data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Award, Briefcase, FileText, Target } from 'lucide-react';
import { cn } from '../utils/cn';

export default function CareerRoadmap() {
  const [activeNode, setActiveNode] = useState(roadmapMilestones[0]);

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500 h-full flex flex-col">
      <header className="mb-4 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Curriculum & Career Roadmap</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Structured milestone planning for academic and professional advancement.
            </p>
          </div>
          <select className="bg-white dark:bg-surface-dark border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white px-4 py-2 rounded-md font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-800 cursor-pointer text-sm">
            <option>AI & Machine Learning Engineer</option>
            <option>Full Stack Developer</option>
            <option>Data Scientist</option>
          </select>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        {/* Left Col - Nodes */}
        <div className="panel-card p-6 lg:col-span-5 h-[650px] overflow-y-auto custom-scrollbar bg-slate-50 dark:bg-slate-900/50">
          <div className="flex justify-between items-center mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Curriculum Pathway</h3>
            <span className="text-xs font-bold px-2 py-1 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-sm uppercase tracking-wider border border-slate-300 dark:border-slate-700">
              Science Stream
            </span>
          </div>
          
          <div className="relative border-l-2 border-slate-300 dark:border-slate-700 ml-4 space-y-8 pb-4">
            {roadmapMilestones.map((node, index) => {
              const isActive = activeNode.id === node.id;
              return (
                <div 
                  key={node.id}
                  className="relative pl-8 cursor-pointer group"
                  onClick={() => setActiveNode(node)}
                >
                  <div className={cn(
                    "absolute -left-[17px] top-1 w-8 h-8 rounded-sm flex items-center justify-center font-bold text-sm transition-colors border",
                    isActive 
                      ? "bg-primary-900 text-white border-primary-900" 
                      : "bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-300 dark:border-slate-600 group-hover:border-primary-500 group-hover:text-primary-800"
                  )}>
                    {index + 1}
                  </div>
                  <div>
                    <h4 className={cn("font-bold text-lg mb-1", isActive ? "text-primary-900 dark:text-primary-400" : "text-slate-800 dark:text-slate-200")}>
                      {node.title}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 font-semibold mb-2">{node.subtitle}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
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
          <div className="panel-card p-8 flex-1 flex flex-col border-t-4 border-t-primary-800">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Target className="w-4 h-4" /> Academic Directives
            </h3>
            
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Stage {activeNode.id}: {activeNode.title}</h2>
            <p className="text-primary-800 dark:text-primary-400 font-bold mb-6">{activeNode.subtitle}</p>
            <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed font-medium">
              {activeNode.description}
            </p>

            <div className="mb-8">
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-3 flex items-center gap-2 uppercase tracking-wider">
                <FileText className="w-4 h-4 text-slate-500" /> Target Competencies
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeNode.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-white dark:bg-surface-dark text-slate-800 dark:text-slate-200 text-sm font-bold rounded-sm border border-slate-300 dark:border-slate-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {activeNode.certifications.length > 0 && (
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-200 mb-3 flex items-center gap-2 uppercase tracking-wider">
                  <Award className="w-4 h-4 text-slate-500" /> Recommended Credentials
                </h4>
                <ul className="space-y-3">
                  {activeNode.certifications.map((cert, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300 font-medium">
                      <div className="w-1.5 h-1.5 rounded-none bg-primary-800 mt-1.5 flex-shrink-0"></div>
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Salary Graph */}
          <div className="panel-card p-6 h-[250px]">
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4" /> Professional Trajectory
            </h3>
            <p className="text-xs text-slate-500 font-medium mb-4">Historical averages represented in Lakhs Per Annum (LPA)</p>
            <div className="h-[150px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salaryGrowth} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#475569', fontWeight: 'bold'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#475569', fontWeight: 'bold'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #cbd5e1', borderRadius: '4px', color: '#0f172a', fontWeight: 'bold' }}
                    itemStyle={{ color: '#0f172a' }}
                    formatter={(value) => [`${value} LPA`, 'Average Compensation']}
                    labelFormatter={(label) => `Year ${label}`}
                  />
                  <Line type="monotone" dataKey="salary" stroke="#1e3a8a" strokeWidth={3} dot={{ fill: '#1e3a8a', strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
