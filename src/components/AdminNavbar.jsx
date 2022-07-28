import React, {useEffect, useState} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ClientService from '../utils/ClientService';
import AuthCheck from '../utils/authCheckService'
import { Avatar } from '@material-tailwind/react';
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem
} from '@material-tailwind/react';
import { FaTimes, FaBars } from 'react-icons/fa';
const AdminNavbar = ({ showSidebar, setShowSidebar }) => {
    const [first_name, setFirst_name] = useState('');
  const [last_name, setLast_name] = useState('');
  let navigate = useNavigate()
    useEffect(() => {
      ClientService.profileDetails()
        .then((res) => {
          setFirst_name(res.data.result.first_name);
          setLast_name(res.data.result.last_name);
        })
        .catch((err) => {
          console.log('error', err);
        });
    });
  const location = useLocation().pathname;
  const openNav = () => {
    setShowSidebar('left-0')
    console.log("showNav", showSidebar)
  }
  const closeNav = () => {
    setShowSidebar('-left-64')
      console.log('close nav', showSidebar);
  }
  useEffect(() => {
    if (!AuthCheck()) {
      navigate('/')
    }
    // eslint-disable-next-line
  }, [])
  const handleLogOut = () => {
    localStorage.removeItem('jwt')
    navigate('/')
  } 
  
  
  return (
    <nav className="bg-blue-500 md:ml-64 py-6 px-3">
      <div className="container max-w-full mx-auto flex items-center content-center justify-between md:pr-8 md:pl-10">
        <div className="md:hidden">
          <div
            className="relative overflow-hidden pr-3 text-white"
            onClick={openNav}
          >
            <FaBars style={{ fontSize: '20px' }} />
          </div>

          <div
            className={`absolute top-2 md:hidden ${
              showSidebar === 'left-0' ? 'left-64' : '-left-64'
            } z-50 transition-all duration-300`}
          >
            <div
              className=" overflow-hidden mt-2 ml-2 text-white fixed"
              onClick={closeNav}
            >
              <FaTimes style={{ fontSize: '20px' }} />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <h4 className="uppercase text-white text-sm tracking-wider mt-1">
            {location === '/'
              ? 'DASHBOARD'
              : location.toUpperCase().replace('/', '')}
          </h4>

          <div className="flex">
            <div className="ml-6">
              <div className="w-12">
                <Menu>
                  <MenuHandler>
                    <Avatar
                      src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      alt="avatar"
                      variant="circular"
                      className="cursor-pointer"
                    />
                  </MenuHandler>
                  <MenuList className='left-32'>
                    <MenuItem>{first_name} {last_name}</MenuItem>
                    <MenuItem>
                      <span onClick={handleLogOut}>Log out</span>
                    
                    </MenuItem>

                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default AdminNavbar