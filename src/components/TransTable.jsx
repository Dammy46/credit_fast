import React,{useEffect} from 'react';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import ClientService from '../utils/ClientService';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const TransTable = () => {
    const { search } = useLocation();
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    ClientService.transactions(search)
      .then((res) => {
        console.log('history', res);
        let trans = res.data.result.data
        console.log("trans", trans)
        setHistory([...trans]);
        setLoading(false);
        console.log('history', history);
      })
      .catch((err) => {
        console.log('error for history', err);
      });
    // eslint-disable-next-line
  }, [])
  
   return (
     <Card className="p-4 shadow-md">
       <CardHeader
         color="blue"
         className="flex items-center justify-start -mt-10 h-24 mb-4 px-4 lg:px-8 md:px-8 py-4"
       >
         <div className="w-full flex items-center justify-between">
           <h2 className="text-white lg:text-2xl ">Transaction History</h2>
           <Link to="/wallet/history" className="text-base underline">
             See More
           </Link>
         </div>
       </CardHeader>
       <CardBody>
         <div className="overflow-x-auto">
           {loading ? (
             <div className="flex flex-col justify-center content-center items-center">
               <div className='spinner'></div>
               <h2 className='mt-10'> Loading.....</h2>
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
                     Payment method
                   </th>
                   <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                     Description
                   </th>
                   <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                     Status
                   </th>
                   <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                     Transaction reference
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
                 {history.slice(0, 6).map((data, i) => (
                   <tr key={i} className="border-b border-gray-200">
                     <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left uppercase">
                       {data.payment_method}
                     </td>
                     <td className=" align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                       {data.description}
                     </td>
                     <td className=" align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                       {data.status}
                     </td>
                     <td className="align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                       {data.transaction_reference}
                     </td>
                     <td
                       className={`align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left ${
                         data.is_inflow ? 'text-green-300' : 'text-red-500'
                       }`}
                     >
                       {data.is_inflow ? `+${data.amount}` : `-${data.amount}`}
                     </td>
                     <td className=" align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                       {data.created_at}
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
};

export default TransTable;
