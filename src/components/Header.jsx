import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'হোম', path: '/' },
    { name: 'অনলাইন ভর্তি', path: '/admission' },
    { name: 'শিক্ষার্থী', path: '/students' },
    { name: 'শিক্ষকবৃন্দ', path: '/teachers' },
    { name: 'গ্যালারি', path: '/gallery' },
    { name: 'যোগাযোগ', path: '/contact' },
  ];

  return (
    <header style={{ backgroundColor: 'var(--primary)', color: '#fff', boxShadow: 'var(--shadow)', sticky: 'top', zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0' }}>
        
        {/* Branding */}
        <Link to="/" style={{ textDecoration: 'none', color: '#fff', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px' }}>
            চ
          </div>
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: '700', lineHeight: '1.2' }}>চিলমারী প্রি-ক্যাডেট মাদ্রাসা</h1>
            <p style={{ fontSize: '11px', color: 'var(--secondary)', opacity: 0.9 }}>দ্বীনি ও আধুনিক শিক্ষার সমন্বিত প্রতিষ্ঠান</p>
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ background: 'none', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer', display: 'none' }}
          className="mobile-toggle"
        >
          ☰
        </button>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  color: isActive ? 'var(--primary)' : '#fff',
                  backgroundColor: isActive ? 'var(--secondary)' : 'transparent',
                  padding: '8px 14px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: isActive ? '700' : '500',
                  transition: 'all 0.2s'
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
