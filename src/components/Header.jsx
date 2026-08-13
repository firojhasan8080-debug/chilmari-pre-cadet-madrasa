import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.brand}>
          🏫 চিলমারী প্রি ক্যাডেট মাদ্রাসা
        </Link>

        <button style={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>

        <nav style={{ ...styles.nav, display: isOpen ? 'flex' : 'none' }}>
          <Link to="/" style={styles.link} onClick={() => setIsOpen(false)}>হোম</Link>
          <Link to="/teachers" style={styles.link} onClick={() => setIsOpen(false)}>শিক্ষকমণ্ডলী</Link>
          <Link to="/students" style={styles.link} onClick={() => setIsOpen(false)}>ছাত্র-ছাত্রী</Link>
          <Link to="/gallery" style={styles.link} onClick={() => setIsOpen(false)}>গ্যালারি</Link>
          <Link to="/admission" style={styles.link} onClick={() => setIsOpen(false)}>ভর্তি আবেদন</Link>
          <Link to="/contact" style={styles.link} onClick={() => setIsOpen(false)}>যোগাযোগ</Link>
          <Link to="/login" style={styles.loginBtn} onClick={() => setIsOpen(false)}>লগইন</Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: { backgroundColor: '#0f392b', color: '#fff', padding: '12px 20px', position: 'sticky', top: 0, zIndex: 1000 },
  container: { maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' },
  brand: { color: '#fff', fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none' },
  hamburger: { backgroundColor: 'transparent', color: '#fff', border: 'none', fontSize: '1.5rem', cursor: 'pointer' },
  nav: { display: 'flex', flexDirection: 'column', width: '100%', marginTop: '15px', gap: '12px', borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '15px' },
  link: { color: '#e2e8f0', textDecoration: 'none', fontSize: '0.95rem', fontWeight: '500' },
  loginBtn: { backgroundColor: '#10b981', color: '#fff', padding: '6px 14px', borderRadius: '6px', textDecoration: 'none', textAlign: 'center', fontWeight: 'bold', width: 'fit-content' }
};
