import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { studentProfile } from '../data/mockData';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function StreamSelection() {
  const [step, setStep] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});

  const questions = [
    "Which of these activities excites you the most in your free time?",
    "How do you prefer solving a complex problem?",
    "When reading news, which sections do you jump to first?",
    "What kind of environment do you thrive in?"
  ];

  const options = [
    ["Building/coding apps or solving logic puzzles.", "Managing budget, tracking investment trends.", "Sketching, writing stories, or studying history.", "Analyzing statistics, researching stock markets."],
    ["Break it into logical sub-problems and solve step by step.", "Look for patterns from past experiences.", "Brainstorm creative and unconventional solutions.", "Discuss with others and gather different perspectives."],
    ["Science & technology breakthroughs.", "Business, markets, and economic analysis.", "Culture, art, and human-interest stories.", "Politics, law, and current affairs."],
    ["A quiet lab or research workspace.", "A fast-paced, competitive corporate office.", "A creative studio or collaborative space.", "A courtroom, debate hall, or public forum."]
  ];

  const handleOptionSelect = (questionIndex, optionIndex) => {
    setSelectedOptions(prev => ({ ...prev, [questionIndex]: optionIndex }));
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(prev => prev + 1);
    } else {
      setStep(2);
    }
  };

  const progress = step === 1 ? ((currentQ) / questions.length) * 100 : step === 2 ? 100 : 0;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl lg:text-3xl font-display font-bold mb-1">Psychometric Evaluation</h1>
        <p className="text-slate-500 dark:text-slate-400 font-sans text-sm">
          Complete the assessment to match with the most suitable academic stream.
        </p>
      </div>

      {/* DESIGN: Progress Spine — Horizon→Orchid gradient bar across the top */}
      {step > 0 && (
        <div className="card p-4">
          <div className="flex justify-between text-xs font-mono text-slate-400 dark:text-slate-500 mb-2">
            <span>{step === 2 ? 'Complete' : `Question ${currentQ + 1} of ${questions.length}`}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
            <motion.div 
              className="h-full rounded-full spine-gradient-h"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Step 0: Start Screen */}
        {step === 0 && (
          <motion.div 
            key="start"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="card p-8 lg:p-12 text-center max-w-2xl mx-auto mt-8"
          >
            <div className="w-16 h-16 bg-horizon/10 dark:bg-horizon/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-horizon" />
            </div>
            <h2 className="text-2xl font-display font-bold mb-3">Discover Your Path</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed font-sans max-w-md mx-auto">
              Our structured assessment evaluates your aptitude, creative inclinations, and analytical skills to recommend the optimal educational stream for your future career.
            </p>
            <button onClick={() => setStep(1)} className="btn-primary px-8 py-3 text-base">
              Start Assessment
            </button>
          </motion.div>
        )}

        {/* Step 1: Quiz */}
        {step === 1 && (
          <motion.div 
            key={`q-${currentQ}`}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="card p-6 lg:p-8 max-w-3xl mx-auto"
          >
            <h2 className="text-lg lg:text-xl font-display font-bold mb-6 text-slate-900 dark:text-white">
              {questions[currentQ]}
            </h2>

            <div className="space-y-3">
              {options[currentQ].map((opt, i) => {
                const isSelected = selectedOptions[currentQ] === i;
                return (
                  <label 
                    key={i} 
                    onClick={() => handleOptionSelect(currentQ, i)}
                    className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'border-horizon bg-horizon/5 dark:bg-horizon/10 dark:border-horizon/50'
                        : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 hover:bg-slate-50 dark:hover:bg-white/5'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected 
                        ? 'border-horizon bg-horizon' 
                        : 'border-slate-300 dark:border-slate-600'
                    }`}>
                      {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                    </div>
                    <span className="text-sm text-slate-700 dark:text-slate-200 font-sans">{opt}</span>
                  </label>
                );
              })}
            </div>

            <div className="mt-8 flex justify-between">
              <button 
                onClick={() => setCurrentQ(prev => Math.max(0, prev - 1))}
                disabled={currentQ === 0}
                className="btn-ghost flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4" /> Previous
              </button>
              <button 
                onClick={handleNext} 
                disabled={selectedOptions[currentQ] === undefined}
                className="btn-primary flex items-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                {currentQ === questions.length - 1 ? 'Finish Assessment' : 'Next Question'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Results */}
        {step === 2 && (
          <motion.div 
            key="results"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {/* Radar Chart */}
            <div className="card p-6 lg:p-8">
              <h3 className="text-lg font-display font-bold mb-1">Stream Affinity Radar</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-sans mb-6">Your aptitude distribution across domains</p>
              <div className="h-[280px] w-full flex justify-center items-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={studentProfile.affinityScores}>
                    <PolarGrid stroke="rgba(148,163,184,0.2)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748B', fontSize: 11, fontWeight: 600, fontFamily: 'JetBrains Mono' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar name="Student" dataKey="score" stroke="#2563EB" strokeWidth={2} fill="#2563EB" fillOpacity={0.12} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Recommendation */}
            <div className="card p-6 lg:p-8 flex flex-col justify-center accent-horizon">
              <p className="section-label mb-2">Recommendation Result</p>
              {/* DESIGN: The result is the payoff — make it visually rewarding */}
              <h2 className="text-3xl font-display font-black text-slate-900 dark:text-white mb-3">Science Core (PCM)</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed font-sans text-sm">
                Based on your high aptitude and analytical scores, a Science stream (Physics, Chemistry, Mathematics) is highly recommended. This pathway is strongly aligned with Engineering, Data Science, and Quantitative Research fields.
              </p>
              <div className="space-y-4">
                <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg">
                  <p className="section-label mb-2">Match Confidence</p>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-slate-200 dark:bg-slate-600 rounded-full h-2.5 overflow-hidden">
                      <motion.div 
                        className="h-full rounded-full bg-mint"
                        initial={{ width: 0 }}
                        animate={{ width: '92%' }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                      />
                    </div>
                    <span className="font-bold text-mint font-mono text-sm">92%</span>
                  </div>
                </div>
              </div>
              <Link to="/dashboard/career-roadmap" className="btn-primary w-full mt-6 flex items-center justify-center gap-2">
                View Career Roadmaps <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
