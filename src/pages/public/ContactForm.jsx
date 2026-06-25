import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Get in Touch</h1>
          <p className="text-slate-600 font-medium">
            Have questions about our analytics methodology or need help accessing the portal? Reach out to our support team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info & Map */}
          <div>
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded-sm text-primary-800 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Email Administration</h4>
                  <p className="text-slate-600 font-medium mt-1">support@eduguide.edu</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded-sm text-primary-800 flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Toll-Free Helpline</h4>
                  <p className="text-slate-600 font-medium mt-1">1-800-EDU-GUIDE</p>
                  <p className="text-sm text-slate-500 mt-1">Mon-Fri from 8am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-100 flex items-center justify-center rounded-sm text-primary-800 flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Headquarters</h4>
                  <p className="text-slate-600 font-medium mt-1 leading-relaxed">
                    123 Academic Way, Suite 400<br />
                    University District<br />
                    State 12345
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-slate-200 rounded-sm border border-slate-300 relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')] opacity-20"></div>
               <p className="text-slate-500 font-bold uppercase tracking-widest relative z-10 flex items-center gap-2">
                 <MapPin className="w-5 h-5" /> Interactive Map Area
               </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-background-light p-8 md:p-10 border border-slate-200 rounded-sm shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">First Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-800 transition-shadow" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-800 transition-shadow" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Email Address</label>
                <input type="email" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-800 transition-shadow" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Inquiry Type</label>
                <select className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-800 transition-shadow text-slate-700">
                  <option>General Support</option>
                  <option>Admissions Counseling</option>
                  <option>Technical Issue</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-widest">Message</label>
                <textarea rows="4" className="w-full px-4 py-3 bg-white border border-slate-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary-800 transition-shadow" placeholder="How can we assist you?"></textarea>
              </div>

              <button type="submit" className="w-full bg-primary-900 hover:bg-primary-800 text-white font-bold py-4 rounded-sm transition-colors uppercase tracking-widest text-sm">
                Submit Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
