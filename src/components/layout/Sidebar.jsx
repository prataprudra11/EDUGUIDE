import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Map, 
  BookOpen, 
  GraduationCap, 
  Target 
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function Sidebar({ isOpen, setIsOpen }) {
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
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={cn(
          "fixed top-0 left-0 h-full w-64 bg-background-deep border-r border-white/5 z-50 transition-transform duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Header / Logo */}
        <div className="h-16 flex items-center px-6 border-b border-white/5">
          <Link to="/" className="flex items-center gap-3 group w-full">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center transition-transform group-hover:scale-105 shadow-[0_0_10px_rgba(235,154,1,0.3)]">
              <span className="text-black font-display font-black text-xl">E</span>
            </div>
            <span className="text-xl font-display font-bold text-white tracking-tight">EduGuide</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2 custom-scrollbar">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/dashboard'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-sans transition-all duration-200 border border-transparent",
                isActive 
                  ? "bg-surface-glass text-primary-dim shadow-[0_0_15px_rgba(235,154,1,0.1)] border-primary-dim/30" 
                  : "text-on-surface-variant hover:text-white hover:bg-white/5"
              )}
            >
              <link.icon className="w-5 h-5" />
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>

        {/* User Profile */}
        <div className="p-4 border-t border-white/5 bg-surface-container-low">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-secondary text-white font-display font-bold flex items-center justify-center text-sm shadow-[0_0_10px_rgba(49,49,192,0.3)]">
              ST
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-display font-bold text-white truncate">Student User</p>
              <p className="text-xs font-mono text-outline uppercase truncate">Class 11 Science</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
