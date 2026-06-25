import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, CheckCircle, ChevronRight, ChevronLeft } from 'lucide-react';

export default function BookingPortal() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const services = [
    { id: 'eval', title: 'Comprehensive Evaluation', duration: '90 min', price: '$150' },
    { id: 'roadmap', title: 'Roadmap Strategy Session', duration: '60 min', price: '$100' },
    { id: 'review', title: 'Application Review', duration: '45 min', price: '$80' },
  ];

  const dates = [12, 13, 14, 15, 16]; // Mock dates for June
  const times = ['09:00 AM', '10:30 AM', '01:00 PM', '03:30 PM'];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  return (
    <div className="w-full bg-background-light min-h-[calc(100vh-80px)] py-12">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Step {step} of 3</span>
            <span className="text-xs font-bold text-primary-800 uppercase tracking-widest">
              {step === 1 ? 'Select Service' : step === 2 ? 'Date & Time' : 'Confirm'}
            </span>
          </div>
          <div className="w-full bg-slate-200 h-2 rounded-sm overflow-hidden">
            <div 
              className="bg-primary-800 h-full transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 p-8 md:p-12 shadow-sm rounded-md relative overflow-hidden min-h-[500px]">
          <AnimatePresence mode="wait" custom={1}>
            
            {/* Step 1: Services */}
            {step === 1 && (
              <motion.div
                key="step1"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Select a Consultation Service</h2>
                <div className="space-y-4">
                  {services.map((svc) => (
                    <div 
                      key={svc.id}
                      onClick={() => setSelectedService(svc.id)}
                      className={`p-6 border-2 rounded-md cursor-pointer transition-all flex justify-between items-center ${
                        selectedService === svc.id 
                          ? 'border-primary-800 bg-primary-50' 
                          : 'border-slate-200 hover:border-primary-300'
                      }`}
                    >
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg">{svc.title}</h3>
                        <p className="text-sm font-medium text-slate-500 mt-1 flex items-center gap-2">
                          <Clock className="w-4 h-4" /> {svc.duration}
                        </p>
                      </div>
                      <div className="text-xl font-black text-slate-900">{svc.price}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-end">
                  <button 
                    onClick={handleNext}
                    disabled={!selectedService}
                    className="bg-primary-900 text-white px-8 py-3 rounded-sm font-bold disabled:opacity-50 flex items-center gap-2 transition-colors hover:bg-primary-800"
                  >
                    Continue <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <motion.div
                key="step2"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Select Date & Time</h2>
                
                <div className="mb-8">
                  <h3 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> June 2026
                  </h3>
                  <div className="flex gap-3 overflow-x-auto pb-4 custom-scrollbar">
                    {dates.map((date) => (
                      <div 
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`min-w-[80px] p-4 text-center border-2 rounded-md cursor-pointer transition-colors ${
                          selectedDate === date 
                            ? 'border-primary-800 bg-primary-800 text-white' 
                            : 'border-slate-200 text-slate-700 hover:border-primary-300'
                        }`}
                      >
                        <p className="text-xs uppercase font-bold mb-1 opacity-80">Jun</p>
                        <p className="text-2xl font-black">{date}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {selectedDate && (
                  <div className="mb-8 animate-in fade-in">
                    <h3 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Available Slots
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {times.map((time) => (
                        <div 
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 text-center border-2 rounded-md cursor-pointer text-sm font-bold transition-colors ${
                            selectedTime === time 
                              ? 'border-mutedGreen-600 bg-mutedGreen-600 text-white' 
                              : 'border-slate-200 text-slate-700 hover:border-mutedGreen-300'
                          }`}
                        >
                          {time}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex justify-between">
                  <button 
                    onClick={handlePrev}
                    className="px-6 py-3 rounded-sm font-bold text-slate-600 border border-slate-300 hover:bg-slate-50 flex items-center gap-2"
                  >
                    <ChevronLeft className="w-5 h-5" /> Back
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={!selectedDate || !selectedTime}
                    className="bg-primary-900 text-white px-8 py-3 rounded-sm font-bold disabled:opacity-50 flex items-center gap-2 hover:bg-primary-800"
                  >
                    Review <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <motion.div
                key="step3"
                custom={1}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="w-full text-center py-8"
              >
                <div className="w-20 h-20 bg-mutedGreen-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-mutedGreen-600" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">Appointment Set!</h2>
                <p className="text-slate-600 font-medium mb-8 max-w-sm mx-auto">
                  Your session is confirmed for <strong className="text-slate-900">June {selectedDate}, 2026 at {selectedTime}</strong>. A calendar invite has been sent to your email.
                </p>
                
                <div className="bg-slate-50 border border-slate-200 p-6 rounded-md max-w-sm mx-auto text-left mb-8">
                  <h4 className="font-bold text-slate-900 border-b border-slate-200 pb-2 mb-4">Session Details</h4>
                  <p className="text-sm text-slate-600 font-medium mb-2">Service: {services.find(s => s.id === selectedService)?.title}</p>
                  <p className="text-sm text-slate-600 font-medium">Platform: Zoom Meeting</p>
                </div>

                <button 
                  onClick={() => window.location.href = '/dashboard'}
                  className="bg-primary-900 hover:bg-primary-800 text-white px-8 py-3 rounded-sm font-bold transition-colors"
                >
                  Go to Student Portal
                </button>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
