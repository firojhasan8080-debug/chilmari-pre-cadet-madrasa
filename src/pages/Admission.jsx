import { useState } from 'react';
import { supabase } from '../config/supabaseClient';

const Admission = () => {
  const [formData, setFormData] = useState({ student_name: '', guardian_phone: '', student_class: '', address: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', msg: '' });

    const { error } = await supabase.from('admissions').insert([formData]);
    
    if (error) {
      setStatus({ type: 'error', msg: 'দুঃখিত! আবেদন জমা দেওয়া যায়নি। আবার চেষ্টা করুন।' });
    } else {
      setStatus({ type: 'success', msg: 'অভিনন্দন! আপনার ভর্তি আবেদন সফলভাবে গৃহীত হয়েছে।' });
      setFormData({ student_name: '', guardian_phone: '', student_class: '', address: '' });
    }
    setLoading(false);
  };

  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <div className="card" style={{ maxWidth: '560px', margin: '0 auto', padding: '32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h2 style={{ color: 'var(--primary)', fontSize: '22px', fontWeight: '700' }}>অনলাইন ভর্তি আবেদন ফরম</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginTop: '4px' }}>সঠিক তথ্য প্রদান করে নিচে ফরমটি পূরণ করুন</p>
        </div>

        {status.msg && (
          <div style={{
            padding: '12px 16px',
            borderRadius: '8px',
            marginBottom: '20px',
            fontSize: '14px',
            backgroundColor: status.type === 'success' ? '#dcfce7' : '#fee2e2',
            color: status.type === 'success' ? '#15803d' : '#b91c1c',
            border: `1px solid ${status.type === 'success' ? '#bbf7d0' : '#fca5a5'}`
          }}>
            {status.msg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>শিক্ষার্থীর পূর্ণ নাম</label>
            <input type="text" name="student_name" className="form-control" placeholder="যেমন: আবদুল্লাহ আল মামনুন" value={formData.student_name} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>অভিভাবকের মোবাইল নম্বর</label>
            <input type="tel" name="guardian_phone" className="form-control" placeholder="017xxxxxxxx" value={formData.guardian_phone} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>কাঙ্ক্ষিত শ্রেণী</label>
            <input type="text" name="student_class" className="form-control" placeholder="যেমন: ৩য় শ্রেণী / প্লে" value={formData.student_class} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>বর্তমান ঠিকানা</label>
            <textarea name="address" className="form-control" rows="3" placeholder="গ্রাম/ওয়ার্ড, ডাকঘর, উপজেলা..." value={formData.address} onChange={handleChange} required></textarea>
          </div>

          <button type="submit" className="btn-primary" disabled={loading} style={{ marginTop: '10px' }}>
            {loading ? 'তথ্য সেভ হচ্ছে...' : 'আবেদন ফরম জমা দিন'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admission;
