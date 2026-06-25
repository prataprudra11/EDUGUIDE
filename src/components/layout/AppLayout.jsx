import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <Sidebar />
      
      {/* Main Content Wrapper */}
      <div className="md:ml-64 flex flex-col min-h-screen">
        {/* Mobile Header (Optional, omitted for brevity, focusing on desktop first) */}
        
        <main className="flex-1 p-6 md:p-8 lg:p-10 max-w-7xl mx-auto w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
