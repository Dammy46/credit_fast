import React from 'react'
// import { useNavigate } from 'react-router-dom';
import WithdrawForm from '../components/WithdrawForm';
// import AuthCheck from '../utils/authCheckService';
const Withdraw = () => {
  // let navigate = useNavigate()
  // useEffect(() => {
  //   if (!AuthCheck()) {
  //       navigate('/')
  //   }
  //   // eslint-disable-next-line
  // }, [])
  
  return (
    <>
      <div className="bg-blue-500 px-3 md:px-8 h-40"></div>
      <div className="px-3 md:px-8 h-auto -mt-24">
        <div className="container">
          <div className="px-4 mb-16"><WithdrawForm /></div>
        </div>
      </div>
    </>
  );
}

export default Withdraw