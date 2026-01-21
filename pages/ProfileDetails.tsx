
import React from 'react';

const ProfileDetails: React.FC = () => {
  return (
    <div className="p-8 md:p-12">
      <h2 className="text-2xl font-bold text-slate-800 mb-6">Profile Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Full Name</label>
          <p className="text-lg text-slate-800">John Quincy Doe</p>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Email Address</label>
          <p className="text-lg text-slate-800">john.doe@gemini-hub.ai</p>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Role</label>
          <p className="text-lg text-slate-800">Senior AI Integrator</p>
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Location</label>
          <p className="text-lg text-slate-800">San Francisco, CA</p>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Bio</h3>
        <p className="text-slate-600 leading-relaxed">
          Passionate about building intuitive user interfaces that bridge the gap between complex AI models and everyday utility. Currently exploring the capabilities of the Gemini 2.5 and 3 series for real-time edge processing.
        </p>
      </div>
    </div>
  );
};

export default ProfileDetails;
