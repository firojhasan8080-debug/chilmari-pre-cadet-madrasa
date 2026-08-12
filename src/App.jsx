import React, { useState } from 'react'

export default function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', class: 'play', address: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ fontFamily: "'Hind Siliguri', sans-serif", backgroundColor: '#f1f5f9', minHeight: '100vh', color: '#1e293b' }}>
      
      {/* Top Announcement Bar */}
      <div style={{ backgroundColor: '#15803d', color: '#ffffff', padding: '10px 20px', fontSize: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <span>📍 চিলমারী, কুড়িগ্রাম | 📞 যোগাযোগ: +880 1521-553003</span>
        <span style={{ backgroundColor: '#166534', padding: '2px 10px', borderRadius: '12px', fontSize: '12px' }}>
          🎉 ২০২৬ শিক্ষাবর্ষে ভর্তি চলছে!
        </span>
      </div>

      {/* Main Navbar */}
      <nav style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', padding: '14px 20px', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Logo & Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '48px', height: '48px', backgroundColor: '#166534', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
              CPCM
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: '20px', color: '#166534', fontWeight: '700' }}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</h1>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>Chilmari Pre Cadet Madrasa</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: '22px', fontWeight: '600', fontSize: '15px' }}>
            <a href="#home" style={{ color: '#166534', textDecoration: 'none' }}>হোম</a>
            <a href="#about" style={{ color: '#334155', textDecoration: 'none' }}>আমাদের সম্পর্কে</a>
            <a href="#principal" style={{ color: '#334155', textDecoration: 'none' }}>প্রধান শিক্ষক</a>
            <a href="#admission" style={{ color: '#334155', textDecoration: 'none' }}>ভর্তি আবেদন</a>
            <a href="#contact" style={{ color: '#334155', textDecoration: 'none' }}>যোগাযোগ</a>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section id="home" style={{ background: 'linear-gradient(135deg, #166534 0%, #15803d 100%)', color: 'white', padding: '80px 20px', textAlign: 'center' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '6px 16px', borderRadius: '20px', fontSize: '14px', fontWeight: '500' }}>
            গুণগত দ্বীনি ও আধুনিক শিক্ষা
          </span>
          <h2 style={{ fontSize: '36px', marginTop: '20px', marginBottom: '15px', fontWeight: '800', lineHeight: '1.3' }}>
            সন্তানের সুন্দর ভবিষ্যৎ ও নৈতিক চরিত্র গঠনে বিশ্বস্ত প্রতিষ্ঠান
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '30px', opacity: 0.9, lineHeight: '1.6' }}>
            আধুনিক ক্যাডেট পদ্ধতির সমন্বয়ে কুরআন, সুন্নাহ ও সাধারণ শিক্ষার এক আদর্শ বিদ্যাপীঠ।
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
            <a href="#admission" style={{ backgroundColor: '#f59e0b', color: '#fff', padding: '14px 28px', borderRadius: '8px', fontSize: '16px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.15)' }}>
              📝 অনলাইনে ভর্তি আবেদন
            </a>
            <a href="tel:+8801521553003" style={{ backgroundColor: '#ffffff', color: '#166534', padding: '14px 28px', borderRadius: '8px', fontSize: '16px', fontWeight: '700', textDecoration: 'none' }}>
              📞 কল করুন
            </a>
          </div>
        </div>
      </section>

      {/* Stats Quick Bar */}
      <div style={{ maxWidth: '1000px', margin: '-30px auto 40px auto', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '20px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center' }}>
          <div>
            <h3 style={{ margin: 0, color: '#166534', fontSize: '28px' }}>১০০%</h3>
            <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>মানসম্মত শিক্ষা</p>
          </div>
          <div>
            <h3 style={{ margin: 0, color: '#166534', fontSize: '28px' }}>অভিজ্ঞ</h3>
            <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>শিক্ষক মণ্ডলী</p>
          </div>
          <div>
            <h3 style={{ margin: 0, color: '#166534', fontSize: '28px' }}>নিরাপদ</h3>
            <p style={{ margin: 0, color: '#64748b', fontSize: '14px' }}>সিসি ক্যামেরা বেষ্টিত</p>
          </div>
        </div>
      </div>

      {/* Notice & Features */}
      <section style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
        
        {/* Notice Board */}
        <div style={{ backgroundColor: '#ffffff', padding: '28px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderTop: '5px solid #166534' }}>
          <h3 style={{ marginTop: 0, color: '#166534', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '20px' }}>
            📢 নোটিশ বোর্ড
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
            <div style={{ paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: '12px', color: '#166534', fontWeight: 'bold' }}>২০২৬ শিক্ষাবর্ষ</span>
              <p style={{ margin: '4px 0 0 0', fontWeight: '600' }}>নতুন ভর্তি কার্যক্রম শুরু হয়েছে। সিট সীমিত!</p>
            </div>
            <div style={{ paddingBottom: '10px', borderBottom: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 'bold' }}>পরীক্ষা</span>
              <p style={{ margin: '4px 0 0 0', fontWeight: '600' }}>আগামী সপ্তাহে অর্ধবার্ষিক পরীক্ষার ফলাফল প্রকাশিত হবে।</p>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div style={{ backgroundColor: '#ffffff', padding: '28px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', borderTop: '5px solid #f59e0b' }}>
          <h3 style={{ marginTop: 0, color: '#166534', fontSize: '20px' }}>🌟 কেন আমাদের বেছে নেবেন?</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0 0', lineHeight: '2.2', fontWeight: '500' }}>
            <li>✅ নূরানী, নাজেরা ও হিফজুল কুরআন বিভাগ</li>
            <li>✅ জেনারেল সিলেবাস অনুযায়ী আধুনিক পাঠদান</li>
            <li>✅ কম্পিউটার ও ইংরেজি ভাষা শেখার সুব্যবস্থা</li>
            <li>✅ মনোরম পরিবেশ ও সার্বক্ষণিক তদারকি</li>
          </ul>
        </div>

      </section>

      {/* Principal Message Section */}
      <section id="principal" style={{ backgroundColor: '#ffffff', padding: '60px 20px', marginTop: '50px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          <div style={{ textAlign: 'center', flex: '1 1 260px' }}>
            <img 
              src="https://i.postimg.cc/xd8py0DW/1786523361131.jpg" 
              alt="Arif Ashab Khorshed" 
              style={{ width: '200px', height: '240px', objectFit: 'cover', borderRadius: '16px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.15)', border: '4px solid #166534' }}
            />
            <h4 style={{ margin: '15px 0 4px 0', fontSize: '20px', color: '#166534' }}>Arif Ashab Khorshed</h4>
            <p style={{ margin: 0, fontSize: '14px', color: '#64748b', fontWeight: '600' }}>প্রধান শিক্ষক</p>
            <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#059669', fontWeight: '500' }}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</p>
          </div>
          <div style={{ flex: '2 1 320px' }}>
            <h3 style={{ fontSize: '26px', color: '#166534', marginTop: 0, fontWeight: '700' }}>প্রধান শিক্ষকের বাণী</h3>
            <p style={{ lineHeight: '1.8', color: '#475569', fontSize: '16px' }}>
              বিসমিল্লাহির রাহমানির রাহিম। চিলমারী প্রি ক্যাডেট মাদ্রাসায় আপনাকে স্বাগতম। আমাদের লক্ষ্য কেবল প্রাতিষ্ঠানিক শিক্ষা প্রদান নয়, বরং প্রতিটি শিক্ষার্থীকে ইসলামী মূল্যবোধ ও আধুনিক জ্ঞানে সমৃদ্ধ একজন আদর্শ মানুষ হিসেবে গড়ে তোলা।
            </p>
            <p style={{ lineHeight: '1.8', color: '#475569', fontSize: '16px' }}>
              অভিভাবকদের আস্থা ও শিক্ষকদের অক্লান্ত পরিশ্রমে আমাদের শিক্ষার্থীরা নৈতিকতা ও মেধার উৎকর্ষ সাধনে এগিয়ে যাচ্ছে। আপনার সন্তানের উজ্জ্বল ভবিষ্যতের জন্য আমাদের সাথে থাকুন।
            </p>
          </div>
        </div>
      </section>

      {/* Online Admission Form */}
      <section id="admission" style={{ maxWidth: '900px', margin: '60px auto', padding: '0 20px' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '35px', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.08)' }}>
          <h3 style={{ color: '#166534', marginTop: 0, fontSize: '24px', textAlign: 'center' }}>📝 অনলাইন ভর্তি আবেদন ফরম</h3>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '30px' }}>আবেদনটি পূরণ করুন, আমরা আপনার সাথে খুব শীঘ্রই যোগাযোগ করব।</p>
          
          {submitted ? (
            <div style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '20px', borderRadius: '8px', textAlign: 'center', fontWeight: 'bold' }}>
              ✅ আপনার আবেদনটি সফলভাবে জমা হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '18px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>শিক্ষার্থীর নাম *</label>
                <input required type="text" placeholder="শিক্ষার্থীর নাম লিখুন" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>অভিভাবকের মোবাইল নম্বর *</label>
                <input required type="tel" placeholder="01700000000" style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', boxSizing: 'border-box' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '6px', fontWeight: '600' }}>কাঙ্ক্ষিত শ্রেণী *</label>
                <select style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', boxSizing: 'border-box' }}>
                  <option>প্লে / নার্সারি</option>
                  <option>প্রথম শ্রেণী</option>
                  <option>দ্বিতীয় শ্রেণী</option>
                  <option>তৃতীয় শ্রেণী</option>
                  <option>চতুর্থ শ্রেণী</option>
                  <option>পঞ্চম শ্রেণী</option>
                  <option>হিফজ বিভাগ</option>
                </select>
              </div>
              <button type="submit" style={{ backgroundColor: '#166534', color: '#fff', padding: '14px', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
                আবেদন জমা দিন
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ maxWidth: '1200px', margin: '60px auto 40px auto', padding: '0 20px' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '35px', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
          <h3 style={{ color: '#166534', marginTop: 0, fontSize: '24px' }}>📞 সরাসরি যোগাযোগ করুন</h3>
          <p style={{ lineHeight: '2', fontSize: '16px' }}>
            📍 <strong>ঠিকানা:</strong> চিলমারী, কুড়িগ্রাম, বাংলাদেশ<br />
            📞 <strong>মোবাইল:</strong> +880 1521-553003<br />
            ✉️ <strong>ইমেইল:</strong> info@chilmari-madrasa.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0f172a', color: '#94a3b8', textAlign: 'center', padding: '35px 20px', marginTop: '60px' }}>
        <p style={{ margin: '0 0 12px 0' }}>© ২০২৬ চিলমারী প্রি ক্যাডেট মাদ্রাসা। সর্বস্বত্ব সংরক্ষিত।</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <img 
            src="https://i.postimg.cc/667hGYDg/Screenshot-20260727-124259.jpg" 
            alt="MD Firoj Hasan" 
            style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span style={{ fontSize: '14px', color: '#cbd5e1' }}>
            Website Design & Developed by <strong>MD Firoj Hasan</strong>
          </span>
        </div>
      </footer>

    </div>
  )
}
