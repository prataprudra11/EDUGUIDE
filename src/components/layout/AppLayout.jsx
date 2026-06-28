import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, Bell } from 'lucide-react';
import Sidebar from './Sidebar';

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    // DESIGN: Clean light surface by default, slate-900 in dark mode
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 flex font-sans">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        {/* Top Header */}
        <header className="h-16 bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-white/10 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30 backdrop-blur-md">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 text-slate-400 hover:text-slate-900 dark:hover:text-white lg:hidden rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex-1 flex justify-end items-center gap-3">
            {/* TODO: Wire up — requires notification system */}
            <button className="p-2 text-slate-400 hover:text-horizon dark:hover:text-horizon-400 transition-colors relative rounded-lg hover:bg-slate-100 dark:hover:bg-white/5">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-coral rounded-full"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-x-hidden relative">
           {/* DESIGN: Subtle gradient glow — not overpowered, just adds depth */}
           <div className="absolute top-0 left-1/4 w-80 h-80 bg-horizon/3 dark:bg-horizon/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
           <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orchid/3 dark:bg-orchid/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
           <div className="relative z-10 max-w-7xl mx-auto">
             <Outlet />
           </div>
        </main>
      </div>
    </div>
  );
}
