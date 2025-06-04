import React from 'react';
import Button from '../Button';
import { FiSearch, FiMoreVertical, FiCreditCard } from 'react-icons/fi';

export const TransferSection = () => (
  <div className="flex flex-col gap-6 p-6 bg-white rounded-lg shadow-sm border border-gray-200 h-full">
    {/* Transfer Actions */}
    <div className="flex gap-3">
      <Button
        variant="secondary"
        size="sm"
        className="flex-1 py-2.5 hover:bg-gray-100 transition-colors duration-200"
      >
        Kirim
      </Button>
      <Button
        variant="secondary"
        size="sm"
        className="flex-1 py-2.5 hover:bg-gray-100 transition-colors duration-200"
      >
        Scan
      </Button>
    </div>

    <div className="flex flex-col gap-6">
      {/* Send Again Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Kirim Lagi</h3>
          <FiMoreVertical className="w-5 h-5 text-gray-600 hover:text-green-1 cursor-pointer transition-colors duration-200" />
        </div>
        <div className="flex items-center p-4 bg-gray-50 rounded-lg">
          <FiSearch className="w-8 h-8 text-gray-400" />
        </div>
      </div>

      {/* Bank Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Bank dan Dompet Digital</h3>
          <FiMoreVertical className="w-5 h-5 text-gray-600 hover:text-green-1 cursor-pointer transition-colors duration-200" />
        </div>
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"> {/* Changed items-start to items-center */}
          <FiCreditCard className="w-5 h-5 text-gray-600" /> {/* Removed mt-0.5 */}
          <p className="text-sm text-gray-600 leading-relaxed">
            Hubungkan rekening bank, atau dompet digital Anda sekarang.
          </p>
        </div>
      </div>
    </div>
  </div>
);