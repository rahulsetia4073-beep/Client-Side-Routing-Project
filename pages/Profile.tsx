
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Profile: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Nav */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 space-y-1">
            <div className="p-4 mb-4 border-b border-slate-50 text-center">
              <div className="w-20 h-20 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-full mx-auto mb-3 flex items-center justify-center text-white text-3xl font-bold">
                JD
              </div>
              <h2 className="font-bold text-slate-800">John Doe</h2>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Gemini Enthusiast</p>
            </div>
            
            <NavLink 
              to="/profile/details"
              className={({ isActive }) => 
                `flex items-center px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-600 hover:bg-slate-50'}`
              }
            >
              <i className="fa-solid fa-id-card mr-3"></i> Profile Details
            </NavLink>
            <NavLink 
              to="/profile/settings"
              className={({ isActive }) => 
                `flex items-center px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' : 'text-slate-600 hover:bg-slate-50'}`
              }
            >
              <i className="fa-solid fa-gear mr-3"></i> Settings
            </NavLink>
          </div>
        </div>

        {/* Dynamic Nested Content */}
        <div className="flex-grow">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 min-h-[400px]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
