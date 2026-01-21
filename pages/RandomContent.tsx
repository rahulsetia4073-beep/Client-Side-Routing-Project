
import React, { useState } from 'react';
import { generateRandomContent } from '../services/geminiService';
import { ContentType } from '../types';

const RandomContent: React.FC = () => {
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<ContentType>(ContentType.FACT);
  const [loading, setLoading] = useState(false);

  const categories = [
    { type: ContentType.FACT, label: 'Cool Fact', icon: 'fa-lightbulb', color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { type: ContentType.JOKE, label: 'Funny Joke', icon: 'fa-face-laugh-squint', color: 'text-pink-600', bg: 'bg-pink-100' },
    { type: ContentType.QUOTE, label: 'Inspo Quote', icon: 'fa-quote-left', color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { type: ContentType.POEM, label: 'Micro Poem', icon: 'fa-feather', color: 'text-purple-600', bg: 'bg-purple-100' },
  ];

  const handleGenerate = async (type: ContentType) => {
    setCategory(type);
    setLoading(true);
    try {
      const result = await generateRandomContent(type);
      setContent(result);
    } catch (error) {
      console.error(error);
      setContent("Failed to generate content.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-800">Random Creativity Engine</h1>
        <p className="text-slate-500">Pick a category and let Gemini surprise you.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.type}
            onClick={() => handleGenerate(cat.type)}
            disabled={loading}
            className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all ${
              category === cat.type ? 'border-indigo-600 bg-white scale-105 shadow-md' : 'border-slate-100 bg-slate-50 hover:bg-white'
            }`}
          >
            <div className={`w-12 h-12 rounded-full ${cat.bg} ${cat.color} flex items-center justify-center mb-3`}>
              <i className={`fa-solid ${cat.icon} text-xl`}></i>
            </div>
            <span className="font-semibold text-slate-700">{cat.label}</span>
          </button>
        ))}
      </div>

      <div className="relative">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[2px] z-10 rounded-3xl">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-indigo-600"></div>
          </div>
        )}
        
        <div className={`min-h-[300px] p-10 bg-white border border-slate-100 rounded-3xl shadow-xl flex items-center justify-center text-center ${loading ? 'opacity-50' : 'opacity-100'}`}>
          {content ? (
            <div className="max-w-2xl">
              <i className={`fa-solid ${categories.find(c => c.type === category)?.icon} text-4xl opacity-10 mb-6 block`}></i>
              <p className="text-2xl font-medium text-slate-800 leading-relaxed italic">
                "{content}"
              </p>
              <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-center">
                <button 
                  onClick={() => handleGenerate(category)}
                  className="text-sm font-bold text-indigo-600 hover:text-indigo-800"
                >
                  Regenerate another
                </button>
              </div>
            </div>
          ) : (
            <div className="text-slate-400">
              <p className="text-xl">Select a category above to start</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomContent;
