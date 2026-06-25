import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function PublicLayout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

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
    <div className="min-h-screen flex flex-col bg-background-deep transition-colors duration-300">
      
      {/* Navigation Bar */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "surface-glass py-3" 
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center transition-transform group-hover:scale-105 shadow-[0_0_15px_rgba(235,154,1,0.4)]">
              <span className="text-black font-display font-black text-2xl">E</span>
            </div>
            <span className="text-2xl font-display font-bold text-white tracking-tight">EduGuide</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.path} 
                href={location.pathname === '/' ? link.path : `/${link.path}`}
                onClick={(e) => handleNavClick(e, link.path)}
                className={cn(
                  "font-sans font-bold text-sm transition-colors uppercase tracking-widest",
                  (location.pathname === '/' && activeSection === link.path.replace('#', ''))
                    ? "text-primary-dim"
                    : "text-on-surface-variant hover:text-white"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/dashboard" className="btn-primary flex items-center gap-2">
              Student Portal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-on-surface-variant hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 surface-glass-high p-6 flex flex-col gap-4 border-b border-white/10">
            {navLinks.map((link) => (
              <a 
                key={link.path} 
                href={location.pathname === '/' ? link.path : `/${link.path}`}
                onClick={(e) => handleNavClick(e, link.path)}
                className={cn(
                  "font-sans font-bold py-2 border-b border-white/5",
                  (location.pathname === '/' && activeSection === link.path.replace('#', ''))
                    ? "text-primary-dim"
                    : "text-white"
                )}
              >
                {link.name}
              </a>
            ))}
            <Link to="/dashboard" className="btn-primary flex justify-center items-center gap-2 mt-4">
              Student Portal <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Professional Footer */}
      <footer className="bg-background py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-black font-display font-black text-xl">E</span>
              </div>
              <span className="text-xl font-display font-bold text-white tracking-tight">EduGuide</span>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-sm font-sans">
              Empowering students with data-driven academic counseling, personalized career roadmaps, and expert guidance to achieve educational excellence.
            </p>
          </div>
          <div>
            <h4 className="text-white font-display font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm font-sans text-on-surface-variant">
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-white transition-colors">About the Institute</a></li>
              <li><Link to="/dashboard" className="hover:text-white transition-colors">Student Portal</Link></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-display font-bold mb-4 uppercase tracking-wider text-sm">Connect</h4>
            <ul className="space-y-2 text-sm font-sans text-on-surface-variant">
              <li className="font-mono">info@eduguide.edu</li>
              <li className="font-mono">1-800-EDU-GUIDE</li>
              <li className="mt-4 pt-4 border-t border-white/5">
                123 Academic Way,<br />University District, ST 12345
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-xs text-outline font-sans flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} EduGuide Counseling Services. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
