import React from 'react';

const Toast = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-1 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 transition-all duration-300 ease-in-out transform translate-y-0 opacity-100 z-[60]">
      <span className='text-white'>{message}</span>
      <button 
        onClick={onClose}
        className="ml-2 text-white hover:text-gray-200 transition-colors font-bold text-xl"
      >
        ×
      </button>
    </div>
  );
};

export default Toast;