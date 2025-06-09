import React from "react";
import { PointsCard } from "./PointsCard";
import { TransferSection } from "./TransferSection";

export const PointsSection = ({ points, onTransfer }) => (
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-6">Saldo Anda</h2>
    <div className="grid lg:grid-cols-2 gap-6">
      <PointsCard points={points} onTransfer={onTransfer} />
      <TransferSection />
    </div>
  </section>
);