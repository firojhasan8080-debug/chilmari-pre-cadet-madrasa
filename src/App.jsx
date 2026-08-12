import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({ studentName: '', phone: '', class: '' });
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: "'Hind Siliguri', 'Segoe UI', sans-serif", backgroundColor: '#f1f5f9', color: '#1e293b', minHeight: '100vh', margin: 0, padding: 0 }}>
      {/* গুগল ফন্ট ইম্পোর্ট করার লিংক (ইনডেক্স সাইটে না থাকলে) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
        .nav-link { color: #334155; text-decoration: none; font-weight: 500; transition: color 0.2s; }
        .nav-link:hover { color: #15803d; }
        .btn-primary { background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3); }
        .card { background: white; border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), 0 2px 4px -2px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
      `}</style>

      {/* নেভিগেশন বার */}
      <nav style={{ backgroundColor: '#ffffff', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#16a34a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '20px' }}>
              চ
            </div>
            <div>
              <h1 style={{ fontSize: '18px', fontWeight: '700', color: '#14532d', margin: 0 }}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</h1>
              <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>দ্বীন ও আধুনিক শিক্ষার অপূর্ব সমন্বয়</p>
            </div>
          </div>

          {/* ডেক্সটপ মেনু */}
          <div style={{ display: 'none', gap: '24px', alignItems: 'center' }} className="desktop-menu">
            <a href="#home" className="nav-link">হোম</a>
            <a href="#about" className="nav-link">আমাদের সম্পর্কে</a>
            <a href="#notice" className="nav-link">নোটিশ বোর্ড</a>
            <a href="#admission" className="btn-primary" style={{ textDecoration: 'none' }}>অনলাইন ভর্তি</a>
          </div>

          {/* মোবাইল মেনু বাটন */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#334155' }}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* মোবাইল ড্রপডাউন মেনু */}
        {mobileMenuOpen && (
          <div style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>হোম</a>
            <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>আমাদের সম্পর্কে</a>
            <a href="#notice" className="nav-link" onClick={() => setMobileMenuOpen(false)}>নোটিশ বোর্ড</a>
            <a href="#admission" className="btn-primary" style={{ textAlign: 'center', textDecoration: 'none' }} onClick={() => setMobileMenuOpen(false)}>অনলাইন ভর্তি</a>
          </div>
        )}
      </nav>

      {/* হিরো সেকশন */}
      <header id="home" style={{ background: 'linear-gradient(135deg, #14532d 0%, #166534 50%, #15803d 100%)', color: 'white', padding: '60px 20px', textAlignment: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ background: 'rgba(255,255,255,0.15)', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: '500' }}>
            শিক্ষা বর্ষ ২০২৬-২০২৭ এর ভর্তি চলছে
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', marginTop: '16px', marginBottom: '16px', lineHeight: '1.3' }}>
            সুশিক্ষা ও ইসলামিক নৈতিকতায় গড়ে উঠুক আপনার সন্তানের ভবিষ্যৎ
          </h2>
          <p style={{ fontSize: '16px', opacity: 0.9, lineHeight: '1.6', marginBottom: '28px' }}>
            চিলমারী প্রি ক্যাডেট মাদ্রাসায় আমরা সাধারণ শিক্ষার পাশাপাশি হিফজুল কুরআন ও দ্বীনি শিক্ষার এক আধুনিক রূপায়ণ নিশ্চিত করি।
          </p>
          <a href="#admission" className="btn-primary" style={{ backgroundColor: '#ffffff', color: '#15803d', display: 'inline-block', textDecoration: 'none', fontSize: '16px' }}>
            ভর্তির জন্য আবেদন করুন
          </a>
        </div>
      </header>

      {/* মূল কনটেন্ট কন্টেইনার */}
      <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px' }}>
        
        {/* প্রধান শিক্ষকের বাণী সেকশন */}
        <section id="about" style={{ marginBottom: '40px' }}>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'center' }}>
            <div style={{ flexShrink: 0, textAlignment: 'center' }}>
              <img 
                src="https://via.placeholder.com/150" 
                alt="প্রধান শিক্ষক" 
                style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #22c55e', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <h4 style={{ margin: '12px 0 2px 0', fontSize: '18px', color: '#0f172a' }}>মাওলানা মোঃ আব্দুস সবুর</h4>
              <p style={{ margin: 0, fontSize: '14px', color: '#16a34a', fontWeight: '600' }}>প্রধান শিক্ষক</p>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '22px', color: '#166534', marginTop: 0, marginBottom: '12px' }}>প্রধান শিক্ষকের বাণী</h3>
              <p style={{ lineHeight: '1.7', color: '#475569', margin: 0, fontSize: '15px' }}>
                "বিসমিল্লাহির রহমানির রহিম। চিলমারী প্রি ক্যাডেট মাদ্রাসায় আপনাকে স্বাগতম। আমাদের মূল লক্ষ্য হলো শিশুদের ছোটবেলা থেকেই দ্বীনি শিক্ষার সুবাস ছড়ানোর পাশাপাশি আধুনিক জ্ঞান-বিজ্ঞানে পারদর্শী করে তোলা। যোগ্য শিক্ষক মণ্ডলী ও সুন্দর পরিবেশের মাধ্যমে আপনার সন্তানের সুপ্ত প্রতিভার বিকাশ ঘটাতে আমরা অঙ্গীকারবদ্ধ।"
              </p>
            </div>
          </div>
        </section>

        {/* ফিচার ও নোটিশ গ্রিড */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          
          {/* নোটিশ বোর্ড */}
          <div id="notice" className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '2px solid #f1f5f9', paddingBottom: '12px' }}>
              <span style={{ fontSize: '20px' }}>📢</span>
              <h3 style={{ margin: 0, fontSize: '18px', color: '#166534' }}>সর্বশেষ নোটিশ</h3>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ padding: '12px 0', borderBottom: '1px dashed #e2e8f0' }}>
                <span style={{ fontSize: '12px', background: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '4px', fontWeight: '600' }}>১২ আগস্ট ২০২৬</span>
                <p style={{ margin: '4px 0 0 0', fontSize: '14px', fontWeight: '500' }}>নতুন সেশনের ভর্তি আবেদন শুরু হয়েছে।</p>
              </li>
              <li style={{ padding: '12px 0', borderBottom: '1px dashed #e2e8f0' }}>
                <span style={{ fontSize: '12px', background: '#fef3c7', color: '#b45309', padding: '2px 8px', borderRadius: '4px', fontWeight: '600' }}>১০ আগস্ট ২০২৬</span>
                <p style={{ margin: '4px 0 0 0', fontSize: '14px', fontWeight: '500' }}>আগামী রবিবার সাময়িক পরীক্ষা সংক্রান্ত নির্দেশনা।</p>
              </li>
            </ul>
          </div>

          {/* বৈশিষ্ট্যসমূহ */}
          <div className="card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', borderBottom: '2px solid #f1f5f9', paddingBottom: '12px' }}>
              <span style={{ fontSize: '20px' }}>✨</span>
              <h3 style={{ margin: 0, fontSize: '18px', color: '#166534' }}>আমাদের বৈশিষ্ট্যসমূহ</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#16a34a' }}>✔</span>
                <span style={{ fontSize: '14px', color: '#334155' }}>অভিজ্ঞ ও প্রশিক্ষিত শিক্ষক মণ্ডলী</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#16a34a' }}>✔</span>
                <span style={{ fontSize: '14px', color: '#334155' }}>মনোরম ও সিসিটিভি বেষ্টিত নিরাপদ ক্যাম্পাস</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#16a34a' }}>✔</span>
                <span style={{ fontSize: '14px', color: '#334155' }}>হিফজুল কুরআনের বিশেষ যত্ন ও তদারকি</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: '#16a34a' }}>✔</span>
                <span style={{ fontSize: '14px', color: '#334155' }}>কম্পিউটার শিক্ষা ও আধুনিক ল্যাব</span>
              </div>
            </div>
          </div>

        </div>

        {/* অনলাইন ভর্তি ফর্ম */}
        <section id="admission" className="card" style={{ maxWidth: '600px', margin: '0 auto', background: '#ffffff' }}>
          <h3 style={{ fontSize: '20px', color: '#166534', textAlign: 'center', marginTop: 0, marginBottom: '8px' }}>অনলাইন ভর্তি আবেদন</h3>
          <p style={{ textAlign: 'center', color: '#64748b', fontSize: '14px', marginBottom: '24px' }}>ফর্মটি পূরণ করে জমা দিন, আমরা খুব শীঘ্রই যোগাযোগ করবো</p>
          
          {submitted ? (
            <div style={{ backgroundColor: '#dcfce7', border: '1px solid #86efac', color: '#14532d', padding: '16px', borderRadius: '8px', textAlign: 'center' }}>
              <h4 style={{ margin: '0 0 4px 0' }}>আবেদন সফল হয়েছে!</h4>
              <p style={{ margin: 0, fontSize: '14px' }}>আপনার ভর্তি আবেদন আমরা পেয়েছি। ধন্যবাদ!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: '#334155' }}>শিক্ষার্থীর নাম</label>
                <input 
                  type="text" 
                  required 
                  placeholder="সম্পূর্ণ নাম লিখুন" 
                  value={formData.studentName}
                  onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                  style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '14px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: '#334155' }}>মোবাইল নম্বর</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="০১৭XXXXXXXX" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '14px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '6px', color: '#334155' }}>শ্রেণী নির্বাচন করুন</label>
                <select 
                  required 
                  value={formData.class}
                  onChange={(e) => setFormData({...formData, class: e.target.value})}
                  style={{ width: '100%', padding: '12px', border: '1px solid #cbd5e1', borderRadius: '8px', fontSize: '14px', outline: 'none', backgroundColor: 'white' }}
                >
                  <option value="">শ্রেণী বেছে নিন...</option>
                  <option value="play">প্লে শ্রেণী</option>
                  <option value="nursery">নার্সারি</option>
                  <option value="one">প্রথম শ্রেণী</option>
                  <option value="two">দ্বিতীয় শ্রেণী</option>
                  <option value="hifz">হিফজ বিভাগ</option>
                </select>
              </div>

              <button type="submit" className="btn-primary" style={{ marginTop: '8px', width: '100%', fontSize: '16px' }}>
                আবেদন জমা দিন
              </button>
            </form>
          )}
        </section>

      </main>

      {/* ফুটার */}
      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '40px 20px', marginTop: '60px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h4 style={{ color: 'white', margin: '0 0 8px 0', fontSize: '18px' }}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</h4>
          <p style={{ fontSize: '14px', margin: '0 0 16px 0' }}>স্থান: চিলমারী, কুড়িগ্রাম</p>
          <p style={{ fontSize: '12px', borderTop: '1px solid #334155', paddingTop: '16px', margin: 0 }}>
            © {new Date().getFullYear()} চিলমারী প্রি ক্যাডেট মাদ্রাসা। সর্বস্বত্ব সংরক্ষিত।
          </p>
        </div>
      </footer>
    </div>
  );
}
