import React, { useState, useRef } from 'react';
import { supabase } from '../config/supabaseClient';

export default function Admission() {
  const [step, setStep] = useState(1); // 1: Form, 2: Camera Capture, 3: OTP Verification
  const [activeCamField, setActiveCamField] = useState(''); // 'student', 'birthCert', 'fatherNid'
  
  // Form Data
  const [studentName, setStudentName] = useState('');
  const [targetClass, setTargetClass] = useState('PLAY');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  
  // Captured Image URLs
  const [studentPhoto, setStudentPhoto] = useState(null);
  const [birthCertPhoto, setBirthCertPhoto] = useState(null);
  const [fatherNidPhoto, setFatherNidPhoto] = useState(null);

  // OTP Verification States
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Camera Reference
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  // --- 📸 CAMERA LOGIC ---
  const startCamera = async (field) => {
    setActiveCamField(field);
    setStep(2);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: field === 'student' ? 'user' : 'environment' },
        audio: false
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      alert("ক্যামেরার অনুমতি প্রয়োজন অথবা আপনার ডিভাইসে ক্যামেরা পাওয়া যায়নি।");
      setStep(1);
    }
  };

  const capturePhoto = () => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg');

    if (activeCamField === 'student') setStudentPhoto(dataUrl);
    if (activeCamField === 'birthCert') setBirthCertPhoto(dataUrl);
    if (activeCamField === 'fatherNid') setFatherNidPhoto(dataUrl);

    stopCamera();
    setStep(1);
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
  };

  // --- 📱 OTP & SUBMIT LOGIC ---
  const handleInitiateVerification = (e) => {
    e.preventDefault();
    if (!studentName || !fatherName || !motherName || !mobileNumber) {
      alert("দয়া করে সকল প্রয়োজনীয় তথ্য সঠিকভাৱে লিখুন।");
      return;
    }
    if (!studentPhoto || !birthCertPhoto || !fatherNidPhoto) {
      alert("দয়া করে ক্যামেরা দিয়ে শিক্ষার্থীর ছবি, জন্ম নিবন্ধনের ছবি এবং পিতার NID-এর ছবি তুলুন।");
      return;
    }
    if (mobileNumber.length < 11) {
      alert("দয়া করে সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন।");
      return;
    }

    // Generate Mock 5-Digit OTP for Testing (e.g. 12345)
    const randomOtp = Math.floor(10000 + Math.random() * 90000).toString();
    setGeneratedOtp(randomOtp);
    alert(`আপনার যাচাইকরণ কোড (OTP) হলো: ${randomOtp}`);
    setStep(3);
  };

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto Focus Next Input Box
    if (value && index < 4) {
      document.getElementById(`otp-input-${index + 1}`)?.focus();
    }
  };

  const handleFinalSubmit = async () => {
    const enteredOtp = otp.join('');
    if (enteredOtp !== generatedOtp) {
      alert("OTP সঠিক নয়! দয়া করে সঠিক কোড দিন।");
      return;
    }

    setIsSubmitting(true);
    try {
      // Direct base64/URL save to admission_applications table
      const { error } = await supabase.from('admission_applications').insert([{
        student_name: studentName,
        target_class: targetClass,
        father_name: fatherName,
        mother_name: motherName,
        mobile_number: mobileNumber,
        student_photo_url: studentPhoto,
        birth_cert_url: birthCertPhoto,
        father_nid_url: fatherNidPhoto,
        is_mobile_verified: true,
        status: 'Pending'
      }]);

      if (error) throw error;

      alert("🎉 আপনার ভর্তি আবেদন সফলভাবে জমা হয়েছে! কর্তৃপক্ষ শীঘ্রই যোগাযোগ করবে।");
      window.location.href = '/';
    } catch (err) {
      alert("আবেদন জমা দিতে সমস্যা হয়েছে: " + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📝 অনলাইনেই ভর্তি আবেদন</h1>
      <p style={styles.subtitle}>চিলমারী প্রি ক্যাডেট মাদ্রাসায় আপনার সন্তানকে ভর্তি করতে নিচের ফর্মটি পূরণ করুন</p>

      {/* STEP 1: FORM INPUTS */}
      {step === 1 && (
        <form onSubmit={handleInitiateVerification} style={styles.formCard}>
          <h3 style={styles.sectionHeader}>১. শিক্ষার্থীর তথ্য</h3>
          
          <div style={styles.field}>
            <label style={styles.label}>শিক্ষার্থীর নাম *</label>
            <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} required style={styles.input} placeholder="পূর্ণ নাম লিখুন" />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>ভর্তির শ্রেণি *</label>
            <select value={targetClass} onChange={(e) => setTargetClass(e.target.value)} style={styles.input}>
              <option value="PLAY">প্লে</option>
              <option value="CLASS_1">১ম শ্রেণি</option>
              <option value="CLASS_2">২য় শ্রেণি</option>
              <option value="CLASS_3">৩য় শ্রেণি</option>
              <option value="CLASS_4">৪র্থ শ্রেণি</option>
              <option value="CLASS_5">৫ম শ্রেণি</option>
              <option value="CLASS_6">৬ষ্ঠ শ্রেণি</option>
              <option value="CLASS_7">৭ম শ্রেণি</option>
              <option value="CLASS_8">৮ম শ্রেণি</option>
              <option value="CLASS_9">৯ম শ্রেণি</option>
              <option value="CLASS_10">১০ম শ্রেণি</option>
            </select>
          </div>

          {/* Camera Buttons for Photos */}
          <div style={styles.camGrid}>
            <div style={styles.camCard}>
              <p style={styles.camLabel}>শিক্ষার্থীর ছবি *</p>
              {studentPhoto ? <img src={studentPhoto} alt="Student" style={styles.previewImg} /> : null}
              <button type="button" onClick={() => startCamera('student')} style={styles.camBtn}>📸 ক্যামেরা দিয়ে ছবি তুলুন</button>
            </div>

            <div style={styles.camCard}>
              <p style={styles.camLabel}>জন্ম নিবন্ধনের ছবি *</p>
              {birthCertPhoto ? <img src={birthCertPhoto} alt="Birth Cert" style={styles.previewImg} /> : null}
              <button type="button" onClick={() => startCamera('birthCert')} style={styles.camBtn}>📸 ক্যামেরা দিয়ে ছবি তুলুন</button>
            </div>
          </div>

          <h3 style={{ ...styles.sectionHeader, marginTop: '30px' }}>২. অভিভাবকের তথ্য</h3>

          <div style={styles.field}>
            <label style={styles.label}>পিতার নাম *</label>
            <input type="text" value={fatherName} onChange={(e) => setFatherName(e.target.value)} required style={styles.input} />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>মাতার নাম *</label>
            <input type="text" value={motherName} onChange={(e) => setMotherName(e.target.value)} required style={styles.input} />
          </div>

          <div style={styles.camCard}>
            <p style={styles.camLabel}>পিতার NID কার্ডের ছবি *</p>
            {fatherNidPhoto ? <img src={fatherNidPhoto} alt="NID" style={styles.previewImg} /> : null}
            <button type="button" onClick={() => startCamera('fatherNid')} style={styles.camBtn}>📸 NID-এর ছবি তুলুন</button>
          </div>

          <div style={{ ...styles.field, marginTop: '20px' }}>
            <label style={styles.label}>যোগাযোগের মোবাইল নম্বর *</label>
            <input type="tel" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} required style={styles.input} placeholder="017XXXXXXXX" />
          </div>

          <button type="submit" style={styles.submitBtn}>নম্বর যাচাই ও পরবর্তী ধাপ ➔</button>
        </form>
      )}

      {/* STEP 2: LIVE CAMERA SCREEN */}
      {step === 2 && (
        <div style={styles.cameraScreen}>
          <h3>📷 ছবি ধারণ করুন</h3>
          <video ref={videoRef} autoPlay playsInline style={styles.videoBox}></video>
          <div style={styles.camActions}>
            <button onClick={capturePhoto} style={styles.captureBtn}>🔘 ছবি তুলুন</button>
            <button onClick={() => { stopCamera(); setStep(1); }} style={styles.cancelBtn}>বাতিল করুন</button>
          </div>
        </div>
      )}

      {/* STEP 3: 5-DIGIT OTP VERIFICATION SCREEN */}
      {step === 3 && (
        <div style={styles.otpCard}>
          <h2>📱 মোবাইল নম্বর যাচাইকরণ</h2>
          <p style={{ color: '#64748b', margin: '10px 0 20px', fontSize: '0.9rem' }}>
            <strong>{mobileNumber}</strong> নম্বরে পাঠানো ৫-সংখ্যার যাচাইকরণ কোডটি নিচে দিন:
          </p>

          <div style={styles.otpInputGroup}>
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="number"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                style={styles.otpBox}
              />
            ))}
          </div>

          <button onClick={handleFinalSubmit} disabled={isSubmitting} style={styles.finalSubmitBtn}>
            {isSubmitting ? 'আবেদন সেভ হচ্ছে...' : 'আবেদন চূড়ান্তভাবে জমা দিন ✅'}
          </button>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { maxWidth: '700px', margin: '0 auto', padding: '30px 15px', minHeight: '80vh' },
  title: { textAlign: 'center', color: '#0f392b', fontSize: '1.8rem', fontWeight: 'bold' },
  subtitle: { textAlign: 'center', color: '#64748b', marginBottom: '25px', fontSize: '0.9rem' },
  formCard: { backgroundColor: '#fff', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.06)', border: '1px solid #e2e8f0' },
  sectionHeader: { color: '#0f392b', fontSize: '1.1rem', borderBottom: '2px solid #e2e8f0', paddingBottom: '6px', marginBottom: '15px' },
  field: { marginBottom: '15px' },
  label: { display: 'block', fontWeight: 'bold', fontSize: '0.88rem', color: '#334155', marginBottom: '5px' },
  input: { width: '100%', padding: '10px 12px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem' },
  camGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px', margin: '15px 0' },
  camCard: { border: '1px dashed #0f392b', padding: '15px', borderRadius: '8px', textAlign: 'center', backgroundColor: '#f0fdf4' },
  camLabel: { fontWeight: 'bold', fontSize: '0.85rem', color: '#0f392b', marginBottom: '8px' },
  camBtn: { backgroundColor: '#0f392b', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '6px', fontSize: '0.82rem', cursor: 'pointer', fontWeight: 'bold' },
  previewImg: { width: '80px', height: '80px', objectFit: 'cover', borderRadius: '6px', marginBottom: '8px', border: '1px solid #ccc' },
  submitBtn: { width: '100%', backgroundColor: '#10b981', color: '#fff', border: 'none', padding: '12px', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', marginTop: '20px' },
  cameraScreen: { backgroundColor: '#000', color: '#fff', padding: '20px', borderRadius: '12px', textAlign: 'center' },
  videoBox: { width: '100%', maxHeight: '350px', borderRadius: '8px', margin: '15px 0', backgroundColor: '#222' },
  camActions: { display: 'flex', gap: '15px', justifyContent: 'center' },
  captureBtn: { backgroundColor: '#10b981', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '30px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' },
  cancelBtn: { backgroundColor: '#ef4444', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '30px', cursor: 'pointer' },
  otpCard: { backgroundColor: '#fff', padding: '35px 20px', borderRadius: '12px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0' },
  otpInputGroup: { display: 'flex', gap: '10px', justifyContent: 'center', margin: '25px 0' },
  otpBox: { width: '45px', height: '50px', fontSize: '1.4rem', textAlign: 'center', borderRadius: '8px', border: '2px solid #0f392b', fontWeight: 'bold' },
  finalSubmitBtn: { backgroundColor: '#0f392b', color: '#fff', border: 'none', padding: '12px 25px', borderRadius: '8px', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }
};
