import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu, Bell } from 'lucide-react';
import Sidebar from './Sidebar';

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-surface flex font-sans">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col min-w-0 lg:ml-64">
        {/* Top Header */}
        <header className="h-16 bg-surface-glass border-b border-white/5 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30 backdrop-blur-xl">
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 -ml-2 text-on-surface-variant hover:text-white lg:hidden rounded-md hover:bg-white/5 transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex-1 flex justify-end items-center gap-4">
            <button className="p-2 text-on-surface-variant hover:text-primary-dim transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full shadow-[0_0_8px_rgba(255,180,171,0.8)]"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 lg:p-8 overflow-x-hidden relative">
           {/* Subtle background glow effect */}
           <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>
           <div className="relative z-10">
             <Outlet />
           </div>
        </main>
      </div>
    </div>
  );
}
