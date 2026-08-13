import React, { useState, useEffect } from 'react';
import { supabase } from '../config/supabaseClient';

export default function Gallery() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState(null); // Lightbox preview

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchImages(selectedCategory.id);
    }
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      const { data, error } = await supabase.from('gallery_categories').select('*').order('id', { ascending: true });
      if (error) throw error;
      setCategories(data || []);
      if (data && data.length > 0) {
        setSelectedCategory(data[0]); // Default First Category
      }
    } catch (err) {
      console.error("Error fetching gallery categories:", err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchImages = async (categoryId) => {
    try {
      const { data, error } = await supabase.from('gallery_images').select('*').eq('category_id', categoryId);
      if (error) throw error;
      setImages(data || []);
    } catch (err) {
      console.error("Error fetching images:", err.message);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🖼️ মাদ্রাসার গ্যালারি</h1>
      <p style={styles.subtitle}>আমাদের মাদ্রাসার বিভিন্ন অনুষ্ঠান, ক্লাসরুম ও স্মৃতিচিহ্নসমূহ</p>

      {/* Category Tabs / Folders */}
      <div style={styles.categoryContainer}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat)}
            style={selectedCategory?.id === cat.id ? styles.activeCategoryBtn : styles.categoryBtn}
          >
            📁 {cat.name}
          </button>
        ))}
      </div>

      {/* Image Grid */}
      {loading ? (
        <p style={{ textAlign: 'center', margin: '30px 0' }}>গ্যালারি লোড হচ্ছে...</p>
      ) : images.length === 0 ? (
        <div style={styles.emptyCard}>
          <p>এই ফোল্ডারে এখনো কোনো ছবি যোগ করা হয়নি।</p>
        </div>
      ) : (
        <div style={styles.grid}>
          {images.map((img) => (
            <div key={img.id} style={styles.imageCard} onClick={() => setActiveImage(img.image_url)}>
              <img src={img.image_url} alt={img.caption || 'Gallery Image'} style={styles.galleryImg} />
              {img.caption && <p style={styles.caption}>{img.caption}</p>}
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Image Preview / Lightbox Modal */}
      {activeImage && (
        <div style={styles.modalOverlay} onClick={() => setActiveImage(null)}>
          <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setActiveImage(null)}>✕</button>
            <img src={activeImage} alt="Preview" style={styles.modalImg} />
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { maxWidth: '1100px', margin: '0 auto', padding: '30px 15px', minHeight: '80vh' },
  title: { textAlign: 'center', color: '#0f392b', fontSize: '1.8rem', fontWeight: 'bold' },
  subtitle: { textAlign: 'center', color: '#64748b', marginBottom: '25px', fontSize: '0.95rem' },
  categoryContainer: { display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '10px', marginBottom: '25px' },
  categoryBtn: { backgroundColor: '#e2e8f0', color: '#334155', border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', whiteSpace: 'nowrap', fontWeight: '500', fontSize: '0.9rem' },
  activeCategoryBtn: { backgroundColor: '#0f392b', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', whiteSpace: 'nowrap', fontWeight: 'bold', fontSize: '0.9rem' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '15px' },
  imageCard: { backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.06)', cursor: 'pointer', border: '1px solid #e2e8f0' },
  galleryImg: { width: '100%', height: '180px', objectFit: 'cover', display: 'block' },
  caption: { padding: '8px 12px', fontSize: '0.82rem', color: '#475569', textAlign: 'center' },
  emptyCard: { textAlign: 'center', padding: '40px', backgroundColor: '#fff', borderRadius: '8px', border: '1px dashed #ccc', color: '#666' },
  modalOverlay: { position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 3000, display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' },
  modalContent: { position: 'relative', maxWidth: '900px', maxHeight: '90vh' },
  modalImg: { width: '100%', maxHeight: '85vh', objectFit: 'contain', borderRadius: '8px' },
  closeBtn: { position: 'absolute', top: '-15px', right: '-15px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '50%', width: '35px', height: '35px', fontSize: '1.2rem', cursor: 'pointer', fontWeight: 'bold' }
};
