
import React, { useState } from 'react';
import { translateText } from '../services/geminiService';

const Translator: React.FC = () => {
  const [text, setText] = useState('');
  const [targetLang, setTargetLang] = useState('Spanish');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const languages = [
    'Spanish', 'French', 'German', 'Chinese', 'Japanese', 
    'Korean', 'Russian', 'Italian', 'Portuguese', 'Arabic',
    'Hindi', 'Dutch'
  ];

  const handleTranslate = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const translated = await translateText(text, targetLang);
      setResult(translated);
    } catch (error) {
      console.error(error);
      setResult("Error occurred during translation.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="p-8 bg-indigo-600 text-white">
          <h1 className="text-3xl font-bold">AI Translator</h1>
          <p className="opacity-80">Translate anything instantly with Gemini 3</p>
        </div>
        
        <div className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Source Text</label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type your text here..."
                className="w-full h-40 p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Target Translation</label>
              <div className="w-full h-40 p-4 bg-slate-100 border border-slate-200 rounded-2xl flex flex-col justify-center">
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce delay-200"></div>
                  </div>
                ) : (
                  <p className={`text-lg ${result ? 'text-slate-800' : 'text-slate-400 italic'}`}>
                    {result || "Translation will appear here..."}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <div className="flex items-center space-x-3 w-full md:w-auto">
              <span className="text-sm text-slate-500 whitespace-nowrap">Translate to:</span>
              <select 
                value={targetLang}
                onChange={(e) => setTargetLang(e.target.value)}
                className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleTranslate}
              disabled={loading || !text}
              className="w-full md:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white rounded-xl font-bold transition-all flex items-center justify-center shadow-lg shadow-indigo-200"
            >
              {loading ? "Translating..." : "Translate"}
              <i className="fa-solid fa-paper-plane ml-2"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translator;
