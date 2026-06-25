import React, { useState } from 'react';
import { upcomingExams } from '../data/mockData';
import { Search, Filter, Calendar as CalendarIcon, BookmarkPlus, ChevronDown } from 'lucide-react';
import { cn } from '../utils/cn';

export default function EntranceExams() {
  const [filterSpec, setFilterSpec] = useState('All');
  const [filterDiff, setFilterDiff] = useState('All');

  const filteredExams = upcomingExams.filter(exam => {
    if (filterSpec !== 'All' && exam.category !== filterSpec) return false;
    if (filterDiff !== 'All' && exam.difficulty !== filterDiff) return false;
    return true;
  });

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white flex items-center gap-3">
            Entrance Exams Hub <BookOpenIcon className="w-8 h-8 text-indigo-500" />
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Search major standardized assessments, study strategies, and track deadlines.
          </p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search exams, strategies..." 
            className="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-white"
          />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column - Filters & Calendar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card p-6">
            <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2 mb-4">
              <Filter className="w-4 h-4" /> Filter Settings
            </h3>
            
            <div className="mb-6">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">By Specialization</p>
              <div className="flex flex-wrap gap-2">
                {['All', 'Engineering', 'Medical', 'Law', 'Management'].map(spec => (
                  <button 
                    key={spec}
                    onClick={() => setFilterSpec(spec)}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-sm font-medium transition-colors border",
                      filterSpec === spec 
                        ? "bg-indigo-600 text-white border-indigo-600" 
                        : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
                    )}
                  >
                    {spec}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3 uppercase tracking-wider">By Difficulty</p>
              <div className="flex flex-wrap gap-2">
                {['All', 'Extreme', 'Hard', 'Moderate'].map(diff => (
                  <button 
                    key={diff}
                    onClick={() => setFilterDiff(diff)}
                    className={cn(
                      "px-4 py-1.5 rounded-full text-sm font-medium transition-colors border",
                      filterDiff === diff 
                        ? "bg-teal-600 text-white border-teal-600" 
                        : "bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700"
                    )}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-bold text-slate-800 dark:text-white flex items-center gap-2 mb-4">
              <CalendarIcon className="w-4 h-4" /> Exam Date Tracker
            </h3>
            <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">June 2026</p>
            {/* Mock Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 text-center mb-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(d => (
                <div key={d} className="text-xs font-bold text-slate-400">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {[...Array(30)].map((_, i) => {
                const day = i + 1;
                const isExamDay = day === 8 || day === 28;
                return (
                  <div 
                    key={day} 
                    className={cn(
                      "aspect-square flex items-center justify-center rounded-lg cursor-pointer transition-colors",
                      isExamDay 
                        ? "bg-primary-600 text-white font-bold shadow-sm" 
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    )}
                  >
                    {day}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Column - Exam List */}
        <div className="lg:col-span-8 space-y-4">
          {filteredExams.map(exam => (
            <div key={exam.id} className="glass-card p-6 transition-all hover:border-primary-300 dark:hover:border-primary-700">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-800 dark:text-white">{exam.name} ({exam.fullName})</h2>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-bold rounded uppercase">
                      {exam.category}
                    </span>
                    <span className="px-2 py-1 bg-rose-50 dark:bg-rose-900/30 text-rose-700 dark:text-rose-400 text-xs font-bold rounded uppercase">
                      Difficulty: {exam.difficulty}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-700 dark:text-slate-300 font-medium text-sm">
                    <CalendarIcon className="w-4 h-4 text-primary-500" />
                    {exam.daysLeft} Days Left
                  </div>
                  <button className="p-2 bg-slate-100 dark:bg-slate-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 text-slate-400 rounded-lg transition-colors">
                    <BookmarkPlus className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-1">Eligibility & Admission Rules:</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{exam.eligibility}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-center">
                <button className="text-sm font-bold text-primary-600 dark:text-primary-400 hover:text-primary-700 flex items-center justify-center gap-1 mx-auto">
                  Expand Syllabus & Trackers <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
          {filteredExams.length === 0 && (
            <div className="glass-card p-12 text-center">
              <p className="text-slate-500">No exams match your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Simple BookOpenIcon component to avoid missing import if not exported from lucide above
function BookOpenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
