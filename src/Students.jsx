import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Footer from './components/Footer';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ totalMale: 0, totalFemale: 0 });

  const classesList = ['Play', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const { data, error } = await supabase
        .from('students')
        .select('*')
        .order('ranking', { ascending: true });
      
      if (!error && data) {
        setStudents(data);
        // ছাত্র ও ছাত্রীর মোট সংখ্যা হিসাব করা
        const maleCount = data.filter(s => s.gender === 'male').length;
        const femaleCount = data.filter(s => s.gender === 'female').length;
        setStats({ totalMale: maleCount, totalFemale: femaleCount });
      }
    } catch (err) {
      console.error('Error fetching students:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Hind Siliguri', 'Segoe UI', sans-serif", backgroundColor: '#f8fafc', color: '#0f172a', minHeight: '100vh', margin: 0, padding: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
        .stat-card { background: #ffffff; border-radius: 14px; padding: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); text-align: center; border: 1px solid #e2e8f0; }
        .class-section { margin-bottom: 40px; }
        .student-card { background: #ffffff; border-radius: 14px; padding: 16px; box-shadow: 0 4px 10px rgba(0,0,0,0.04); border: 1px solid #e2e8f0; text-align: center; position: relative; }
        .rank-badge { background: linear-gradient(135deg, #eab308 0%, #ca8a04 100%); color: white; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 700; display: inline-block; margin-bottom: 8px; }
      `}</style>

      {/* হেডার বার */}
      <div style={{ backgroundColor: '#14532d', color: '#ffffff', padding: '30px 20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '800' }}>মেধাবী ছাত্র-ছাত্রী বৃন্দ</h1>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#bbf7d0' }}>চিলমারী প্রি ক্যাডেট মাদ্রাসার ক্লাসের শীর্ষ মেধাবী শিক্ষার্থীগণ</p>
        <div style={{ marginTop: '16px' }}>
          <a href="/" style={{ color: '#ffffff', textDecoration: 'underline', fontSize: '14px' }}>← হোম পেজে ফিরে যান</a>
        </div>
      </div>

      <main style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 16px' }}>
        
        {/* মোট ছাত্র-ছাত্রী কাউন্ট সেকশন */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '40px' }}>
          <div className="stat-card">
            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#64748b' }}>মোট ছাত্র</h3>
            <p style={{ margin: 0, fontSize: '28px', fontWeight: '800', color: '#166534' }}>{stats.totalMale} জন</p>
          </div>
          <div className="stat-card">
            <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#64748b' }}>মোট ছাত্রী</h3>
            <p style={{ margin: 0, fontSize: '28px', fontWeight: '800', color: '#db2777' }}>{stats.totalFemale} জন</p>
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', fontSize: '16px', color: '#64748b' }}>লোড হচ্ছে...</div>
        ) : (
          classesList.map((cls) => {
            const classStudents = students.filter(s => s.class === cls);
            if (classStudents.length === 0) return null; // যে ক্লাসে শিক্ষার্থী নেই তা দেখাবে না

            return (
              <div key={cls} className="class-section">
                <h2 style={{ fontSize: '20px', color: '#14532d', borderBottom: '2px solid #cbd5e1', paddingBottom: '8px', marginBottom: '16px' }}>
                  শ্রেণি: {cls}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  {classStudents.map((student) => (
                    <div key={student.id} className="student-card">
                      <div className="rank-badge">Rank {student.ranking}</div>
                      <img 
                        src={student.photo_url || 'https://i.postimg.cc/xd8py0DW/1786523361131.jpg'} 
                        alt={student.name} 
                        style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #16a34a', margin: '0 auto 12px auto' }}
                      />
                      <h3 style={{ margin: '0 0 4px 0', fontSize: '17px', color: '#0f172a' }}>{student.name}</h3>
                      <p style={{ margin: '2px 0', fontSize: '13px', color: '#334155' }}>বাবা: {student.father_name || 'প্রযোজ্য নয়'}</p>
                      <p style={{ margin: '2px 0', fontSize: '13px', color: '#334155' }}>মা: {student.mother_name || 'প্রযোজ্য নয়'}</p>
                      <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#64748b' }}>গ্রাম: {student.village || 'চিলমারী'}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}

      </main>

      <Footer />
    </div>
  );
}
