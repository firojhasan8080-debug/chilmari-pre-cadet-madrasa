import React from 'react';

export default function Contact() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.imgWrapper}>
          <img 
            src="https://i.postimg.cc/gjktXPpH/1786523361131.jpg" 
            alt="প্রধান শিক্ষক ও পরিচালক" 
            style={styles.image} 
          />
        </div>

        <h2 style={styles.title}>প্রধান শিক্ষক ও পরিচালক</h2>
        <p style={styles.institution}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</p>

        <div style={styles.phoneBox}>
          <p style={styles.label}>যোগাযোগের মোবাইল নম্বর:</p>
          <a href="tel:+8801521553003" style={styles.phoneLink}>
            📞 +8801521-553003
          </a>
        </div>

        <div style={styles.addressBox}>
          <p style={{ fontWeight: 'bold', color: '#0f392b', marginBottom: '5px' }}>📍 ঠিকানা:</p>
          <p style={{ color: '#475569', fontSize: '0.9rem' }}>চিলমারী, কুড়িগ্রাম, বাংলাদেশ</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: '600px', margin: '40px auto', padding: '0 15px', minHeight: '70vh' },
  card: { backgroundColor: '#fff', borderRadius: '16px', padding: '30px 20px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' },
  imgWrapper: { width: '180px', height: '180px', margin: '0 auto 20px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #0f392b', boxShadow: '0 6px 15px rgba(15,57,43,0.2)' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  title: { fontSize: '1.4rem', color: '#0f392b', fontWeight: 'bold', margin: '10px 0 5px' },
  institution: { fontSize: '0.95rem', color: '#64748b', marginBottom: '25px' },
  phoneBox: { backgroundColor: '#f0fdf4', padding: '15px', borderRadius: '10px', border: '1px solid #bbf7d0', marginBottom: '20px' },
  label: { fontSize: '0.85rem', color: '#166534', marginBottom: '5px' },
  phoneLink: { fontSize: '1.2rem', color: '#0f392b', fontWeight: 'bold', textDecoration: 'none' },
  addressBox: { backgroundColor: '#f8fafc', padding: '12px', borderRadius: '8px' }
};
