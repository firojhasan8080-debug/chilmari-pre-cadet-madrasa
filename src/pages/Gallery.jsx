import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../config/supabaseClient';
import { useAuth } from '../context/AuthContext';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);
  const { isSuperAdmin, isAdmin } = useAuth();

  // নতুন ছবি ও ক্যাটাগরি যোগ করার ফর্ম স্টেট
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Class Room');
  const [imageUrl, setImageUrl] = useState('');

  const categories = ['All', 'Class Room', 'Picnic', 'ওয়াজ-মাহফিল', 'সাংস্কৃতিক অনুষ্ঠান', 'অন্যান্য'];

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const fetchGalleryImages = async () => {
    try {
      const { data, error } = await supabase.from('gallery_images').select('*');
      if (error) throw error;
      if (data) setImages(data);
    } catch (err) {
      console.error('Error fetching gallery:', err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddImage = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('gallery_images').insert([
      { title, category, image_url: imageUrl }
    ]);
    if (!error) {
      alert('গ্যালারিতে ছবি সফলভাবে যুক্ত হয়েছে!');
      setTitle('');
      setImageUrl('');
      fetchGalleryImages();
    } else {
      alert('ত্রুটি: ' + error.message);
    }
  };

  // ফিল্টার করা ছবিসমূহ
  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div style={{ fontFamily: "'Hind Siliguri', sans-serif", backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* টপ হেডার */}
      <div style={{ backgroundColor: '#14532d', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '1.8rem' }}>🖼️ ফটো গ্যালারি</h1>
        <p style={{ margin: '5px 0 0 0', fontSize: '14px', color: '#bbf7d0' }}>মাদ্রাসার বিভিন্ন কার্যক্রম ও আয়োজনের ছবিসমূহ</p>
        <div style={{ marginTop: '15px' }}>
          <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', background: '#16a34a', padding: '6px 14px', borderRadius: '6px', fontSize: '14px' }}>← হোমপেজে ফিরে যান</Link>
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '30px auto', padding: '0 20px' }}>
        
        {/* Admin/Super Admin Form to Add Gallery Image */}
        {(isSuperAdmin || isAdmin) && (
          <div style={{ background: 'white', padding: '20px', borderRadius: '12px', marginBottom: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#14532d', marginBottom: '15px' }}>➕ গ্যালারিতে নতুন ছবি যুক্ত করুন</h3>
            <form onSubmit={handleAddImage} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '15px' }}>
              <input type="text" placeholder="ছবির শিরোনাম / বিবরণ" value={title} onChange={e => setTitle(e.target.value)} required style={inputStyle} />
              <select value={category} onChange={e => setCategory(e.target.value)} style={inputStyle}>
                {categories.filter(c => c !== 'All').map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
              <input type="text" placeholder="ছবির লিংক (URL)" value={imageUrl} onChange={e => setImageUrl(e.target.value)} required style={inputStyle} />
              <button type="submit" style={{ gridColumn: '1 / -1', background: '#16a34a', color: 'white', border: 'none', padding: '10px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>আপলোড করুন</button>
            </form>
          </div>
        )}

        {/* Category Filter Buttons */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '30px', justifyContent: 'center' }}>
          {categories.map(cat => (
            <button 
              key={cat} 
              onClick={() => setSelectedCategory(cat)}
              style={{
                backgroundColor: selectedCategory === cat ? '#14532d' : 'white',
                color: selectedCategory === cat ? 'white' : '#334155',
                border: '1px solid #cbd5e1',
                padding: '8px 16px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '14px',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        {loading ? (
          <p style={{ textAlign: 'center' }}>লোড হচ্ছে...</p>
        ) : filteredImages.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#64748b' }}>এই ক্যাটাগরিতে কোনো ছবি পাওয়া যায়নি।</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {filteredImages.map((img, idx) => (
              <div key={idx} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                <img 
                  src={img.image_url} 
                  alt={img.title} 
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{ padding: '15px' }}>
                  <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '2px 8px', borderRadius: '10px', fontSize: '11px', fontWeight: 'bold' }}>
                    {img.category}
                  </span>
                  <h4 style={{ margin: '8px 0 0 0', color: '#0f172a', fontSize: '16px' }}>{img.title}</h4>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

const inputStyle = { padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '14px' };
