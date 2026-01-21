
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="text-9xl font-black text-slate-100 absolute -z-10 select-none">404</div>
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-md">
        <div className="w-20 h-20 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <i className="fa-solid fa-map-location-dot text-3xl"></i>
        </div>
        <h1 className="text-2xl font-bold text-slate-800 mb-2">Lost in Space?</h1>
        <p className="text-slate-500 mb-8">
          The page you're looking for doesn't exist or has been moved to another dimension.
        </p>
        <Link 
          to="/" 
          className="inline-block w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
        >
          Return to Mission Control
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
