import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ResultPage from './components/RestulPage';
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result/:name" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
