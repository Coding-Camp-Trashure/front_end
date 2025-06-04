import React from 'react';
import Button from '../Button';
import { FiMoreHorizontal, FiArrowRight } from 'react-icons/fi';

export const PointsCard = ({ points, onTransfer }) => (
  <div className="flex items-start gap-4 p-8 bg-white rounded-lg shadow-sm border border-gray-200">
    <div className="flex flex-col gap-12 w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-green-1 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="text-base font-medium text-gray-600">Trashure Points</span>
        </div>
        <FiMoreHorizontal 
          className="w-5 h-5 text-gray-600 hover:text-green-1 cursor-pointer transition-colors duration-200" 
          aria-label="More options"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-gray-600">Total Points Tersedia</p>
          <h3 className="text-4xl font-bold text-gray-900">{points}</h3>
        </div>
        <div className="h-px bg-gray-100 my-2" />
        <Button
          variant="secondary"
          size="lg"
          onClick={onTransfer}
          className="flex items-center justify-center gap-3 w-full py-4 hover:opacity-90 transition-all duration-200 group mt-2"
        >
          <span className="group-hover:text-green-2 transition-colors duration-200">Transfer Point</span>
          <FiArrowRight className="w-5 h-5 group-hover:text-green-2 transition-colors duration-200" />
        </Button>
      </div>
    </div>
  </div>
);