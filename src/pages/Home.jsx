import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px 20px', minHeight: '80vh' }}>
      <h1 style={{ color: '#0f392b', fontSize: '2rem', fontWeight: 'bold' }}>স্বাগতম চিলমারী প্রি ক্যাডেট মাদ্রাসায়</h1>
      <p style={{ color: '#64748b', marginTop: '10px', fontSize: '1.1rem' }}>দ্বীনি ও আধুনিক শিক্ষার এক অপূর্ব সমন্বয়</p>
      
      <div style={{ marginTop: '30px', display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/admission" style={{ backgroundColor: '#10b981', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
          অনলাইন ভর্তি আবেদন 📝
        </Link>
        <Link to="/students" style={{ backgroundColor: '#0f392b', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>
          ছাত্র-ছাত্রী তালিকা 🎓
        </Link>
      </div>
    </div>
  );
}
