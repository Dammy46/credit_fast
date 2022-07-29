import React, {useEffect, useState} from 'react'
import { Card, CardHeader, CardBody } from '@material-tailwind/react';
import ClientService from '../utils/ClientService';
const FullTrans = () => {
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState([]);
    useEffect(() => {
      setLoading(true);
      ClientService.transactions()
        .then((res) => {
          console.log('history', res);
          setHistory(res)
          setLoading(false);
        })
        .catch((err) => {
          console.log('error for history', err);
        });
    }, []);
  return (
    <Card className="p-4 shadow-md">
      <CardHeader
        color="orange"
        className="flex items-center justify-center -mt-10 h-24 mb-4 px-8 py-4"
      >
        <h2 className="text-white text-2xl">Transfer History</h2>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          {loading ? (
            <div className="flex justify-center content-center items-center">
              Loading.....
            </div>
          ) : !history.length ? (
            <div className="flex justify-center content-center items-center">
              No transaction history.
            </div>
          ) : (
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Payment
                  </th>
                  <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Describtion
                  </th>
                  <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Status
                  </th>
                  <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Inflow
                  </th>
                  <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Amount
                  </th>
                  <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {history.slice(0, 6).map((item, i) => (
                  <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item}
                    </th>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                      {item}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </CardBody>
    </Card>
  );
}

export default FullTrans