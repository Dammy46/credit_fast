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
        setHistory([...trans, history]);
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
                 {/* {history.map((data) => (
                   <tr key={data.user_id}>
                     <th
                      
                       className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"
                     >
                       {data.amount}
                     </th>
                     <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                       {data}
                     </td>
                     <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                       {data}
                     </td>
                     <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                       {data}
                     </td>
                     <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                       {data}
                     </td>
                     <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                       {data}
                     </td>
                   </tr>
                 ))} */}
               </tbody>
             </table>
           )}
         </div>
       </CardBody>
     </Card>
   );
};

export default TransTable;
