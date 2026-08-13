import React, { useEffect, useState } from 'react';
import { supabase } from '../../config/supabaseClient';

export default function AdSlot({ slotName }) {
  const [adConfig, setAdConfig] = useState(null);

  useEffect(() => {
    fetchAdConfig();
  }, [slotName]);

  const fetchAdConfig = async () => {
    const { data } = await supabase
      .from('ad_configuration')
      .select('*')
      .eq('slot_name', slotName)
      .eq('is_enabled', true)
      .single();

    if (data) setAdConfig(data);
  };

  if (!adConfig) return null;

  return (
    <div style={styles.adContainer}>
      <span style={styles.adTag}>Advertisement</span>
      {adConfig.ad_code ? (
        <div dangerouslySetInnerHTML={{ __html: adConfig.ad_code }} />
      ) : (
        <div style={styles.placeholderAd}>
          [ Ad Slot: {slotName} ]
        </div>
      )}
    </div>
  );
}

const styles = {
  adContainer: {
    margin: '20px 0',
    padding: '10px',
    backgroundColor: '#f1f5f9',
    borderRadius: '8px',
    textAlign: 'center',
    border: '1px dashed #cbd5e1',
  },
  adTag: {
    fontSize: '0.75rem',
    color: '#94a3b8',
    display: 'block',
    marginBottom: '5px',
    textTransform: 'uppercase',
  },
  placeholderAd: {
    padding: '15px',
    color: '#64748b',
    fontSize: '0.85rem',
  }
};
