import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import NavLinks from "./NavLinks";

export default function Navbar({ variant = "default" }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const genericHamburgerLine =
    "h-[2px] w-full my-1 rounded-full bg-white-2 transition ease-in-out transform duration-300";

  // Define background colors based on the variant prop
  const bgColors = {
    default: "bg-white-2",
    white: "bg-white"
  };

  return (
    <header className={`${bgColors[variant]} p-2 lg:py-8 relative z-50`}>
      {/* Add relative and z-50 to header */}
      <div className="relative bg-green-1 py-5 md:px-8 px-6 container mx-auto rounded-full flex items-center justify-between lg:divide-x-2 divide-green-3">
        <a href="#" className="mr-8">
          <img src="" alt="Trashure Logo" className="w-36 md:w-40" />
        </a>
        <div className="hidden lg:block w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <nav className="hidden lg:block">
                <NavLinks isMobile={false} />
              </nav>
            </div>
            <div className="hidden lg:block">
              <div className="flex gap-x-3">
                <Button
                  variant="white"
                  size="md"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* MobileNav */}
        <button
          className="group flex flex-col lg:hidden w-7 h-8 justify-center items-center"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-80"
                : "opacity-100 group-hover:opacity-80"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-80"
            }`}
          />
          <div
            className={`${genericHamburgerLine} ${
              isOpen
                ? "-rotate-45 -translate-y-2 opacity-100 group-hover:opacity-80"
                : "opacity-100 group-hover:opacity-80"
            }`}
          />
        </button>

        <div
          className={`fixed inset-0 bg-black/50 lg:hidden transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`absolute top-[5.250rem] left-0 lg:hidden bg-green-1 px-6 py-8 rounded-lg w-full transition-all duration-300 transform z-50 ${
            isOpen
              ? "translate-y-0 opacity-100 ease-in-out"
              : "-translate-y-[200%] opacity-0 ease-in-out"
          }`}
        >
          <nav className="w-full" data-navbar>
            <NavLinks isMobile={true} />
          </nav>
          <div className="lg:hidden">
            <div className="flex flex-col gap-y-3">
              <Button
                variant="white"
                size="md"
                onClick={() => {
                  setIsOpen(false);
                  navigate("/login");
                }}
              >
                Login
              </Button>
            </div>
          </div>
          <footer className="pt-6">
            <p className="text-white-2 text-xs text-center">
              &copy; {new Date().getFullYear()} Trashure. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </header>
  );
}