import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Layouts
import AppLayout from './components/layout/AppLayout';
import PublicLayout from './components/layout/PublicLayout';

// Dashboard Pages
import Dashboard from './pages/Dashboard';
import StreamSelection from './pages/StreamSelection';
import CareerRoadmap from './pages/CareerRoadmap';
import EntranceExams from './pages/EntranceExams';
import CollegesCutoffs from './pages/CollegesCutoffs';

// Public Pages
import LandingPage from './pages/public/LandingPage';
import AboutUs from './pages/public/AboutUs';
import BookingPortal from './pages/public/BookingPortal';
import ContactForm from './pages/public/ContactForm';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Website Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="booking" element={<BookingPortal />} />
            <Route path="contact" element={<ContactForm />} />
          </Route>

          {/* Student Dashboard Routes */}
          <Route path="/dashboard" element={<AppLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="stream-selection" element={<StreamSelection />} />
            <Route path="career-roadmap" element={<CareerRoadmap />} />
            <Route path="entrance-exams" element={<EntranceExams />} />
            <Route path="colleges-cutoffs" element={<CollegesCutoffs />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
