import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';

const CLASSES = [
  { key: 'PLAY', label: 'প্লে' },
  { key: 'CLASS_1', label: '১ম শ্রেণি' },
  { key: 'CLASS_2', label: '২য় শ্রেণি' },
  { key: 'CLASS_3', label: '৩য় শ্রেণি' },
  { key: 'CLASS_4', label: '৪র্থ শ্রেণি' },
  { key: 'CLASS_5', label: '৫ম শ্রেণি' },
  { key: 'CLASS_6', label: '৬ষ্ঠ শ্রেণি' },
  { key: 'CLASS_7', label: '৭ম শ্রেণি' },
  { key: 'CLASS_8', label: '৮ম শ্রেণি' },
  { key: 'CLASS_9', label: '৯ম শ্রেণি' },
  { key: 'CLASS_10', label: '১০ম শ্রেণি' }
];

export default function Students() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const { data, error } = await supabase.from('students').select('*');
      if (error) throw error;
      setStudents(data || []);
    } catch (err) {
      console.error("Error fetching students:", err.message);
    } finally {
      setLoading(false);
    }
  };

  // Stats Calculations
  const totalStudents = students.length;
  const totalMale = students.filter(s => s.gender === 'MALE').length;
  const totalFemale = students.filter(s => s.gender === 'FEMALE').length;

  return (
    <div style={styles.container}>
      {/* Header & Total Stats Counter */}
      <h1 style={styles.title}>🎓 ছাত্র-ছাত্রী পোর্টাল</h1>
      <p style={styles.subtitle}>আমাদের সেরা মেধাবী শিক্ষার্থীদের তথ্য ও র‍্যাঙ্কিং</p>

      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <h3>{totalStudents}</h3>
          <p>মোট ছাত্র-ছাত্রী</p>
        </div>
        <div style={{ ...styles.statCard, borderColor: '#3b82f6' }}>
          <h3 style={{ color: '#1d4ed8' }}>{totalMale}</h3>
          <p>মোট ছাত্র</p>
        </div>
        <div style={{ ...styles.statCard, borderColor: '#ec4899' }}>
          <h3 style={{ color: '#be185d' }}>{totalFemale}</h3>
          <p>মোট ছাত্রী</p>
        </div>
      </div>

      {/* Classwise Sections */}
      {loading ? (
        <p style={{ textAlign: 'center', margin: '40px 0' }}>তথ্য লোড হচ্ছে...</p>
      ) : (
        CLASSES.map((cls) => {
          const classStudents = students
            .filter((s) => s.class_name === cls.key && s.rank_position)
            .sort((a, b) => a.rank_position - b.rank_position)
            .slice(0, 3); // Top 3

          return (
            <div key={cls.key} style={styles.classSection}>
              <h2 style={styles.classTitle}>📚 {cls.label}</h2>

              {classStudents.length === 0 ? (
                <p style={styles.noData}>এই শ্রেণিতে এখনো কোনো কৃতি শিক্ষার্থীর ডাটা এন্ট্রি করা হয়নি।</p>
              ) : (
                <div style={styles.studentGrid}>
                  {classStudents.map((st) => (
                    <div key={st.id} style={styles.card}>
                      {/* Premium Rank Badge */}
                      <div style={getBadgeStyle(st.rank_position)}>
                        {st.rank_position === 1 && '🥇 1'}
                        {st.rank_position === 2 && '🥈 2'}
                        {st.rank_position === 3 && '🥉 3'}
                      </div>

                      <div style={styles.imgWrapper}>
                        <img 
                          src={st.photo_url || 'https://i.ibb.co/sample/avatar.jpg'} 
                          alt={st.name} 
                          style={styles.image} 
                        />
                      </div>

                      <h3 style={styles.stName}>{st.name}</h3>
                      <p style={styles.stDetail}><strong>পিতা:</strong> {st.father_name || 'N/A'}</p>
                      <p style={styles.stDetail}><strong>মাতা:</strong> {st.mother_name || 'N/A'}</p>
                      <p style={styles.stDetail}><strong>গ্রাম:</strong> {st.address || 'N/A'}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

// Badge Color Generator
const getBadgeStyle = (rank) => {
  const base = {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '4px 14px',
    borderRadius: '20px',
    fontWeight: 'bold',
    fontSize: '0.85rem',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    zIndex: 10
  };

  if (rank === 1) return { ...base, backgroundColor: '#d97706', border: '2px solid #fef08a' }; // Gold
  if (rank === 2) return { ...base, backgroundColor: '#475569', border: '2px solid #e2e8f0' }; // Silver
  if (rank === 3) return { ...base, backgroundColor: '#b45309', border: '2px solid #ffedd5' }; // Bronze
  return base;
};

const styles = {
  container: { maxWidth: '1100px', margin: '0 auto', padding: '30px 15px' },
  title: { textAlign: 'center', color: '#0f392b', fontSize: '1.8rem', fontWeight: 'bold' },
  subtitle: { textAlign: 'center', color: '#64748b', marginBottom: '25px', fontSize: '0.95rem' },
  statsContainer: { display: 'flex', gap: '15px', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' },
  statCard: { backgroundColor: '#fff', padding: '15px 25px', borderRadius: '12px', borderLeft: '5px solid #10b981', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', textAlign: 'center', minWidth: '130px' },
  classSection: { marginBottom: '35px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' },
  classTitle: { color: '#0f392b', fontSize: '1.2rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '8px', marginBottom: '25px' },
  studentGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '25px', marginTop: '15px' },
  card: { position: 'relative', backgroundColor: '#f8fafc', padding: '25px 15px 15px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' },
  imgWrapper: { width: '90px', height: '110px', margin: '10px auto 12px', borderRadius: '8px', overflow: 'hidden', border: '2px solid #0f392b' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  stName: { fontSize: '1rem', color: '#0f392b', fontWeight: 'bold', marginBottom: '8px' },
  stDetail: { fontSize: '0.82rem', color: '#475569', margin: '3px 0' },
  noData: { color: '#94a3b8', fontSize: '0.88rem', fontStyle: 'italic', textAlign: 'center' }
};
