import React from 'react';

function PlainLayout({ children }) {
  return (
    <div className="max-w-5xl mx-auto px-8 py-12 bg-white shadow-lg rounded-lg text-gray-800 font-sans leading-relaxed">
      {children}
    </div>
  );
}

export default PlainLayout;
