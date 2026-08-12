import React, { useState, useRef } from 'react';

export default function AdmissionModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [phoneVerified, setPhoneVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState(['', '', '', '']);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otpError, setOtpError] = useState('');

  // ফরম ডাটা স্টেট
  const [formData, setFormData] = useState({
    studentName: '',
    age: '',
    gender: 'ছেলে',
    class: '',
    fatherName: '',
    motherName: '',
    phone: '',
    division: 'রংপুর',
    district: 'কুড়িগ্রাম',
    thana: 'চিলমারী',
    village: '',
    studentPhoto: null,
    parentPhoto: null,
    nidFront: null,
    nidBack: null,
  });

  // ক্যামেরা ক্যাপচার স্টেট
  const [activeCamera, setActiveCamera] = useState(null);
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);

  if (!isOpen) return null;

  // ওটিপি পাঠানোর লজিক
  const handleSendOtp = () => {
    if (!formData.phone || formData.phone.length < 11) {
      alert('অনুগ্রহ করে সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন');
      return;
    }
    const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(randomOtp);
    setOtpSent(true);
    setOtpError('');
    alert(`[SMS ভেরিফিকেশন]: চিলমারী প্রি ক্যাডেট মাদ্রাসা ভর্তির ওটিপি কোড: ${randomOtp}`);
  };

  // ওটিপি ভেরিফাই করার লজিক
  const handleVerifyOtp = () => {
    const enteredOtp = otpCode.join('');
    if (enteredOtp === generatedOtp) {
      setPhoneVerified(true);
      setOtpError('');
      alert('✅ আপনার মোবাইল নম্বর সফলভাবে ভেরিফাই হয়েছে!');
    } else {
      setOtpError('❌ ভুল কোড! সঠিক ৪ ডিজিটের কোড দিন।');
    }
  };

  // লাইভ ক্যামেরা চালু করার লজিক
  const startCamera = async (type) => {
    setActiveCamera(type);
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      alert('ক্যামেরা চালু করা সম্ভব হয়নি। ব্রাউজারের ক্যামেরা পারমিশন চেক করুন।');
    }
  };

  // ক্যামেরা থেকে ছবি তোলার লজিক
  const capturePhoto = (type) => {
    const canvas = document.createElement('canvas');
    if (videoRef.current) {
      canvas.width = videoRef.current.videoWidth || 640;
      canvas.height = videoRef.current.videoHeight || 480;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const imageData = canvas.toDataURL('image/jpeg');

      if (type === 'nidFront' || type === 'nidBack') {
        const confirmNid = window.confirm("NID কার্ড কি স্পষ্ট ও সঠিকভাবে ফ্রেমে এসেছে?");
        if (!confirmNid) {
          alert("অনুগ্রহ করে NID কার্ডটি সমতল জায়গায় রেখে পুনরায় স্পষ্ট ছবি তুলুন।");
          return;
        }
      }

      setFormData(prev => ({ ...prev, [type]: imageData }));
      stopCamera();
    }
  };

  // ক্যামেরা বন্ধ করার লজিক
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    setStream(null);
    setActiveCamera(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneVerified) {
      alert('আবেদন জমা দেওয়ার পূর্বে ফোন নম্বর ভেরিফাই করা বাধ্যতামূলক!');
      return;
    }
    if (!formData.studentPhoto || !formData.parentPhoto || !formData.nidFront || !formData.nidBack) {
      alert('অনুগ্রহ করে সকল বাধ্যতামূলক ছবি ও NID ফ্রন্ট/ব্যাক লাইভ ক্যামেরা দিয়ে তুলুন!');
      return;
    }
    alert('🎉 অভিনন্দন! আপনার ভর্তি আবেদন সফলভাবে জমা হয়েছে। মাদ্রাসা কর্তৃপক্ষ আপনার সাথে যোগাযোগ করবে।');
    onClose();
  };

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(15, 23, 42, 0.75)', backdropFilter: 'blur(6px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      
      <style>{`
        .modal-card {
          background: #ffffff;
          width: 100%;
          max-width: 650px;
          max-height: 90vh;
          border-radius: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          overflow-y: auto;
          position: relative;
          padding: 28px;
        }
        .step-pill {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 14px;
        }
        .form-label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #334155;
          margin-bottom: 6px;
        }
        .form-label span { color: #ef4444; }
        .form-input {
          width: 100%;
          padding: 11px 14px;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          font-size: 14px;
          outline: none;
        }
        .form-input:focus { border-color: #16a34a; box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.15); }
        .cam-box {
          border: 2px dashed #94a3b8;
          border-radius: 12px;
          padding: 16px;
          text-align: center;
          background: #f8fafc;
          margin-top: 6px;
        }
      `}</style>

      <div className="modal-card">
        <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: '#f1f5f9', border: 'none', width: '36px', height: '36px', borderRadius: '50%', fontSize: '18px', cursor: 'pointer', color: '#64748b' }}>✕</button>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>অনলাইন অ্যাডমিশন পোর্টাল</span>
          <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#14532d', margin: '8px 0 4px 0' }}>ভর্তি ফরম ২০২৬-২৭</h2>
          <p style={{ fontSize: '13px', color: '#64748b', margin: 0 }}>সঠিক তথ্য প্রদান করে ডিজিটাল ফরমটি পূরণ করুন</p>
        </div>

        {/* স্টেপ ট্র্যাকার */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', backgroundColor: '#f8fafc', padding: '12px 18px', borderRadius: '16px' }}>
          {[1, 2, 3, 4].map((num) => (
            <div key={num} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="step-pill" style={{ backgroundColor: step >= num ? '#16a34a' : '#e2e8f0', color: step >= num ? '#ffffff' : '#64748b' }}>
                {num}
              </div>
              <span style={{ fontSize: '12px', fontWeight: '600', color: step >= num ? '#14532d' : '#94a3b8' }}>
                {num === 1 ? 'শিক্ষার্থী' : num === 2 ? 'অভিভাবক ও OTP' : num === 3 ? 'ঠিকানা' : 'ডকুমেন্ট'}
              </span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          
          {/* ধাপ ১ */}
          {step === 1 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label className="form-label">শিক্ষার্থীর পূর্ণ নাম <span>*</span></label>
                <input type="text" required placeholder="যেমন: আব্দুল্লাহ আল মামুন" className="form-input" value={formData.studentName} onChange={e => setFormData({ ...formData, studentName: e.target.value })} />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="form-label">শিক্ষার্থীর বয়স (বছরে) <span>*</span></label>
                  <input type="number" min="3" max="18" required placeholder="যেমন: ৫" className="form-input" value={formData.age} onChange={e => setFormData({ ...formData, age: e.target.value })} />
                </div>
                <div>
                  <label className="form-label">লিঙ্গ <span>*</span></label>
                  <select className="form-input" value={formData.gender} onChange={e => setFormData({ ...formData, gender: e.target.value })}>
                    <option value="ছেলে">ছেলে</option>
                    <option value="মেয়ে">মেয়ে</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="form-label">ভর্তির কাঙ্ক্ষিত শ্রেণি <span>*</span></label>
                <select className="form-input" required value={formData.class} onChange={e => setFormData({ ...formData, class: e.target.value })}>
                  <option value="">-- শ্রেণি নির্বাচন করুন --</option>
                  <option value="প্লে">প্লে শ্রেণি</option>
                  <option value="নার্সারি">নার্সারি</option>
                  <option value="কেজি">কেজি (KG)</option>
                  <option value="১ম">১ম শ্রেণি</option>
                  <option value="২য়">২য় শ্রেণি</option>
                  <option value="৩য়">৩য় শ্রেণি</option>
                  <option value="৪র্থ">৪র্থ শ্রেণি</option>
                  <option value="৫ম">৫ম শ্রেণি</option>
                  <option value="হিফজ">নাজেরা ও হিফজ বিভাগ</option>
                </select>
              </div>

              <button type="button" onClick={() => { if(formData.studentName && formData.age && formData.class) setStep(2); else alert('অনুগ্রহ করে সকল ঘর পূরণ করুন'); }} style={{ width: '100%', padding: '12px', backgroundColor: '#16a34a', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>
                পরবর্তী ধাপ ➔ (অভিভাবক তথ্য)
              </button>
            </div>
          )}

          {/* ধাপ ২ */}
          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label className="form-label">পিতার নাম <span>*</span></label>
                <input type="text" required placeholder="পিতার পূর্ণ নাম" className="form-input" value={formData.fatherName} onChange={e => setFormData({ ...formData, fatherName: e.target.value })} />
              </div>

              <div>
                <label className="form-label">মাতার নাম <span>*</span></label>
                <input type="text" required placeholder="মাতার পূর্ণ নাম" className="form-input" value={formData.motherName} onChange={e => setFormData({ ...formData, motherName: e.target.value })} />
              </div>

              <div style={{ backgroundColor: '#f0fdf4', padding: '16px', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
                <label className="form-label">অভিভাবকের মোবাইল নম্বর <span>*</span></label>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <input type="tel" disabled={phoneVerified} placeholder="017XXXXXXXX" className="form-input" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                  {!phoneVerified && (
                    <button type="button" onClick={handleSendOtp} style={{ backgroundColor: '#0284c7', color: 'white', border: 'none', padding: '0 16px', borderRadius: '10px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer', whitespace: 'nowrap' }}>
                      {otpSent ? 'পুনরায় পাঠান' : 'ওটিপি পাঠান'}
                    </button>
                  )}
                </div>

                {phoneVerified && (
                  <div style={{ color: '#16a34a', fontWeight: 'bold', fontSize: '13px', marginTop: '8px' }}>
                    ✅ নম্বরটি সফলভাবে ভেরিফাই করা হয়েছে!
                  </div>
                )}

                {otpSent && !phoneVerified && (
                  <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px dashed #abd6bc' }}>
                    <p style={{ fontSize: '12px', color: '#15803d', margin: '0 0 8px 0', fontWeight: '600' }}>মোবাইলে প্রেরিত ৪ ডিজিটের কোডটি দিন:</p>
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                      {[0, 1, 2, 3].map((idx) => (
                        <input
                          key={idx}
                          id={`otp-${idx}`}
                          type="text"
                          maxLength="1"
                          style={{ width: '45px', height: '45px', textAlign: 'center', fontSize: '18px', fontWeight: 'bold', border: '2px solid #16a34a', borderRadius: '8px', outline: 'none' }}
                          value={otpCode[idx]}
                          onChange={(e) => {
                            const val = e.target.value;
                            const newOtp = [...otpCode];
                            newOtp[idx] = val;
                            setOtpCode(newOtp);
                            if (val && idx < 3) {
                              document.getElementById(`otp-${idx + 1}`).focus();
                            }
                          }}
                        />
                      ))}
                    </div>
                    {otpError && <p style={{ color: '#dc2626', fontSize: '12px', textAlign: 'center', margin: '6px 0 0 0' }}>{otpError}</p>}
                    <button type="button" onClick={handleVerifyOtp} style={{ width: '100%', marginTop: '12px', backgroundColor: '#16a34a', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                      কোড ভেরিফাই করুন
                    </button>
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button type="button" onClick={() => setStep(1)} style={{ width: '30%', padding: '12px', backgroundColor: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
                  ◀ পিছনে
                </button>
                <button type="button" onClick={() => { if (formData.fatherName && formData.motherName && phoneVerified) setStep(3); else alert('অভিভাবকের তথ্য এবং ফোন নম্বর ওটিপি ভেরিফিকেশন বাধ্যতামূলক!'); }} style={{ width: '70%', padding: '12px', backgroundColor: '#16a34a', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
                  পরবর্তী ধাপ ➔ (ঠিকানা)
                </button>
              </div>
            </div>
          )}

          {/* ধাপ ৩ */}
          {step === 3 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="form-label">বিভাগ <span>*</span></label>
                  <input type="text" required className="form-input" value={formData.division} onChange={e => setFormData({ ...formData, division: e.target.value })} />
                </div>
                <div>
                  <label className="form-label">জেলা <span>*</span></label>
                  <input type="text" required className="form-input" value={formData.district} onChange={e => setFormData({ ...formData, district: e.target.value })} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label className="form-label">উপজেলা/থানা <span>*</span></label>
                  <input type="text" required className="form-input" value={formData.thana} onChange={e => setFormData({ ...formData, thana: e.target.value })} />
                </div>
                <div>
                  <label className="form-label">গ্রাম / রোড নং <span>*</span></label>
                  <input type="text" required placeholder="গ্রামের নাম" className="form-input" value={formData.village} onChange={e => setFormData({ ...formData, village: e.target.value })} />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button type="button" onClick={() => setStep(2)} style={{ width: '30%', padding: '12px', backgroundColor: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
                  ◀ পিছনে
                </button>
                <button type="button" onClick={() => { if (formData.village) setStep(4); else alert('অনুগ্রহ করে ঠিকানা লিখুন'); }} style={{ width: '70%', padding: '12px', backgroundColor: '#16a34a', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
                  পরবর্তী ধাপ ➔ (ক্যামেরা ও ছবি আপলোড)
                </button>
              </div>
            </div>
          )}

          {/* ধাপ ৪ */}
          {step === 4 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              
              {activeCamera && (
                <div style={{ position: 'relative', backgroundColor: '#000', borderRadius: '16px', overflow: 'hidden', textAlign: 'center', padding: '10px' }}>
                  <video ref={videoRef} autoPlay playsInline style={{ width: '100%', maxHeight: '250px', borderRadius: '10px' }}></video>
                  <p style={{ color: '#fde047', fontSize: '12px', margin: '6px 0' }}>
                    {activeCamera.includes('nid') ? '📸 NID কার্ডটি ক্যামেরার ফ্রেমের মাঝখানে রাখুন' : '📸 চেহারা স্পষ্ট রেখে ছবি তুলুন'}
                  </p>
                  <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                    <button type="button" onClick={() => capturePhoto(activeCamera)} style={{ backgroundColor: '#22c55e', color: 'white', border: 'none', padding: '8px 20px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer' }}>
                      📷 ক্যাপচার করুন
                    </button>
                    <button type="button" onClick={stopCamera} style={{ backgroundColor: '#ef4444', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '20px', fontSize: '12px', cursor: 'pointer' }}>
                      বাতিল
                    </button>
                  </div>
                </div>
              )}

              <div className="cam-box">
                <p style={{ margin: '0 0 6px 0', fontSize: '13px', fontWeight: 'bold' }}>১. শিক্ষার্থীর ছবি <span>*</span></p>
                {formData.studentPhoto ? (
                  <img src={formData.studentPhoto} alt="Student" style={{ width: '80px', height: '80px', borderRadius: '10px', objectFit: 'cover' }} />
                ) : (
                  <button type="button" onClick={() => startCamera('studentPhoto')} style={{ backgroundColor: '#0284c7', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '12px', cursor: 'pointer', fontWeight: 'bold' }}>
                    📷 লাইভ ক্যামেরা দিয়ে তুলুন
                  </button>
                )}
              </div>

              <div className="cam-box">
                <p style={{ margin: '0 0 6px 0', fontSize: '13px', fontWeight: 'bold' }}>২. পিতা/মাতার লাইভ ছবি <span>*</span></p>
                {formData.parentPhoto ? (
                  <img src={formData.parentPhoto} alt="Parent" style={{ width: '80px', height: '80px', borderRadius: '10px', objectFit: 'cover' }} />
                ) : (
                  <button type="button" onClick={() => startCamera('parentPhoto')} style={{ backgroundColor: '#0284c7', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px', fontSize: '12px', cursor: 'pointer', fontWeight: 'bold' }}>
                    📷 লাইভ ক্যামেরা দিয়ে তুলুন
                  </button>
                )}
              </div>

              <div className="cam-box">
                <p style={{ margin: '0 0 6px 0', fontSize: '13px', fontWeight: 'bold' }}>৩. অভিভাবকের NID কার্ডের ছবি (AI স্ক্যান) <span>*</span></p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '8px' }}>
                  <div>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>NID সামনের অংশ</span>
                    {formData.nidFront ? (
                      <img src={formData.nidFront} alt="NID Front" style={{ width: '100%', height: '60px', borderRadius: '6px', objectFit: 'cover', marginTop: '4px' }} />
                    ) : (
                      <button type="button" onClick={() => startCamera('nidFront')} style={{ width: '100%', backgroundColor: '#059669', color: 'white', border: 'none', padding: '8px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer', marginTop: '4px' }}>
                        📸 Front Capture
                      </button>
                    )}
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>NID পিছনের অংশ</span>
                    {formData.nidBack ? (
                      <img src={formData.nidBack} alt="NID Back" style={{ width: '100%', height: '60px', borderRadius: '6px', objectFit: 'cover', marginTop: '4px' }} />
                    ) : (
                      <button type="button" onClick={() => startCamera('nidBack')} style={{ width: '100%', backgroundColor: '#059669', color: 'white', border: 'none', padding: '8px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer', marginTop: '4px' }}>
                        📸 Back Capture
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button type="button" onClick={() => setStep(3)} style={{ width: '30%', padding: '12px', backgroundColor: '#e2e8f0', color: '#475569', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
                  ◀ পিছনে
                </button>
                <button type="submit" style={{ width: '70%', padding: '12px', backgroundColor: '#16a34a', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>
                  ✅ নিশ্চিত ও আবেদন জমা দিন
                </button>
              </div>
            </div>
          )}

        </form>
      </div>
    </div>
  );
}
