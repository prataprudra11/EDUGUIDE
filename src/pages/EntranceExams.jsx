import React, { useState } from 'react';
import { upcomingExams } from '../data/mockData';
import { Search, Filter, Calendar as CalendarIcon, BookmarkPlus, ChevronDown, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export default function EntranceExams() {
  const [filterSpec, setFilterSpec] = useState('All');
  const [filterDiff, setFilterDiff] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExams = upcomingExams.filter(exam => {
    if (filterSpec !== 'All' && exam.category !== filterSpec) return false;
    if (filterDiff !== 'All' && exam.difficulty !== filterDiff) return false;
    if (searchTerm && !exam.name.toLowerCase().includes(searchTerm.toLowerCase()) && !exam.fullName.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const difficultyColor = (diff) => {
    switch(diff) {
      case 'Extreme': return 'bg-coral/10 text-coral dark:bg-coral/20 border-coral/20';
      case 'Hard': return 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400 border-amber-200 dark:border-amber-500/20';
      case 'Moderate': return 'bg-mint/10 text-mint dark:bg-mint/20 border-mint/20';
      default: return 'bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-400 border-slate-200 dark:border-white/10';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-display font-bold flex items-center gap-3">
            Entrance Exams Hub
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-sans text-sm mt-1">
            Search major standardized assessments, study strategies, and track deadlines.
          </p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search exams..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-9"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column — Filters & Calendar */}
        <div className="lg:col-span-4 space-y-4">
          <div className="card p-5">
            <h3 className="font-display font-bold text-sm flex items-center gap-2 mb-4">
              <Filter className="w-4 h-4 text-orchid" /> Filters
            </h3>
            
            <div className="mb-5">
              <p className="section-label mb-2.5">By Specialization</p>
              <div className="flex flex-wrap gap-2">
                {['All', 'Engineering', 'Medical', 'Law', 'Management'].map(spec => (
                  <button 
                    key={spec}
                    onClick={() => setFilterSpec(spec)}
                    className={`chip ${filterSpec === spec ? 'chip-active' : 'chip-inactive'}`}
                  >
                    {spec}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="section-label mb-2.5">By Difficulty</p>
              <div className="flex flex-wrap gap-2">
                {['All', 'Extreme', 'Hard', 'Moderate'].map(diff => (
                  <button 
                    key={diff}
                    onClick={() => setFilterDiff(diff)}
                    className={`chip ${filterDiff === diff ? 'chip-active' : 'chip-inactive'}`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="card p-5">
            <h3 className="font-display font-bold text-sm flex items-center gap-2 mb-4">
              <CalendarIcon className="w-4 h-4 text-orchid" /> Exam Calendar
            </h3>
            <p className="section-label mb-3">June 2026</p>
            {/* Calendar Header */}
            <div className="grid grid-cols-7 gap-1 text-center mb-1.5">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                <div key={i} className="text-[10px] font-mono text-slate-400 dark:text-slate-500 font-medium">{d}</div>
              ))}
            </div>
            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1 text-center text-sm font-sans">
              {[...Array(30)].map((_, i) => {
                const day = i + 1;
                const isExamDay = day === 8 || day === 28;
                return (
                  <div 
                    key={day} 
                    className={`aspect-square flex items-center justify-center rounded-lg text-xs transition-colors ${
                      isExamDay 
                        ? "bg-horizon text-white font-bold shadow-sm" 
                        : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 cursor-pointer"
                    }`}
                  >
                    {day}
                  </div>
                )
              })}
            </div>
            {/* Legend */}
            <div className="mt-3 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-2 text-xs text-slate-400">
              <div className="w-2.5 h-2.5 rounded bg-horizon" />
              <span>Exam Day</span>
            </div>
          </div>
        </div>

        {/* Right Column — Exam Cards */}
        <div className="lg:col-span-8 space-y-4">
          {filteredExams.map((exam, index) => (
            <motion.div 
              key={exam.id} 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.08 }}
              className="card card-hover p-6"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-4">
                <div>
                  <h2 className="text-xl font-display font-bold">{exam.name}</h2>
                  <p className="text-sm font-sans text-slate-500 dark:text-slate-400 mt-0.5">{exam.fullName}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="chip chip-inactive text-[10px]">
                      {exam.category}
                    </span>
                    <span className={`chip text-[10px] ${difficultyColor(exam.difficulty)}`}>
                      {exam.difficulty}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full md:w-auto">
                  {/* DESIGN: Countdown ring — Progress Spine motif on each exam card */}
                  <div className="flex-1 md:flex-none flex items-center gap-3 px-3.5 py-2 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-white/10 rounded-lg">
                    <div className="relative flex-shrink-0">
                      <svg className="w-8 h-8 -rotate-90" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="13" fill="none" strokeWidth="2" className="stroke-slate-200 dark:stroke-slate-600" />
                        <circle cx="16" cy="16" r="13" fill="none" strokeWidth="2" strokeDasharray="81.7" strokeDashoffset={81.7 - (81.7 * Math.min(exam.daysLeft, 60) / 60)} strokeLinecap="round" className="stroke-coral" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white font-mono">{exam.daysLeft} days</p>
                      <p className="text-[10px] text-slate-400">remaining</p>
                    </div>
                  </div>
                  {/* TODO: Wire up — requires bookmark API */}
                  <button className="p-2 border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-400 hover:text-horizon dark:hover:text-horizon-400 rounded-lg transition-colors">
                    <BookmarkPlus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="p-4 bg-slate-50 dark:bg-slate-700/30 rounded-lg border border-slate-100 dark:border-white/5">
                <p className="section-label mb-1.5">Eligibility & Admission Rules</p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">{exam.eligibility}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/5 text-center">
                <button className="text-xs font-mono text-slate-400 hover:text-horizon dark:hover:text-horizon-400 flex items-center justify-center gap-1 mx-auto transition-colors">
                  Expand Syllabus & Trackers <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
          {filteredExams.length === 0 && (
            <div className="card p-12 text-center border-dashed border-2 border-slate-200 dark:border-white/10">
              <BookOpen className="w-8 h-8 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400 dark:text-slate-500 font-sans">No exams match your criteria. Try adjusting the filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
