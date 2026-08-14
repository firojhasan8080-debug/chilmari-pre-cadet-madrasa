import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Footer from './components/Footer';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGalleryData();
  }, []);

  const fetchGalleryData = async () => {
    try {
      // ক্যাটাগরি এবং ইমেজ ফেচ করা
      const { data: imgData } = await supabase.from('gallery_images').select('*');
      const { data: catData } = await supabase.from('gallery_categories').select('*');
      
      if (imgData) setImages(imgData);
      if (catData) setCategories(catData);
    } catch (err) {
      console.error('Error fetching gallery:', err);
    } finally {
      setLoading(false);
    }
  };

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div style={{ fontFamily: "'Hind Siliguri', 'Segoe UI', sans-serif", backgroundColor: '#f8fafc', color: '#0f172a', minHeight: '100vh', margin: 0, padding: 0 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&display=swap');
        .gallery-card { background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; transition: transform 0.3s; }
        .gallery-card:hover { transform: translateY(-4px); }
        .filter-btn { background: #e2e8f0; border: none; padding: 8px 16px; border-radius: 20px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .filter-btn.active, .filter-btn:hover { background: #16a34a; color: white; }
      `}</style>

      {/* হেডার */}
      <div style={{ backgroundColor: '#14532d', color: '#ffffff', padding: '30px 20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: '800' }}>ফটো গ্যালারী</h1>
        <p style={{ margin: '8px 0 0 0', fontSize: '14px', color: '#bbf7d0' }}>মাদ্রাসার বিভিন্ন কার্যক্রম ও আয়োজনের মুহূর্তসমূহ</p>
        <div style={{ marginTop: '16px' }}>
          <a href="/" style={{ color: '#ffffff', textDecoration: 'underline', fontSize: '14px' }}>← হোম পেজে ফিরে যান</a>
        </div>
      </div>

      <main style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 16px' }}>
        
        {/* ক্যাটাগরি ফিল্টার বাটন */}
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '30px' }}>
          <button 
            className={`filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('All')}
          >
            সকল ছবি
          </button>
          {categories.map((cat) => (
            <button 
              key={cat.id}
              className={`filter-btn ${selectedCategory === cat.name ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.name)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>লোড হচ্ছে...</div>
        ) : filteredImages.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>এই ক্যাটাগরিতে কোনো ছবি নেই।</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {filteredImages.map((img) => (
              <div key={img.id} className="gallery-card">
                <img 
                  src={img.image_url} 
                  alt={img.title || 'Madrasa Gallery'} 
                  style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                />
                <div style={{ padding: '16px' }}>
                  <h3 style={{ margin: '0 0 6px 0', fontSize: '16px', color: '#0f172a' }}>{img.title || 'কার্যক্রম'}</h3>
                  <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>{img.description || ''}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
