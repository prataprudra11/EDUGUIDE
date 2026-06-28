import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useTheme } from '../../context/ThemeContext';

export default function PublicLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'contact'];
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 250)) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About Us', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ];

  const handleNavClick = (e, path) => {
    if (location.pathname === '/' && path.startsWith('#')) {
      e.preventDefault();
      const id = path.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80,
          behavior: 'smooth'
        });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    // DESIGN: Light, clean canvas — the public site should feel open and trustworthy
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* Navigation Bar */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-white/5 py-3" 
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 spine-gradient rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              <span className="text-white font-display font-black text-lg">E</span>
            </div>
            <span className="text-xl font-display font-bold text-slate-900 dark:text-white tracking-tight">EduGuide</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.path} 
                href={location.pathname === '/' ? link.path : `/${link.path}`}
                onClick={(e) => handleNavClick(e, link.path)}
                className={cn(
                  "font-sans font-medium text-sm transition-colors",
                  (location.pathname === '/' && activeSection === link.path.replace('#', ''))
                    ? "text-horizon"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="p-2.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 transition-colors mr-2"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-500" /> : <Moon className="w-5 h-5 text-orchid" />}
            </button>
            <Link to="/login" className="btn-ghost py-2.5">
              Log In
            </Link>
            <Link to="/signup" className="btn-primary flex items-center gap-2 py-2.5">
              Sign Up <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 p-6 flex flex-col gap-4 shadow-lg">
            {navLinks.map((link) => (
              <a 
                key={link.path} 
                href={location.pathname === '/' ? link.path : `/${link.path}`}
                onClick={(e) => handleNavClick(e, link.path)}
                className={cn(
                  "font-sans font-medium py-2 border-b border-slate-100 dark:border-white/5",
                  (location.pathname === '/' && activeSection === link.path.replace('#', ''))
                    ? "text-horizon"
                    : "text-slate-700 dark:text-slate-300"
                )}
              >
                {link.name}
              </a>
            ))}
            <div className="grid grid-cols-2 gap-3 mt-2">
              <Link to="/login" className="btn-ghost flex justify-center py-2.5">
                Log In
              </Link>
              <Link to="/signup" className="btn-primary flex justify-center items-center gap-2 py-2.5">
                Sign Up
              </Link>
            </div>
            <button 
              onClick={toggleTheme}
              className="flex items-center justify-center gap-2 w-full py-2.5 mt-2 rounded-lg text-sm text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-colors border border-slate-200 dark:border-white/10"
            >
              {theme === 'dark' ? (
                <><Sun className="w-4 h-4 text-amber-500" /> Light Mode</>
              ) : (
                <><Moon className="w-4 h-4 text-orchid" /> Dark Mode</>
              )}
            </button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 spine-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-black text-lg">E</span>
              </div>
              <span className="text-lg font-display font-bold text-white tracking-tight">EduGuide</span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm font-sans text-slate-400">
              Empowering students with data-driven academic counseling, personalized career roadmaps, and expert guidance to navigate the path from classroom to career.
            </p>
          </div>
          <div>
            <h4 className="text-white font-display font-bold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2.5 text-sm font-sans text-slate-400">
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-white transition-colors">About Us</a></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Student Portal</Link></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-display font-bold mb-4 text-sm">Connect</h4>
            <ul className="space-y-2.5 text-sm font-sans text-slate-400">
              {/* ASSUMPTION: These are placeholder contact details — replace with real data when available */}
              <li className="font-mono text-xs">info@eduguide.ai</li>
              <li className="font-mono text-xs">1-800-EDU-GUIDE</li>
              <li className="mt-4 pt-4 border-t border-white/10 text-xs leading-relaxed">
                123 Academic Way,<br />University District, ST 12345
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-xs text-slate-500 font-sans flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} EduGuide. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
