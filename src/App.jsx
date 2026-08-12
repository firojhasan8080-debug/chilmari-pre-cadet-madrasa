import React from 'react'

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', textAlign: 'center', backgroundColor: '#f4fbf7', minHeight: '100vh' }}>
      <header style={{ backgroundColor: '#15803d', color: 'white', padding: '20px', borderRadius: '10px' }}>
        <h1 style={{ margin: '0', fontSize: '24px' }}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</h1>
        <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>Chilmari Pre Cadet Madrasa (CPCM)</p>
      </header>

      <main style={{ marginTop: '30px' }}>
        <h2 style={{ color: '#166534' }}>ওয়েবসাইটে স্বাগতম! 🎉</h2>
        <p style={{ color: '#374151', fontSize: '16px' }}>
          আমাদের ওয়েবসাইটের প্রথম ডেমো ভার্সন সফলভাবে তৈরি হয়েছে।
        </p>

        <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #bbf7d0', borderRadius: '8px', backgroundColor: '#ffffff' }}>
          <p style={{ fontWeight: 'bold', color: '#15803d' }}>স্ট্যাটাস Check:</p>
          <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', display: 'inline-block' }}>
            <li>✅ React + Vite সেটআপ সম্পন্ন</li>
            <li>✅ GitHub Repository রেডি</li>
            <li>⏳ পরবর্তী ধাপ: Netlify Deployment</li>
          </ul>
        </div>
      </main>

      <footer style={{ marginTop: '50px', borderTop: '1px solid #e5e7eb', paddingTop: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <img 
            src="https://i.postimg.cc/667hGYDg/Screenshot-20260727-124259.jpg" 
            alt="Designer" 
            style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
          />
          <span style={{ fontSize: '14px', color: '#4b5563', fontWeight: '500' }}>
            Website Design by MD Firoj Hasan
          </span>
        </div>
      </footer>
    </div>
  )
}
