import React from 'react';
import { Card, CardBody, CardHeader } from '@material-tailwind/react';

const TransTable = () => {
   return (
     <Card className="p-4 shadow-md">
       <CardHeader
         color="blue"
         className="flex items-center justify-start -mt-10 h-24 mb-4 px-8 py-4"
       >
         <div className="w-full flex items-center justify-between">
           <h2 className="text-white lg:text-2xl text-xl">
             Transaction History
           </h2>
           <span>See More</span>
         </div>
       </CardHeader>
       <CardBody>
         <div className="overflow-x-auto">
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
               <tr>
                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   1
                 </th>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   Dakota Rice
                 </td>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   $36,738
                 </td>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   Niger
                 </td>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   $36,738
                 </td>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   Niger
                 </td>
               </tr>
               <tr>
                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   2
                 </th>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   Minerva Hooper
                 </td>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   $23,789
                 </td>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   Curaçao
                 </td>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   $36,738
                 </td>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   Niger
                 </td>
               </tr>
               <tr>
                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   3
                 </th>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   Sage Rodriguez
                 </td>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   $56,142
                 </td>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   Netherlands
                 </td>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   $36,738
                 </td>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   Niger
                 </td>
               </tr>
               <tr>
                 <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   4
                 </th>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   Philip Chaney
                 </td>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   $38,735
                 </td>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   Korea, South
                 </td>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   $36,738
                 </td>
                 <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                   Niger
                 </td>
               </tr>
             </tbody>
           </table>
         </div>
       </CardBody>
     </Card>
   );
};

export default TransTable;
