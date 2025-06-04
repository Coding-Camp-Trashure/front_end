import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { ActivityCard } from "./ActivityCard";

export const ActivitySection = ({ activity }) => (
  <section>
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold">Aktivitas terakhir</h2>
      <FiMoreHorizontal 
        className="w-6 h-6 text-gray-600 hover:text-green-1 cursor-pointer transition-colors duration-200" 
        aria-label="More options"
      />
    </div>
    
    <ActivityCard
      date={activity.date}
      points={activity.points}
      title={activity.title}
    />
  </section>
);