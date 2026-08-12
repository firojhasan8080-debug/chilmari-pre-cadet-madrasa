import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Mail, Clock, LogIn, LogOut, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="bg-emerald-800 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4 text-emerald-300" />
              <a href="tel:+8801700000000" className="hover:underline">+৮৮০ ১৭০০-০০০০০</a>
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4 text-emerald-300" />
              <a href="mailto:info@chilmari-madrasa.edu.bd" className="hover:underline">info@chilmari-madrasa.edu.bd</a>
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">চ</div>
            <div>
              <h1 className="text-xl font-bold text-emerald-900 leading-tight">চিলমারী প্রি-ক্যাডেট মাদ্রাসা</h1>
            </div>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-slate-700 font-medium text-sm">
            <Link to="/" className="hover:text-emerald-600">হোম</Link>
            {user ? (
               <Link to={profile?.role === 'admin' ? '/admin/dashboard' : '/student/dashboard'} className="px-3 py-2 rounded-md bg-emerald-50 text-emerald-700 font-semibold">ড্যাশবোর্ড</Link>
            ) : (
               <Link to="/login" className="px-4 py-2 rounded-md bg-emerald-600 text-white font-semibold">লগইন</Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};
export default Header;
