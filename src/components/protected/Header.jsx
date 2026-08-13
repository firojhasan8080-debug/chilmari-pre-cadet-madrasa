import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'হোম', path: '/' },
    { name: 'শিক্ষকমণ্ডলী', path: '/teachers' },
    { name: 'ছাত্র-ছাত্রী', path: '/students' },
    { name: 'গ্যালারি', path: '/gallery' },
    { name: 'ভর্তি আবেদন', path: '/admission' },
    { name: 'যোগাযোগ', path: '/contact' },
  ];

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo / Title */}
        <Link to="/" style={styles.brand} onClick={closeMenu}>
          <span>🕌</span> চিলমারী প্রি ক্যাডেট মাদ্রাসা
        </Link>

        {/* Mobile Hamburger Button */}
        <button style={styles.hamburger} onClick={toggleMenu} aria-label="Toggle Navigation">
          {isOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Menu */}
        <nav style={{ ...styles.nav, display: isOpen ? 'flex' : undefined }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                style={{
                  ...styles.link,
                  ...(isActive ? styles.activeLink : {})
                }}
              >
                {link.name}
              </Link>
            );
          })}
          
          <Link to="/login" style={styles.loginBtn} onClick={closeMenu}>
            পোর্টাল লগইন
          </Link>
        </nav>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#064e3b',
    color: '#ffffff',
    boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '12px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  brand: {
    color: '#ffffff',
    fontSize: '1.1rem',
    fontWeight: '700',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  hamburger: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: 'none',
    fontSize: '1.6rem',
    cursor: 'pointer',
    padding: '4px 8px',
  },
  nav: {
    width: '100%',
    flexDirection: 'column',
    gap: '8px',
    paddingTop: '12px',
    marginTop: '8px',
    borderTop: '1px solid rgba(255, 255, 255, 0.15)',
  },
  link: {
    color: '#ecfdf5',
    textDecoration: 'none',
    fontSize: '0.95rem',
    fontWeight: '500',
    padding: '8px 12px',
    borderRadius: '6px',
    transition: 'background 0.2s',
  },
  activeLink: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    fontWeight: '700',
    color: '#ffffff',
  },
  loginBtn: {
    backgroundColor: '#10b981',
    color: '#ffffff',
    padding: '8px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: '4px',
  },
};
