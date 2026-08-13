// src/App.jsx
import React from 'react';
import './App.css';

export default function App() {
  return (
    <>
      {/* 1. HEADER / NAVIGATION */}
      <header>
        <a href="/" className="logo">
          চিলমারী ক্যাডেট মাদ্রাসা
        </a>
        <ul className="nav-links">
          <li><a href="#about">পরিচিতি</a></li>
          <li><a href="#admission">ভর্তি তথ্য</a></li>
          <li><a href="#curriculum">সিলেবাস</a></li>
          <li><a href="#contact">যোগাযোগ</a></li>
        </ul>
        <a href="https://forms.gle/testlink" target="_blank" className="apply-btn">
          অনলাইন ভর্তি
        </a>
      </header>

      {/* 2. HERO SECTION */}
      <section className="hero">
        <h1>দীনি ও আধুনিক শিক্ষার সমন্বয়</h1>
        <p>আমরা বিশ্বাস করি সঠিক শিক্ষার মাঝেই নিহিত আছে পরকালীন মুক্তি ও দুনিয়াবী সাফল্য। চিলমারী প্রাক-ক্যাডেট মাদ্রাসায় আপনার সন্তানকে স্বাগতম।</p>
        <a href="#admission" className="apply-btn">কোঠা নিশ্চিত করুন</a>
      </section>

      {/* 3. KEY FEATURES / ABOUT US */}
      <section id="about" className="features">
        <div className="feature-card">
          <div className="icon">📖</div>
          <h3>ক্যাডেট সিলেবাস</h3>
          <p>বেসিক ইসলামী শিক্ষার সাথে সরকারি ক্যাডেট কোচিংয়ের আধুনিক সিলেবাসের সমন্বয়।</p>
        </div>
        <div className="feature-card">
          <div className="icon">🕌</div>
          <h3>মানসম্মত হিফজুল কুরআন</h3>
          <p>অভিজ্ঞ হাফেজদের তত্ত্বাবধানে সহীহ তিলাওয়াত ও তাজবীদসহ হিফজুল কুরআন।</p>
        </div>
        <div className="feature-card">
          <div className="icon">👨‍🏫</div>
          <h3>অভিজ্ঞ শিক্ষক মণ্ডলী</h3>
          <p>দীনি ও জাগতিক উভয় শিক্ষায় পারদর্শী দক্ষ ও যত্নশীল শিক্ষক দ্বারা পরিচালিত।</p>
        </div>
      </section>

      {/* 4. FOOTER */}
      <footer id="contact">
        <div className="footer-content">
          <div>
            <h4>ঠিকানা</h4>
            <p>চিলমারী, কুড়িগ্রাম</p>
            <p>রংপুর বিভাগ, বাংলাদেশ</p>
          </div>
          <div>
            <h4>যোগাযোগ</h4>
            <p>ফোন: +৮৮০১৭১২-৩৪৫৬৭৮</p>
            <p>ইমেইল: info@chilmari.madrasa</p>
          </div>
          <div>
            <h4>কুইক লিংক</h4>
            <a href="#admission" style={{color:'#d1d5db', display:'block'}}>ভর্তি ফর্ম</a>
            <a href="#curriculum" style={{color:'#d1d5db', display:'block'}}>একাডেমিক ক্যালেন্ডার</a>
          </div>
        </div>
        <div className="copyright">
          &copy; ২০২৪ চিলমারী প্রাক-ক্যাডেট মাদ্রাসা। সর্বস্বত্ব সংরক্ষিত।
        </div>
      </footer>
    </>
  );
}
