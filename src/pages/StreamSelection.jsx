import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { studentProfile } from '../data/mockData';
import { CheckCircle } from 'lucide-react';

export default function StreamSelection() {
  const [step, setStep] = useState(0); // 0 = start, 1 = quiz, 2 = result
  
  // Simulated quiz state
  const [currentQ, setCurrentQ] = useState(0);

  const questions = [
    "Which of these activities excites you the most in your free time?",
    "How do you prefer solving a complex problem?",
    "When reading news, which sections do you jump to first?",
    "What kind of environment do you thrive in?"
  ];

  const options = [
    "Building/coding apps or solving logic puzzles.",
    "Managing budget, tracking investment trends.",
    "Sketching, writing stories, or studying history.",
    "Analyzing statistics, researching stock markets."
  ];

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(prev => prev + 1);
    } else {
      setStep(2); // show result
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-8 border-b border-slate-200 dark:border-slate-800 pb-6">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white">Stream Selection Guidance</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">
          Take our psychometric evaluation quiz to match with the most suitable academic stream.
        </p>
      </header>

      {step === 0 && (
        <div className="glass-card p-8 text-center max-w-2xl mx-auto mt-12">
          <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-primary-600 dark:text-primary-400" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">Discover Your Path</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Our AI-driven assessment evaluates your aptitude, creative inclinations, and analytical skills to recommend the optimal educational stream for your future career.
          </p>
          <button onClick={() => setStep(1)} className="btn-primary px-8 py-3 text-lg">
            Start Assessment
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="glass-card p-8 max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-between text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
              <span>Question {currentQ + 1} of {questions.length}</span>
              <span>{Math.round(((currentQ) / questions.length) * 100)}% Completed</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQ) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6">
            {questions[currentQ]}
          </h2>

          <div className="space-y-4">
            {options.map((opt, i) => (
              <label key={i} className="flex items-center p-4 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer transition-colors">
                <input type="radio" name="q" className="w-4 h-4 text-primary-600" />
                <span className="ml-3 text-slate-700 dark:text-slate-300">{opt}</span>
              </label>
            ))}
          </div>

          <div className="mt-8 flex justify-between">
            <button 
              onClick={() => setCurrentQ(prev => Math.max(0, prev - 1))}
              disabled={currentQ === 0}
              className="px-6 py-2 rounded-lg font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50"
            >
              Previous
            </button>
            <button onClick={handleNext} className="btn-primary px-8">
              {currentQ === questions.length - 1 ? 'Finish' : 'Next Question'}
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glass-card p-8">
            <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Stream Affinity Radar</h3>
            <div className="h-[300px] w-full flex justify-center items-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={studentProfile.affinityScores}>
                  <PolarGrid stroke="#64748b" opacity={0.3} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Student" dataKey="score" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.4} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          <div className="glass-card p-8 flex flex-col justify-center">
            <h3 className="text-lg text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider mb-2">AI Recommendation</h3>
            <h2 className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-4">Science Core</h2>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              Based on your high aptitude and analytical scores, a Science stream (PCM) is highly recommended. This pathway opens doors to Engineering, Data Science, and Research fields.
            </p>
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-700">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Match Confidence</p>
                <div className="flex items-center gap-3 mt-1">
                  <div className="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full w-[92%]"></div>
                  </div>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">92%</span>
                </div>
              </div>
            </div>
            <button className="btn-primary w-full mt-6">View Career Roadmaps</button>
          </div>
        </div>
      )}
    </div>
  );
}
