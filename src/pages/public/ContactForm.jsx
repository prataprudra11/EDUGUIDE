import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <div className="w-full bg-white dark:bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get in Touch</h2>
          <p className="text-slate-500 dark:text-slate-400 font-sans">
            Have questions about stream selection, career planning, or our platform? Our counseling team is here to help you navigate your academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 card flex items-center justify-center rounded-lg text-horizon flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base mb-1">Email</h4>
                  {/* ASSUMPTION: Placeholder email — replace with real contact when available */}
                  <p className="text-slate-500 dark:text-slate-400 font-mono text-sm">support@eduguide.ai</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 card flex items-center justify-center rounded-lg text-horizon flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base mb-1">Helpline</h4>
                  {/* ASSUMPTION: Placeholder phone number */}
                  <p className="text-slate-500 dark:text-slate-400 font-mono text-sm mb-1">1-800-EDU-GUIDE</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 font-sans">Mon–Sat, 9:00 AM – 7:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 card flex items-center justify-center rounded-lg text-horizon flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base mb-1">Office</h4>
                  {/* ASSUMPTION: Placeholder address */}
                  <p className="text-slate-500 dark:text-slate-400 font-sans text-sm leading-relaxed">
                    4th Floor, Academic Tower,<br />
                    Sector 62, Noida,<br />
                    Uttar Pradesh 201301
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="w-full h-52 card rounded-xl relative overflow-hidden flex items-center justify-center">
               <div className="absolute inset-0 bg-slate-100 dark:bg-slate-800" />
               <p className="text-horizon font-mono text-xs flex items-center gap-2 relative z-10">
                 <MapPin className="w-3.5 h-3.5" /> Interactive Map
               </p>
               {/* TODO: Wire up — integrate Google Maps or Mapbox */}
            </div>
          </div>

          {/* Form */}
          <div className="card p-6 lg:p-8">
            <h3 className="text-lg font-display font-bold mb-6">Send a Message</h3>
            {/* TODO: Wire up — requires form submission API endpoint */}
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="section-label block mb-2">First Name</label>
                  <input type="text" className="input-field" placeholder="Your first name" />
                </div>
                <div>
                  <label className="section-label block mb-2">Last Name</label>
                  <input type="text" className="input-field" placeholder="Your last name" />
                </div>
              </div>
              
              <div>
                <label className="section-label block mb-2">Email Address</label>
                <input type="email" className="input-field" placeholder="you@example.com" />
              </div>

              <div>
                <label className="section-label block mb-2">Inquiry Type</label>
                <select className="input-field">
                  <option>General Inquiry</option>
                  <option>Career Counseling</option>
                  <option>Stream Selection Help</option>
                  <option>Technical Support</option>
                </select>
              </div>

              <div>
                <label className="section-label block mb-2">Message</label>
                <textarea rows="4" className="input-field resize-none" placeholder="How can we help you?" />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
