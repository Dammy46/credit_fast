import React,{useState} from 'react'
import { Card, CardBody, CardHeader, Input } from '@material-tailwind/react';
import ClientService from '../utils/ClientService';
import Swal from 'sweetalert2'

const SetPinForm = () => {
  const [pin, setPin] = useState('')
  const [confirm_pin, setConfirmPin] = useState('')
  const handlePin = (e) => {
    e.preventDefault(e)
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
              <Input
                variant="standard"
                label="Set your wallet pin"
                color="blue"
                type="number"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
              />
            </div>
            <div className="mb-10">
              <Input
                variant="standard"
                label="Confirm pin"
                color="blue"
                type="number"
                value={confirm_pin}
                onChange={(e) => setConfirmPin(e.target.value)}
              />
            </div>
            <div className="mb-5 mt-4">
              <button className="w-full px-6 py-4 rounded-xl bg-blue-500 transition"
              onClick={handlePin}>
                <span className="font-semibold text-white text-lg">
                  Set pin
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