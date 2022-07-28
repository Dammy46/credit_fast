import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/sideBar';
import Dashboard from '../Pages/Dashboard';
import SetPin from '../Pages/SetPin';
import Transfer from '../Pages/Transfer';
import Withdraw from '../Pages/Withdraw';
import History from '../Pages/History';
import Verify from '../Pages/Verify';

const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="md:ml-64">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/setPin" element={<SetPin />} />
          <Route path="/history" element={<History />} />
          <Route path='/verify' element={<Verify />} />
          <Route path="*" element={<Navigate to="/wallet/dashboard" replace />} />
        </Routes>
      </div>
    </>
  );
};

export default Layout;
