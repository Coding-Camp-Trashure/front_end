import { FiLogOut, FiGrid, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function UserDropdown({ onClose, onLogout }) {
  return (
    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg py-1 
      transition-all duration-300 ease-in-out transform opacity-100 translate-y-0">
      <Link
        to="/dashboard"
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
        onClick={onClose}
      >
        <FiGrid className="w-4 h-4" />
        Dashboard
      </Link>
      <Link
        to="/settings/profile"
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
        onClick={onClose}
      >
        <FiSettings className="w-4 h-4" />
        Settings
      </Link>
      <button
        onClick={onLogout}
        className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 flex items-center gap-2"
      >
        <FiLogOut className="w-4 h-4" />
        Logout
      </button>
    </div>
  );
}