import React from 'react'
import { useState } from 'react';

const App = () => {
  const [task, settask] = useState([]);
  const [title, settitle] = useState('');
  const [text, settext] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() && !text.trim()) return;
    let obj = { title, text };
    settask([...task, obj]);
    settitle('');
    settext('');
  };

  return (
    <div className="h-screen flex bg-[#0d0d0d] text-white font-sans overflow-hidden">

      {/* Left Panel - Add Note */}
      <div className="flex flex-col justify-center w-1/2 px-12 py-10">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Quick Capture</p>
        <h1 className="text-3xl font-bold mb-8 text-white">Add Note</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Note title"
            className="bg-[#1a1a1a] border border-[#2e2e2e] text-white placeholder-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:border-gray-500 transition"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <textarea
            placeholder="Write your note..."
            className="bg-[#1a1a1a] border border-[#2e2e2e] text-white placeholder-gray-600 px-4 py-3 rounded-lg focus:outline-none focus:border-gray-500 transition resize-none h-36"
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
          <button
            type="submit"
            className="mt-2 bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 active:bg-gray-400 transition"
          >
            Add Note
          </button>
        </form>
      </div>

      {/* Divider */}
      <div className="w-px bg-[#2a2a2a] self-stretch my-8" />

      {/* Right Panel - Recent Notes */}
      <div className="w-1/2 flex flex-col px-10 py-10 overflow-hidden">
        <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Saved</p>
        <h1 className="text-3xl font-bold mb-6 text-white">Recent Notes</h1>

        {task.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-600">
            <svg className="w-10 h-10 mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-sm">No notes yet. Add one on the left.</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto pr-1 flex flex-col gap-3">
            {task.map((item, index) => (
              <div
                key={index}
                className="bg-[#161616] border border-[#262626] rounded-xl px-5 py-4 flex justify-between items-start hover:border-[#3a3a3a] transition group"
              >
                <div className="flex-1 min-w-0 pr-4">
                  <h3 className="text-white font-semibold text-base truncate">
                    {item.title || 'Untitled'}
                  </h3>
                  {item.text && (
                    <p className="text-gray-500 text-sm mt-1 line-clamp-2 leading-relaxed">
                      {item.text}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => settask(task.filter((_, i) => i !== index))}
                  className="flex-shrink-0 text-gray-600 hover:text-red-400 transition p-1 rounded"
                  title="Delete note"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default App;