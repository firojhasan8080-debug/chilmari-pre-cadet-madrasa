import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Teachers from './components/Teachers';
import Students from './components/Students';
import Gallery from './components/Gallery';
import Admission from './components/Admission';
import Contact from './components/Contact';
import Login from './components/Login';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* মূল হোমপেজ - আপনার দেওয়া অরিজিনাল ডিজাইন অপরিবর্তিত রাখা হয়েছে */}
          <Route path="/" element={<Home />} />
          
          {/* অন্যান্য প্রয়োজনীয় পেজসমূহ */}
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/students" element={<Students />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* লগইন এবং ড্যাশবোর্ড */}
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
