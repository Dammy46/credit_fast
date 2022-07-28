import React, { useEffect, useState } from 'react'
import ClientService from '../utils/ClientService';

import { Card, CardBody, CardHeader, Input } from '@material-tailwind/react';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from '@material-tailwind/react';
import { FaPlusCircle } from 'react-icons/fa';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
const BalanceCard = ({ first, last }) => {
    const [amount, setAmount] = useState('');
    let navigate = useNavigate();
    const [balance, setBalance] = useState('');
    useEffect(() => {
      ClientService.balance()
        .then((res) => {
          setBalance(res.data.result);
        })
        .catch((err) => {
          console.log('error', err);
          if (err.response.status === 500) {
            Swal.fire({
              icon: 'warning',
              text: ' session expired please login again',
            });
            navigate('/');
          }
          else if (err.response.data === 401) {
                      Swal.fire({
                        icon: 'warning',
                        text: err.response.data.message,
                      });
                      navigate('/');
          }
          Swal.fire({
            icon: 'warning',
            text: err.response.data.message,
          });
            navigate('/app/setPin')
        });
      //eslint-disable-next-line
    }, []);

  
  const handleDeposit = (e) => {
    e.preventDefault()
    const param = { amount }
    ClientService.deposit(param).then((res) => {
      console.log("response for deposit", res)
      window.location.replace(res.data.paymentLink)
    }).catch((err) => {
      console.log("errors from the deposit", err)
    })
  }
  return (
    <Card className="p-4 shadow-md">
      <CardHeader
        color="orange"
        className="flex flex-col justify-start -mt-10 h-24 mb-4 px-8 py-4"
      >
        <h6 className="uppercase text-gray-200 text-xs font-medium mb-1">
          Welcome back
        </h6>
        <h2 className="text-white text-xl lg:text-2xl">
          {first} {last}
        </h2>
        <div className="flex justify-end">
          <Popover>
            <PopoverHandler>
              <div>
                <FaPlusCircle className="cursor-pointer" />
              </div>
            </PopoverHandler>
            <PopoverContent className="bg-blue-500">
              <div className="mb-10">
                <Input
                  label="Amount"
                  className="mb-5"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}/>
              </div>
              <div className="w-full flex justify-center">
                <Button onClick={handleDeposit}>Button</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </CardHeader>
      <CardBody>
        <div className="relative h-auto">
 
          {new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'NGN',
          }).format(balance)}
        </div>
      </CardBody>
    </Card>
  );
}

export default BalanceCard