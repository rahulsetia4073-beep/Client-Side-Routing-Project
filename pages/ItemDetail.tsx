
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ItemDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <button 
        onClick={() => navigate(-1)}
        className="mb-8 text-indigo-600 hover:text-indigo-800 flex items-center font-medium"
      >
        <i className="fa-solid fa-arrow-left mr-2"></i> Back
      </button>

      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 p-10">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center">
            <i className="fa-solid fa-cube text-3xl"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-800">Item Detail View</h1>
            <p className="text-slate-500">Resource Identifier: <span className="font-mono bg-slate-100 px-2 py-1 rounded text-indigo-600">{id}</span></p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            This page demonstrates the usage of <strong>dynamic route parameters</strong> in React Router. 
            The ID extracted from the URL is currently being used to simulate a deep-link into a specific dataset.
          </p>
          
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-slate-500 uppercase mb-4">Metadata Analysis</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-center"><i className="fa-solid fa-check text-emerald-500 mr-2"></i> Dynamic ID: {id}</li>
              <li className="flex items-center"><i className="fa-solid fa-check text-emerald-500 mr-2"></i> Access Point: URL Params</li>
              <li className="flex items-center"><i className="fa-solid fa-check text-emerald-500 mr-2"></i> State: Synchronized with Router</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
