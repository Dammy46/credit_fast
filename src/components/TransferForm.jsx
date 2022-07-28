import React, { useState} from 'react'
import {
  Card,
  CardHeader,
  CardBody,
} from '@material-tailwind/react';
import { Input } from '@material-tailwind/react';
import ClientService from '../utils/ClientService';




const TransferForm = () => {
  const [amount, setAmount] = useState('')
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('')


  const handleTransfer = (e) => {
    e.preventDefault()
    const param = { amount, email, pin }
    ClientService.transfer(param).then((res) => {
      console.log("response from the transfer", res)
    }).catch((err) => {
      console.log("error from the transfer", err)
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
              <Input
                variant="standard"
                label="Amount"
                color="blue"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="mb-10">
              <Input
                variant="standard"
                label="Enter the email address"
                color="blue"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-10">
              <Input
                variant="standard"
                label="Enter your wallet pin"
                color="blue"
                type="number"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>
            <div className="mb-5 mt-4">
              <button
                className="w-full px-6 py-4 rounded-xl bg-blue-500 transition"
                onClick={handleTransfer}
              >
                <span className="font-semibold text-white text-lg">
                  Transfer
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


 