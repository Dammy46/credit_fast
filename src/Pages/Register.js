import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import Swal from 'sweetalert2';
import ClientService from '../utils/ClientService';

const Register = () => {
  const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setDisabled(true);
    const param = { first_name, last_name, email, password };
    ClientService.newAccount(param)
      .then((res) => {
        console.log('user', res);
        Swal.fire({
          icon: 'success',
          text: 'Successful 😀',
        });
        navigate('/');
      })
      .catch((err) => {
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
              Welcome to Payfast ! Register first
            </p>
          </div>

          <div className="mt-12 mb-4">
            <button className="w-full py-4 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
              <div className="flex gap-4 justify-center">
                {google}
                <span className="block w-max font-medium tracking-wide text-sm text-blue-700">
                  Register with Google
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
              <input
                type="text"
                placeholder="First name"
                onChange={(e) => setFirst_name(e.target.value)}
                errorMessage="First name should be 5-10 characters and shouldn't include any special character!"
                disabled={disabled}
                className="w-full py-4 px-6 border border-grey-500 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:border-red-400 focus:invalid:outline-none focus:outline-none"
                
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last name"
                onChange={(e) => setLast_name(e.target.value)}
                disabled={disabled}
                errorMessage="Last name should be 5-10 characters and shouldn't include any special character!"
                className="w-full py-4 px-6 border border-grey-500 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:border-red-400 focus:invalid:outline-none focus:outline-none"
                
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                disabled={disabled}
                errorMessage="it should be a valid email address !"
                className="w-full py-4 px-6 border border-grey-500 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:border-red-400 focus:invalid:outline-none focus:outline-none"
                
              />
            </div>

            <div className="">
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                disabled={disabled}
                errorMessage="Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!"
                className="w-full py-4 px-6 border border-grey-500 rounded-xl placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:border-red-400 focus:invalid:outline-none focus:outline-none"
                
              />
            </div>

            <div>
              <button
                className="w-full px-6 py-4 rounded-xl bg-blue-500 transition hover:bg-sky-600 focus:bg-sky-600 active:bg-sky-800 mt-10"
                onClick={handleRegister}
                disabled={disabled}
              >
                <span className="font-semibold text-white text-lg">
                  {disabled ? 'Loading....' : 'Register'}
                </span>
              </button>
              <p className="w-max p-3 -ml-3">
                <span className="text-sm tracking-wide ">
                  Already have an account ?{' '}
                  <Link to="/" className="text-blue-600">
                    sign in
                  </Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
