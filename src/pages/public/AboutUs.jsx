import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const team = [
    { name: 'Member Name 1', role: 'Role Placeholder', exp: 'Experience Placeholder' },
    { name: 'Member Name 2', role: 'Role Placeholder', exp: 'Experience Placeholder' },
    { name: 'Member Name 3', role: 'Role Placeholder', exp: 'Experience Placeholder' }
  ];

  return (
    <div className="w-full bg-background-deep min-h-screen">
      {/* Header */}
      <section className="py-32 text-center px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/5 rounded-full blur-[120px] z-0"></div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-display font-black text-white mb-6 relative z-10"
        >
          Our Mission & Methodology
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-on-surface-variant max-w-2xl mx-auto text-lg font-sans relative z-10"
        >
          Replacing subjective advice with hard data, probability models, and rigorous academic planning.
        </motion.p>
      </section>

      {/* Content */}
      <section className="pb-32 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
        <div>
          <h2 className="text-3xl font-display font-bold text-white mb-6">The EduGuide Approach</h2>
          <div className="space-y-4 text-on-surface-variant leading-relaxed font-sans">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        
        <div className="surface-glass p-8 rounded-xl relative">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-secondary to-primary rounded-l-xl"></div>
          <h3 className="text-xl font-display font-bold text-white mb-8">Our Core Tenets</h3>
          <ul className="space-y-8">
            {[
              { title: 'Data Supremacy', desc: 'Every recommendation is backed by historical admission data and outcome statistics.' },
              { title: 'Objective Profiling', desc: 'We utilize standardized psychometric tools to eliminate counselor bias.' },
              { title: 'Strategic Execution', desc: 'We do not just advise; we build actionable, time-bound roadmaps.' }
            ].map((tenet, i) => (
              <li key={i}>
                <h4 className="font-display font-bold text-primary-dim mb-2">{tenet.title}</h4>
                <p className="text-sm text-on-surface-variant font-sans">{tenet.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background py-32 border-t border-white/5 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-display font-bold text-white">Leadership Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto surface-glass rounded-full mb-6 border border-white/10 shadow-lg overflow-hidden flex items-center justify-center">
                   <div className="text-on-surface-variant font-display font-bold text-4xl">
                     {member.name.charAt(0)}
                   </div>
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{member.name}</h3>
                <p className="text-primary-dim font-sans text-sm mb-4">{member.role}</p>
                <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-outline text-xs font-mono uppercase tracking-widest rounded-md">
                  {member.exp}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
