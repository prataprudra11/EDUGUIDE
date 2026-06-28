import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Map, BookOpen, GraduationCap, ArrowRight, Zap, BarChart3, Users, ShieldCheck } from 'lucide-react';
import AboutUs from './AboutUs';
import ContactForm from './ContactForm';

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="w-full">
      <div id="home">
        {/* ============================================
            HERO SECTION
            DESIGN: Clean, light, confident. No dark sci-fi vibes.
            The hero sells clarity and trust — exactly what anxious students need.
            ============================================ */}
        <section className="relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32">
          {/* Subtle gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-horizon-50/50 to-orchid-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 z-0" />
          {/* Decorative blobs */}
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-horizon/5 rounded-full blur-[100px] z-0" />
          <div className="absolute bottom-10 left-1/4 w-64 h-64 bg-orchid/5 rounded-full blur-[100px] z-0" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 py-1.5 px-3.5 rounded-full bg-horizon/8 dark:bg-horizon/15 border border-horizon/15 text-horizon dark:text-horizon-400 font-mono text-xs mb-6">
                <Zap className="w-3.5 h-3.5" />
                AI-Powered Career Platform
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6">
                Discover Your Ideal{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-horizon to-orchid">Career Path</span>
                {' '}with AI
              </h1>
              <p className="text-base lg:text-lg text-slate-500 dark:text-slate-400 mb-8 leading-relaxed max-w-lg font-sans">
                EduGuide combines psychometric evaluation with historical admission data to build personalized career roadmaps — from stream selection to campus placement.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/signup" className="btn-primary flex items-center gap-2 py-3 text-base">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="#about" className="btn-ghost flex items-center gap-2 py-3 text-base">
                  How It Works
                </a>
              </div>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-2 mt-8">
                {['Psychometric Evaluation', 'Salary Analytics', 'Predictive Cutoffs'].map((tag, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-full text-xs font-sans text-slate-600 dark:text-slate-400 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full spine-gradient" />
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {/* Hero Right — Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* DESIGN: A mini dashboard preview showing real features — not a generic mockup */}
              <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl border border-white/10 relative">
                {/* Browser dots */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2.5 h-2.5 rounded-full bg-coral/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-mint/80" />
                  <div className="flex-1 flex justify-center">
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-800 px-4 py-1 rounded-full">eduguide.ai/dashboard</span>
                  </div>
                </div>

                {/* Student Profile Card */}
                <div className="bg-slate-800 rounded-lg p-4 mb-3 border border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-horizon to-orchid flex items-center justify-center text-white text-xs font-bold">JD</div>
                      <div>
                        <p className="text-[10px] font-mono text-slate-500 uppercase">Student Profile</p>
                        <p className="text-sm font-semibold text-white">John Doe (Class 12)</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-1 bg-mint/15 text-mint rounded-full border border-mint/20">92% Complete</span>
                  </div>
                </div>

                {/* Stream Affinity Mini Card */}
                <div className="bg-slate-800 rounded-lg p-4 mb-3 border border-white/5">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-xs font-semibold text-white">Stream Affinity</p>
                    <span className="text-[10px] font-mono text-orchid-300">Science Core</span>
                  </div>
                  {/* Mini radar approximation */}
                  <div className="flex items-center justify-center h-20">
                    <svg viewBox="0 0 100 80" className="w-32 h-20">
                      <polygon points="50,5 90,30 75,75 25,75 10,30" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                      <polygon points="50,20 72,35 65,60 35,60 28,35" fill="rgba(37,99,235,0.2)" stroke="#2563EB" strokeWidth="1.5"/>
                    </svg>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-2 mb-3">
                  <div className="bg-slate-800 rounded-lg p-3 border border-white/5">
                    <p className="text-[9px] font-mono text-slate-500 uppercase mb-1">Target Role</p>
                    <p className="text-xs font-bold text-white">AI Engineer</p>
                    <div className="w-full h-1 bg-slate-700 rounded-full mt-2">
                      <div className="h-1 bg-horizon rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-3 border border-white/5">
                    <p className="text-[9px] font-mono text-slate-500 uppercase mb-1">JEE Countdown</p>
                    <p className="text-xs font-bold text-coral">16 Days Left</p>
                    <p className="text-[9px] text-slate-500 mt-1">June 8, 2026</p>
                  </div>
                </div>

                {/* Prediction Card */}
                <div className="bg-slate-800 rounded-lg p-3 border border-white/5 flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-mono text-slate-500 uppercase mb-1">Predictive Probability</p>
                    <p className="text-xs font-bold text-white">IIT Bombay (CSE Branch)</p>
                  </div>
                  <span className="text-xs font-mono font-bold px-2.5 py-1 bg-mint/15 text-mint rounded-full border border-mint/20">84% Chance</span>
                </div>
              </div>
              
              {/* Glow behind the card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-horizon/20 to-orchid/20 rounded-3xl blur-2xl -z-10" />
            </motion.div>
          </div>
        </section>

        {/* ============================================
            STATS SECTION
            DESIGN: No customer testimonials — these are platform capability metrics
            ============================================ */}
        <section className="bg-slate-50 dark:bg-slate-800/50 border-y border-slate-200 dark:border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-6 py-14">
            {/* ASSUMPTION: Stats are realistic mock numbers — replace with real data when analytics are available */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Students Guided', value: '12,000+', icon: Users },
                { label: 'Assessment Accuracy', value: '94%', icon: BarChart3 },
                { label: 'Partner Institutions', value: '150+', icon: GraduationCap },
                { label: 'Expert Counselors', value: '25+', icon: ShieldCheck }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-3 text-horizon/60" />
                  <h3 className="text-2xl lg:text-3xl font-display font-black text-slate-900 dark:text-white mb-1">{stat.value}</h3>
                  <p className="text-xs font-mono text-slate-400 dark:text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================
            SERVICES SECTION
            ============================================ */}
        <section className="py-24 relative bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Comprehensive{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-horizon to-orchid">Educational Services</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-sans">
                Specialized analytics guiding students from stream selection to entrance exams and college admissions.
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {[
                { 
                  icon: Target, 
                  title: 'Stream Selection', 
                  desc: 'Scientific assessment matching aptitude, interest, and quantitative scores to ideal academic tracks.',
                  link: '/dashboard/stream-selection',
                  color: 'bg-horizon/10 text-horizon dark:bg-horizon/20'
                },
                { 
                  icon: Map, 
                  title: 'Career Roadmaps', 
                  desc: 'Visual timelines from Class 11 electives through degrees and skills to entry-level salary projections.',
                  link: '/dashboard/career-roadmap',
                  color: 'bg-orchid/10 text-orchid dark:bg-orchid/20'
                },
                { 
                  icon: BookOpen, 
                  title: 'Entrance Exams', 
                  desc: 'Search, filter, and track major entrance exams with syllabus breakdowns and preparation calendars.',
                  link: '/dashboard/entrance-exams',
                  color: 'bg-coral/10 text-coral dark:bg-coral/20'
                },
                { 
                  icon: GraduationCap, 
                  title: 'Cutoff Analytics', 
                  desc: 'Analyze 5-year closing cutoff trends and estimate admission probability with your rank.',
                  link: '/dashboard/colleges-cutoffs',
                  color: 'bg-mint/10 text-mint dark:bg-mint/20'
                }
              ].map((service, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants} 
                  className="card card-hover p-6 flex flex-col group"
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${service.color} transition-transform group-hover:scale-110`}>
                    <service.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-display font-bold mb-2">{service.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-sans mb-6">{service.desc}</p>
                  </div>
                  <Link to={service.link} className="text-horizon dark:text-horizon-400 font-sans text-sm font-medium flex items-center gap-1.5 hover:gap-2.5 transition-all">
                    Launch Portal <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      <div id="about">
        <AboutUs />
      </div>

      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}
