import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, Users, Calendar, ArrowRight, CheckCircle2, Megaphone } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <span className="inline-block px-4 py-1.5 bg-emerald-700/60 rounded-full text-emerald-200 text-sm font-medium backdrop-blur-sm border border-emerald-500/30">
            বিসমিল্লাহির রহমানির রহিম
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            চিলমারী প্রি-ক্যাডেট মাদ্রাসা
          </h1>
          <p className="text-emerald-100 max-w-2xl mx-auto text-base md:text-xl font-light leading-relaxed">
            দ্বীনি ও আধুনিক শিক্ষার এক অপূর্ব মেলবন্ধন। আপনার সন্তানকে সুশিক্ষা ও ইসলামী আদর্শে গড়ে তুলতে আমরা প্রতিশ্রুতিবদ্ধ।
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-emerald-900 font-bold rounded-lg hover:bg-emerald-50 transition-colors shadow-lg flex items-center gap-2"
            >
              ভর্তির আবেদন <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="px-6 py-3 bg-emerald-700/50 hover:bg-emerald-700/80 text-white font-semibold rounded-lg transition-colors border border-emerald-500/40 backdrop-blur-sm"
            >
              আমাদের সম্পর্কে জানুন
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Notice Marquee / Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center gap-3 text-amber-900 shadow-sm">
          <Megaphone className="w-6 h-6 text-amber-600 shrink-0" />
          <div className="text-sm md:text-base font-medium">
            <span className="font-bold text-amber-700">জরুরী নোটিশ:</span> ২০২৬ শিক্ষাবর্ষে নতুন ভর্তি চলছে! আসন সংখ্যা সীমিত। অতি শীঘ্রই অফিসে যোগাযোগ করুন।
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">আমাদের বিশেষত্ব</h2>
          <p className="text-slate-600 text-sm mt-1">কেন আপনার সন্তানকে আমাদের মাদ্রাসায় পাঠাবেন?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">সমালন্বিত পাঠ্যক্রম</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              নূরাণী, হিফজ এবং সাধারণ বোর্ডের পাঠ্যক্রমের সমন্বয়ে আধুনিক শিক্ষাদান ব্যবস্থা।
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">অভিজ্ঞ শিক্ষকবৃন্দ</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              অভিজ্ঞ ও প্রশিক্ষণপ্রাপ্ত শিক্ষক মণ্ডলী দ্বারা সার্বক্ষণিক যত্ন ও নিবিড় তদারকি।
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">নৈতিক ও আধুনিক পরিবেশ</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              কম্পিউটার শিক্ষা, ধর্মীয় অনুশাসন এবং সুন্দর সুশৃঙ্খল ক্যাডেট পরিবেশ।
            </p>
          </div>
        </div>
      </section>

      {/* Admission Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 rounded-2xl p-8 md:p-12 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">ভর্তির সুযোগ নিন</h2>
            <p className="text-emerald-200 text-sm md:text-base max-w-xl">
              প্লে থেকে ৮ম শ্রেণী পর্যন্ত ভর্তি চলছে। সেরা ইসলামী ও সাধারণ শিক্ষার নিশ্চয়তায় আজই যোগাযোগ করুন।
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-colors shrink-0 shadow-md"
          >
            যোগাযোগ করুন
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
