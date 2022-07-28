import React from 'react'
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
const Banner = () => {
  return (
    <Card className="p-4 shadow-md">
      <CardHeader
        color="purple"
        className="grid items-center justify-start -mt-10 h-24 mb-4 px-8 py-4"
      >
        <h6 className="uppercase text-gray-200 text-xs font-medium">PAYFAST</h6>
        <h2 className="text-white text-2xl">Cashback</h2>
      </CardHeader>
      <CardBody>
        <div className="relative h-auto">
          <p className="mt-3 mb-3">
            New cashback system to return up to{' '}
            <span className="font-semibold">15% of cashback</span>
          </p>
          <div>
            <button className=" px-4 py-2 rounded transition bg-blue-500">
              <span className="text-base text-white">Learn more</span>
            </button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default Banner