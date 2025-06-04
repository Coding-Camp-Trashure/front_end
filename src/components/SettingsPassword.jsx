import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";
import Button from "./Button";
import SettingsLinks from "./SettingsLinks";

const SettingsPassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen mt-5">
      <div className="container max-w-7xl mx-auto px-4 sm:px-8 md:px-14">
        <div className="flex flex-col lg:flex-row gap-8">
          <SettingsLinks />
          <div className="flex-1 pt-4 lg:pt-8 flex justify-center">
            <div className="w-full lg:max-w-2xl bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
              {/* Password Info Section */}
              <div className="mb-6 lg:mb-8 pb-4 lg:pb-6 border-b border-gray-200">
                <p className="text-sm lg:text-base text-gray-600">
                  Isi jika Anda ingin mengubah password.
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-6 lg:space-y-8 font-inter">
                {/* Current Password Field */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-medium text-gray-700">
                      Password Saat Ini
                    </label>
                    <FiInfo className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
                  </div>
                  <div className="w-full h-[40px] lg:h-[46px] bg-white rounded-lg border border-gray-300 hover:border-green-1 focus-within:border-green-1 focus-within:ring-1 focus-within:ring-green-1 transition-colors">
                    <input
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      className="w-full h-full px-3 lg:px-4 bg-transparent text-sm lg:text-base"
                      placeholder="Masukkan password saat ini"
                    />
                  </div>
                </div>

                {/* New Password Field */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-medium text-gray-700">
                      Password Baru
                    </label>
                    <FiInfo className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
                  </div>
                  <div className="w-full h-[40px] lg:h-[46px] bg-white rounded-lg border border-gray-300 hover:border-green-1 focus-within:border-green-1 focus-within:ring-1 focus-within:ring-green-1 transition-colors">
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="w-full h-full px-3 lg:px-4 bg-transparent text-sm lg:text-base"
                      placeholder="Masukkan password baru"
                    />
                  </div>
                </div>

                {/* Confirm Password Field */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <label className="text-sm font-medium text-gray-700">
                      Konfirmasi Password
                    </label>
                    <FiInfo className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
                  </div>
                  <div className="w-full h-[40px] lg:h-[46px] bg-white rounded-lg border border-gray-300 hover:border-green-1 focus-within:border-green-1 focus-within:ring-1 focus-within:ring-green-1 transition-colors">
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full h-full px-3 lg:px-4 bg-transparent text-sm lg:text-base"
                      placeholder="Konfirmasi password baru"
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

export default SettingsPassword;