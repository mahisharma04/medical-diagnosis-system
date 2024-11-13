import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SymptomsFormPage from './components/SymptomsFormPage';
import DiagnosisResultsPage from './components/DiagnosisResultsPage';
import HistoryPage from './components/HistoryPage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/symptoms" element={<SymptomsFormPage />} />
        <Route path="/diagnosis-results" element={<DiagnosisResultsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
