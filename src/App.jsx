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
import ContactForm from './pages/public/ContactForm';
import Login from './pages/public/Login';
import Signup from './pages/public/Signup';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {/* Public Website Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<LandingPage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactForm />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
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
