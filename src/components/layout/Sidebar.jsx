import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Target, 
  Map, 
  BookOpen, 
  GraduationCap, 
  LogOut,
  Moon,
  Sun
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Target, label: 'Stream Selection', path: '/stream-selection' },
  { icon: Map, label: 'Career Roadmap', path: '/career-roadmap' },
  { icon: BookOpen, label: 'Entrance Exams', path: '/entrance-exams' },
  { icon: GraduationCap, label: 'Colleges & Cutoffs', path: '/colleges-cutoffs' },
];

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className="w-64 fixed inset-y-0 left-0 bg-white dark:bg-surface-dark border-r border-slate-200 dark:border-slate-800 flex flex-col transition-colors duration-300 z-10 hidden md:flex">
      {/* Logo */}
      <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-slate-800 bg-primary-900">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-primary-900 font-bold text-xl">E</span>
          </div>
          <span className="text-xl font-bold text-white tracking-wide">EduGuide</span>
        </div>
      </div>

      {/* User Info */}
      <div className="px-6 py-4 flex items-center gap-3 border-b border-slate-100 dark:border-slate-800/50">
        <div className="w-10 h-10 rounded bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
          <span className="text-slate-600 dark:text-slate-300 font-bold">JD</span>
        </div>
        <div>
          <p className="text-sm font-bold text-slate-800 dark:text-white">John Doe</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Class 12 Student</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'nav-item',
                isActive && 'active'
              )
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer Settings */}
      <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center gap-3 px-4 py-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          <span className="font-medium">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-2 rounded-md text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </aside>
  );
}
