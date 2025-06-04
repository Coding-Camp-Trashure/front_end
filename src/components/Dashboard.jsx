import React from "react";
import { PointsSection } from "./dashboard/PointsSection";
import { ActivitySection } from "./dashboard/ActivitySection";

const Dashboard = () => {
  const handleTransfer = () => {
    // Handle transfer action
  };

  const activity = {
    date: "29/05/2023",
    points: "90,000",
    title: "Point Diperoleh",
  };

  return (
    <section className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <PointsSection points="90,000" onTransfer={handleTransfer} />
        <ActivitySection activity={activity} />
      </div>
    </section>
  );
};

export default Dashboard;