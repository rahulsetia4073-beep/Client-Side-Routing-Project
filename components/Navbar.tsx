
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: 'fa-house' },
    { path: '/translator', label: 'Translator', icon: 'fa-language' },
    { path: '/random', label: 'Random', icon: 'fa-shuffle' },
    { path: '/item/123', label: 'Item 123', icon: 'fa-box-open' },
    { path: '/profile', label: 'Profile', icon: 'fa-user' },
  ];

  const activeClass = "bg-indigo-50 text-indigo-600 border-b-2 border-indigo-600";
  const inactiveClass = "text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors";

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <div className="bg-indigo-600 p-2 rounded-lg">
                <i className="fa-solid fa-sparkles text-white"></i>
              </div>
              <span className="font-bold text-xl text-slate-800 tracking-tight">GeminiHub</span>
            </NavLink>
          </div>

          <div className="hidden lg:flex space-x-4 h-full">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => 
                  `px-4 h-full flex items-center text-sm font-medium ${isActive ? activeClass : inactiveClass}`
                }
              >
                <i className={`fa-solid ${item.icon} mr-2`}></i>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-indigo-600"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 py-4 px-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => 
                `block px-4 py-3 rounded-lg text-base font-medium ${isActive ? 'bg-indigo-600 text-white' : 'text-slate-600 bg-slate-50'}`
              }
            >
              <i className={`fa-solid ${item.icon} mr-3`}></i>
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
