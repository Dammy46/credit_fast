import React from 'react'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {Input} from '@material-tailwind/react'
import Swal from 'sweetalert2'
import ClientService from '../utils/ClientService'
const Login = () => {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
     let navigate = useNavigate();
     const [disabled, setDisabled] = useState(false);

     const Toast = Swal.mixin({
       toast: true,
       position: 'top-end',
       showConfirmButton: false,
       timer: 1000,
       timerProgressBar: true,
       didOpen: (toast) => {
         toast.addEventListener('mouseenter', Swal.stopTimer);
         toast.addEventListener('mouseleave', Swal.resumeTimer);
       },
     });
     const handleLogin = (e) => {
       e.preventDefault();
       setDisabled(true);
       const credentials = {
         email,
         password,
       };
       ClientService.loginAccount(credentials)
         .then((res) => {
           localStorage.setItem('jwt', res.data.token);
           Toast.fire({
             icon: 'success',
             title: 'Signed in successfully 😀',
           });
           setTimeout(() => {
             navigate('/wallet/dashboard');
           }, 2000);
         })
         .catch((err) => {
           console.log('error', err);
           if (err.response.status === 401) {
             Swal.fire({
               icon: 'error',
               text: err.response.data.message + '😟',
             });
             setDisabled(false);
           } else if (err.response.data === undefined) {
             Swal.fire({
               icon: 'error',
               text: err.message + '😟',
             });
             setDisabled(false);
           } else if (err.message === 'timeout exceeded') {
             Swal.fire({
               icon: 'error',
               text: err.message + '😟',
             });
             setDisabled(false);
           }
           Swal.fire({
             icon: 'error',
             text: err.response.data.errors[0].msg + '😟',
           });
           setDisabled(false);
         });
     };
     const google = (
       <svg
         xmlns="http://www.w3.org/2000/svg"
         x="0px"
         y="0px"
         className="w-5 h-5 "
         viewBox="0 0 48 48"
       >
         <path
           fill="#FFC107"
           d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
         ></path>
         <path
           fill="#FF3D00"
           d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
         ></path>
         <path
           fill="#4CAF50"
           d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
         ></path>
         <path
           fill="#1976D2"
           d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
         ></path>
       </svg>
     );
  return (
    <div className="2xl:container h-screen m-auto">
      <div hidden className="fixed inset-0 w-1/2 lg:block">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1488998527040-85054a85150e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJhbmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          alt="banking-img"
        />

      </div>

      <div className="relative h-full ml-auto lg:w-1/2 bg-white">
        <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12 ">
          <div className="space-y-4">
            <div>
              <p className="">PAYFAST.</p>
            </div>
            <p className="font-medium text-lg text-gray-600">
              Welcome to Payfast !  L   ogin first
            </p>
          </div>

          <div className="mt-12">
            <button className="w-full py-4 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
              <div className="flex gap-4 justify-center">
                {google}
                <span className="block w-max font-medium tracking-wide text-sm text-blue-700">
                  Login with Google
                </span>
              </div>
            </button>
          </div>

          <div className="mt-12 border-t">
            <span className="block w-max mx-auto -mt-3 px-4 text-center text-gray-500 bg-white">
              Or
            </span>
          </div>

          <form action="" className="space-y-6 py-6">

            <div>
              {/* <input
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                disabled={disabled}
                className="w-full py-4 px-6 ring-1 ring-gray-300 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-red-400 focus:invalid:outline-none focus:outline-none"
              /> */}
              <Input
                className="w-full py-4 px-6"
                size="lg"
                variant="standard"
                label="Email address"
                onChange={(e) => setEmail(e.target.value)}
                disabled={disabled}
                value={email}
        
              />
            </div>

            <div className="">
              <Input
                className="w-full py-4 px-6"
                size="lg"
                variant="standard"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={disabled}
   
              />
            </div>

            <div>
              <button
                className="w-full px-6 py-4 rounded-xl bg-blue-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800 mt-10"
                onClick={handleLogin}
                disabled={disabled}
              >
                <span className="font-semibold text-white text-lg">
                  {disabled ? 'Loading....' : 'Login'}
                </span>
              </button>
              <p className="w-max p-3 -ml-3">
                <span className="text-sm tracking-wide ">
                  Doon't have an account ? {' '}
                  <Link to="/register" className="text-blue-600">
                    sign up
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login