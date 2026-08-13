import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Existing Components & Pages
import Header from './components/Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/protected/ProtectedRoute';

// New Pages Added
import Teachers from './pages/Teachers';
import Contact from './pages/Contact';
import Students from './pages/Students';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        {/* Top Header & Hamburger Navigation */}
        <Header />

        {/* Main Content Pages */}
        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            
            {/* Admin / Teacher Protected Dashboard */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
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
