import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiChevronDown, FiGrid, FiSettings, FiLogOut } from "react-icons/fi";
import NavLinks from "./NavLinks";
import UserDropdown from "./layout/navbar/UserDropdown";
import HamburgerButton from "./layout/navbar/HamburgerButton";

export default function NavbarLogin({ variant = "default" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const bgColors = {
    default: "bg-white-2",
    white: "bg-white",
  };

  const handleLogout = () => {
    setIsDropdownOpen(false);
    setIsMobileDropdownOpen(false);
    setIsOpen(false);
    navigate("/login");
  };

  return (
    <header className={`${bgColors[variant]} p-2 lg:py-8 relative z-50`}>
      <div className="relative bg-green-1 py-5 md:px-8 px-6 container mx-auto rounded-full flex items-center justify-between lg:divide-x-2 divide-green-3 lg:min-h-[88px]">
        {/* Logo */}
        <a href="#" className="mr-8">
          <img src="" alt="Trashure Logo" className="w-36 md:w-40" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:block w-full">
          <div className="flex items-center justify-between">
            <nav className="hidden lg:block">
              <NavLinks isMobile={false} />
            </nav>

            {/* Desktop User Menu */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 group"
                >
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-1 font-bold">
                    U
                  </div>
                  <span className="text-white font-semibold text-base group-hover:underline group-hover:text-green-2">
                    Username
                  </span>
                  <FiChevronDown 
                    className={`text-white-2 w-4 h-4 transition-transform duration-200 ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <UserDropdown 
                    onClose={() => setIsDropdownOpen(false)}
                    onLogout={handleLogout}
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <HamburgerButton 
          isOpen={isOpen}
          onClick={() => setIsOpen(prev => !prev)}
        />

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 lg:hidden transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Navigation Menu */}
        <div
          className={`absolute top-[5.250rem] left-0 lg:hidden bg-green-1 px-6 py-8 rounded-lg w-full transition-all duration-300 transform z-50 ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-[200%] opacity-0"
          }`}
        >
          <nav className="w-full mb-6">
            <NavLinks isMobile={true} />
          </nav>

          {/* Mobile User Section */}
          <div className="border-t border-green-3 pt-6">
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className="w-full flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-1 font-bold">
                  U
                </div>
                <span className="text-white font-semibold text-base">
                  Username
                </span>
              </div>
              <FiChevronDown 
                className={`w-5 h-5 text-white transition-transform duration-200 ${
                  isMobileDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Mobile User Menu */}
            {isMobileDropdownOpen && (
              <div className="flex flex-col gap-3 mt-4 pl-12 
                transition-all duration-300 ease-in-out transform opacity-100 translate-y-0">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 text-white hover:text-white-2 transition-colors"
                  onClick={() => {
                    setIsMobileDropdownOpen(false);
                    setIsOpen(false);
                  }}
                >
                  <FiGrid className="w-4 h-4" />
                  <span className="text-white">Dashboard</span>
                </Link>
                <Link
                  to="/settings/profile"
                  className="flex items-center gap-2 text-white hover:text-white-2 transition-colors"
                  onClick={() => {
                    setIsMobileDropdownOpen(false);
                    setIsOpen(false);
                  }}
                >
                  <FiSettings className="w-4 h-4" />
                  <span className="text-white">Settings</span>
                </Link>
                <button
                  onClick={() => {
                    setIsMobileDropdownOpen(false);
                    setIsOpen(false);
                    navigate("/login");
                  }}
                  className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors text-left"
                >
                  <FiLogOut className="w-4 h-4" />
                  <span className="text-red-400">Logout</span>
                </button>
              </div>
            )}
          </div>

          <footer className="pt-6 border-t border-green-3 mt-6">
            <p className="text-white-2 text-xs text-center">
              &copy; {new Date().getFullYear()} Trashure. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </header>
  );
}