import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Itinerary from './pages/Itinerary';
import Travel from './pages/Travel';
import FAQs from './pages/FAQs';
import RSVP from './pages/RSVP';
import Navbar from './components/Navbar';
import logo from './assets/logo.png';

const PasswordProtection = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'barcelona2026') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="password-screen animate-fade-in">
      <img src={logo} alt="DV 49.99th Barcelona" style={{ height: 'auto', width: '120px' }} />
      <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'normal', marginBottom: '1rem' }}>Barcelona, Spain &nbsp;&middot;&nbsp; 2026</p>
      <form onSubmit={handleSubmit} className="password-form">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="ENTER PASSWORD"
          className="password-input"
          autoFocus
        />
        {error && <p className="error-msg">{error}</p>}
        <button type="submit" className="btn btn-gold" style={{ marginTop: '1rem' }}>Enter</button>
      </form>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}


function App() {
  return (
    <PasswordProtection>
      <Router>
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="/travel" element={<Travel />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/rsvp" element={<RSVP />} />
          </Routes>
        </main>
      </Router>
    </PasswordProtection>
  );
}

export default App;
