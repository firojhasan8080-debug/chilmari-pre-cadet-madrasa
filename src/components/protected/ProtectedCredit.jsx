import React from 'react';

const ProtectedCredit = () => {
  return (
    <div className="bg-slate-900 text-slate-400 py-4 border-t border-slate-800 text-center text-xs">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>© {new Date().getFullYear()} চিলমারী প্রি-ক্যাডেট মাদ্রাসা। সর্বস্বত্ব সংরক্ষিত।</p>
        <p className="flex items-center gap-1">কারিগরি সহায়তায়: <span className="text-emerald-400 font-semibold">Tech Pro</span></p>
      </div>
    </div>
  );
};

export default ProtectedCredit;
