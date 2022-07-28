import React from 'react'
import { Card, CardHeader, CardBody, Input, Select, Option } from '@material-tailwind/react';
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
      })
      .catch((err) => {
        console.log('error', err);
      });
    // eslint-disable-next-line
  }, [])
   const handleWithdraw = (e) => {
     e.preventDefault();
     const param = { amount, bank_code, account_number, wallet_pin };
     ClientService.withdraw(param)
       .then((res) => {
         console.log(res);
         Swal.fire({
           icon: 'success',
           text: res.data.message,
         });
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
              <Input
                variant="standard"
                label="Amount"
                color="blue"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                disabled={disabled}
              />
            </div>
            <div className="mb-10">
              <Select
                variant="standard"
                label="Select bank"
                onChange={(e) => setBankCode(e.target.value)}>
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div>

            <div className="mb-10">
              <Input
                variant="standard"
                label="Account number"
                color="blue"
                type="number"
                value={account_number}
                onChange={(e) => setAccountNumber(e.target.value)}
                disabled={disabled}
              />
            </div>
            <div className="mb-10">
              <Input
                variant="standard"
                label="Enter your wallet pin"
                color="blue"
                type="number"
                value={wallet_pin}
                onChange={(e) => setWalletPin(e.target.value)}
                disabled={disabled}
              />
            </div>
            <div className="mb-5 mt-4">
              <button
                className="w-full px-6 py-4 rounded-xl bg-blue-500 transition"
                onClick={handleWithdraw}
                disabled={disabled}
              >
                <span className="font-semibold text-white text-lg">
                  Withdraw
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