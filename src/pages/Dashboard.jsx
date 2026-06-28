import React from 'react';
import { Link } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Target, TrendingUp, BookOpen, Clock, ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { performanceData, skillData, studentProfile, upcomingExams } from '../data/mockData';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const stats = [
    { label: 'Overall Readiness', value: '86%', icon: Target, accent: 'accent-horizon', iconColor: 'text-horizon' },
    { label: 'Admission Probability', value: 'High', icon: TrendingUp, accent: 'accent-mint', iconColor: 'text-mint' },
    { label: 'Pending Tasks', value: '4', icon: Clock, accent: 'accent-coral', iconColor: 'text-coral' },
    { label: 'Syllabus Coverage', value: '72%', icon: BookOpen, accent: 'accent-orchid', iconColor: 'text-orchid' },
  ];

  // DESIGN: Quick actions give the dashboard a "command center" feel without being overwhelming
  const quickActions = [
    { label: 'Take Quiz', desc: 'Stream assessment', path: '/dashboard/stream-selection', icon: Target, color: 'bg-horizon/10 text-horizon dark:bg-horizon/20' },
    { label: 'View Roadmap', desc: 'Career milestones', path: '/dashboard/career-roadmap', icon: Sparkles, color: 'bg-orchid/10 text-orchid dark:bg-orchid/20' },
    { label: 'Track Exams', desc: 'Upcoming deadlines', path: '/dashboard/entrance-exams', icon: Calendar, color: 'bg-coral/10 text-coral dark:bg-coral/20' },
  ];

  const nextExam = upcomingExams[0];

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <motion.div 
        initial={{ opacity: 0, y: 12 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.4 }}
      >
        {/* TODO: Wire up — requires auth context for real user name */}
        <h1 className="text-2xl lg:text-3xl font-display font-bold mb-1">Welcome back, {studentProfile.name}</h1>
        <p className="text-slate-500 dark:text-slate-400 font-sans text-sm">Here's your academic overview for today.</p>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 16 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className={`card card-hover p-5 ${stat.accent}`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="section-label">{stat.label}</span>
              <stat.icon className={`w-4 h-4 ${stat.iconColor}`} />
            </div>
            <div className="text-2xl font-display font-bold text-slate-900 dark:text-white">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {quickActions.map((action, i) => (
          <Link 
            key={i} 
            to={action.path}
            className="card card-hover p-4 flex items-center gap-4 group"
          >
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${action.color} transition-transform group-hover:scale-105`}>
              <action.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{action.label}</p>
              <p className="text-xs text-slate-400 dark:text-slate-500">{action.desc}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-horizon dark:group-hover:text-horizon-400 transition-colors" />
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Trends */}
        <div className="card p-6 lg:col-span-2">
          <h2 className="text-lg font-display font-bold mb-1">Performance Trends</h2>
          <p className="text-xs text-slate-400 dark:text-slate-500 font-sans mb-6">Monthly score progression</p>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  {/* DESIGN: Horizon→Orchid gradient fill — the Progress Spine signature */}
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#7C3AED" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.15)" vertical={false} />
                <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} fontFamily="JetBrains Mono" />
                <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} fontFamily="JetBrains Mono" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'white', borderColor: '#E2E8F0', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)', fontFamily: 'DM Sans' }}
                  itemStyle={{ color: '#2563EB' }}
                />
                <Area type="monotone" dataKey="score" stroke="#2563EB" strokeWidth={2.5} fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skill Matrix Radar */}
        <div className="card p-6">
          <h2 className="text-lg font-display font-bold mb-1">Skill Matrix</h2>
          <p className="text-xs text-slate-400 dark:text-slate-500 font-sans mb-6">Aptitude distribution</p>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                <PolarGrid stroke="rgba(148,163,184,0.2)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748B', fontSize: 10, fontFamily: 'JetBrains Mono' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                {/* DESIGN: Orchid fill for the radar — differentiates from Horizon line charts */}
                <Radar name="Student" dataKey="score" stroke="#7C3AED" strokeWidth={2} fill="#7C3AED" fillOpacity={0.15} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Next Exam Countdown */}
      {nextExam && (
        <div className="card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* DESIGN: Countdown ring — Progress Spine motif */}
            <div className="relative flex-shrink-0">
              <svg className="w-14 h-14 -rotate-90" viewBox="0 0 56 56">
                <circle cx="28" cy="28" r="24" fill="none" strokeWidth="3" className="stroke-slate-200 dark:stroke-slate-700" />
                <circle cx="28" cy="28" r="24" fill="none" strokeWidth="3" strokeDasharray="150.8" strokeDashoffset="30" strokeLinecap="round" className="stroke-coral" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs font-mono font-bold text-coral">{nextExam.daysLeft}</span>
              </div>
            </div>
            <div>
              <p className="section-label mb-1">Next Exam</p>
              <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">{nextExam.name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-sans">{nextExam.fullName}</p>
            </div>
          </div>
          <Link to="/dashboard/entrance-exams" className="btn-primary flex items-center gap-2 text-sm">
            View All Exams <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
