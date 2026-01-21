
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    {
      title: 'Smart Translator',
      desc: 'Context-aware translations powered by Gemini Pro for over 100 languages.',
      path: '/translator',
      icon: 'fa-language',
      color: 'bg-blue-500'
    },
    {
      title: 'Random Generator',
      desc: 'Instant creative content generation including jokes, facts, and poems.',
      path: '/random',
      icon: 'fa-shuffle',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4">
          AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Insights</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Experience the power of the Gemini API through our modular micro-apps. Fast, intelligent, and beautifully routed.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {features.map((f) => (
          <Link 
            key={f.path} 
            to={f.path}
            className="group block p-8 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-indigo-200 transition-all transform hover:-translate-y-1"
          >
            <div className={`${f.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <i className={`fa-solid ${f.icon} text-white text-xl`}></i>
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">{f.title}</h2>
            <p className="text-slate-500 mb-6">{f.desc}</p>
            <div className="flex items-center text-indigo-600 font-semibold">
              Explore Now
              <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <h3 className="text-3xl font-bold mb-4">Under the Hood</h3>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          This application uses React Router for seamless client-side navigation, React.lazy for performance optimization, and Gemini 3 Flash for near-instant responses.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {['React 18', 'TypeScript', 'Tailwind CSS', 'Gemini API', 'ESM'].map(tag => (
            <span key={tag} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/10">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
