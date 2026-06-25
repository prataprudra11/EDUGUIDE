import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Map, BookOpen, GraduationCap, ArrowRight, CheckCircle, BarChart, Users } from 'lucide-react';

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
      {/* Hero Section */}
      <section className="relative bg-primary-900 overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-800 text-primary-200 text-xs font-bold uppercase tracking-widest mb-6">Data-Driven Counseling</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Navigate Your Academic Future with Confidence.
            </h1>
            <p className="text-lg text-primary-100 mb-10 leading-relaxed max-w-lg font-medium">
              We leverage advanced psychometric analysis and historical admission data to curate personalized career roadmaps for ambitious students.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking" className="bg-mutedGreen-600 hover:bg-mutedGreen-500 text-white px-8 py-3 rounded-sm font-bold transition-colors shadow-lg flex items-center gap-2">
                Book a Consultation <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/about" className="bg-primary-800 hover:bg-primary-700 text-white px-8 py-3 rounded-sm font-bold transition-colors border border-primary-700">
                Our Methodology
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-surface-dark border border-primary-700 rounded-lg p-6 shadow-2xl relative z-10">
              <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
                <h3 className="text-white font-bold text-lg">Admission Probability Model</h3>
                <span className="text-mutedGreen-400 font-bold text-sm bg-mutedGreen-900/30 px-3 py-1 rounded-sm">Predictive Data</span>
              </div>
              <div className="space-y-4">
                {[
                  { uni: 'University A', prob: 90, color: 'bg-mutedGreen-500' },
                  { uni: 'University B', prob: 80, color: 'bg-mutedGreen-600' },
                  { uni: 'University C', prob: 60, color: 'bg-primary-500' },
                  { uni: 'University D', prob: 40, color: 'bg-mutedGreen-400' }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm text-slate-300 mb-1 font-medium">
                      <span>{item.uni}</span>
                      <span className="font-bold text-white">XX%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-sm h-2 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.prob}%` }}
                        transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                        viewport={{ once: true }}
                        className={`${item.color} h-full`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50 z-0"></div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            {[
              { label: 'Students Counseled', value: 'XX,XXX+', icon: Users },
              { label: 'Admission Success', value: 'XX%', icon: BarChart },
              { label: 'Partner Universities', value: 'XXX+', icon: GraduationCap },
              { label: 'Expert Counselors', value: 'XX+', icon: CheckCircle }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center px-4"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary-800" />
                <h3 className="text-3xl font-black text-slate-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4">Comprehensive Educational Services</h2>
            <p className="text-slate-600 font-medium">We provide specialized frontend analytics widgets guiding students from stream selection to entrance exams, and college choices.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { 
                icon: Target, 
                title: 'Stream Selection Guidance', 
                desc: 'Struggling to pick between Science, Commerce, or Humanities? Take our scientific assessment quiz matching interest, aptitude, and quantitative scores.', 
                link: '/dashboard/stream-selection' 
              },
              { 
                icon: Map, 
                title: 'Career Roadmap Builder', 
                desc: 'Visualize your entire career journey. From class 11 electives, degree levels, target software suites, to standard entry-level salary growth lines.', 
                link: '/dashboard/career-roadmap' 
              },
              { 
                icon: BookOpen, 
                title: 'Entrance Exam Guidance', 
                desc: 'Search, filter, and track major entrance exams. View syllabus breakdowns, countdown days, checklist targets, and preparation calendars.', 
                link: '/dashboard/entrance-exams' 
              },
              { 
                icon: GraduationCap, 
                title: 'College Cutoff Analysis', 
                desc: 'Analyze closing cutoff ranks from the last 5 years across categories (General, OBC, SC/ST) and estimate admission probabilities with rank inputs.', 
                link: '/dashboard/colleges-cutoffs' 
              }
            ].map((service, i) => (
              <motion.div key={i} variants={itemVariants} className="bg-white p-8 border border-slate-200 hover:border-primary-400 transition-colors rounded-xl shadow-sm flex flex-col group h-full">
                <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 leading-tight">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-medium mb-8">{service.desc}</p>
                </div>
                <Link to={service.link} className="text-primary-800 font-bold text-sm flex items-center gap-2 hover:text-primary-900 transition-colors mt-auto">
                  Launch Portal <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <QuoteIcon className="w-16 h-16 text-primary-700 mx-auto mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
            "The data-driven roadmap provided by EduGuide was instrumental. Instead of guessing my chances, I had a mathematical probability model guiding my college applications."
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-slate-300 rounded-full overflow-hidden border-2 border-primary-500">
              <img src="https://i.pravatar.cc/150?img=32" alt="Student" className="w-full h-full object-cover" />
            </div>
            <div className="text-left">
              <p className="font-bold text-lg">Student Name</p>
              <p className="text-primary-300 text-sm font-medium">Admitted to University X, CS</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Ready to Architect Your Future?</h2>
          <p className="text-slate-600 mb-8 font-medium max-w-2xl mx-auto">
            Schedule a comprehensive evaluation session with our senior counselors to begin mapping your academic trajectory.
          </p>
          <Link to="/booking" className="inline-block bg-primary-800 hover:bg-primary-900 text-white px-10 py-4 rounded-sm font-bold text-lg transition-colors shadow-md">
            Schedule Evaluation
          </Link>
        </div>
      </section>
    </div>
  );
}

function QuoteIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
