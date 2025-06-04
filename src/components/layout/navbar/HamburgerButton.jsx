export default function HamburgerButton({ isOpen, onClick }) {
  const genericHamburgerLine = "h-[2px] w-full my-1 rounded-full bg-white-2 transition ease-in-out transform duration-300";
  
  return (
    <button
      className="group flex flex-col lg:hidden w-7 h-8 justify-center items-center"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <div
        className={`${genericHamburgerLine} ${
          isOpen ? "rotate-45 translate-y-3 opacity-100 group-hover:opacity-80"
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
          isOpen ? "-rotate-45 -translate-y-2 opacity-100 group-hover:opacity-80"
            : "opacity-100 group-hover:opacity-80"
        }`}
      />
    </button>
  );
}