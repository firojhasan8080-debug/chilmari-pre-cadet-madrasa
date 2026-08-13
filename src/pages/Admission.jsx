import { useState } from 'react';
import { supabase } from '../config/supabaseClient';

const Admission = () => {
  const [formData, setFormData] = useState({
    student_name: '',
    guardian_phone: '',
    student_class: '',
    address: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // Supabase ডাটাবেজে তথ্য জমা দেওয়া
    const { error } = await supabase
      .from('admissions')
      .insert([formData]);

    if (error) {
      setMessage('ত্রুটি! আবেদন জমা নেওয়া যায়নি: ' + error.message);
    } else {
      setMessage('অভিনন্দন! ভর্তি আবেদন সফলভাবে গৃহীত হয়েছে।');
      setFormData({ student_name: '', guardian_phone: '', student_class: '', address: '' });
    }
    setLoading(false);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center', color: '#1b5e20' }}>চিলমারী প্রি-ক্যাডেট মাদ্রাসা - অনলাইন ভর্তি</h2>
      {message && (
        <div style={{ padding: '10px', marginBottom: '15px', color: message.includes('অভিনন্দন') ? 'green' : 'red', background: '#f0f0f0', borderRadius: '4px' }}>
          {message}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>শিক্ষার্থীর নাম:</label>
          <input 
            type="text" 
            name="student_name" 
            value={formData.student_name} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>অভিভাবকের মোবাইল নম্বর:</label>
          <input 
            type="text" 
            name="guardian_phone" 
            value={formData.guardian_phone} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>ভর্তির শ্রেণী:</label>
          <input 
            type="text" 
            name="student_class" 
            value={formData.student_class} 
            onChange={handleChange} 
            required 
            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>ঠিকানা:</label>
          <textarea 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
            rows="3"
            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <button 
          type="submit" 
          disabled={loading} 
          style={{ width: '100%', padding: '12px', background: '#1b5e20', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}
        >
          {loading ? 'জমা হচ্ছে...' : 'আবেদন জমা দিন'}
        </button>
      </form>
    </div>
  );
};

export default Admission;
