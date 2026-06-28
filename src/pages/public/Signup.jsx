import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, User, Mail, Lock, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    class: 'Class 11'
  });
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Simulate signup and redirect to dashboard
    if (formData.name && formData.email && formData.password) {
      navigate('/dashboard');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900/50 -z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-horizon/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orchid/5 rounded-full blur-[100px] -z-10" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-12 h-12 spine-gradient rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm">
            <span className="text-white font-display font-black text-2xl">E</span>
          </div>
          <h1 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">Create an Account</h1>
          <p className="text-slate-500 dark:text-slate-400 font-sans text-sm">
            Join EduGuide to discover your ideal career path.
          </p>
        </div>

        <div className="card p-6 md:p-8">
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="section-label block mb-2 text-xs font-semibold">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field pl-10" 
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            <div>
              <label className="section-label block mb-2 text-xs font-semibold">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field pl-10" 
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="section-label block mb-2 text-xs font-semibold">Current Class/Grade</label>
              <div className="relative">
                <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select 
                  name="class"
                  value={formData.class}
                  onChange={handleChange}
                  className="input-field pl-10"
                >
                  <option value="Class 10">Class 10</option>
                  <option value="Class 11">Class 11</option>
                  <option value="Class 12">Class 12</option>
                  <option value="College First Year">College (First Year)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="section-label block mb-2 text-xs font-semibold">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input 
                  type="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field pl-10" 
                  placeholder="Create a password"
                  required
                  minLength={8}
                />
              </div>
              <p className="text-[10px] text-slate-400 mt-1.5">Must be at least 8 characters.</p>
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 mt-4">
              Create Account <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm font-sans text-slate-500 dark:text-slate-400">
              Already have an account?{' '}
              <Link to="/login" className="text-horizon hover:text-horizon-700 dark:text-horizon-400 font-semibold transition-colors">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
