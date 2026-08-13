import React, { useEffect, useState } from 'react';
import { supabase } from '../../config/supabaseClient';

export default function DesignerCredit() {
  const [credit, setCredit] = useState(null);

  useEffect(() => {
    fetchCredit();
  }, []);

  const fetchCredit = async () => {
    const { data } = await supabase
      .from('designer_credit')
      .select('*')
      .eq('id', 1)
      .single();

    if (data) setCredit(data);
  };

  if (!credit || !credit.is_visible) return null;

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img 
          src={credit.image_url} 
          alt="MD Firoj Hasan" 
          style={styles.avatar} 
        />
        <div style={styles.info}>
          <span style={styles.text}>{credit.credit_text}</span>
          <p style={styles.subText}>যেকোনো পারসোনাল বা প্রাতিষ্ঠানিক ওয়েবসাইট বা App বানাতে যোগাযোগ করুন</p>
          <div style={styles.buttonGroup}>
            {credit.whatsapp_number && (
              <a 
                href={`https://wa.me/88${credit.whatsapp_number}`} 
                target="_blank" 
                rel="noreferrer" 
                style={{...styles.btn, backgroundColor: '#25D366'}}
              >
                📱 WhatsApp ({credit.whatsapp_number})
              </a>
            )}
            {credit.facebook_url && (
              <a 
                href={credit.facebook_url} 
                target="_blank" 
                rel="noreferrer" 
                style={{...styles.btn, backgroundColor: '#1877F2'}}
              >
                🌐 Facebook
              </a>
            )}
            <button 
              onClick={() => alert("লাইভ চ্যাট সার্ভিস অতি শীঘ্রই যুক্ত হচ্ছে!")}
              style={{...styles.btn, backgroundColor: '#059669'}}
            >
              💬 Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '25px 15px',
    backgroundColor: '#0f172a',
    borderTop: '1px solid #1e293b',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '900px',
  },
  avatar: {
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #10b981',
    boxShadow: '0 0 15px rgba(16, 185, 129, 0.5)',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  text: {
    color: '#f8fafc',
    fontSize: '1rem',
    fontWeight: '700',
  },
  subText: {
    color: '#94a3b8',
    fontSize: '0.8rem',
  },
  buttonGroup: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    marginTop: '4px',
  },
  btn: {
    color: '#ffffff',
    padding: '6px 14px',
    borderRadius: '20px',
    textDecoration: 'none',
    fontSize: '0.8rem',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
  }
};
