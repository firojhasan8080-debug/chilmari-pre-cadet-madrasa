import React, { useState } from 'react'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div style={{ fontFamily: "'Hind Siliguri', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', color: '#1e293b' }}>
      
      {/* Top Bar */}
      <div style={{ backgroundColor: '#15803d', color: '#ffffff', padding: '8px 16px', fontSize: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>📍 চিলমারী, কুড়িগ্রাম | 📞 যোগাযোগ: ০১৭০০-০০০০০০</span>
        <span>ইআইআইএন (EIIN): ১২৩৪৫৬</span>
      </div>

      {/* Main Navbar */}
      <nav style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', padding: '12px 20px', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Logo & Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '45px', height: '45px', backgroundColor: '#166534', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '20px' }}>
              CPCM
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: '20px', color: '#166534', fontWeight: '700' }}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</h1>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Chilmari Pre Cadet Madrasa</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div style={{ display: 'flex', gap: '20px', fontWeight: '600', fontSize: '15px' }}>
            <a href="#home" style={{ color: '#166534', textDecoration: 'none' }}>হোম</a>
            <a href="#about" style={{ color: '#334155', textDecoration: 'none' }}>আমাদের সম্পর্কে</a>
            <a href="#notice" style={{ color: '#334155', textDecoration: 'none' }}>নোটিশ বোর্ড</a>
            <a href="#teachers" style={{ color: '#334155', textDecoration: 'none' }}>শিক্ষকবৃন্দ</a>
            <a href="#contact" style={{ color: '#334155', textDecoration: 'none' }}>যোগাযোগ</a>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section style={{ backgroundColor: '#166534', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '15px', fontWeight: '700' }}>দ্বীনি ও আধুনিক শিক্ষার এক অনন্য সমন্বয়</h2>
          <p style={{ fontSize: '18px', marginBottom: '25px', opacity: 0.9 }}>
            আপনার সন্তানকে নৈতিকতা, সঠিক আকিদা এবং আধুনিক শিক্ষায় আলোকিত মানুষ হিসেবে গড়ে তুলতে আমরা প্রতিশ্রুতিবদ্ধ।
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <button style={{ backgroundColor: '#f59e0b', color: '#fff', border: 'none', padding: '12px 24px', borderRadius: '6px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
              ভর্তির আবেদন করুন
            </button>
            <button style={{ backgroundColor: 'transparent', color: '#fff', border: '2px solid #fff', padding: '12px 24px', borderRadius: '6px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>
              বিস্তারিত জানুন
            </button>
          </div>
        </div>
      </section>

      {/* Notice & Feature Section */}
      <section style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Notice Board */}
        <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderTop: '4px solid #166534' }}>
          <h3 style={{ marginTop: 0, color: '#166534', display: 'flex', alignItems: 'center', gap: '8px' }}>
            📢 নোটিশ বোর্ড
          </h3>
          <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
            <li>২০২৬ শিক্ষাবর্ষে নতুন ভর্তি চলছে।</li>
            <li>আগামী সপ্তাহে অর্ধবার্ষিক পরীক্ষার ফলাফল প্রকাশিত হবে।</li>
            <li>অভিভাবক সমাবেশ আগামী শুক্রবার সকাল ১০ ঘটিকায়।</li>
          </ul>
        </div>

        {/* Features */}
        <div style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderTop: '4px solid #f59e0b' }}>
          <h3 style={{ marginTop: 0, color: '#166534' }}>🌟 আমাদের বৈশিষ্ট্যসমূহ</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li>✅ সুসজ্জিত ক্লাসরুম ও মনোরম পরিবেশ</li>
            <li>✅ অভিজ্ঞ ও প্রশিক্ষিত শিক্ষক মণ্ডলী</li>
            <li>✅ হিফজুল কুরআন বিভাগ ও কম্পিউটার শিক্ষা</li>
            <li>✅ সিসি ক্যামেরা দ্বারা সার্বক্ষণিক পর্যবেক্ষণ</li>
          </ul>
        </div>

      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', textAlign: 'center', padding: '30px 20px', marginTop: '60px' }}>
        <p style={{ margin: '0 0 10px 0' }}>© ২০২৬ চিলমারী প্রি ক্যাডেট মাদ্রাসা। সর্বস্বত্ব সংরক্ষিত।</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <img 
            src="https://i.postimg.cc/667hGYDg/Screenshot-20260727-124259.jpg" 
            alt="MD Firoj Hasan" 
            style={{ width: '35px', height: '35px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span style={{ fontSize: '14px', color: '#cbd5e1' }}>
            Website Design & Developed by <strong>MD Firoj Hasan</strong>
          </span>
        </div>
      </footer>

    </div>
  )
}
