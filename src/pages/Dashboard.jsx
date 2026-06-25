import React from 'react';
import { BarChart, AreaChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Target, TrendingUp, BookOpen, Clock } from 'lucide-react';
import { performanceData, skillData } from '../data/mockData';

export default function Dashboard() {
  const stats = [
    { label: 'Overall Readiness', value: '86%', icon: Target, color: 'text-primary-dim' },
    { label: 'Admission Probability', value: 'High', icon: TrendingUp, color: 'text-neon-cyan' },
    { label: 'Pending Tasks', value: '4', icon: Clock, color: 'text-error' },
    { label: 'Syllabus Coverage', value: '72%', icon: BookOpen, color: 'text-secondary-dim' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">Overview</h1>
        <p className="text-on-surface-variant font-sans">Welcome back. Here is your academic telemetry for today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="surface-glass p-6 rounded-xl border-l-4 border-l-transparent hover:border-l-primary-dim transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-[0.1em] text-on-surface-variant">{stat.label}</span>
              <stat.icon className={`w-5 h-5 ${stat.color} drop-shadow-[0_0_8px_currentColor]`} />
            </div>
            <div className="text-3xl font-display font-black text-white">{stat.value}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance Trends */}
        <div className="surface-glass p-6 rounded-xl lg:col-span-2">
          <h2 className="text-xl font-display font-bold text-white mb-6">Performance Trends</h2>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={performanceData}>
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#00F0FF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#00F0FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                <XAxis dataKey="month" stroke="#a08e7a" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#a08e7a" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(26,26,26,0.9)', borderColor: 'rgba(250,250,247,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#00F0FF' }}
                />
                <Area type="monotone" dataKey="score" stroke="#00F0FF" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Skill Matrix */}
        <div className="surface-glass p-6 rounded-xl">
          <h2 className="text-xl font-display font-bold text-white mb-6">Skill Matrix</h2>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={skillData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#a08e7a', fontSize: 10, fontFamily: 'JetBrains Mono' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Student" dataKey="score" stroke="#eb9a01" strokeWidth={2} fill="#eb9a01" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
