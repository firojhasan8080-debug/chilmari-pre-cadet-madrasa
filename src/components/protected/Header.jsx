import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNav = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Left Side: Hamburger & Brand */}
        <div style={styles.leftGroup}>
          <button style={styles.hamburgerBtn} onClick={toggleMenu} aria-label="Menu">
            <span style={styles.bar}></span>
            <span style={styles.bar}></span>
            <span style={styles.bar}></span>
          </button>
          <Link to="/" style={styles.logo}>
            🕌 চিলমারী প্রি ক্যাডেট মাদ্রাসা
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav style={styles.desktopNav}>
          <Link to="/" style={styles.navLink}>🏠 হোম</Link>
          <Link to="/teachers" style={styles.navLink}>👨‍🏫 শিক্ষক-শিক্ষিকা</Link>
          <Link to="/students" style={styles.navLink}>🎓 ছাত্র-ছাত্রী</Link>
          <Link to="/gallery" style={styles.navLink}>🖼️ গ্যালারি</Link>
          <Link to="/admission" style={styles.navLink}>📝 ভর্তির আবেদন</Link>
          <Link to="/contact" style={styles.navLink}>📞 যোগাযোগ</Link>
        </nav>

        {/* Login Button */}
        <div>
          <Link to="/login" style={styles.loginBtn}>পোর্টাল লগইন</Link>
        </div>
      </div>

      {/* Mobile Drawer / Sidebar */}
      {isMenuOpen && (
        <div style={styles.drawerOverlay} onClick={toggleMenu}>
          <div style={styles.drawer} onClick={(e) => e.stopPropagation()}>
            <div style={styles.drawerHeader}>
              <h3>মেনু</h3>
              <button style={styles.closeBtn} onClick={toggleMenu}>✕</button>
            </div>
            <div style={styles.drawerMenu}>
              <button style={styles.drawerItem} onClick={() => handleNav('/')}>🏠 হোম</button>
              <button style={styles.drawerItem} onClick={() => handleNav('/teachers')}>👨‍🏫 শিক্ষক-শিক্ষিকা</button>
              <button style={styles.drawerItem} onClick={() => handleNav('/students')}>🎓 ছাত্র-ছাত্রী</button>
              <button style={styles.drawerItem} onClick={() => handleNav('/gallery')}>🖼️ মাদ্রাসার গ্যালারি</button>
              <button style={styles.drawerItem} onClick={() => handleNav('/admission')}>📝 ভর্তির আবেদন</button>
              <button style={styles.drawerItem} onClick={() => handleNav('/contact')}>📞 যোগাযোগ</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: { backgroundColor: '#0f392b', color: '#fff', sticky: 'top', position: 'sticky', top: 0, zIndex: 1000, boxShadow: '0 2px 10px rgba(0,0,0,0.15)' },
  container: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 20px', maxWidth: '1200px', margin: '0 auto' },
  leftGroup: { display: 'flex', alignItems: 'center', gap: '15px' },
  hamburgerBtn: { background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '4px', padding: '5px' },
  bar: { width: '22px', height: '3px', backgroundColor: '#fff', borderRadius: '2px' },
  logo: { color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem' },
  desktopNav: { display: 'flex', gap: '15px', alignItems: 'center', '@media (maxWidth: 768px)': { display: 'none' } },
  navLink: { color: '#e2e8f0', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '500' },
  loginBtn: { backgroundColor: '#10b981', color: '#fff', padding: '8px 16px', borderRadius: '6px', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.85rem' },
  drawerOverlay: { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 2000 },
  drawer: { width: '270px', height: '100%', backgroundColor: '#0f392b', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', boxShadow: '2px 0 10px rgba(0,0,0,0.3)' },
  drawerHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1b4d3e', paddingBottom: '10px' },
  closeBtn: { background: 'transparent', border: 'none', color: '#fff', fontSize: '1.2rem', cursor: 'pointer' },
  drawerMenu: { display: 'flex', flexDirection: 'column', gap: '10px' },
  drawerItem: { background: 'transparent', border: 'none', color: '#fff', textAlign: 'left', padding: '12px', fontSize: '1rem', cursor: 'pointer', borderRadius: '6px', backgroundColor: '#1b4d3e' }
};
