
import React, { useState, useEffect, useCallback } from 'react';
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

  const handleGenerate = useCallback(async (type: ContentType) => {
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
  }, []);

  // Automatically trigger generation on mount and when category changes
  useEffect(() => {
    handleGenerate(category);
  }, [category, handleGenerate]);

  const handleCategorySelect = (type: ContentType) => {
    if (loading) return;
    if (category === type) {
      // If clicking the same category, manually trigger a fresh generation
      handleGenerate(type);
    } else {
      // Changing the state will trigger the useEffect
      setCategory(type);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-slate-800">Random Creativity Engine</h1>
        <p className="text-slate-500">Select a category to instantly generate AI content.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.type}
            onClick={() => handleCategorySelect(cat.type)}
            disabled={loading}
            className={`flex flex-col items-center p-6 rounded-2xl border-2 transition-all group ${
              category === cat.type ? 'border-indigo-600 bg-white scale-105 shadow-md' : 'border-slate-100 bg-slate-50 hover:bg-white'
            }`}
          >
            <div className={`w-12 h-12 rounded-full ${cat.bg} ${cat.color} flex items-center justify-center mb-3 transition-transform group-hover:scale-110`}>
              <i className={`fa-solid ${cat.icon} text-xl`}></i>
            </div>
            <span className={`font-semibold transition-colors ${category === cat.type ? 'text-indigo-600' : 'text-slate-600 group-hover:text-slate-900'}`}>
              {cat.label}
            </span>
            {category === cat.type && !loading && (
               <div className="mt-2 text-[10px] font-bold text-indigo-400 uppercase tracking-widest animate-pulse">Active</div>
            )}
          </button>
        ))}
      </div>

      <div className="relative">
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-[2px] z-10 rounded-3xl">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-indigo-600 mb-4"></div>
            <p className="text-indigo-600 font-medium text-sm">Consulting Gemini...</p>
          </div>
        )}
        
        <div className={`min-h-[300px] p-10 bg-white border border-slate-100 rounded-3xl shadow-xl flex items-center justify-center text-center transition-opacity duration-300 ${loading ? 'opacity-30' : 'opacity-100'}`}>
          {content ? (
            <div className="max-w-2xl">
              <div className="mb-6">
                <i className={`fa-solid ${categories.find(c => c.type === category)?.icon} text-4xl opacity-10 block mx-auto`}></i>
              </div>
              <p className="text-2xl font-medium text-slate-800 leading-relaxed italic">
                "{content}"
              </p>
              <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-center space-x-6">
                <button 
                  onClick={() => handleGenerate(category)}
                  disabled={loading}
                  className="flex items-center text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  <i className="fa-solid fa-rotate-right mr-2"></i>
                  Regenerate another
                </button>
              </div>
            </div>
          ) : (
            <div className="text-slate-400 flex flex-col items-center">
              <i className="fa-solid fa-wand-magic-sparkles text-4xl mb-4 opacity-20"></i>
              <p className="text-xl">Initializing creative engine...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomContent;
