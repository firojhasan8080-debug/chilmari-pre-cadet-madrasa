import { useState } from 'react';
import { supabase } from '../config/supabaseClient';

const Admission = () => {
  const [formData, setFormData] = useState({ student_name: '', guardian_phone: '', student_class: '', address: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('admissions').insert([formData]);
    if (error) setMessage('ত্রুটি: ' + error.message);
    else {
      setMessage('অনলাইন ভর্তি আবেদন সফল হয়েছে!');
      setFormData({ student_name: '', guardian_phone: '', student_class: '', address: '' });
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>ভর্তি আবেদন</h3>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="student_name" placeholder="নাম" value={formData.student_name} onChange={handleChange} required style={{ width: '100%', margin: '8px 0', padding: '10px' }} />
        <input type="tel" name="guardian_phone" placeholder="মোবাইল" value={formData.guardian_phone} onChange={handleChange} required style={{ width: '100%', margin: '8px 0', padding: '10px' }} />
        <input type="text" name="student_class" placeholder="শ্রেণী" value={formData.student_class} onChange={handleChange} required style={{ width: '100%', margin: '8px 0', padding: '10px' }} />
        <textarea name="address" placeholder="ঠিকানা" value={formData.address} onChange={handleChange} required style={{ width: '100%', margin: '8px 0', padding: '10px' }} />
        <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', background: '#1b5e20', color: '#fff', border: 'none' }}>
          {loading ? 'জমা হচ্ছে...' : 'আবেদন পাঠান'}
        </button>
      </form>
    </div>
  );
};

export default Admission;
