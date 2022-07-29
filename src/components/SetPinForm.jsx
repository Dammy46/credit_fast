import React,{useState} from 'react'
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import ClientService from '../utils/ClientService';
import Swal from 'sweetalert2'

const SetPinForm = () => {
  const [pin, setPin] = useState('')
  const [confirm_pin, setConfirmPin] = useState('')
    const [disabled, setDisabled] = useState(false);
  const handlePin = (e) => {
    e.preventDefault(e)
    setDisabled(true)
    let param = { pin, confirm_pin }
    ClientService.newPin(param).then((res) => {
      console.log("response of pin", res)
      Swal.fire({
        icon: 'success',
        text: res.data.message
      })

    }).catch((err) => {
      console.log("error of pin", err)
      Swal.fire({
        icon: 'error',
        text: err.response.data.errors[0].msg
      })
      setDisabled(false);
    })

  }
  return (
    <Card className="p-4 shadow-md">
      <CardHeader
        color="orange"
        className="flex items-center justify-center -mt-10 h-24 mb-4 px-8 py-4"
      >
        <h2 className="text-white text-2xl">Set pin</h2>
      </CardHeader>
      <CardBody>
        <form>
          <h6 className="text-orange-500 text-sm mt-3 mb-6 font-light uppercase">
            set your wallet pin
          </h6>
          <div className="mt-10">
            <div className="mb-10">
              <input
                className="w-full py-4 px-6 border border-grey-500 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none focus:outline-none"
                placeholder="Pin"
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                disabled={disabled}
              />
            </div>
            <div className="mb-10">
              <input
                className="w-full py-4 px-6 border border-grey-500 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none focus:outline-none"
                placeholder="Confirm pin"
                
                type="password"
                value={confirm_pin}
                onChange={(e) => setConfirmPin(e.target.value)}
                disabled={disabled}
              />
            </div>
            <div className="mb-5 mt-4">
              <button
                className="w-full px-6 py-4 rounded-xl bg-blue-500 transition"
                onClick={handlePin}
                disabled={disabled}
              >
                <span className=" text-white text-lg">
                  {disabled ? 'Loading...' : 'Set pin'}
                </span>
              </button>
            </div>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}

export default SetPinForm