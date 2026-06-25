import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

export default function PublicLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark transition-colors duration-300">
      
      {/* Navigation Bar */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
          isScrolled 
            ? "bg-white/95 dark:bg-surface-dark/95 backdrop-blur-sm border-slate-200 dark:border-slate-800 py-3 shadow-sm" 
            : "bg-white dark:bg-surface-dark border-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary-900 rounded-md flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="text-white font-black text-2xl font-sans">E</span>
            </div>
            <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">EduGuide</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={cn(
                  "font-bold text-sm transition-colors uppercase tracking-wider",
                  location.pathname === link.path
                    ? "text-primary-800 dark:text-primary-400"
                    : "text-slate-600 dark:text-slate-400 hover:text-primary-900 dark:hover:text-primary-300"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <Link to="/booking" className="font-bold text-sm text-slate-700 dark:text-slate-300 hover:text-primary-900 dark:hover:text-primary-400 px-2 uppercase tracking-wider">
              Book Appointment
            </Link>
            <Link to="/dashboard" className="btn-primary flex items-center gap-2">
              Student Portal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-700 dark:text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-surface-dark border-b border-slate-200 dark:border-slate-800 shadow-lg p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-slate-800 dark:text-slate-200 py-2 border-b border-slate-100 dark:border-slate-800"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/booking" 
              onClick={() => setMobileMenuOpen(false)}
              className="font-bold text-slate-800 dark:text-slate-200 py-2 border-b border-slate-100 dark:border-slate-800"
            >
              Book Appointment
            </Link>
            <Link to="/dashboard" className="btn-primary flex justify-center items-center gap-2 mt-4">
              Student Portal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </header>

      {/* Main Content (with top padding to account for fixed header) */}
      <main className="flex-1 pt-24 pb-12">
        <Outlet />
      </main>

      {/* Professional Footer */}
      <footer className="bg-primary-900 text-slate-300 py-12 border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-primary-900 font-black text-xl font-sans">E</span>
              </div>
              <span className="text-xl font-black text-white tracking-tight">EduGuide</span>
            </div>
            <p className="text-sm text-primary-200 leading-relaxed max-w-sm font-medium">
              Empowering students with data-driven academic counseling, personalized career roadmaps, and expert guidance to achieve educational excellence.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><Link to="/about" className="hover:text-white transition-colors">About the Institute</Link></li>
              <li><Link to="/booking" className="hover:text-white transition-colors">Consultations</Link></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Student Portal</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li>info@eduguide.edu</li>
              <li>1-800-EDU-GUIDE</li>
              <li className="mt-4 pt-4 border-t border-primary-800">
                123 Academic Way,<br />University District, ST 12345
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-primary-800 text-xs text-primary-400 font-medium flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} EduGuide Counseling Services. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
