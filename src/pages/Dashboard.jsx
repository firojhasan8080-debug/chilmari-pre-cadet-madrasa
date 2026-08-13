import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../config/supabaseClient';

export default function Dashboard() {
  const { profile, isSuperAdmin, isAdmin, isTeacher, loading } = useAuth();
  const [users, setUsers] = useState([]);
  const [notices, setNotices] = useState([]);
  const [newNotice, setNewNotice] = useState('');
  const [adCode, setAdCode] = useState('');
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (isSuperAdmin) {
      fetchUsers();
    }
    fetchNotices();
    fetchAdConfig();
  }, [isSuperAdmin]);

  // ১. ইউজারদের তথ্য আনা (Super Admin Only)
  const fetchUsers = async () => {
    const { data } = await supabase.from('profiles').select('*');
    if (data) setUsers(data);
  };

  // ২. নোটিশ ডাটা আনা
  const fetchNotices = async () => {
    // নোটিশ টেবিল না থাকলে হ্যান্ডেল করবে
    const { data } = await supabase.from('notices').select('*').order('created_at', { ascending: false });
    if (data) setNotices(data);
  };

  // ৩. এড কনফিগারেশন আনা
  const fetchAdConfig = async () => {
    const { data } = await supabase.from('ad_configuration').select('*').eq('slot_name', 'home_top_banner').single();
    if (data) setAdCode(data.ad_code || '');
  };

  // ইউজার রোল পরিবর্তন করা (Super Admin)
  const handleRoleChange = async (userId, newRole) => {
    const { error } = await supabase.from('profiles').update({ role: newRole }).eq('id', userId);
    if (!error) {
      alert("ইউজার রোল সফলভাবে আপডেট হয়েছে!");
      fetchUsers();
    } else {
      alert("রোল আপডেট করতে সমস্যা হয়েছে: " + error.message);
    }
  };

  // নতুন নোটিশ যুক্ত করা
  const handleAddNotice = async (e) => {
    e.preventDefault();
    if (!newNotice) return;
    const { error } = await supabase.from('notices').insert([{ content: newNotice }]);
    if (!error) {
      alert("নোটিশ সফলভাবে প্রকাশিত হয়েছে!");
      setNewNotice('');
      fetchNotices();
    } else {
      alert("নোটিশ সেভ করা যায়নি। SQL এ notices টেবিল আছে কিনা নিশ্চিত করুন।");
    }
  };

  // এড কোড সেভ করা (Super Admin)
  const handleSaveAd = async () => {
    const { error } = await supabase.from('ad_configuration').update({ ad_code: adCode }).eq('slot_name', 'home_top_banner');
    if (!error) {
      alert("বিজ্ঞাপন কোড সেভ হয়েছে!");
    } else {
      alert("বিজ্ঞাপন আপডেট করা যায়নি!");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login';
  };

  if (loading) return <div style={{ padding: '50px', textAlign: 'center' }}>লোড হচ্ছে...</div>;

  return (
    <div style={styles.wrapper}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2>🏫 কন্ট্রোল প্যানেল</h2>
        <div style={styles.userInfo}>
          <p style={{ fontWeight: 'bold' }}>{profile?.full_name || 'ইউজার'}</p>
          <span style={styles.roleBadge}>{profile?.role}</span>
        </div>

        <nav style={styles.menu}>
          <button style={activeTab === 'overview' ? styles.activeMenu : styles.menuBtn} onClick={() => setActiveTab('overview')}>📊 ওভারভিউ</button>
          <button style={activeTab === 'notices' ? styles.activeMenu : styles.menuBtn} onClick={() => setActiveTab('notices')}>📌 নোটিশ বোর্ড</button>
          {isSuperAdmin && (
            <>
              <button style={activeTab === 'users' ? styles.activeMenu : styles.menuBtn} onClick={() => setActiveTab('users')}>👥 ইউজার ও পারমিশন</button>
              <button style={activeTab === 'ads' ? styles.activeMenu : styles.menuBtn} onClick={() => setActiveTab('ads')}>⚙️ বিজ্ঞাপন সেটিংস</button>
            </>
          )}
        </nav>

        <button onClick={handleLogout} style={styles.logoutBtn}>🚪 লগআউট</button>
      </div>

      {/* Main Content Area */}
      <div style={styles.content}>
        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div>
            <h1>স্বাগতম, {profile?.full_name}! 👋</h1>
            <p style={{ margin: '10px 0 20px' }}>আপনি আপনার রোল অনুযায়ী ড্যাশবোর্ড কন্ট্রোল করতে পারছেন।</p>
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3>মোট ইউজার</h3>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '10px' }}>{users.length || 1}</p>
              </div>
              <div style={styles.card}>
                <h3>সক্রিয় নোটিশ</h3>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '10px' }}>{notices.length}</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: User Role & Permission Control (Super Admin Only) */}
        {activeTab === 'users' && isSuperAdmin && (
          <div>
            <h2>👥 ইউজার পারমিশন ও রোল ম্যানেজমেন্ট (A to Z Control)</h2>
            <p style={{ marginBottom: '15px' }}>কাকে কি পাওয়ার দেবেন এখান থেকে কন্ট্রোল করুন:</p>
            
            <table style={styles.table}>
              <thead>
                <tr style={{ background: '#0f392b', color: 'white' }}>
                  <th style={styles.th}>নাম</th>
                  <th style={styles.th}>ইমেইল</th>
                  <th style={styles.th}>বর্তমান রোল</th>
                  <th style={styles.th}>রোল পরিবর্তন করুন</th>
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u.id} style={{ borderBottom: '1px solid #ccc' }}>
                    <td style={styles.td}>{u.full_name || 'N/A'}</td>
                    <td style={styles.td}>{u.email || 'N/A'}</td>
                    <td style={styles.td}><strong>{u.role}</strong></td>
                    <td style={styles.td}>
                      <select 
                        value={u.role} 
                        onChange={(e) => handleRoleChange(u.id, e.target.value)}
                        style={styles.select}
                      >
                        <option value="USER">General User</option>
                        <option value="TEACHER">Teacher</option>
                        <option value="ADMIN">Admin</option>
                        <option value="SUPER_ADMIN">Super Admin</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 3: Notice Board Management */}
        {activeTab === 'notices' && (
          <div>
            <h2>📌 নোটিশ বোর্ড কন্ট্রোল</h2>
            <form onSubmit={handleAddNotice} style={{ margin: '20px 0' }}>
              <textarea 
                rows="3" 
                value={newNotice} 
                onChange={(e) => setNewNotice(e.target.value)} 
                placeholder="নতুন নোটিশ লিখুন..."
                style={styles.textarea}
              />
              <button type="submit" style={styles.btn}>প্রকাশ করুন</button>
            </form>

            <h3>প্রকাশিত নোটিশসমূহ:</h3>
            <div style={{ marginTop: '10px' }}>
              {notices.map((n, idx) => (
                <div key={idx} style={{ background: 'white', padding: '15px', borderRadius: '6px', marginBottom: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                  <p>{n.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Ad & Developer Control (Super Admin Only) */}
        {activeTab === 'ads' && isSuperAdmin && (
          <div>
            <h2>⚙️ বিজ্ঞাপন কনফিগারেশন</h2>
            <div style={{ marginTop: '15px' }}>
              <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '5px' }}>হোমপেজ টপ ব্যানার অ্যাড কোড (HTML / AdSense Script):</label>
              <textarea 
                rows="5" 
                value={adCode} 
                onChange={(e) => setAdCode(e.target.value)} 
                placeholder="অ্যাড Script/HTML পেস্ট করুন..."
                style={styles.textarea}
              />
              <button onClick={handleSaveAd} style={styles.btn}>এডভার্টাইজমেন্ট সেভ করুন</button>
            </div>
          </div>
        )}

        <div style={{ marginTop: '40px' }}>
          <a href="/" style={{ color: '#0f392b', fontWeight: 'bold', textDecoration: 'none' }}>← মূল ওয়েবসাইটে ফিরে যান</a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: { display: 'flex', minHeight: '100vh', backgroundColor: '#f1f5f9' },
  sidebar: { width: '260px', backgroundColor: '#0f392b', color: 'white', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' },
  userInfo: { backgroundColor: '#1b4d3e', padding: '10px', borderRadius: '6px' },
  roleBadge: { backgroundColor: '#10b981', color: 'white', fontSize: '0.7rem', padding: '2px 6px', borderRadius: '10px', fontWeight: 'bold' },
  menu: { display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' },
  menuBtn: { background: 'transparent', color: '#cbd5e1', border: 'none', padding: '10px', textAlign: 'left', cursor: 'pointer', borderRadius: '5px' },
  activeMenu: { background: '#10b981', color: 'white', border: 'none', padding: '10px', textAlign: 'left', cursor: 'pointer', borderRadius: '5px', fontWeight: 'bold' },
  logoutBtn: { marginTop: 'auto', backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', cursor: 'pointer' },
  content: { flex: 1, padding: '30px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginTop: '15px' },
  card: { background: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' },
  table: { width: '100%', borderCollapse: 'collapse', marginTop: '15px', background: 'white', borderRadius: '8px', overflow: 'hidden' },
  th: { padding: '12px', textAlign: 'left' },
  td: { padding: '12px' },
  select: { padding: '6px 10px', borderRadius: '4px', border: '1px solid #ccc' },
  textarea: { width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', marginBottom: '10px' },
  btn: { background: '#0f392b', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }
};
