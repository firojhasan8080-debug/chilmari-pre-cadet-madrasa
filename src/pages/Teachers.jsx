import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Footer from './components/Footer';

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('role', 'teacher');
      
      if (!error && data) {
        setTeachers(data);
      }
    } catch (err) {
      console.error('Error fetching teachers:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Hind Siliguri', 'Segoe UI', sans-serif", backgroundColor: '#f8fafc', color: '#0f172a', minHeight: '100vh', margin: 0, padding: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
        .teacher-card { background: #ffffff; border-radius: 16px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; text-align: center; transition: transform 0.3s ease; }
        .teacher-card:hover { transform: translateY(-4px); box-shadow: 0 8px 20px rgba(0,0,0,0.08); }
        .badge { background: #dcfce7; color: #15803d; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; display: inline-block; }
      `}</style>

      {/* হেডার বার */}
      <div style={{ backgroundColor: '#14532d', color: '#ffffff', padding: '30px 20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '800' }}>শিক্ষকবৃন্দ</h1>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#bbf7d0' }}>চিলমারী প্রি ক্যাডেট মাদ্রাসার সুযোগ্য ও অভিজ্ঞ শিক্ষক মণ্ডলী</p>
        <div style={{ marginTop: '16px' }}>
          <a href="/" style={{ color: '#ffffff', textDecoration: 'underline', fontSize: '14px' }}>← হোম পেজে ফিরে যান</a>
        </div>
      </div>

      {/* শিক্ষক তালিকা সেকশন */}
      <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 16px' }}>
        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', fontSize: '16px', color: '#64748b' }}>লোড হচ্ছে...</div>
        ) : teachers.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', fontSize: '16px', color: '#64748b' }}>কোনো শিক্ষক পাওয়া যায়নি।</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {teachers.map((teacher) => (
              <div key={teacher.id} className="teacher-card">
                <img 
                  src={teacher.avatar || 'https://i.postimg.cc/xd8py0DW/1786523361131.jpg'} 
                  alt={teacher.name} 
                  style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #16a34a', margin: '0 auto 16px auto' }}
                />
                <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', color: '#0f172a' }}>{teacher.name}</h3>
                <span className="badge" style={{ marginBottom: '12px' }}>শিক্ষক</span>
                <p style={{ margin: '4px 0', fontSize: '14px', color: '#334155' }}>📞 মোবাইল: {teacher.phone || 'সংরক্ষিত নয়'}</p>
                <p style={{ margin: '4px 0', fontSize: '13px', color: '#64748b' }}>📧 ইমেইল: {teacher.email || 'প্রযোজ্য নয়'}</p>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
