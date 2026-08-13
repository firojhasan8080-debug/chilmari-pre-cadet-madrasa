import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Banner Section */}
      <section style={{ backgroundColor: 'var(--primary)', color: '#fff', padding: '50px 0 60px 0', textAlign: 'center', borderBottom: '4px solid var(--secondary)' }}>
        <div className="container">
          <span style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)', color: 'var(--secondary)', padding: '6px 16px', borderRadius: '20px', fontSize: '13px', fontWeight: '600' }}>
            নতুন শিক্ষাবর্ষে ভর্তি চলছে!
          </span>
          <h1 style={{ fontSize: '32px', margin: '16px 0 10px 0', fontWeight: '800' }}>
            চিলমারী প্রি-ক্যাডেট মাদ্রাসায় স্বাগতম
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto 24px auto', fontSize: '16px', color: '#e2e8f0', lineHeight: '1.7' }}>
            আমরা বিশ্বাস করি সঠিক দ্বীনি তালিম এবং আধুনিক সাধারণ শিক্ষার সমন্বয়েই গড়ে ওঠে সন্তানের উজ্জ্বল ও আলোকিত ভবিষ্যৎ।
          </p>
          
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/admission" className="btn-primary" style={{ width: 'auto', padding: '12px 28px', textDecoration: 'none', backgroundColor: 'var(--secondary)', color: 'var(--primary)', fontWeight: 'bold' }}>
              অনলাইন ভর্তি আবেদন
            </Link>
            <Link to="/contact" className="btn-primary" style={{ width: 'auto', padding: '12px 28px', textDecoration: 'none', backgroundColor: 'transparent', border: '1.5px solid #fff' }}>
              যোগাযোগ করুন
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container" style={{ marginTop: '-30px' }}>
        <div className="grid-3">
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>📖</div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '8px' }}>গুণগত মানসম্পন্ন শিক্ষা</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>সহিহ তিলাওয়াত, মাসআলা শিক্ষা ও অভিজ্ঞ শিক্ষক দ্বারা মানসম্মত পাঠদান।</p>
          </div>

          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>💻</div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '8px' }}>কম্পিউটার ও বিজ্ঞান</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>সাধারণ শিক্ষার অংশ হিসেবে আধুনিক কম্পিউটার ও মেধা বিকাশমূলক কারিকুলাম।</p>
          </div>

          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '10px' }}>🛡️</div>
            <h3 style={{ color: 'var(--primary)', marginBottom: '8px' }}>ক্যাডেট ডিসিপ্লিন</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>নিয়মানুবর্তিতা, নৈতিকতা এবং শারীরিক ও মানসিক সুরক্ষার সুব্যবস্থা।</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
