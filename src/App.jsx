import React, { useState } from 'react'

export default function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', class: 'play', address: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ fontFamily: "'Hind Siliguri', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', color: '#0f172a' }}>
      
      {/* Top Bar */}
      <div style={{ backgroundColor: '#14532d', color: '#ffffff', padding: '8px 24px', fontSize: '13px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span>📍 চিলমারী, কুড়িগ্রাম</span>
          <span>📞 +880 1521-553003</span>
          <span>✉️ info@chilmarimadrasa.edu.bd</span>
        </div>
        <div style={{ backgroundColor: '#166534', padding: '3px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
          🎉 ২০২৬ শিক্ষাবর্ষে ভর্তি চলছে!
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 15px -3px rgba(0,0,0,0.08)', padding: '12px 24px', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1240px', margin: '0 auto' }}>
          
          {/* Logo & Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '50px', height: '50px', background: 'linear-gradient(135deg, #15803d 0%, #166534 100%)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold', fontSize: '22px', boxShadow: '0 4px 10px rgba(22, 101, 52, 0.3)' }}>
              CPCM
            </div>
            <div>
              <h1 style={{ margin: 0, fontSize: '22px', color: '#14532d', fontWeight: '800', letterSpacing: '-0.3px' }}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</h1>
              <p style={{ margin: 0, fontSize: '12px', color: '#64748b', fontWeight: '500' }}>Chilmari Pre Cadet Madrasa</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: '24px', fontWeight: '600', fontSize: '15px' }}>
            <a href="#home" style={{ color: '#15803d', textDecoration: 'none' }}>হোম</a>
            <a href="#about" style={{ color: '#334155', textDecoration: 'none' }}>আমাদের কথা</a>
            <a href="#programs" style={{ color: '#334155', textDecoration: 'none' }}>শিক্ষাক্রম</a>
            <a href="#principal" style={{ color: '#334155', textDecoration: 'none' }}>প্রধান শিক্ষক</a>
            <a href="#notice" style={{ color: '#334155', textDecoration: 'none' }}>নোটিশ বোর্ড</a>
            <a href="#admission" style={{ backgroundColor: '#15803d', color: '#ffffff', padding: '8px 18px', borderRadius: '8px', textDecoration: 'none', transition: '0.3s' }}>ভর্তি হন</a>
          </div>
        </div>
      </nav>

      {/* Hero Banner Section */}
      <section id="home" style={{ background: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #15803d 100%)', color: 'white', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <span style={{ backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', padding: '6px 20px', borderRadius: '30px', fontSize: '14px', fontWeight: '600', display: 'inline-block', marginBottom: '20px', border: '1px solid rgba(255,255,255,0.2)' }}>
            ইসলামী আকিদা ও আন্তর্জাতিক মানের শিক্ষা
          </span>
          <h2 style={{ fontSize: '40px', marginTop: '10px', marginBottom: '20px', fontWeight: '800', lineHeight: '1.3' }}>
            সুন্নাহর আলো ও আধুনিক জ্ঞানে গড়ে তুলুন আপনার সন্তানের ভবিষ্যৎ
          </h2>
          <p style={{ fontSize: '18px', marginBottom: '35px', opacity: 0.9, lineHeight: '1.7', maxWidth: '750px', margin: '0 auto 35px auto' }}>
            চিলমারী প্রি ক্যাডেট মাদ্রাসা একটি সুশৃঙ্খল ও আধুনিক দ্বীনি শিক্ষা প্রতিষ্ঠান। ক্যাডেট পদ্ধতির কঠোর শৃঙ্খলা এবং নূরানী ও জেনারেল শিক্ষার এক অভূতপূর্ব মেলবন্ধন।
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#admission" style={{ backgroundColor: '#f59e0b', color: '#0f172a', padding: '14px 32px', borderRadius: '10px', fontSize: '16px', fontWeight: '700', textDecoration: 'none', boxShadow: '0 10px 20px rgba(245, 158, 11, 0.3)' }}>
              📝 অনলাইন ভর্তি আবেদন
            </a>
            <a href="tel:+8801521553003" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.4)', padding: '14px 32px', borderRadius: '10px', fontSize: '16px', fontWeight: '600', textDecoration: 'none' }}>
              📞 সরাসরি কল করুন
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <div style={{ maxWidth: '1100px', margin: '-40px auto 60px auto', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.08)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', textAlign: 'center', border: '1px solid #f1f5f9' }}>
          <div>
            <h3 style={{ margin: 0, color: '#15803d', fontSize: '32px', fontWeight: '800' }}>১০০%</h3>
            <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '14px', fontWeight: '600' }}>দ্বীনি পরিবেশ</p>
          </div>
          <div style={{ borderLeft: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: 0, color: '#15803d', fontSize: '32px', fontWeight: '800' }}>অভিজ্ঞ</h3>
            <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '14px', fontWeight: '600' }}>শিক্ষক মণ্ডলী</p>
          </div>
          <div style={{ borderLeft: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: 0, color: '#15803d', fontSize: '32px', fontWeight: '800' }}>সিসিটিভি</h3>
            <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '14px', fontWeight: '600' }}>সার্বক্ষণিক নজরদারি</p>
          </div>
          <div style={{ borderLeft: '1px solid #e2e8f0' }}>
            <h3 style={{ margin: 0, color: '#15803d', fontSize: '32px', fontWeight: '800' }}>কম্পিউটার</h3>
            <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '14px', fontWeight: '600' }}>ডিজিটাল আইটি শিক্ষা</p>
          </div>
        </div>
      </div>

      {/* Academic Programs Section */}
      <section id="programs" style={{ maxWidth: '1240px', margin: '0 auto 70px auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <span style={{ color: '#15803d', fontWeight: '700', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase' }}>একাডেমিক বিভাগসমূহ</span>
          <h2 style={{ fontSize: '30px', color: '#0f172a', margin: '8px 0 0 0', fontWeight: '800' }}>আমাদের শিক্ষাক্রম ও বিভাগ</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: '#dcfce7', color: '#15803d', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '18px' }}>📖</div>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#0f172a' }}>নূরানী ও নাজেরা বিভাগ</h3>
            <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>সহিহ তাজবিদসহ আল-কুরআন তিলওয়াত, জরুরি মাসআলা-মাসায়েল ও প্রাত্যহিক দোয়ার সুদৃঢ় ভিত্তি গঠন।</p>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: '#fef3c7', color: '#d97706', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '18px' }}>🕋</div>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#0f172a' }}>হিফজুল কুরআন বিভাগ</h3>
            <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>অভিজ্ঞ হাফেজ শিক্ষকদের তত্ত্বাবধানে আধুনিক ও মানসিক চাপমুক্ত পদ্ধতিতে কুরআন হিফজ করার বিশেষ সুব্যবস্থা।</p>
          </div>

          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <div style={{ width: '50px', height: '50px', backgroundColor: '#e0f2fe', color: '#0284c7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '18px' }}>🎒</div>
            <h3 style={{ margin: '0 0 10px 0', fontSize: '20px', color: '#0f172a' }}>প্লে - ৫ম শ্রেণী (জেনারেল)</h3>
            <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.6', margin: 0 }}>জাতীয় শিক্ষাক্রম অনুযায়ী বাংলা, ইংরেজি, গণিত ও বিজ্ঞানের যথাযথ পাঠদান নিশ্চিতকরণ।</p>
          </div>
        </div>
      </section>

      {/* Notice Board & Features */}
      <section id="notice" style={{ maxWidth: '1240px', margin: '0 auto 80px auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
        
        {/* Notice Card */}
        <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '20px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', borderTop: '6px solid #15803d' }}>
          <h3 style={{ marginTop: 0, color: '#15803d', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '22px' }}>
            📢 নোটিশ বোর্ড
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '24px' }}>
            <div style={{ paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: '12px', backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>ভর্তি নোটিশ</span>
              <p style={{ margin: '6px 0 0 0', fontWeight: '600', fontSize: '15px' }}>২০২৬ শিক্ষাবর্ষে প্লে থেকে ৫ম শ্রেণী এবং হিফজ বিভাগে নতুন ভর্তি চলছে।</p>
            </div>
            <div style={{ paddingBottom: '12px', borderBottom: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: '12px', backgroundColor: '#fef3c7', color: '#d97706', padding: '2px 8px', borderRadius: '4px', fontWeight: 'bold' }}>পরীক্ষা</span>
              <p style={{ margin: '6px 0 0 0', fontWeight: '600', fontSize: '15px' }}>আগামী সপ্তাহে অর্ধবার্ষিক পরীক্ষার সময়সূচী প্রকাশিত হবে।</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{ backgroundColor: '#ffffff', padding: '32px', borderRadius: '20px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', borderTop: '6px solid #f59e0b' }}>
          <h3 style={{ marginTop: 0, color: '#15803d', fontSize: '22px' }}>🌟 আমাদের বিশেষত্ব</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 0 0', lineHeight: '2.3', fontWeight: '500', color: '#334155' }}>
            <li>✅ ক্যাডেট ধাঁচের সুশৃঙ্খল পাঠদান পদ্ধতি</li>
            <li>✅ সম্পূর্ণ ধূমপান ও রাজনীতিমুক্ত নিরাপদ পরিবেশ</li>
            <li>✅ স্পোকেন ইংলিশ ও আরবি কথোপকথনের চর্চা</li>
            <li>✅ প্রতিটি শিক্ষার্থীর দুর্বলতা চিহ্নিত করে অতিরিক্ত ক্লাস</li>
          </ul>
        </div>

      </section>

      {/* Principal Message Section */}
      <section id="principal" style={{ backgroundColor: '#ffffff', padding: '80px 24px', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1050px', margin: '0 auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', gap: '50px' }}>
          <div style={{ textAlign: 'center', flex: '1 1 280px' }}>
            <img 
              src="https://i.postimg.cc/xd8py0DW/1786523361131.jpg" 
              alt="Arif Ashab Khorshed" 
              style={{ width: '220px', height: '260px', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 15px 25px rgba(0,0,0,0.1)', border: '4px solid #15803d' }}
            />
            <h4 style={{ margin: '18px 0 4px 0', fontSize: '22px', color: '#15803d', fontWeight: '700' }}>Arif Ashab Khorshed</h4>
            <p style={{ margin: 0, fontSize: '15px', color: '#64748b', fontWeight: '600' }}>প্রধান শিক্ষক</p>
            <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#059669', fontWeight: '600' }}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</p>
          </div>
          <div style={{ flex: '2 1 350px' }}>
            <span style={{ color: '#15803d', fontWeight: '700', fontSize: '14px', letterSpacing: '1px' }}>প্রতিষ্ঠান প্রধানের বাণী</span>
            <h3 style={{ fontSize: '28px', color: '#0f172a', margin: '6px 0 20px 0', fontWeight: '800' }}>শিক্ষা ও নৈতিকতার সমন্বয়ে আমরা গড়ছি সুন্দর আগামী</h3>
            <p style={{ lineHeight: '1.8', color: '#475569', fontSize: '16px', marginBottom: '16px' }}>
              বিসমিল্লাহির রাহমানির রাহিম। চিলমারী প্রি ক্যাডেট মাদ্রাসায় আপনাকে উষ্ণ স্বাগতম। আধুনিক পৃথিবীর চ্যালেঞ্জ মোকাবিলায় আমাদের সন্তানকে কেবল সার্টিফিকেটধারী নয়, বরং আত্মবিশ্বাসী, প্রজ্ঞাবান ও খোদাভীরু মানুষ হিসেবে গড়ে তোলা প্রয়োজন।
            </p>
            <p style={{ lineHeight: '1.8', color: '#475569', fontSize: '16px' }}>
              আমাদের প্রশিক্ষিত শিক্ষক মণ্ডলী স্নেহের পরশে প্রতিটি শিক্ষার্থীর মেধা বিকাশে নিরলস কাজ করে যাচ্ছেন। আপনার সন্তানের উজ্জ্বল ভবিষ্যৎ গঠনে আমাদের সাথে থাকার আহ্বান জানাচ্ছি।
            </p>
          </div>
        </div>
      </section>

      {/* Online Admission Form */}
      <section id="admission" style={{ maxWidth: '900px', margin: '80px auto', padding: '0 24px' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#15803d', marginTop: 0, fontSize: '26px', textAlign: 'center', fontWeight: '800' }}>📝 অনলাইন ভর্তি তথ্য ও আবেদন ফরম</h3>
          <p style={{ textAlign: 'center', color: '#64748b', marginBottom: '35px', fontSize: '15px' }}>আপনার তথ্যগুলো প্রদান করুন, আমরা আপনার সাথে যোগাযোগ করব।</p>
          
          {submitted ? (
            <div style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '24px', borderRadius: '12px', textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>
              🎉 ধন্যবাদ! আপনার আবেদনটি সফলভাবে জমা হয়েছে। শীঘ্রই আমরা আপনার সাথে যোগাযোগ করব।
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '15px' }}>শিক্ষার্থীর পূর্ণ নাম *</label>
                <input required type="text" placeholder="শিক্ষার্থীর নাম লিখুন" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '15px', boxSizing: 'border-box', outline: 'none' }} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '15px' }}>অভিভাবকের মোবাইল নম্বর *</label>
                  <input required type="tel" placeholder="01700000000" style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '15px', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '600', fontSize: '15px' }}>কাঙ্ক্ষিত শ্রেণী *</label>
                  <select style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #cbd5e1', fontSize: '15px', boxSizing: 'border-box' }}>
                    <option>প্লে / নার্সারি</option>
                    <option>প্রথম শ্রেণী</option>
                    <option>দ্বিতীয় শ্রেণী</option>
                    <option>তৃতীয় শ্রেণী</option>
                    <option>চতুর্থ শ্রেণী</option>
                    <option>পঞ্চম শ্রেণী</option>
                    <option>হিফজ বিভাগ</option>
                  </select>
                </div>
              </div>
              <button type="submit" style={{ backgroundColor: '#15803d', color: '#fff', padding: '16px', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px', boxShadow: '0 4px 12px rgba(21, 128, 61, 0.3)' }}>
                আবেদন জমা দিন
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ maxWidth: '1240px', margin: '0 auto 60px auto', padding: '0 24px' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '40px', borderRadius: '24px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ color: '#15803d', marginTop: 0, fontSize: '24px', fontWeight: '800' }}>📞 সরাসরি যোগাযোগ করুন</h3>
          <p style={{ lineHeight: '2', fontSize: '16px', color: '#334155' }}>
            📍 <strong>ঠিকানা:</strong> চিলমারী, কুড়িগ্রাম, বাংলাদেশ<br />
            📞 <strong>মোবাইল:</strong> +880 1521-553003<br />
            ✉️ <strong>ইমেইল:</strong> info@chilmarimadrasa.edu.bd
          </p>
        </div>
      </section>

      {/* Professional Footer */}
      <footer style={{ backgroundColor: '#091e15', color: '#94a3b8', padding: '40px 24px 30px 24px', marginTop: '80px', borderTop: '4px solid #15803d' }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ color: '#ffffff', margin: '0 0 10px 0', fontSize: '20px' }}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</h3>
          <p style={{ margin: '0 0 20px 0', fontSize: '14px', opacity: 0.8 }}>© ২০২৬ চিলমারী প্রি ক্যাডেট মাদ্রাসা। সর্বস্বত্ব সংরক্ষিত।</p>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <img 
              src="https://i.postimg.cc/667hGYDg/Screenshot-20260727-124259.jpg" 
              alt="MD Firoj Hasan" 
              style={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #15803d' }}
            />
            <span style={{ fontSize: '14px', color: '#cbd5e1' }}>
              Website Design & Developed by <strong style={{ color: '#ffffff' }}>MD Firoj Hasan</strong>
            </span>
          </div>
        </div>
      </footer>

    </div>
  )
}
