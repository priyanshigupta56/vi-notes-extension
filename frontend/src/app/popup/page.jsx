import React from "react";

const popup = () => {
  return (
    <div className="w-96 bg-white border border-gray-300 shadow-2xl rounded-2xl p-5">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3">
        <h2 className="text-xl font-bold text-black">🎥 Vidio Notes</h2>
        <button className="text-red-500 font-bold text-lg hover:text-red-700">✖</button>
      </div>
      
      {/* Description */}
      <div className="mt-4 text-gray-700 text-sm space-y-2">
        <p>📌 Take timestamped notes while watching videos.</p>
        <p>📂 View, edit, and organize notes instantly.</p>
      </div>
      
      {/* Notes Section */}
      <div className="mt-5">
        <button className="w-full bg-red-500 text-white py-3 rounded-xl text-sm font-semibold hover:bg-red-600 shadow-md">
          ➕ Add Timestamped Note
        </button>
        
        {/* Notes List (Static for now) */}
        <div className="mt-5 space-y-3">
          <div className="p-3 border rounded-xl bg-gray-100 flex justify-between items-center shadow-sm">
            <span className="text-red-500 font-bold">[02:15]</span>
            <span className="text-gray-800">This part is important!</span>
            <button className="text-gray-500 hover:text-gray-700">✏️</button>
          </div>
          <div className="p-3 border rounded-xl bg-gray-100 flex justify-between items-center shadow-sm">
            <span className="text-red-500 font-bold">[05:42]</span>
            <span className="text-gray-800">Need to rewatch this.</span>
            <button className="text-gray-500 hover:text-gray-700">✏️</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default popup;
