import React, {useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import AuthCheck from '../utils/authCheckService'
import ClientService from '../utils/ClientService'
import Swal from 'sweetalert2'
const Verify = () => {
   let navigate = useNavigate()
  const { search } = useLocation();
  console.log("params", search)

     useEffect(() => {
       ClientService.verify(search)
         .then((res) => {
           console.log('verify', res);
           Swal.fire({
             icon: 'success',
             text: res.data.message,
           });
           navigate('/wallet/dashboard');
         })
         .catch((err) => {
           console.log(err);
           Swal.fire({
             icon: 'error',
             text: err.response.data.message,
           });
           navigate('/wallet/dashboard');
         });
       // eslint-disable-next-line
     }, []);
  //  useEffect(() => {
  //    if (AuthCheck()) {
  //      navigate('/');
  //    }
  //    // eslint-disable-next-line
  //  }, [])
   
  return (
    <>
      <div className="bg-blue-500 px-3 md:px-8 h-40"></div>
      <div className="flex justify-center content-center h-screen flex-col">
        <h2 className="text-center">Verifying.....</h2>
      </div>
    </>
  );
}

export default Verify