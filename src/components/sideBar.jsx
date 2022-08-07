import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
const Sidebar = () => {
     const [showSidebar, setShowSidebar] = useState('-left-64');
  return (
    <>
      <AdminNavbar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div
        className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
      >
        <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
          <a href="#payfast" className="mt-2 text-center w-full inline-block">
            <h5 className='text-blue-500 text-2xl sexy'>CREDITFAST.</h5>
          </a>
          <div className="flex flex-col">
            <hr className="my-4 min-w-full" />

            <ul className="flex-col min-w-full flex list-none">
              <li className="rounded-lg mb-4">
                <NavLink
                  to="/wallet/dashboard"
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center gap-4 text-base text-white font-light px-4 py-3 rounded-lg'
                      : 'bg-none flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg'
                  }
                  onClick={() => setShowSidebar('-left-64')}
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="rounded-lg mb-2">
                <NavLink
                  to="/wallet/transfer"
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center gap-4 text-base text-white font-light px-4 py-3 rounded-lg'
                      : 'bg-none flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg'
                  }
                  onClick={() => setShowSidebar('-left-64')}
                >
                  Transfer Fund
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 ">
                <NavLink
                  to="/wallet/withdraw"
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center gap-4 text-base text-white font-light px-4 py-3 rounded-lg'
                      : 'bg-none flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg'
                  }
                  onClick={() => setShowSidebar('-left-64')}
                >
                  Withdraw
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 ">
                <NavLink
                  to="/wallet/history"
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center gap-4 text-base text-white font-light px-4 py-3 rounded-lg'
                      : 'bg-none flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg'
                  }
                  onClick={() => setShowSidebar('-left-64')}
                >
                  Transaction history
                </NavLink>
              </li>
              <li className="rounded-lg mb-2 text-gray-700">
                <NavLink
                  to="/wallet/setPin"
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center gap-4 text-base text-white font-light px-4 py-3 rounded-lg'
                      : 'bg-none flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg'
                  }
                  onClick={() => setShowSidebar('-left-64')}
                >
                  Set pin
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar