import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                চ
              </div>
              <h2 className="text-lg font-bold text-white">চিলমারী প্রি-ক্যাডেট মাদ্রাসা</h2>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              দ্বীনি ও আধুনিক সাধারণ শিক্ষার এক অনন্য মেলবন্ধন। প্রতিটি শিক্ষার্থীকে সুশিক্ষা, সুনৈতিকতা ও আধুনিক প্রযুক্তিতে দক্ষ করে গড়ে তোলাই আমাদের মূল লক্ষ্য।
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 border-l-4 border-emerald-500 pl-2">
              গুরুত্বপূর্ণ লিঙ্ক
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">আমাদের সম্পর্কে</Link></li>
              <li><Link to="/notices" className="hover:text-emerald-400 transition-colors">নোটিশ বোর্ড</Link></li>
              <li><Link to="/routine" className="hover:text-emerald-400 transition-colors">ক্লাস রুটিন</Link></li>
              <li><Link to="/gallery" className="hover:text-emerald-400 transition-colors">ফটোগ্যালারি</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">যোগাযোগ</Link></li>
            </ul>
          </div>

          {/* Academic Info */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 border-l-4 border-emerald-500 pl-2">
              একাডেমিক তথ্য
            </h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-slate-400">শ্রেণীসমূহ:</span> প্লে থেকে ৮ম শ্রেণী</li>
              <li><span className="text-slate-400">বিভাগ:</span> হিফজুল কুরআন ও জেনারেল</li>
              <li><span className="text-slate-400">ক্লাসের সময়:</span> সকাল ৮:৩০ - দুপুর ২:০০</li>
              <li><span className="text-slate-400">অফিস খোলা:</span> রবি - বৃহস্পতি</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-base font-semibold mb-4 border-l-4 border-emerald-500 pl-2">
              যোগাযোগ
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>চিলমারী, কুড়িগ্রাম, বাংলাদেশ</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+8801700000000" className="hover:underline">+৮৮০ ১৭০০-০০০০০</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:info@chilmari-madrasa.edu.bd" className="hover:underline">info@chilmari-madrasa.edu.bd</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
