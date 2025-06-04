import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const SettingsLinks = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed left-0 top-1/2 -translate-y-1/2 bg-green-1 text-white p-2 rounded-r-lg shadow-md z-50 transition-all duration-200"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? (
          <FiChevronLeft className="w-6 h-6" />
        ) : (
          <FiChevronRight className="w-6 h-6" />
        )}
      </button>

      {/* Navigation Sidebar */}
      <div
        className={`fixed lg:static lg:translate-x-0 top-[80px] left-0 h-[calc(100vh-80px)] lg:h-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none transition-transform duration-300 z-40 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-64 pt-8 px-4 lg:px-0">
          <h1 className="text-2xl font-bold mb-6 pt-4">Settings</h1>
          <nav className="space-y-4">
            <Link
              to="/settings/profile"
              className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === "/settings/profile"
                  ? "bg-green-1 text-white font-semibold"
                  : "text-gray-700 hover:bg-green-1/10 hover:text-green-1 hover:translate-x-1"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <Link
              to="/settings/password"
              className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === "/settings/password"
                  ? "bg-green-1 text-white font-semibold"
                  : "text-gray-700 hover:bg-green-1/10 hover:text-green-1 hover:translate-x-1"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Password
            </Link>
          </nav>
        </div>
      </div>

      {/* Modified Overlay - Adjusted to start below navbar */}
      {isOpen && (
        <div
          className="fixed inset-x-0 top-[80px] bottom-0 bg-black/30 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default SettingsLinks;