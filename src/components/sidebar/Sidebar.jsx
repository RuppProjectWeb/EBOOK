import React from "react";
import { Link , NavLink } from 'react-router-dom';
import { FaBookmark, FaHome , FaCog, FaSearch } from 'react-icons/fa';
import { BiCategoryAlt } from "react-icons/bi";  
import { Button } from "flowbite-react";
import logo from '../../../public/images/logo.png'
function Sidebar() {
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 p-6 shadow-lg flex flex-col rounded-r-xl h-screen">
        {/* Profile/Logo Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center mb-3">
            <img src={logo} alt="Logo" className="w-full h-full rounded-full object-cover" />
          </div>
          <h2 className="text-lg font-semibold text-gray-100">StorySurf-EB</h2>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex flex-col space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-full font-medium shadow-md transition-all duration-200 ${
                isActive
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-300 hover:bg-slate-700 hover:text-white"
              }`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/bookmark"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-full font-medium shadow-md transition-all duration-200 ${
                isActive
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-300 hover:bg-slate-700 hover:text-white"
              }`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
            </svg>
            <span>Book Mark</span>
          </NavLink>

          <NavLink
            to="/Catagary"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-full font-medium shadow-md transition-all duration-200 ${
                isActive
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-300 hover:bg-slate-700 hover:text-white"
              }`
            }
          >
            <BiCategoryAlt/>
            <span>Catagory</span>
          </NavLink>
          <NavLink
            to="/Catagary"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-full font-medium shadow-md transition-all duration-200 ${
                isActive
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-300 hover:bg-slate-700 hover:text-white"
              }`
            }
          >
            <BiCategoryAlt/>
            <span>Admin book</span>
          </NavLink>
          <NavLink
            to="/Catagary"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-full font-medium shadow-md transition-all duration-200 ${
                isActive
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-300 hover:bg-slate-700 hover:text-white"
              }`
            }
          >
            <BiCategoryAlt/>
            <span>User</span>
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `mt-auto flex items-center space-x-3 p-3 rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-300 hover:bg-slate-700 hover:text-white"
              }`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
            </svg>
            <span>Log Out</span>
          </NavLink>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
