import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const { data, error } = await supabase.from('teachers').select('*').order('id', { ascending: true });
      if (error) throw error;
      setTeachers(data || []);
    } catch (err) {
      console.error("Error fetching teachers:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>👨‍🏫 আমাদের সম্মানিত শিক্ষক-শিক্ষিকাবৃন্দ</h1>
      <p style={styles.subtitle}>চিলমারী প্রি ক্যাডেট মাদ্রাসার অভিজ্ঞ ও নিবেদিতপ্রাণ শিক্ষকমণ্ডলী</p>

      {loading ? (
        <p style={{ textAlign: 'center', marginTop: '30px' }}>তথ্য লোড হচ্ছে...</p>
      ) : teachers.length === 0 ? (
        <div style={styles.emptyCard}>
          <p>বর্তমানে কোনো শিক্ষকের তথ্য যুক্ত করা হয়নি। শীঘ্রই ডাটা আপডেট করা হবে।</p>
        </div>
      ) : (
        <div style={styles.grid}>
          {teachers.map((t) => (
            <div key={t.id} style={styles.card}>
              <div style={styles.imgContainer}>
                <img 
                  src={t.photo_url || 'https://i.ibb.co/sample/avatar.jpg'} 
                  alt={t.name} 
                  style={styles.image} 
                />
              </div>
              <h3 style={styles.name}>{t.name}</h3>
              <span style={styles.badge}>{t.designation}</span>
              <p style={styles.info}><strong>বিষয়:</strong> {t.subject || 'N/A'}</p>
              <p style={styles.info}><strong>যোগ্যতা:</strong> {t.qualification || 'N/A'}</p>
              {t.mobile && (
                <a href={`tel:${t.mobile}`} style={styles.callBtn}>
                  📞 {t.mobile}
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { maxWidth: '1100px', margin: '0 auto', padding: '30px 15px', minHeight: '80vh' },
  title: { textAlignment: 'center', textAlign: 'center', color: '#0f392b', fontSize: '1.8rem', fontWeight: 'bold' },
  subtitle: { textAlign: 'center', color: '#64748b', marginBottom: '30px', fontSize: '0.95rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' },
  card: { backgroundColor: '#fff', borderRadius: '12px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' },
  imgContainer: { width: '120px', height: '140px', margin: '0 auto 15px', borderRadius: '8px', overflow: 'hidden', border: '3px solid #0f392b' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  name: { fontSize: '1.1rem', color: '#1e293b', fontWeight: 'bold', marginBottom: '5px' },
  badge: { display: 'inline-block', backgroundColor: '#e6f4ea', color: '#0f392b', padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '12px' },
  info: { fontSize: '0.88rem', color: '#475569', margin: '4px 0' },
  callBtn: { display: 'inline-block', marginTop: '12px', backgroundColor: '#0f392b', color: '#fff', padding: '6px 14px', borderRadius: '6px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 'bold' },
  emptyCard: { textAlign: 'center', padding: '40px', backgroundColor: '#fff', borderRadius: '8px', border: '1px dashed #ccc', color: '#666' }
};
