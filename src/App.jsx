import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import AppLayout from './components/layout/AppLayout';
import Dashboard from './pages/Dashboard';
import StreamSelection from './pages/StreamSelection';
import CareerRoadmap from './pages/CareerRoadmap';
import EntranceExams from './pages/EntranceExams';
import CollegesCutoffs from './pages/CollegesCutoffs';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Navigate to="/dashboard" replace />} />
            <Route path="dashboard" element={<Dashboard />} />
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
