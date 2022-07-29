import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientService from '../utils/ClientService';
import AuthCheck from '../utils/authCheckService';
import BalanceCard from '../components/BalanceCard';
import Banner from '../components/Banner';
import Table from '../components/TransTable';

const Dashboard = () => {
  let navigate = useNavigate();
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  useEffect(() => {
    ClientService.profileDetails()
      .then((res) => {
        setFirst_name(res.data.result.first_name);
        setLast_name(res.data.result.last_name);
      })
      .catch((err) => {
        console.log('error', err);
      });
  });
  useEffect(() => {
    if (!AuthCheck()) {
      navigate('/');
    }
  });
  return (
    
    <>
      <div className="bg-blue-500 px-3 md:px-8 h-40"></div>

      <div className="px-3 md:px-8 -mt-24">
        <div className="container mx-auto max-w-full">
          <div className="grid grid-cols-1">
            <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
              <BalanceCard first={first_name} last={last_name} />
            </div>
            <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
              <Banner />
            </div>
          </div>
        </div>
      </div>

      <div className="px-3 md:px-8 h-auto">
        <div className=" px-4 mb-14">
          <Table />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
