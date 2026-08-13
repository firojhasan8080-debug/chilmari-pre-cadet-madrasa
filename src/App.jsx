import React, { useState, useEffect } from 'react';
import './App.css';
import DesignerCredit from './components/protected/DesignerCredit';
import AdSlot from './components/protected/AdSlot';
import Login from './pages/Login';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // যদি ইউজার /login পেজে যায়
  if (currentPath === '/login') {
    return <Login />;
  }

  // মূল ওয়েবসাইট (Home Page)
  return (
    <div>
      {/* Top Bar Info */}
      <div className="top-bar">
        <span>📍 চিলমারী, কুড়িগ্রাম | 📞 যোগাযোগ: ০১৭০০-০০০০০</span>
        <span>ইআইআইএন (EIIN): XXXXXX</span>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <a href="/" className="brand-logo">
          🕌 চিলমারী প্রি ক্যাডেট মাদ্রাসা
        </a>
        <ul className="nav-links">
          <li><a href="#about">পরিচিতি</a></li>
          <li><a href="#features">বৈশিষ্ট্যসমূহ</a></li>
          <li><a href="#notice">নোটিশ বোর্ড</a></li>
          <li><a href="#contact">যোগাযোগ</a></li>
        </ul>
        <a href="/login" className="btn-portal">
          পোর্টাল লগইন
        </a>
      </nav>

      {/* Hero Header */}
      <header className="hero">
        <h1>দীনি ও আধুনিক শিক্ষার এক অপূর্ব সমন্বয়</h1>
        <p>
          আপনার সন্তানকে নৈতিক শিক্ষা, হিফজুল কুরআন ও ক্যাডেট স্ট্যান্ডার্ড সাধারণ শিক্ষায় সুশিক্ষিত করে গড়ে তুলতে আমরা অঙ্গীকারবদ্ধ।
        </p>
        <div className="hero-btns">
          <a href="#admission" className="btn-primary">অনলাইন ভর্তি তথ্য</a>
          <a href="#notice" className="btn-outline">সাম্প্রতিক নোটিশ</a>
        </div>
      </header>

      {/* Ad Banner (Top Slot) */}
      <div style={{ padding: '0 5%' }}>
        <AdSlot slotName="home_top_banner" />
      </div>

      {/* Features Section */}
      <section id="features" className="section">
        <h2 className="section-title">আমাদের বিশেষত্বসমূহ</h2>
        <div className="grid-3">
          <div className="card">
            <h3>📖 ক্যাডেট কারিকুলাম</h3>
            <p>সাধারণ শিক্ষার পাশাপাশি ক্যাডেট কোচিংয়ের বিশেষ গাইডলাইন ও আন্তর্জাতিক মানের কারিকুলাম।</p>
          </div>
          <div className="card">
            <h3>🕌 সহীহ কুরআন ও হিফজ</h3>
            <p>অভিজ্ঞ আন্তর্জাতিক মানের ক্বারী ও হাফেজ দ্বারা তাজবীদভিত্তিক সহীহ কুরআন শিক্ষা প্রদান।</p>
          </div>
          <div className="card">
            <h3>💻 আধুনিক আইসিটি শিক্ষা</h3>
            <p>ছোটবেলা থেকেই শিশুদের প্রযুক্তিমনস্ক করতে কম্পিউটার ও মৌলিক কোডিং ধারণার পাঠদান।</p>
          </div>
        </div>
      </section>

      {/* Notice Board Section */}
      <section id="notice" className="section" style={{ background: '#f1f5f9' }}>
        <h2 className="section-title">জরুরী নোটিশ বোর্ড</h2>
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ color: '#ef4444', fontWeight: 'bold' }}>📌 ভর্তি চলছে - ২০২৬ শিক্ষাবর্ষ</p>
          <p style={{ marginTop: '8px' }}>
            প্লে থেকে অষ্টম শ্রেণী পর্যন্ত সীমিত আসনে নতুন ছাত্র-ছাত্রী ভর্তি চলছে। বিস্তারিত জানতে অফিসে যোগাযোগ করুন।
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© ২০২৬ চিলমারী প্রি ক্যাডেট মাদ্রাসা। সর্বস্বত্ব সংরক্ষিত।</p>
      </footer>

      {/* Protected Developer Credit */}
      <DesignerCredit />
    </div>
  );
}
