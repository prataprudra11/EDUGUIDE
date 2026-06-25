import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const team = [
    { name: 'Dr. Sarah Jenkins', role: 'Head of Analytics', exp: '15+ Years Exp.' },
    { name: 'Marcus Chen', role: 'Lead Strategy Counselor', exp: 'Ex-Admissions Officer' },
    { name: 'Priya Sharma', role: 'Psychometric Specialist', exp: 'Ph.D. Psychology' }
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary-900 py-24 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-white mb-4"
        >
          Our Mission & Methodology
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-primary-200 max-w-2xl mx-auto text-lg font-medium"
        >
          Replacing subjective advice with hard data, probability models, and rigorous academic planning.
        </motion.p>
      </section>

      {/* Content */}
      <section className="py-20 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">The EduGuide Approach</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed font-medium">
            <p>
              Founded in 2018, EduGuide was established to solve a critical flaw in traditional educational counseling: the reliance on subjective opinions rather than empirical data.
            </p>
            <p>
              We compile millions of data points from historical admission cycles, entrance exam cutoffs, and career trajectory outcomes. This allows us to provide students with mathematical probabilities and structured roadmaps rather than mere suggestions.
            </p>
            <p>
              Our team consists of former university admissions officers, data scientists, and licensed psychologists who work in tandem to architect your future.
            </p>
          </div>
        </div>
        
        <div className="bg-slate-50 border border-slate-200 p-8 rounded-sm shadow-sm relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-mutedGreen-600"></div>
          <h3 className="text-xl font-bold text-slate-900 mb-6">Our Core Tenets</h3>
          <ul className="space-y-6">
            {[
              { title: 'Data Supremacy', desc: 'Every recommendation is backed by historical admission data and outcome statistics.' },
              { title: 'Objective Profiling', desc: 'We utilize standardized psychometric tools to eliminate counselor bias.' },
              { title: 'Strategic Execution', desc: 'We do not just advise; we build actionable, time-bound roadmaps.' }
            ].map((tenet, i) => (
              <li key={i}>
                <h4 className="font-bold text-primary-900">{tenet.title}</h4>
                <p className="text-sm text-slate-600 mt-1 font-medium">{tenet.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Leadership Team</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto bg-slate-200 rounded-full mb-6 border-4 border-white shadow-lg overflow-hidden">
                   <div className="w-full h-full bg-slate-300 flex items-center justify-center text-slate-500 font-bold text-3xl">
                     {member.name.charAt(0)}
                   </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-primary-700 font-bold text-sm mb-2">{member.role}</p>
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-sm">
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
