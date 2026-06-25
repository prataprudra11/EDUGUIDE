import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Map, BookOpen, GraduationCap, ArrowRight, CheckCircle, BarChart, Users } from 'lucide-react';
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
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32">
          {/* Deep dark gradient overlay on top of deep background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0B] via-[#131313] to-[#0A0A0B] z-0"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] z-0"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-tertiary/10 rounded-full blur-[100px] z-0"></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-1 px-3 rounded-md bg-secondary/20 border border-secondary/30 text-secondary-dim font-mono text-xs uppercase tracking-[0.1em] mb-6 shadow-[0_0_15px_rgba(49,49,192,0.3)]">
                Data-Driven Analytics
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[1.1] tracking-tight mb-6">
                Engineer Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-fixed">Academic Future.</span>
              </h1>
              <p className="text-lg text-on-surface-variant mb-10 leading-relaxed max-w-lg font-sans">
                We leverage advanced psychometric analysis and historical admission data to curate highly precise, personalized career roadmaps for ambitious students.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#about" className="btn-primary flex items-center gap-2">
                  Our Methodology <ArrowRight className="w-5 h-5" />
                </a>
                <Link to="/dashboard" className="btn-ghost">
                  View Dashboard
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="surface-glass p-8 rounded-xl relative z-10 shadow-2xl">
                <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                  <h3 className="font-display font-bold text-xl text-white">Probability Matrix</h3>
                  <span className="text-neon-cyan font-mono text-xs bg-neon-cyan/10 px-3 py-1 rounded border border-neon-cyan/20 animate-pulse">
                    Predictive Data
                  </span>
                </div>
                <div className="space-y-6">
                  {[
                    { uni: 'University A', prob: 90, color: 'from-neon-cyan to-secondary-dim' },
                    { uni: 'University B', prob: 80, color: 'from-primary-dim to-primary' },
                    { uni: 'University C', prob: 60, color: 'from-tertiary-dim to-tertiary' },
                    { uni: 'University D', prob: 40, color: 'from-secondary to-tertiary' }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm text-on-surface-variant mb-2 font-sans">
                        <span>{item.uni}</span>
                        <span className="font-mono text-white">XX%</span>
                      </div>
                      <div className="w-full bg-surface-container-high rounded-full h-2 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.prob}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + (i * 0.2), ease: "easeOut" }}
                          viewport={{ once: true }}
                          className={`h-full bg-gradient-to-r ${item.color} shadow-[0_0_10px_currentColor]`}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-background border-y border-white/5 relative z-10">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5">
              {[
                { label: 'Counseled', value: 'XX,XXX+', icon: Users },
                { label: 'Success Rate', value: 'XX%', icon: BarChart },
                { label: 'Partners', value: 'XXX+', icon: GraduationCap },
                { label: 'Counselors', value: 'XX+', icon: CheckCircle }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center px-4"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-4 text-primary-dim opacity-80" />
                  <h3 className="text-3xl font-display font-black text-white mb-2">{stat.value}</h3>
                  <p className="text-xs font-mono text-outline uppercase tracking-[0.1em]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-background-deep z-0"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Comprehensive Systems</h2>
              <p className="text-on-surface-variant font-sans text-lg">We provide specialized frontend analytics widgets guiding students from stream selection to entrance exams, and college choices.</p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {[
                { 
                  icon: Target, 
                  title: 'Stream Selection', 
                  desc: 'Scientific assessment matrix matching interest, aptitude, and quantitative scores to ideal academic tracks.', 
                  link: '/dashboard/stream-selection' 
                },
                { 
                  icon: Map, 
                  title: 'Career Roadmaps', 
                  desc: 'Visual timelines mapping class 11 electives and degree levels to standard entry-level salary growth lines.', 
                  link: '/dashboard/career-roadmap' 
                },
                { 
                  icon: BookOpen, 
                  title: 'Entrance Exams', 
                  desc: 'Search, filter, and track major entrance exams. View syllabus breakdowns and preparation calendars.', 
                  link: '/dashboard/entrance-exams' 
                },
                { 
                  icon: GraduationCap, 
                  title: 'Cutoff Analytics', 
                  desc: 'Analyze closing cutoff ranks from the last 5 years and estimate admission probabilities with rank inputs.', 
                  link: '/dashboard/colleges-cutoffs' 
                }
              ].map((service, i) => (
                <motion.div key={i} variants={itemVariants} className="surface-glass p-8 rounded-xl flex flex-col group h-full hover:border-primary/50 transition-colors duration-300">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_rgba(235,154,1,0.2)]">
                    <service.icon className="w-5 h-5 text-white group-hover:text-primary-fixed" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold text-white mb-4 leading-tight">{service.title}</h3>
                    <p className="text-on-surface-variant text-sm leading-relaxed font-sans mb-8">{service.desc}</p>
                  </div>
                  <Link to={service.link} className="text-primary-dim font-mono text-xs uppercase tracking-widest flex items-center gap-2 hover:text-primary transition-colors mt-auto">
                    Launch Portal <ArrowRight className="w-4 h-4" />
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
