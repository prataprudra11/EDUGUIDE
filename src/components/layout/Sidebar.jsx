import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Map, 
  BookOpen, 
  GraduationCap, 
  Target,
  Sun,
  Moon,
  LogOut
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useTheme } from '../../context/ThemeContext';

export default function Sidebar({ isOpen, setIsOpen }) {
  const { theme, toggleTheme } = useTheme();

  const links = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Stream Selection', path: '/dashboard/stream-selection', icon: Target },
    { name: 'Career Roadmap', path: '/dashboard/career-roadmap', icon: Map },
    { name: 'Entrance Exams', path: '/dashboard/entrance-exams', icon: BookOpen },
    { name: 'Colleges & Cutoffs', path: '/dashboard/colleges-cutoffs', icon: GraduationCap },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={cn(
          "fixed top-0 left-0 h-full w-64 z-50 transition-transform duration-300 ease-in-out flex flex-col",
          // DESIGN: Clean surface — white in light mode, deep slate in dark
          "bg-white border-r border-slate-200",
          "dark:bg-slate-900 dark:border-white/10",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Header / Logo */}
        <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-white/10">
          <Link to="/" className="flex items-center gap-3 group w-full">
            {/* DESIGN: Logo uses the Horizon→Orchid gradient — the brand's signature */}
            <div className="w-8 h-8 spine-gradient rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              <span className="text-white font-display font-black text-lg">E</span>
            </div>
            <span className="text-xl font-display font-bold text-slate-900 dark:text-white tracking-tight">EduGuide</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/dashboard'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-sans transition-all duration-200",
                isActive 
                  ? "bg-horizon/8 text-horizon dark:bg-horizon/15 dark:text-horizon-400 font-semibold border-l-[3px] border-l-horizon dark:border-l-horizon-400" 
                  : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 border-l-[3px] border-l-transparent"
              )}
            >
              <link.icon className="w-[18px] h-[18px]" />
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Footer: Theme Toggle + User Profile */}
        <div className="border-t border-slate-200 dark:border-white/10">
          {/* Theme Toggle */}
          <div className="px-4 py-3 border-b border-slate-100 dark:border-white/5">
            <button 
              onClick={toggleTheme}
              className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-sm text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-[18px] h-[18px] text-amber-500" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-[18px] h-[18px] text-orchid" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          {/* User Profile */}
          {/* TODO: Wire up — requires auth context for real user data */}
          <div className="p-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                {/* DESIGN: Progress Spine motif — completion ring around avatar */}
                <svg className="w-10 h-10 -rotate-90" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="2" className="text-slate-200 dark:text-slate-700" />
                  <circle cx="20" cy="20" r="17" fill="none" strokeWidth="2" strokeDasharray="106.8" strokeDashoffset="21.4" strokeLinecap="round" className="text-horizon" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-display font-bold text-horizon">ST</span>
                </div>
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Student User</p>
                <p className="text-xs font-mono text-slate-400 dark:text-slate-500 truncate">Class 12 · Science</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
