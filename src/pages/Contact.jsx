import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';

export default function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { error } = await supabase.from('contact_messages').insert([
        { name, phone, message }
      ]);

      if (error) throw error;

      alert('আপনার বার্তাটি সফলভাবে পাঠানো হয়েছে। ধন্যবাদ!');
      setName('');
      setPhone('');
      setMessage('');
    } catch (err) {
      alert('বার্তা পাঠাতে সমস্যা হয়েছে: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Hind Siliguri', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* টপ হেডার */}
      <div style={{ backgroundColor: '#14532d', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>📞 যোগাযোগ করুন</h1>
        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#bbf7d0' }}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</p>
        <div style={{ marginTop: '15px' }}>
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', background: '#16a34a', padding: '6px 14px', borderRadius: '6px', fontSize: '14px' }}>← হোমপেজে ফিরে যান</Link>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          
          {/* কন্টাক্ট ইনফো */}
          <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ color: '#14532d', marginBottom: '20px', fontSize: '1.5rem' }}>অফিসিয়াল ঠিকানা</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', color: '#334155', fontSize: '15px', lineHeight: '1.6' }}>
              <div>
                <strong>📍 ঠিকানা:</strong> চিলমারী সদর, চিলমারী, কুড়িগ্রাম, রংপুর, বাংলাদেশ।
              </div>
              <div>
                <strong>📞 মোবাইল নম্বর:</strong> <a href="tel:01700000000" style={{ color: '#16a34a', textDecoration: 'none' }}>01700-000000</a>
              </div>
              <div>
                <strong>✉️ ইমেল:</strong> <a href="mailto:info@chilmarippmadrasa.edu.bd" style={{ color: '#16a34a', textDecoration: 'none' }}>info@chilmarippmadrasa.edu.bd</a>
              </div>
              <div>
                <strong>⏰ অফিস সময়:</strong> সকাল ৮:০০ টা – দুপুর ২:০০ টা (শুক্রবার বন্ধ)
              </div>
            </div>

            {/* গুগল ম্যাপ এমবেড */}
            <div style={{ marginTop: '25px', borderRadius: '8px', overflow: 'hidden', border: '1px solid #cbd5e1' }}>
              <iframe 
                title="Chilmari Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14479.88!2d89.68!3d25.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDMzJzAwLjAiTiA4OcKwNDAnNDguMCJF!5e0!3m2!1sbn!2sbd!4v1650000000000!5m2!1sbn!2sbd" 
                width="100%" 
                height="200" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy">
              </iframe>
            </div>
          </div>

          {/* বার্তা পাঠানোর ফর্ম */}
          <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ color: '#14532d', marginBottom: '20px', fontSize: '1.5rem' }}>আমাদের বার্তা পাঠান</h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={labelStyle}>আপনার নাম *</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required placeholder="পূর্ণ নাম লিখুন" style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>মোবাইল নম্বর *</label>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required placeholder="01XXXXXXXXX" style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>আপনার বার্তা *</label>
                <textarea value={message} onChange={e => setMessage(e.target.value)} required rows="5" placeholder="আপনার মতামত বা জিজ্ঞাসা এখানে লিখুন..." style={{ ...inputStyle, resize: 'vertical' }}></textarea>
              </div>

              <button type="submit" disabled={submitting} style={{ background: '#16a34a', color: 'white', padding: '12px', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>
                {submitting ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

const labelStyle = { display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px', color: '#334155' };
const inputStyle = { width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' };
