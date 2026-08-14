import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';
import { useAuth } from '../context/AuthContext';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isSuperAdmin, isAdmin } = useAuth();

  // নতুন ছাত্র-ছাত্রী যুক্ত করার ফর্ম স্টেট
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [studentClass, setStudentClass] = useState('Play');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [village, setVillage] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [ranking, setRanking] = useState('1');

  const classesList = ['Play', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const { data, error } = await supabase.from('students').select('*');
      if (error) throw error;
      if (data) setStudents(data);
    } catch (err) {
      console.error('Error fetching students:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('students').insert([
      { 
        name, 
        gender, 
        class: studentClass, 
        father_name: fatherName, 
        mother_name: motherName, 
        village, 
        photo_url: photoUrl, 
        ranking: parseInt(ranking) 
      }
    ]);
    if (!error) {
      alert('ছাত্র/ছাত্রীর তথ্য সফলভাবে যোগ করা হয়েছে!');
      setName('');
      setFatherName('');
      setMotherName('');
      setVillage('');
      setPhotoUrl('');
      fetchStudents();
    } else {
      alert('ত্রুটি: ' + error.message);
    }
  };

  // মোট ছাত্র ও ছাত্রীর হিসাব
  const totalBoys = students.filter(s => s.gender === 'Male').length;
  const totalGirls = students.filter(s => s.gender === 'Female').length;

  return (
    <div style={{ fontFamily: "'Hind Siliguri', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* টপ হেডার */}
      <div style={{ backgroundColor: '#14532d', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>🎓 কৃতি ছাত্র-ছাত্রীবৃন্দ</h1>
        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#bbf7d0' }}>প্লে থেকে দশম শ্রেণি পর্যন্ত মেধাবী শিক্ষার্থীদের তালিকা</p>
        <div style={{ marginTop: '15px' }}>
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', background: '#16a34a', padding: '6px 14px', borderRadius: '6px', fontSize: '14px' }}>← হোমপেজে ফিরে যান</Link>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px' }}>
        
        {/* কাউন্টার সেকশন */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderLeft: '5px solid #2563eb' }}>
            <h3 style={{ margin: '0 0 5px 0', color: '#64748b', fontSize: '15px' }}>মোট ছাত্র সংখ্যা</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>{totalBoys} জন</p>
          </div>
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', borderLeft: '5px solid #db2777' }}>
            <h3 style={{ margin: '0 0 5px 0', color: '#64748b', fontSize: '15px' }}>মোট ছাত্রী সংখ্যা</h3>
            <p style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#1e293b', margin: 0 }}>{totalGirls} জন</p>
          </div>
        </div>

        {/* Admin/Super Admin Form to Add Student */}
        {(isSuperAdmin || isAdmin) && (
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#14532d', marginBottom: '15px' }}>➕ নতুন ছাত্র/ছাত্রী যুক্ত করুন</h3>
            <form onSubmit={handleAddStudent} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px' }}>
              <input type="text" placeholder="শিক্ষার্থীর নাম" value={name} onChange={e => setName(e.target.value)} required style={inputStyle} />
              <select value={gender} onChange={e => setGender(e.target.value)} style={inputStyle}>
                <option value="Male">ছাত্র (Male)</option>
                <option value="Female">ছাত্রী (Female)</option>
              </select>
              <select value={studentClass} onChange={e => setStudentClass(e.target.value)} style={inputStyle}>
                {classesList.map(c => <option key={c} value={c}>শ্রেণি: {c}</option>)}
              </select>
              <input type="text" placeholder="বাবার নাম" value={fatherName} onChange={e => setFatherName(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="মায়ের নাম" value={motherName} onChange={e => setMotherName(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="গ্রাম / ঠিকানা" value={village} onChange={e => setVillage(e.target.value)} required style={inputStyle} />
              <input type="text" placeholder="ছবির লিংক (URL)" value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} required style={inputStyle} />
              <select value={ranking} onChange={e => setRanking(e.target.value)} style={inputStyle}>
                <option value="1">র‍্যাংক ১ (Rank 1)</option>
                <option value="2">র‍্যাংক ২ (Rank 2)</option>
                <option value="3">র‍্যাংক ৩ (Rank 3)</option>
              </select>
              <button type="submit" style={{ gridColumn: '1 / -1', background: '#16a34a', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>সংরক্ষণ করুন</button>
            </form>
          </div>
        )}

        {/* Classes & Top 3 Ranking Section */}
        {loading ? (
          <p style={{ textAlign: 'center' }}>লোড হচ্ছে...</p>
        ) : (
          classesList.map(cls => {
            const classStudents = students.filter(s => String(s.class) === String(cls));
            if (classStudents.length === 0) return null; // খালি ক্লাস দেখাবে না

            return (
              <div key={cls} style={{ marginBottom: '40px' }}>
                <div style={{ borderBottom: '2px solid #cbd5e1', paddingBottom: '8px', marginBottom: '20px' }}>
                  <h2 style={{ color: '#14532d', margin: 0, fontSize: '1.4rem' }}>📚 শ্রেণি: {cls}</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                  {classStudents.map((stu, idx) => (
                    <div key={idx} style={{ background: 'white', borderRadius: '12px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', position: 'relative' }}>
                      
                      {/* Premium Rank Badge */}
                      <div style={{ position: 'absolute', top: '10px', right: '10px', background: stu.ranking === 1 ? '#eab308' : stu.ranking === 2 ? '#94a3b8' : '#b45309', color: 'white', padding: '4px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                        Rank {stu.ranking}
                      </div>

                      <img 
                        src={stu.photo_url || 'https://i.postimg.cc/gjktXPpH/1786523361131.jpg'} 
                        alt={stu.name} 
                        style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%', marginBottom: '12px', border: '3px solid #16a34a' }}
                      />
                      <h3 style={{ margin: '0 0 5px 0', color: '#0f172a', fontSize: '17px' }}>{stu.name}</h3>
                      
                      <div style={{ textAlign: 'left', fontSize: '13px', color: '#475569', background: '#f8fafc', padding: '10px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '10px' }}>
                        <div><strong>বাবার নাম:</strong> {stu.father_name}</div>
                        <div><strong>মায়ের নাম:</strong> {stu.mother_name}</div>
                        <div><strong>গ্রাম:</strong> {stu.village}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}

      </div>
    </div>
  );
}

const inputStyle = { padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' };
