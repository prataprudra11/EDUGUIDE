import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  return (
    <div className="w-full bg-background-deep min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h1 className="text-5xl font-display font-black text-white mb-6">Get in Touch</h1>
          <p className="text-on-surface-variant font-sans text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <div>
            <div className="space-y-10 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 surface-glass border border-white/10 flex items-center justify-center rounded-lg text-primary-dim flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-xl mb-2">Email Administration</h4>
                  <p className="text-on-surface-variant font-mono">placeholder@email.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 surface-glass border border-white/10 flex items-center justify-center rounded-lg text-primary-dim flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-xl mb-2">Toll-Free Helpline</h4>
                  <p className="text-on-surface-variant font-mono mb-2">1-800-000-0000</p>
                  <p className="text-xs text-outline font-sans uppercase tracking-widest">Mon-Fri from 8am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 surface-glass border border-white/10 flex items-center justify-center rounded-lg text-primary-dim flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white text-xl mb-2">Headquarters</h4>
                  <p className="text-on-surface-variant font-sans leading-relaxed">
                    Address Line 1<br />
                    Address Line 2<br />
                    City, State, ZIP
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="w-full h-64 surface-glass rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-10"></div>
               <p className="text-primary-dim font-mono text-sm uppercase tracking-widest relative z-10 flex items-center gap-2">
                 <MapPin className="w-4 h-4" /> Interactive Map Area
               </p>
            </div>
          </div>

          {/* Form */}
          <div className="surface-glass p-8 md:p-12 border border-white/10 rounded-xl">
            <h3 className="text-2xl font-display font-bold text-white mb-8">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-outline mb-2 uppercase tracking-widest">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-surface-container-low border border-white/10 rounded-md text-white focus:outline-none focus:border-primary-dim transition-colors" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-outline mb-2 uppercase tracking-widest">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-surface-container-low border border-white/10 rounded-md text-white focus:outline-none focus:border-primary-dim transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-mono text-outline mb-2 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-surface-container-low border border-white/10 rounded-md text-white focus:outline-none focus:border-primary-dim transition-colors" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-xs font-mono text-outline mb-2 uppercase tracking-widest">Inquiry Type</label>
                <select className="w-full px-4 py-3 bg-surface-container-low border border-white/10 rounded-md text-white focus:outline-none focus:border-primary-dim transition-colors appearance-none">
                  <option>General Support</option>
                  <option>Admissions Counseling</option>
                  <option>Technical Issue</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-outline mb-2 uppercase tracking-widest">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 bg-surface-container-low border border-white/10 rounded-md text-white focus:outline-none focus:border-primary-dim transition-colors" placeholder="How can we assist you?"></textarea>
              </div>

              <button type="submit" className="w-full btn-primary uppercase tracking-widest text-sm mt-4">
                Submit Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
