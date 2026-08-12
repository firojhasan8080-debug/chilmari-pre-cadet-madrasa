import React from 'react';

export default function Footer() {
  const whatsappNumber = "8801918568313";
  const facebookUrl = "https://facebook.com";

  return (
    <footer id="contact" style={{ backgroundColor: '#0f172a', color: '#94a3b8', padding: '50px 20px 30px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* ডেভেলপার প্রোফাইল কার্ড */}
        <div style={{
          background: 'linear-gradient(145deg, #1e293b, #0f172a)',
          border: '1px solid #334155',
          borderRadius: '20px',
          padding: '24px',
          maxWidth: '600px',
          margin: '0 auto 40px auto',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
          textAlign: 'center'
        }}>
          <img 
            src="https://i.postimg.cc/mD8Tmy4h/1000021303.jpg" 
            alt="Md Firoj Hasan" 
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '3px solid #10b981',
              boxShadow: '0 0 15px rgba(16, 185, 129, 0.4)'
            }}
          />
          <h3 style={{
            fontSize: '22px',
            fontWeight: '800',
            color: '#38bdf8',
            margin: '10px 0 4px 0'
          }}>
            Md Firoj Hasan
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '13px', margin: '0 0 16px 0', fontStyle: 'italic' }}>
            Full-Stack Web Developer & Admin
          </p>

          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '600',
                backgroundColor: '#25D366',
                color: '#ffffff',
                textDecoration: 'none'
              }}
            >
              💬 WhatsApp
            </a>

            <a 
              href={facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '600',
                backgroundColor: '#1877F2',
                color: '#ffffff',
                textDecoration: 'none'
              }}
            >
              🌐 Facebook
            </a>
          </div>
        </div>

        {/* মাদ্রাসার মৌলিক তথ্য */}
        <div style={{ textAlignment: 'center', marginBottom: '35px', borderBottom: '1px solid #1e293b', paddingBottom: '30px' }}>
          <h4 style={{ color: '#ffffff', fontSize: '20px', fontWeight: '700', margin: '0 0 8px 0' }}>
            চিলমারী প্রি ক্যাডেট মাদ্রাসা
          </h4>
          <p style={{ color: '#94a3b8', fontSize: '14px', margin: '0 0 12px 0' }}>
            📍 ঠিকানা: চিলমারী, কুড়িগ্রাম, বাংলাদেশ
          </p>
          <p style={{ color: '#38bdf8', fontSize: '15px', fontWeight: 'bold', margin: 0 }}>
            📞 ভর্তি ও যেকোনো তথ্যের জন্য: +880 1918-568313
          </p>
        </div>

        {/* কপিরাইট */}
        <div style={{ textAlign: 'center', fontSize: '13px', color: '#64748b' }}>
          © ২০২৬ চিলমারী প্রি ক্যাডেট মাদ্রাসা। সর্বস্বত্ব সংরক্ষিত।
        </div>

      </div>
    </footer>
  );
}
