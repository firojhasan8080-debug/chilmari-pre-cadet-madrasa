import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Header Navigation Component
import Header from './components/Header';

// Pages
import Home from './pages/Home';
import Teachers from './pages/Teachers';
import Students from './pages/Students';
import Gallery from './pages/Gallery';
import Admission from './pages/Admission';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/protected/ProtectedRoute';

export default function App() {
  return (
    <Router>
      <div style={styles.appContainer}>
        {/* Top Header Navigation */}
        <Header />

        {/* Main Pages */}
        <main style={styles.mainContent}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/students" element={<Students />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            
            {/* Protected Dashboard */}
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
