import React from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../config/supabaseClient';

export default function Dashboard() {
  const { user, profile, isSuperAdmin, isAdmin, isTeacher, loading } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <h3>তথ্য লোড হচ্ছে, অনুগ্রহ করে অপেক্ষা করুন...</h3>
      </div>
    );
  }

  return (
    <div style={styles.wrapper}>
      {/* Sidebar / Top Nav */}
      <div style={styles.sidebar}>
        <h2>🏫 কন্ট্রোল প্যানেল</h2>
        <div style={styles.userInfo}>
          <p style={{ fontWeight: 'bold' }}>{profile?.full_name || 'ইউজার'}</p>
          <span style={styles.roleBadge}>
            {isSuperAdmin ? 'সুপার এডমিন' : isAdmin ? 'এডমিন' : isTeacher ? 'শিক্ষক' : 'সাধারণ ইউজার'}
          </span>
        </div>
        <button onClick={handleLogout} style={styles.logoutBtn}>🚪 লগআউট</button>
      </div>

      {/* Main Content Area */}
      <div style={styles.content}>
        <div style={styles.header}>
          <h1>স্বাগতম, {profile?.full_name || 'ইউজার'}! 👋</h1>
          <p>আপনার রোল: <strong>{profile?.role || 'GUEST'}</strong></p>
        </div>

        {/* Dynamic Admin Cards */}
        <div style={styles.grid}>
          {/* Card 1: Notice Management */}
          <div style={styles.card}>
            <h3>📌 নোটিশ ব্যবস্থাপনা</h3>
            <p>ওয়েবসাইটের নোটিশ যুক্ত বা এডিট করুন।</p>
            <button style={styles.cardBtn} onClick={() => alert("নোটিশ মডিউল চালু হচ্ছে...")}>নোটিশ লিখুন</button>
          </div>

          {/* Card 2: Student/Teacher Info */}
          {(isAdmin || isTeacher) && (
            <div style={styles.card}>
              <h3>👨‍🎓 শিক্ষার্থী ও শিক্ষক তালিকা</h3>
              <p>শিক্ষার্থী ও শিক্ষকদের তথ্য দেখুন ও আপডেট করুন।</p>
              <button style={styles.cardBtn} onClick={() => alert("ডাটাবেজ মডিউল চালু হচ্ছে...")}>তালিকা দেখুন</button>
            </div>
          )}

          {/* Card 3: Ad & Developer Credit Control (Super Admin Only) */}
          {isSuperAdmin && (
            <div style={{ ...styles.card, borderTop: '4px solid #f59e0b' }}>
              <h3>⚙️ এডমিন ও বিজ্ঞাপন সেটিংস</h3>
              <p>ওয়েবসাইটের বিজ্ঞাপন স্লট ও ডেভলপার ক্রেডিট কনফিগার করুন।</p>
              <button style={{ ...styles.cardBtn, background: '#f59e0b' }} onClick={() => alert("এডমিন সেটিংস অপশন উন্মুক্ত হচ্ছে...")}>সেটিংস কনফিগার</button>
            </div>
          )}
        </div>

        <div style={{ marginTop: '30px' }}>
          <a href="/" style={{ color: '#0f392b', fontWeight: 'bold', textDecoration: 'none' }}>
            ← মূল ওয়েবসাইটে ফিরে যান
          </a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh',
    backgroundColor: '#f1f5f9',
    flexWrap: 'wrap',
  },
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    color: '#0f392b',
  },
  sidebar: {
    width: '260px',
    backgroundColor: '#0f392b',
    color: 'white',
    padding: '25px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  userInfo: {
    backgroundColor: '#1b4d3e',
    padding: '12px',
    borderRadius: '8px',
  },
  roleBadge: {
    display: 'inline-block',
    marginTop: '5px',
    backgroundColor: '#10b981',
    color: 'white',
    fontSize: '0.75rem',
    padding: '2px 8px',
    borderRadius: '12px',
    fontWeight: 'bold',
  },
  logoutBtn: {
    marginTop: 'auto',
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    padding: '10px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: '30px',
    minWidth: '300px',
  },
  header: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    marginBottom: '25px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
    borderTop: '4px solid #10b981',
  },
  cardBtn: {
    marginTop: '15px',
    backgroundColor: '#0f392b',
    color: 'white',
    border: 'none',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};
