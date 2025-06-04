import React, { useState } from "react";
import { FiInfo, FiTrash2 } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import SettingsLinks from "./SettingsLinks";

const SettingsProfile = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    username: "John Doe",
    email: "email@mail.com"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen mt-5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-8 md:px-14">
        <div className="flex flex-col lg:flex-row gap-8">
          <SettingsLinks />
          {/* Main Content - Improved responsive layout */}
          <div className="flex-1 pt-4 lg:pt-8 flex justify-center">
            <div className="w-full lg:max-w-2xl bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
              {/* Profile Picture Section */}
              <div className="mb-6 lg:mb-8 pb-4 lg:pb-6 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6">
                  {/* Profile Picture */}
                  <div className="w-[80px] h-[80px] lg:w-[90px] lg:h-[90px] rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">
                      Image
                    </span>
                  </div>
                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 lg:space-x-4">
                    <Button
                      variant="secondary-long"
                      size="sm"
                    >
                      Update
                    </Button>
                    <button className="text-sm text-gray-600 hover:text-red-500 flex items-center gap-2">
                      <FiTrash2 className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-6 lg:space-y-8 font-inter">
                {/* Username Field */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-medium text-gray-700">
                      Username
                    </label>
                    <FiInfo className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
                  </div>
                  <div className="w-full h-[40px] lg:h-[46px] bg-white rounded-lg border border-gray-300 hover:border-green-1 focus-within:border-green-1 focus-within:ring-1 focus-within:ring-green-1 transition-colors">
                    <input
                      type="text"
                      value={formData.username}
                      className="w-full h-full px-3 lg:px-4 bg-transparent disabled:text-gray-500 text-sm lg:text-base"
                      disabled
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <FiInfo className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
                  </div>
                  <div className="w-full h-[40px] lg:h-[46px] bg-white rounded-lg border border-gray-300 hover:border-green-1 focus-within:border-green-1 focus-within:ring-1 focus-within:ring-green-1 transition-colors">
                    <input
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-full px-3 lg:px-4 bg-transparent text-sm lg:text-base"
                      placeholder="email@mail.com"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-gray-200">
                  <Button
                    variant="secondary"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    Simpan Perubahan
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    Batal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;