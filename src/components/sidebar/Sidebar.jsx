import React from "react";
import { Link , NavLink } from 'react-router-dom';
import { FaBookmark, FaHome , FaCog, FaSearch } from 'react-icons/fa';  
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
            to="/menu"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-300 hover:bg-slate-700 hover:text-white"
              }`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
            <span>Menu</span>
          </NavLink>

          <NavLink
            to="/bookmark"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-full transition-all duration-200 ${
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
            to="/setting"
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-gray-300 text-gray-900"
                  : "text-gray-300 hover:bg-slate-700 hover:text-white"
              }`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.09-.76-1.71-1.05L14.46 2.5c-.05-.24-.27-.42-.5-.42h-4c-.23 0-.45.18-.5.42l-.36 2.57c-.62.29-1.19.65-1.71 1.05l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.12.22-.07.49.12.64l2.11 1.65c-.04.32-.07.64-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.09.76 1.71 1.05l.36 2.57c.05.24.27.42.5.42h4c.23 0 .45-.18.5-.42l.36-2.57c.62-.29 1.19-.65 1.71-1.05l2.49 1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
            </svg>
            <span>Setting</span>
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
