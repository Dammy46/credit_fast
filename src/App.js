import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Layout from './container/Layout';
import NullPage from './Pages/404page'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wallet/*" element={<Layout />} />
        <Route path="*" element={<NullPage />} />
      </Routes>
    </>
  );
};
export default App;
