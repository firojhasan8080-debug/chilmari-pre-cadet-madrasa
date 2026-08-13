import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Header Navigation
import Header from './components/protected/Header';

// All Pages
import Home from './pages/Home';
import Teachers from './pages/Teachers';
import Students from './pages/Students';
import Gallery from './pages/Gallery';
import Admission from './pages/Admission';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        {/* Top Header */}
        <Header />

        {/* Main Content Pages */}
        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: "'Anek Bangla', 'Segoe UI', sans-serif",
    backgroundColor: '#f8fafc'
  },
  mainContent: {
    flex: 1
  }
};
