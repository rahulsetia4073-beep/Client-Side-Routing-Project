
import React, { useState } from 'react';

const ProfileSettings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="p-8 md:p-12">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Account Settings</h2>
      
      <div className="space-y-8">
        <div className="flex items-center justify-between py-4 border-b border-slate-50">
          <div>
            <h4 className="font-semibold text-slate-800">Enable AI Suggestions</h4>
            <p className="text-sm text-slate-500">Allow Gemini to provide contextual tips while you browse.</p>
          </div>
          <button 
            onClick={() => setNotifications(!notifications)}
            className={`w-12 h-6 rounded-full transition-all flex items-center p-1 ${notifications ? 'bg-indigo-600' : 'bg-slate-200'}`}
          >
            <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${notifications ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </button>
        </div>

        <div className="flex items-center justify-between py-4 border-b border-slate-50">
          <div>
            <h4 className="font-semibold text-slate-800">High Resolution Mode</h4>
            <p className="text-sm text-slate-500">Enable 4K generation for supported image tools.</p>
          </div>
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 rounded-full transition-all flex items-center p-1 ${darkMode ? 'bg-indigo-600' : 'bg-slate-200'}`}
          >
            <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
          </button>
        </div>

        <div className="pt-4">
          <button className="px-6 py-2 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;
