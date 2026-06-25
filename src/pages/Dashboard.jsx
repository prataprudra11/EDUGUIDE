import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { studentProfile } from '../data/mockData';
import { BookOpen, MapPin, Target } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
          Welcome back, <span className="text-primary-600 dark:text-primary-400">{studentProfile.name}</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Here is your personalized academic dashboard showing recommendations and target deadlines.
        </p>
      </header>

      {/* Top Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Assessment</p>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-1">{studentProfile.assessmentComplete}%</h2>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
              <Target className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">Psychometric profile completed</p>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Saved Exams</p>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-1">{studentProfile.bookmarkedExams}</h2>
            </div>
            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
              <BookOpen className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">Active trackers running</p>
        </div>

        <div className="glass-card p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Colleges</p>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-1">{studentProfile.bookmarkedColleges}</h2>
            </div>
            <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
              <MapPin className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-4">Campuses shortlisted</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Area */}
        <div className="glass-card p-6 lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Active Skills Development</h3>
            <span className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium rounded-full">
              +17.5% Growth
            </span>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={studentProfile.skillDevelopment} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Side Column */}
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-4">Exam Deadlines</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200">JEE Advanced</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">June 8, 2026</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-red-500">16</p>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Days</p>
                </div>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-100 dark:border-slate-700">
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-200">NEET UG</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">June 28, 2026</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary-500">36</p>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500">Days</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-6 bg-gradient-to-br from-primary-50 to-indigo-50 dark:from-primary-900/20 dark:to-indigo-900/20 border-none">
            <h3 className="text-md font-semibold text-primary-800 dark:text-primary-300 mb-2">Counselor Tip</h3>
            <p className="text-sm text-primary-900/80 dark:text-primary-200 leading-relaxed italic">
              "For candidates targeting CS programs in premier campuses, review the 5-year closing rank trends. Setting milestones early heavily increases matching probability."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
