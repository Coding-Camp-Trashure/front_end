import React from 'react';

export const ActivityCard = ({ date, points, title }) => (
  <div className="flex items-start p-6 bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer">
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-green-1 rounded-full flex items-center justify-center">
            <span className="text-white font-medium">T</span>
          </div>
          <span className="text-sm text-gray-600">{title}</span>
        </div>
        <span className="text-sm text-gray-500">{date}</span>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900">{points}</h3>
    </div>
  </div>
);