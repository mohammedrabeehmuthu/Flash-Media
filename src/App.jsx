import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Showcase from './pages/Showcase';

function App() {
  return (
    <Router>
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<Showcase />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
