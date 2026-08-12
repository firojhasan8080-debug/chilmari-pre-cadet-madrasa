import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white pt-10 pb-6 mt-12 border-t-4 border-emerald-600">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Madrasa Info */}
        <div>
          <h3 className="text-xl font-bold mb-3 text-emerald-200">চিলমারী প্রি ক্যাডেট মাদ্রাসা</h3>
          <p className="text-sm text-emerald-100 leading-relaxed">
            ইসলামী ও আধুনিক শিক্ষার এক অপূর্ব সমন্বয়। সুন্নাহ ও আধুনিক প্রযুক্তির আলোকে আমাদের শিক্ষার্থীদের গড়ে তোলাই আমাদের মূল লক্ষ্য।
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-emerald-200">গুরুত্বপূর্ণ লিংক</h4>
          <ul className="text-sm space-y-2 text-emerald-100">
            <li><a href="/" className="hover:underline">হোম</a></li>
            <li><a href="#about" className="hover:underline">আমাদের সম্পর্কে</a></li>
            <li><a href="#notice" className="hover:underline">নোটিশ বোর্ড</a></li>
            <li><a href="#admission" className="hover:underline">অনলাইন ভর্তি</a></li>
            <li><a href="#contact" className="hover:underline font-semibold">যোগাযোগ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-emerald-200">যোগাযোগ</h4>
          <p className="text-sm text-emerald-100">চিলমারী, কুড়িগ্রাম, বাংলাদেশ</p>
          <p className="text-sm text-emerald-100 mt-1">ইমেইল: info@chilmari-precadet.edu.bd</p>
          <p className="text-sm text-emerald-100 mt-1">মোবাইল: +880 1521-553003</p>
        </div>
      </div>

      {/* Protected Designer Credit Block */}
      <div className="mt-8 pt-6 border-t border-emerald-800 text-center px-4">
        <div className="flex items-center justify-center space-x-3 mb-2">
          <img 
            src="https://i.postimg.cc/667hGYDg/Screenshot-20260727-124259.jpg" 
            alt="MD Firoj Hasan" 
            className="w-10 h-10 rounded-full border-2 border-emerald-400 object-cover shadow-md inline-block mr-2"
          />
          <span className="text-sm font-medium text-emerald-200">
            Website Design by <strong className="text-white font-bold">MD Firoj Hasan</strong>
          </span>
        </div>
        <p className="text-xs text-emerald-400">
          © {new Date().getFullYear()} Chilmari Pre Cadet Madrasa (CPCM). All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
