import React from 'react';
import { Link } from 'react-router-dom';
const Null = () => {
  return (
    <div className="container flex flex-col justify-center items-center content-center h-screen px-8 mx-auto">
      <h2 className="text-2xl  mb-8 font-semibold">404 page</h2>
      <p className="text-center mb-8">
        Ooops! Looks like the page you're looking for has been deleted or does
        not exist.
      </p>
      <button className="w-auto py-4 px-6 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200">
        <div className="flex justify-center">
          <Link
            to="/"
            className="block w-max font-medium tracking-wide text-sm text-blue-700"
          >
            Go back home
          </Link>
        </div>
      </button>
    </div>
  );
};

export default Null;
