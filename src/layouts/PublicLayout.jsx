import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';
import ProtectedCredit from '../components/protected/ProtectedCredit';

const PublicLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <ProtectedCredit />
    </div>
  );
};

export default PublicLayout;
