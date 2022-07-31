import React, { useState} from 'react'
import {
  Card,
  CardHeader,
  CardBody,
} from '@material-tailwind/react';
import ClientService from '../utils/ClientService';
import Swal from 'sweetalert2'



const TransferForm = () => {
  const [amount, setAmount] = useState('')
  const [wallet_code_or_email, setEmail] = useState('');
  const [wallet_pin, setPin] = useState('');
  const [disabled, setDisabled] = useState(false)


  const handleTransfer = (e) => {
    e.preventDefault()
    setDisabled(true)
    const param = { amount, wallet_code_or_email, wallet_pin };
    ClientService.transfer(param).then((res) => {
      console.log("response from the transfer", res)
      setDisabled(false)
      Swal.fire({
        icon: 'success',
        text: 'Transfer successful'
      })
    }).catch((err) => {
      console.log("error from the transfer", err)
      Swal.fire({
        icon: 'error',
        text: err.response.data.errors[0].msg
      })
      setDisabled(false)
    })
  }

  

  return (
    <Card className="p-4 shadow-md">
      <CardHeader
        color="orange"
        className="flex items-center justify-center -mt-10 h-24 mb-4 px-8 py-4"
      >
        <h2 className="text-white text-2xl">Transfer Fund</h2>
      </CardHeader>
      <CardBody>
        <form>
          <h6 className="text-orange-500 text-sm mt-3 mb-6 font-light uppercase">
            Make a fund transfer
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
              <input
                className="w-full py-4 px-6 border border-grey-500 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none focus:outline-none"
                placeholder="Enter your email address"
                type="text"
                value={wallet_code_or_email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={disabled}
              />
            </div>
            <div className="mb-10">
              <input
                className="w-full py-4 px-6 border border-grey-500 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none focus:outline-none"
                placeholder="Enter your wallet pin"
                type="password"
                value={wallet_pin}
                onChange={(e) => setPin(e.target.value)}
                disabled={disabled}
              />
            </div>
            <div className="mb-5 mt-4">
              <button
                className={`w-full px-6 py-4 rounded-xl ${
                  disabled ? 'bg-blue-grey-200' : 'bg-blue-500'
                } transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800 mt-5`}
                onClick={handleTransfer}
                disabled={disabled}
              >
                <span className="font-semibold text-white text-lg">
                  {disabled ? 'Loading....' : 'Transfer'}
                </span>
              </button>
            </div>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default TransferForm


 