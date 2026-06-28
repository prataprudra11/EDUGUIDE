import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, Target } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="w-full bg-slate-50 dark:bg-slate-800/30">
      {/* Header */}
      <section className="py-24 text-center px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-48 bg-orchid/3 dark:bg-orchid/5 rounded-full blur-[120px] z-0" />
        <motion.h2 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold mb-4 relative z-10"
        >
          Our Mission & Methodology
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-sans relative z-10"
        >
          Replacing subjective advice with hard data, probability models, and rigorous academic planning.
        </motion.p>
      </section>

      {/* Content */}
      <section className="pb-24 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <div>
          <h3 className="text-2xl font-display font-bold mb-5">The EduGuide Approach</h3>
          {/* DESIGN: Real product-relevant copy — no lorem ipsum */}
          <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed font-sans text-sm">
            <p>
              Most career counseling in India relies on anecdotal advice — parents suggesting engineering, tutors recommending coaching classes, and students making decisions based on peer pressure rather than personal aptitude. EduGuide was built to change that.
            </p>
            <p>
              Our platform uses standardized psychometric evaluation tools to objectively measure a student's analytical ability, creative aptitude, verbal reasoning, and memory retention. These scores are then mapped against historical admission data from over 150 institutions to generate personalized stream recommendations with quantified confidence levels.
            </p>
            <p>
              Every career roadmap on our platform is structured around real-world milestones — from Class 11 subject selection through college degrees, industry certifications, and job placement. We don't just tell students what to study; we show them exactly how to get there, step by step, with salary projections based on aggregated market data.
            </p>
          </div>
        </div>
        
        <div className="card p-6 lg:p-8 relative h-fit">
          {/* DESIGN: Accent line using the Progress Spine gradient */}
          <div className="absolute top-0 left-0 w-1 h-full spine-gradient rounded-l-xl" />
          <h3 className="text-lg font-display font-bold mb-6">Our Core Tenets</h3>
          <ul className="space-y-6">
            {[
              { 
                icon: TrendingUp,
                title: 'Data Over Opinion', 
                desc: 'Every recommendation is backed by historical admission data, placement statistics, and outcome analysis across 5+ years.' 
              },
              { 
                icon: Shield,
                title: 'Objective Profiling', 
                desc: 'We use standardized psychometric instruments to eliminate counselor bias and give students an honest view of their strengths.' 
              },
              { 
                icon: Target,
                title: 'Actionable Roadmaps', 
                desc: 'We don\'t just advise — we build time-bound, milestone-driven plans with specific skills, certifications, and deadlines.' 
              }
            ].map((tenet, i) => (
              <li key={i} className="flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-horizon/8 dark:bg-horizon/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <tenet.icon className="w-4 h-4 text-horizon" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm mb-1">{tenet.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-sans leading-relaxed">{tenet.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white dark:bg-slate-900 py-24 border-t border-slate-200 dark:border-white/5 relative z-10">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-display font-bold">Leadership Team</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 font-sans">The people behind your career guidance.</p>
          </div>
          
          {/* TODO: Wire up — requires team data from CMS or backend */}
          {/* ASSUMPTION: Names and roles are placeholders — replace with actual team info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Priya Sharma', role: 'Founder & Lead Counselor', initials: 'PS' },
              { name: 'Arjun Mehta', role: 'Head of Data Science', initials: 'AM' },
              { name: 'Neha Kapoor', role: 'Director of Partnerships', initials: 'NK' }
            ].map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 mx-auto rounded-2xl spine-gradient flex items-center justify-center mb-4 shadow-md">
                  <span className="text-white font-display font-bold text-xl">{member.initials}</span>
                </div>
                <h4 className="text-base font-display font-bold mb-1">{member.name}</h4>
                <p className="text-orchid dark:text-orchid-300 font-sans text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
