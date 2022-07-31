import React from 'react'
import { Card, CardHeader, CardBody } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
import ClientService from '../utils/ClientService';
import Swal from 'sweetalert2'


const WithdrawForm = () => {
  const [amount, setAmount] = useState('')
      const [bank_code, setBankCode] = useState('');
      const [account_number, setAccountNumber] = useState('');
      const [wallet_pin, setWalletPin] = useState('');
      const [disabled, setDisabled] = useState(false);
  const [arry, setArry] = useState([]);
  useEffect(() => {
    ClientService.banks()
      .then((res) => {
        const banks = res.data.result;
        setArry([...banks, arry]);
        console.log("arry", arry)
      })
      .catch((err) => {
        console.log('error', err);
      });
    // eslint-disable-next-line
  }, [])
   const handleWithdraw = (e) => {
     e.preventDefault();
     console.log("bank code", bank_code)
     const param = { amount, bank_code, account_number, wallet_pin };
     ClientService.withdraw(param)
       .then((res) => {
         console.log(res);
         Swal.fire({
           icon: 'success',
           text: res.data.message,
         });
         setDisabled(false)
       })
       .catch((err) => {
         console.log(err);
         if (err.response.status === 400) {
           Swal.fire({
             icon: 'error',
             text: err.response.data.errors[0].msg,
           });
           setDisabled(false);
         } else {
           Swal.fire({
             icon: 'error',
             text: err.response.data.message,
           });
           setDisabled(false);
         }
       });
   };

  
  return (
    <Card className="p-4 shadow-md">
      <CardHeader
        color="orange"
        className="flex items-center justify-center -mt-10 h-24 mb-4 px-8 py-4"
      >
        <h2 className="text-white text-2xl">Withdraw</h2>
      </CardHeader>
      <CardBody>
        <form>
          <h6 className="text-orange-500 text-sm mt-3 mb-6 font-light uppercase">
            Make a withdrawal
          </h6>
          <div className="mt-10">
            <div className="mb-10">
              <input
                className="w-full py-4 px-6 border border-grey-500 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none focus:outline-none"
                placeholder="Amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={disabled}
              />
            </div>
            <div className="mb-10">
              <select
                className="w-full py-4 px-6 border border-grey-500 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none focus:outline-none"
                onChange={(e) => setBankCode(e.target.value)}
                value={bank_code}
              >
                {arry.map((item, i) => (
                  <option key={i} value={item.code}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-10">
              <input
                className="w-full py-4 px-6 border border-grey-500 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none focus:outline-none"
                placeholder="Accont number"
                type="number"
                value={account_number}
                onChange={(e) => setAccountNumber(e.target.value)}
                disabled={disabled}
              />
            </div>
            <div className="mb-10">
              <input
                className="w-full py-4 px-6 border border-grey-500 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none focus:outline-none"
                placeholder="Enter your wallet pin"
                type="password"
                value={wallet_pin}
                onChange={(e) => setWalletPin(e.target.value)}
                disabled={disabled}
              />
            </div>
            <div className="mb-5 mt-4">
              <button
                className={`w-full px-6 py-4 rounded-xl ${
                  disabled ? 'bg-blue-grey-200' : 'bg-blue-500'
                } transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800 mt-5`}
                onClick={handleWithdraw}
                disabled={disabled}
              >
                <span className=" text-white text-lg">
                  {disabled ? 'Loading...' : 'withdraw'}
                </span>
              </button>
            </div>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}

export default WithdrawForm