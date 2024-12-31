import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import { HomePage } from './pages/HomePage';
import { GreetingPage } from './pages/GreetingPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/:id" element={<GreetingPage />} />
        <Route path="/" element={<GreetingPage />} />
    
      </Routes>
    </Router>
  </StrictMode>
);