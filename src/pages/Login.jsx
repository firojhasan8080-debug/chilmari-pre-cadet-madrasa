import React, { useState } from 'react';
import { supabase } from '../config/supabaseClient';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const { user } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg('ইমেইল বা পাসওয়ার্ড ভুল হয়েছে! সঠিক তথ্য দিন।');
    } else {
      window.location.href = '/dashboard';
    }
    setLoading(false);
  };

  if (user) {
    return (
      <div style={styles.container}>
        <div style={styles.box}>
          <h2 style={{ color: '#0f392b', marginBottom: '10px' }}>আপনি ইতিমধ্যেই লগইন অবস্থায় আছেন!</h2>
          <p style={{ marginBottom: '20px' }}>ড্যাশবোর্ডে যেতে নিচের বাটনে ক্লিক করুন।</p>
          <a href="/dashboard" style={styles.btn}>ড্যাশবোর্ডে যান</a>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={{ color: '#0f392b', marginBottom: '20px' }}>🔑 পোর্টাল লগইন</h2>
        {errorMsg && <p style={styles.error}>{errorMsg}</p>}
        
        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>ইমেইল এড্রেস</label>
            <input 
              type="email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="example@gmail.com" 
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>পাসওয়ার্ড</label>
            <input 
              type="password" 
              required 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••" 
              style={styles.input}
            />
          </div>

          <button type="submit" disabled={loading} style={styles.btn}>
            {loading ? 'লগইন হচ্ছে...' : 'লগইন করুন'}
          </button>
        </form>

        <a href="/" style={styles.backLink}>← মূল ওয়েবসাইটে ফিরে যান</a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: '20px',
  },
  box: {
    background: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  inputGroup: {
    textAlign: 'left',
  },
  label: {
    fontSize: '0.85rem',
    fontWeight: '600',
    color: '#334155',
    marginBottom: '5px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '6px',
    border: '1px solid #cbd5e1',
    fontSize: '0.95rem',
    outline: 'none',
  },
  btn: {
    background: '#0f392b',
    color: '#ffffff',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-block',
  },
  error: {
    color: '#dc2626',
    backgroundColor: '#fef2f2',
    padding: '10px',
    borderRadius: '6px',
    fontSize: '0.85rem',
    marginBottom: '15px',
  },
  backLink: {
    display: 'block',
    marginTop: '20px',
    color: '#64748b',
    textDecoration: 'none',
    fontSize: '0.85rem',
  }
};
