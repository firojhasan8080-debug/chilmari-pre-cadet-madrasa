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
import Login from './components/Login'; // যদি লগইন কম্পোনেন্ট থাকে

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* মূল হোমপেজ - ডিজাইনে কোনো পরিবর্তন করা হয়নি */}
          <Route path="/" element={<Home />} />
          
          {/* নতুন ও নির্ধারিত পেজসমূহ */}
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
