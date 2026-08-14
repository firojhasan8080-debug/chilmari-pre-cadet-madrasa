import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';

export default function Admission() {
  const [admissionOpen, setAdmissionOpen] = useState(true);
  const [closedMessage, setClosedMessage] = useState("পর্যাপ্ত পরিমাণ ছাত্র-ছাত্রী বুকিং হওয়ায় আর কোনো সিট খালি নেই।");
  const [notice, setNotice] = useState("আগামী ১ জানুয়ারি থেকে ভর্তি চলছে। আপনার সন্তানকে আমাদের প্রি-ক্যাডেট মাদ্রাসায় ভর্তি করতে এখনই আবেদন করুন।");
  
  // ফর্ম স্টেট
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('Play');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [phone, setPhone] = useState('');
  const [studentPhotoUrl, setStudentPhotoUrl] = useState('');
  const [birthCertUrl, setBirthCertUrl] = useState('');
  const [fatherNidUrl, setFatherNidUrl] = useState('');
  const [submitting, setSubmitting] = useState(false);

  // ক্যামেরা ক্যাপচার রিলেটেড স্টেট
  const [capturingFor, setCapturingFor] = useState(null); // 'student' অথবা 'nid'
  const videoRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);

  const classesList = ['Play', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  useEffect(() => {
    fetchAdmissionSettings();
  }, []);

  const fetchAdmissionSettings = async () => {
    try {
      const { data } = await supabase.from('site_settings').select('*');
      if (data) {
        const openSetting = data.find(item => item.key === 'admission_enabled');
        const msgSetting = data.find(item => item.key === 'admission_closed_message');
        const noticeSetting = data.find(item => item.key === 'admission_notice');

        if (openSetting) setAdmissionOpen(openSetting.value === 'true' || openSetting.value === true);
        if (msgSetting) setClosedMessage(msgSetting.value);
        if (noticeSetting) setNotice(noticeSetting.value);
      }
    } catch (err) {
      console.error('Error fetching settings:', err);
    }
  };

  // ক্যামেরা অন করার ফাংশন (Browser MediaDevices API)
  const startCamera = async (type) => {
    setCapturingFor(type);
    setCameraActive(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      alert('ক্যামেরা চালু করা সম্ভব হয়নি: ' + err.message);
      setCameraActive(false);
    }
  };

  // ছবি ক্যাপচার করার ফাংশন
  const capturePhoto = () => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 300;
    canvas.height = video.videoHeight || 300;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');

    if (capturingFor === 'student') {
      setStudentPhotoUrl(dataUrl);
    } else if (capturingFor === 'nid') {
      setFatherNidUrl(dataUrl);
    }

    stopCamera();
  };

  // ক্যামেরা বন্ধ করার ফাংশন
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
    }
    setCameraActive(false);
    setCapturingFor(null);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { error } = await supabase.from('admission_applications').insert([
        {
          student_name: studentName,
          class: studentClass,
          father_name: fatherName,
          mother_name: motherName,
          phone: phone,
          student_photo_url: studentPhotoUrl || 'https://i.postimg.cc/gjktXPpH/1786523361131.jpg',
          father_nid_url: fatherNidUrl || 'N/A',
          birth_certificate_url: birthCertUrl || 'N/A',
          status: 'pending'
        }
      ]);

      if (error) throw error;

      alert('আপনার ভর্তি আবেদন সফলভাবে জমা হয়েছে! খুব শীঘ্রই মাদরাসা কর্তৃপক্ষ আপনার সাথে যোগাযোগ করবে।');
      setStudentName('');
      setFatherName('');
      setMotherName('');
      setPhone('');
      setStudentPhotoUrl('');
      setFatherNidUrl('');
      setBirthCertUrl('');
    } catch (err) {
      alert('আবেদন জমা দিতে সমস্যা হয়েছে: ' + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ fontFamily: "'Hind Siliguri', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* টপ হেডার */}
      <div style={{ backgroundColor: '#14532d', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>📝 অনলাইন ভর্তি আবেদন</h1>
        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#bbf7d0' }}>চিলমারী প্রি ক্যাডেট মাদ্রাসা</p>
        <div style={{ marginTop: '15px' }}>
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', background: '#16a34a', padding: '6px 14px', borderRadius: '6px', fontSize: '14px' }}>← হোমপেজে ফিরে যান</Link>
        </div>
      </div>

      <div style={{ maxWidth: '800px', margin: '30px auto', padding: '0 20px' }}>
        
        {/* নোটিশ বক্স */}
        <div style={{ background: '#fef08a', borderLeft: '5px solid #eab308', padding: '15px', borderRadius: '8px', marginBottom: '25px', color: '#713f12', fontSize: '15px', lineHeight: '1.6' }}>
          <strong>📌 জরুরি নোটিশ:</strong> {notice}
        </div>

        {/* যদি ভর্তি বন্ধ থাকে */}
        {!admissionOpen ? (
          <div style={{ background: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ color: '#dc2626', marginBottom: '15px' }}>⚠️ ভর্তি কার্যক্রম সাময়িকভাবে বন্ধ রয়েছে</h2>
            <p style={{ fontSize: '16px', color: '#334155', lineHeight: '1.6' }}>{closedMessage}</p>
          </div>
        ) : (
          /* ভর্তি ফর্ম */
          <div style={{ background: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <h2 style={{ color: '#14532d', marginBottom: '20px', borderBottom: '2px solid #f1f5f9', paddingBottom: '10px' }}>ভর্তি ফরম পূরণ করুন</h2>
            
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <label style={labelStyle}>ছাত্র/ছাত্রীর নাম *</label>
                <input type="text" value={studentName} onChange={e => setStudentName(e.target.value)} required placeholder="পূর্ণ নাম লিখুন" style={inputStyle} />
              </div>

              <div>
                <label style={labelStyle}>কোন শ্রেণীতে ভর্তি হতে ইচ্ছুক? *</label>
                <select value={studentClass} onChange={e => setStudentClass(e.target.value)} style={inputStyle}>
                  {classesList.map(c => <option key={c} value={c}>শ্রেণি: {c}</option>)}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div>
                  <label style={labelStyle}>বাবার নাম *</label>
                  <input type="text" value={fatherName} onChange={e => setFatherName(e.target.value)} required placeholder="বাবার নাম" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>মায়ের নাম *</label>
                  <input type="text" value={motherName} onChange={e => setMotherName(e.target.value)} required placeholder="মায়ের নাম" style={inputStyle} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>মোবাইল নম্বর (যোগাযোগের জন্য) *</label>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} required placeholder="01XXXXXXXXX" style={inputStyle} />
              </div>

              {/* ক্যামেরা ক্যাপচার সেকশন: ছাত্রের ছবি */}
              <div>
                <label style={labelStyle}>ছাত্র/ছাত্রীর পাসপোর্ট সাইজ ছবি *</label>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '5px' }}>
                  <button type="button" onClick={() => startCamera('student')} style={cameraBtnStyle}>📷 ক্যামেরা দিয়ে ছবি তুলুন</button>
                  {studentPhotoUrl && <span style={{ color: '#16a34a', fontWeight: 'bold' }}>✓ ছবি ক্যাচড হয়েছে</span>}
                </div>
              </div>

              {/* ক্যামেরা ক্যাপচার সেকশন: বাবার NID */}
              <div>
                <label style={labelStyle}>বাবার এনআইডি (NID) কার্ডের ছবি *</label>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '5px' }}>
                  <button type="button" onClick={() => startCamera('nid')} style={cameraBtnStyle}>📷 এনআইডি ছবি তুলুন</button>
                  {fatherNidUrl && <span style={{ color: '#16a34a', fontWeight: 'bold' }}>✓ এনআইডি ক্যাচড হয়েছে</span>}
                </div>
              </div>

              <div>
                <label style={labelStyle}>জন্ম নিবন্ধন সনদপত্রের লিংক (যদি থাকে)</label>
                <input type="text" value={birthCertUrl} onChange={e => setBirthCertUrl(e.target.value)} placeholder="Birth Certificate URL" style={inputStyle} />
              </div>

              <button type="submit" disabled={submitting} style={{ background: '#16a34a', color: 'white', padding: '12px', border: 'none', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>
                {submitting ? 'জমা দেওয়া হচ্ছে...' : 'আবেদন সাবমিট করুন'}
              </button>
            </form>
          </div>
        )}

        {/* ক্যামেরা লাইভ প্রিভিউ মডাল */}
        {cameraActive && (
          <div style={modalStyle}>
            <div style={modalContentStyle}>
              <h3>ক্যামেরা দিয়ে ছবি তুলুন ({capturingFor === 'student' ? 'ছাত্র/ছাত্রী' : 'বাবার NID'})</h3>
              <video ref={videoRef} autoPlay playsInline style={{ width: '100%', maxHeight: '300px', background: '#000', borderRadius: '8px' }} />
              <div style={{ display: 'flex', gap: '10px', marginTop: '15px', justifyContent: 'center' }}>
                <button type="button" onClick={capturePhoto} style={{ background: '#16a34a', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>ক্যাপচার করুন</button>
                <button type="button" onClick={stopCamera} style={{ background: '#dc2626', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>বন্ধ করুন</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

const labelStyle = { display: 'block', fontWeight: 'bold', marginBottom: '5px', fontSize: '14px', color: '#334155' };
const inputStyle = { width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' };
const cameraBtnStyle = { background: '#2563eb', color: 'white', border: 'none', padding: '8px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: '600', fontSize: '13px' };
const modalStyle = { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 };
const modalContentStyle = { background: 'white', padding: '20px', borderRadius: '10px', width: '90%', maxWidth: '400px', textAlign: 'center' };
