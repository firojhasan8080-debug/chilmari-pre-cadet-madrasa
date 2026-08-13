import { useEffect, useState } from 'react';
import { supabase } from '../config/supabaseClient';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.from('students').select('*').then(({ data, error }) => {
      if (!error) setStudents(data || []);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container" style={{ marginTop: '30px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '10px' }}>
        <div>
          <h2 style={{ color: 'var(--primary)', fontSize: '22px' }}>শিক্ষার্থী তালিকা</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '13px' }}>মাদ্রাসার সকল নিবন্ধিত শিক্ষার্থীদের তালিকা</p>
        </div>
        <span style={{ backgroundColor: '#e2e8f0', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '600' }}>
          মোট শিক্ষার্থী: {students.length} জন
        </span>
      </div>

      {loading ? (
        <div className="card" style={{ textAlign: 'center', padding: '40px' }}>ডাটা লোড হচ্ছে...</div>
      ) : students.length === 0 ? (
        <div className="card" style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
          বর্তমানে ডাটাবেজে কোনো শিক্ষার্থীর তথ্য যুক্ত করা হয়নি।
        </div>
      ) : (
        <div className="table-responsive">
          <table>
            <thead>
              <tr>
                <th>রোল নম্বর</th>
                <th>শিক্ষার্থীর নাম</th>
                <th>শ্রেণী</th>
              </tr>
            </thead>
            <tbody>
              {students.map((st, i) => (
                <tr key={st.id || i}>
                  <td style={{ fontWeight: 'bold', color: 'var(--primary)' }}>#{st.roll || i + 1}</td>
                  <td>{st.name}</td>
                  <td>
                    <span style={{ backgroundColor: '#dcfce7', color: '#15803d', padding: '3px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: '600' }}>
                      {st.class}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Students;
