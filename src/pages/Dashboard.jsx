import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { studentProfile } from '../data/mockData';
import { BookOpen, MapPin, Target } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Student Dashboard
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-1">
          Welcome back, {studentProfile.name}. Here is your academic progress overview.
        </p>
      </header>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="panel-card p-6 flex flex-col justify-between border-t-4 border-t-primary-800">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Assessment</p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{studentProfile.assessmentComplete}%</h2>
            </div>
            <div className="text-primary-800 dark:text-primary-400">
              <Target className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 font-medium">Psychometric profile completed</p>
        </div>

        <div className="panel-card p-6 flex flex-col justify-between border-t-4 border-t-slate-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Saved Exams</p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{studentProfile.bookmarkedExams}</h2>
            </div>
            <div className="text-slate-700 dark:text-slate-400">
              <BookOpen className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 font-medium">Active trackers running</p>
        </div>

        <div className="panel-card p-6 flex flex-col justify-between border-t-4 border-t-emerald-700">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Colleges</p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{studentProfile.bookmarkedColleges}</h2>
            </div>
            <div className="text-emerald-700 dark:text-emerald-500">
              <MapPin className="w-6 h-6" />
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 font-medium">Campuses shortlisted</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Area */}
        <div className="panel-card p-6 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Active Skills Development</h3>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold rounded-sm border border-slate-200 dark:border-slate-700">
              +17.5% Growth
            </span>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={studentProfile.skillDevelopment} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#243b53" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#243b53" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontWeight: 600}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontWeight: 600}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '4px', color: '#0f172a', fontWeight: 'bold' }}
                  itemStyle={{ color: '#0f172a' }}
                />
                <Area type="monotone" dataKey="value" stroke="#243b53" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Side Column */}
        <div className="space-y-6">
          <div className="panel-card p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Exam Deadlines</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white dark:bg-surface-dark rounded-md border border-slate-200 dark:border-slate-700">
                <div>
                  <p className="font-bold text-slate-900 dark:text-slate-200">JEE Advanced</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">June 8, 2026</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black text-red-700 dark:text-red-500">16</p>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Days</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-white dark:bg-surface-dark rounded-md border border-slate-200 dark:border-slate-700">
                <div>
                  <p className="font-bold text-slate-900 dark:text-slate-200">NEET UG</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">June 28, 2026</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black text-primary-800 dark:text-primary-400">36</p>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Days</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="panel-card p-6 bg-slate-50 dark:bg-slate-800 border-l-4 border-l-primary-800 border-t-0 border-r-0 border-b-0 rounded-none shadow-none">
            <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-2 uppercase tracking-widest">Counselor Tip</h3>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
              "For candidates targeting CS programs in premier campuses, review the 5-year closing rank trends. Setting milestones early heavily increases matching probability."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
