import React, { useState } from 'react';
import { roadmapMilestones, salaryGrowth } from '../data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Award, Briefcase, FileText, Target, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CareerRoadmap() {
  const [activeNode, setActiveNode] = useState(roadmapMilestones[0]);

  return (
    <div className="space-y-6 h-full flex flex-col">
      <div>
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-4 mb-2">
          <div>
            <h1 className="text-2xl lg:text-3xl font-display font-bold">Career Roadmap</h1>
            <p className="text-slate-500 dark:text-slate-400 font-sans text-sm mt-1">
              Structured milestone planning for academic and professional advancement.
            </p>
          </div>
          {/* TODO: Wire up — requires roadmap data from API based on selected role */}
          <select className="input-field w-full lg:w-72 text-sm">
            <option>AI & Machine Learning Engineer</option>
            <option>Full Stack Developer</option>
            <option>Data Scientist</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
        {/* Left Column — Milestone Nodes */}
        <div className="card p-6 lg:col-span-5 max-h-[650px] overflow-y-auto custom-scrollbar">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display font-bold text-base">Curriculum Pathway</h3>
            <span className="text-xs font-mono px-2.5 py-1 bg-orchid/10 text-orchid dark:bg-orchid/20 dark:text-orchid-300 rounded-lg">
              Science Stream
            </span>
          </div>
          
          {/* DESIGN: Progress Spine — vertical gradient line connecting milestone nodes */}
          <div className="relative ml-4 space-y-6 pb-4">
            {/* The spine line */}
            <div className="absolute left-0 top-2 bottom-2 w-0.5 spine-gradient rounded-full" />
            
            {roadmapMilestones.map((node, index) => {
              const isActive = activeNode.id === node.id;
              return (
                <motion.div 
                  key={node.id}
                  className="relative pl-8 cursor-pointer group"
                  onClick={() => setActiveNode(node)}
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.15 }}
                >
                  {/* Node circle */}
                  <div className={`absolute -left-[11px] top-1 w-6 h-6 rounded-full flex items-center justify-center font-mono text-xs transition-all duration-200 border-2 ${
                    isActive 
                      ? "bg-horizon text-white border-horizon shadow-md" 
                      : "bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-600 text-slate-400 dark:text-slate-500 group-hover:border-horizon group-hover:text-horizon"
                  }`}>
                    {index + 1}
                  </div>
                  <div className={`p-3 rounded-lg transition-colors ${isActive ? 'bg-horizon/5 dark:bg-horizon/10' : ''}`}>
                    <h4 className={`font-display font-bold text-sm mb-0.5 transition-colors ${isActive ? "text-horizon" : "text-slate-900 dark:text-white"}`}>
                      {node.title}
                    </h4>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-sans mb-1.5">{node.subtitle}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-sans leading-relaxed">
                      {node.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Column — Details Panel */}
        <div className="lg:col-span-7 flex flex-col gap-6 max-h-[650px]">
          
          {/* Active Stage Directives */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeNode.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="card p-6 lg:p-8 flex-1 flex flex-col overflow-y-auto custom-scrollbar"
            >
              <p className="section-label mb-3 flex items-center gap-2">
                <Target className="w-3.5 h-3.5 text-horizon" /> Academic Directives
              </p>
              
              <h2 className="text-2xl font-display font-black text-slate-900 dark:text-white mb-1">
                Stage {activeNode.id}: {activeNode.title}
              </h2>
              <p className="text-orchid dark:text-orchid-300 font-sans text-sm font-medium mb-4">{activeNode.subtitle}</p>
              <p className="text-slate-500 dark:text-slate-400 mb-6 leading-relaxed font-sans text-sm">
                {activeNode.description}
              </p>

              <div className="mb-6">
                <h4 className="section-label mb-3 flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-horizon" /> Target Competencies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeNode.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1.5 bg-horizon/8 dark:bg-horizon/15 text-horizon dark:text-horizon-300 text-xs font-mono rounded-lg border border-horizon/15 dark:border-horizon/25">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {activeNode.certifications.length > 0 && (
                <div>
                  <h4 className="section-label mb-3 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-orchid" /> Recommended Credentials
                  </h4>
                  <ul className="space-y-2">
                    {activeNode.certifications.map((cert, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300 font-sans">
                        <ChevronRight className="w-3.5 h-3.5 text-orchid flex-shrink-0" />
                        {cert}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Salary Growth Chart */}
          <div className="card p-6 h-[220px] flex-shrink-0">
            <p className="section-label mb-1 flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-orchid" /> Compensation Trajectory
            </p>
            <p className="text-xs text-slate-400 dark:text-slate-500 font-sans mb-3">Averages in Lakhs Per Annum (LPA)</p>
            <div className="h-[130px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salaryGrowth} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148,163,184,0.15)" />
                  <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 11, fontFamily: 'JetBrains Mono'}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 11, fontFamily: 'JetBrains Mono'}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', fontFamily: 'DM Sans' }}
                    itemStyle={{ color: '#7C3AED' }}
                    formatter={(value) => [`${value} LPA`, 'Average Compensation']}
                    labelFormatter={(label) => `Year ${label}`}
                  />
                  <Line type="monotone" dataKey="salary" stroke="#7C3AED" strokeWidth={2.5} dot={{ fill: '#7C3AED', strokeWidth: 0, r: 3 }} activeDot={{ r: 5, fill: '#2563EB', stroke: '#2563EB' }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
