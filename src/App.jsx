import React, { useState } from 'react';
import Footer from './components/Footer';
import AdmissionModal from './components/AdmissionModal';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const whatsappNumber = "8801918568313";

  return (
    <div style={{ fontFamily: "'Hind Siliguri', 'Segoe UI', sans-serif", backgroundColor: '#f8fafc', color: '#0f172a', minHeight: '100vh', margin: 0, padding: 0, position: 'relative' }}>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; scroll-behavior: smooth; }
        .nav-link { color: #334155; text-decoration: none; font-weight: 600; transition: color 0.2s; }
        .nav-link:hover { color: #15803d; }
        .btn-primary { background: linear-gradient(135deg, #16a34a 0%, #15803d 100%); color: white; border: none; padding: 12px 24px; border-radius: 10px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; display: inline-flex; align-items: center; justify-content: center; gap: 8px; text-decoration: none; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 16px rgba(22, 163, 74, 0.35); }
        .card { background: #ffffff; border-radius: 18px; padding: 24px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01); border: 1px solid #e2e8f0; }
        .badge { background: #dcfce7; color: #15803d; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; display: inline-block; }
        
        /* ভাসমান লাইভ চ্যাট বাটন */
        .live-chat-btn {
          position: fixed;
          bottom: 25px;
          right: 25px;
          background-color: #25D366;
          color: white;
          border-radius: 50px;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 10px;
          box-shadow: 0 10px 20px rgba(37, 211, 102, 0.4);
          text-decoration: none;
          font-weight: bold;
          font-size: 14px;
          z-index: 900;
          transition: all 0.3s ease;
        }
        .live-chat-btn:hover {
          transform: scale(1.05);
        }
      `}</style>

      {/* টপ কন্টাক্ট বার */}
      <div style={{ backgroundColor: '#14532d', color: '#f0fdf4', padding: '8px 20px', fontSize: '13px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
          <div>📍 চিলমারী, কুড়িগ্রাম, বাংলাদেশ</div>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span>📞 যোগাযোগ: <a href="tel:+8801918568313" style={{ color: '#ffffff', fontWeight: 'bold', textDecoration: 'none' }}>01918568313</a></span>
          </div>
        </div>
      </div>

      {/* নেভিগেশন বার */}
      <nav style={{ backgroundColor: '#ffffff', position: 'sticky', top: 0, zIndex: 50, boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'linear-gradient(135deg, #16a34a, #15803d)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '22px', boxShadow: '0 4px 10px rgba(22, 163, 74, 0.3)' }}>
              চ
            </div>
            <div>
              <h1 style={{ fontSize: '18px', fontWeight: '800', color: '#14532d', margin: 0, lineHeight: 1.2 }}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</h1>
              <p style={{ fontSize: '11px', color: '#64748b', margin: 0, fontStyle: 'italic' }}>দ্বীন ও আধুনিক শিক্ষার অপূর্ব মেলবন্ধন</p>
            </div>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: '#f1f5f9', border: 'none', padding: '8px 12px', borderRadius: '8px', fontSize: '20px', cursor: 'pointer' }}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {mobileMenuOpen && (
          <div style={{ backgroundColor: '#ffffff', borderTop: '1px solid #f1f5f9', padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>হোম</a>
            <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>প্রধান শিক্ষকের বাণী</a>
            <a href="#notice" className="nav-link" onClick={() => setMobileMenuOpen(false)}>নোটিশ বোর্ড</a>
            <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>যোগাযোগ</a>
            <button className="btn-primary" onClick={() => { setMobileMenuOpen(false); setIsModalOpen(true); }}>অনলাইন ভর্তি</button>
          </div>
        )}
      </nav>

      {/* হিরো সেকশন */}
      <header id="home" style={{ background: 'linear-gradient(135deg, #064e3b 0%, #14532d 50%, #166534 100%)', color: 'white', padding: '50px 20px 70px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <span className="badge" style={{ backgroundColor: 'rgba(255,255,255,0.2)', color: '#ffffff', marginBottom: '16px' }}>
            🎓 নতুন সেশনে ভর্তি চলছে
          </span>
          <h2 style={{ fontSize: '2.1rem', fontWeight: '800', margin: '16px 0', lineHeight: '1.3' }}>
            সুশিক্ষা ও সুন্নাত ভিত্তিক আদর্শ জীবন গড়ার বিশ্বস্ত প্রতিষ্ঠান
          </h2>
          <p style={{ fontSize: '15px', color: '#ecfdf5', lineHeight: '1.7', marginBottom: '28px' }}>
            আমরা দিচ্ছি আধুনিক ক্বওমী ও জেনারেল শিক্ষা ব্যবস্থার এক অনন্য সমন্বয়। অভিজ্ঞ শিক্ষক মণ্ডলীর তত্ত্বাবধানে আপনার সন্তানের দ্বীনি শিক্ষার পথ সুগম করুন।
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setIsModalOpen(true)} className="btn-primary" style={{ backgroundColor: '#ffffff', color: '#14532d', fontWeight: 'bold', fontSize: '16px' }}>
              📝 ভর্তি আবেদন করুন (ডিজিটাল ফরম)
            </button>
            <a href="tel:01918568313" className="btn-primary" style={{ backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)' }}>
              📞 সরাসরি কল দিন
            </a>
          </div>
        </div>
      </header>

      {/* মূল কন্টেন্ট */}
      <main style={{ maxWidth: '1200px', margin: '-30px auto 40px auto', padding: '0 16px', position: 'relative', zIndex: 10 }}>
        
        {/* প্রধান শিক্ষকের তথ্য সেকশন */}
        <section id="about" style={{ marginBottom: '32px' }}>
          <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <img src="https://i.postimg.cc/xd8py0DW/1786523361131.jpg" alt="Arif Ashab Khorshed" style={{ width: '130px', height: '130px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #16a34a' }} />
              <h3 style={{ margin: '12px 0 2px 0', fontSize: '20px', color: '#0f172a', fontWeight: '700' }}>Arif Ashab Khorshed</h3>
              <span className="badge">প্রধান শিক্ষক</span>
            </div>
            
            <div style={{ textAlign: 'left', width: '100%' }}>
              <h3 style={{ fontSize: '20px', color: '#166534', marginTop: 0, marginBottom: '12px', borderBottom: '2px solid #f1f5f9', paddingBottom: '8px' }}>
                প্রধান শিক্ষকের বার্তা
              </h3>
              <p style={{ lineHeight: '1.8', color: '#334155', margin: 0, fontSize: '15px' }}>
                "বিসমিল্লাহির রহমানির রহিম। চিলমারী প্রি ক্যাডেট মাদ্রাসায় আপনাকে জানাই আন্তরিক শুভেচ্ছা। আমাদের সুনির্দিষ্ট লক্ষ্য হলো কোমলমতি শিশুদের ধর্মীয় মূল্যবোধ, উত্তম চরিত্র এবং আধুনিক শিক্ষার মাধ্যমে এক আদর্শ সুনাগরিক হিসেবে গড়ে তোলা। অভিজ্ঞ শিক্ষক মণ্ডলীর পরম মমতায় আমরা শিক্ষার্থীদের মেধা ও সুপ্ত প্রতিভার বিকাশে সততার সাথে দায়িত্ব পালন করে যাচ্ছি।"
              </p>
            </div>
          </div>
        </section>

        {/* নতুন অনলাইন ভর্তি কল-টু-অ্যাকশন কার্ড (হোমপেজের নতুন ডিজাইন) */}
        <section id="admission" style={{ marginBottom: '32px' }}>
          <div className="card" style={{ background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)', color: 'white', textAlignment: 'center', padding: '36px 20px', borderRadius: '24px', boxShadow: '0 15px 30px rgba(16, 185, 129, 0.25)', textWrap: 'balance' }}>
            <div style={{ maxWidth: '650px', margin: '0 auto', textAlign: 'center' }}>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>
                ডিজিটাল ভর্তি পোর্টাল
              </span>
              <h2 style={{ fontSize: '26px', fontWeight: '800', margin: '14px 0 10px 0' }}>সহজ ও দ্রুত অনলাইন ভর্তি ফরম পূরণ করুন</h2>
              <p style={{ color: '#e0f2fe', fontSize: '15px', marginBottom: '24px', lineHeight: '1.6' }}>
                ঘরে বসেই লাইভ ফটো ক্যাপচার ও ফোন নম্বর ওটিপি ভেরিফিকেশনের মাধ্যমে কয়েক মিনিটে আপনার সন্তানের ভর্তি ফর্মটি জমা দিন।
              </p>
              <button onClick={() => setIsModalOpen(true)} style={{ backgroundColor: '#ffffff', color: '#047857', border: 'none', padding: '14px 32px', borderRadius: '12px', fontSize: '17px', fontWeight: '800', cursor: 'pointer', boxShadow: '0 8px 20px rgba(0,0,0,0.15)' }}>
                ✨ ভর্তি ফরম খুলুন
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* ভাসমান লাইভ চ্যাট বাটন */}
      <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('হ্যালো ফিরোজ ভাই, ডিজিটাল ভর্তি বা সাহায্য প্রয়োজন।')}`} target="_blank" rel="noopener noreferrer" className="live-chat-btn">
        <span>💬</span>
        <span>লাইভ চ্যাট</span>
      </a>

      {/* ভর্তি ফরম মোডাল / পপ-আপ */}
      <AdmissionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* ফুটার */}
      <Footer />
    </div>
  );
}
