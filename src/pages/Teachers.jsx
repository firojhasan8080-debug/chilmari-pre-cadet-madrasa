import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';
import { useAuth } from '../context/AuthContext';

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isSuperAdmin, isAdmin } = useAuth();

  // নতুন শিক্ষক যোগ করার ফর্ম স্টেট (Admin/Super Admin এর জন্য)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [designation, setDesignation] = useState('');
  const [qualification, setQualification] = useState('');
  const [subject, setSubject] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const { data, error } = await supabase.from('teachers').select('*');
      if (error) throw error;
      if (data) setTeachers(data);
    } catch (err) {
      console.error('Error fetching teachers:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddTeacher = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('teachers').insert([
      { name, phone, designation, qualification, subject, photo_url: photoUrl }
    ]);
    if (!error) {
      alert('শিক্ষকের তথ্য সফলভাবে যোগ করা হয়েছে!');
      setName('');
      setPhone('');
      setDesignation('');
      setQualification('');
      setSubject('');
      setPhotoUrl('');
      fetchTeachers();
    } else {
      alert('ত্রুটি: ' + error.message);
    }
  };

  return (
    <div style={{ fontFamily: "'Hind Siliguri', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* টপ হেডার */}
      <div style={{ backgroundColor: '#14532d', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>👨‍🏫 শিক্ষকবৃন্দ</h1>
        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#bbf7d0' }}>চিলমারী প্রি ক্যাডেট মাদ্রাসার সম্মানিত শিক্ষকগণের তালিকা</p>
        <div style={{ marginTop: '15px' }}>
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', background: '#16a34a', padding: '6px 14px', borderRadius: '6px', fontSize: '14px' }}>← হোমপেজে ফিরে যান</Link>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px' }}>
        
        {/* Admin/Super Admin Form to Add Teacher */}
        {(isSuperAdmin || isAdmin) && (
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#14532d', marginBottom: '15px' }}>➕ নতুন শিক্ষক যুক্ত করুন</h3>
            <form onSubmit={handleAddTeacher} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px' }}>
              <input type="text" placeholder="শিক্ষকের নাম" value={name} onChange={e => setName(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="মোবাইল নম্বর" value={phone} onChange={e => setPhone(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="পদবি (যেমন: সহকারী শিক্ষক)" value={designation} onChange={e => setDesignation(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="শিক্ষাগত যোগ্যতা (যেমন: কামিল/মাস্টার্স)" value={qualification} onChange={e => setQualification(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="বিষয় (যেমন: আরবি/গণিত)" value={subject} onChange={e => setSubject(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="ছবির লিংক (URL)" value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} required style={inputStyle} />
              <button type="submit" style={{ gridColumn: '1 / -1', background: '#16a34a', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>সংরক্ষণ করুন</button>
            </form>
          </div>
        )}

        {/* Teachers Grid */}
        {loading ? (
          <p style={{ textAlign: 'center' }}>লোড হচ্ছে...</p>
        ) : teachers.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#64748b' }}>কোনো শিক্ষক বা শিক্ষিকার তথ্য পাওয়া যায়নি।</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {teachers.map((t, idx) => (
              <div key={idx} style={{ background: 'white', borderRadius: '12px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                <img 
                  src={t.photo_url || 'https://i.postimg.cc/gjktXPpH/1786523361131.jpg'} 
                  alt={t.name} 
                  style={{ width: '110px', height: '130px', objectFit: 'cover', borderRadius: '8px', marginBottom: '15px', border: '2px solid #16a34a' }}
                />
                <h3 style={{ margin: '0 0 5px 0', color: '#0f172a', fontSize: '18px' }}>{t.name}</h3>
                <p style={{ color: '#16a34a', fontWeight: 'bold', margin: '0 0 10px 0', fontSize: '14px' }}>{t.designation}</p>
                
                <div style={{ textAlign: 'left', fontSize: '13px', color: '#475569', background: '#f8fafc', padding: '10px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  <div><strong>বিষয়:</strong> {t.subject}</div>
                  <div><strong>যোগ্যতা:</strong> {t.qualification}</div>
                  <div><strong>মোবাইল:</strong> <a href={`tel:${t.phone}`} style={{ color: '#14532d', textDecoration: 'none' }}>{t.phone}</a></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const inputStyle = { padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' };
