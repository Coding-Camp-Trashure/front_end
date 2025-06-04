import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { DATA_NAVBARS } from "../utils/data";

export default function NavLinks({ isMobile = false, onClose }) {
  const location = useLocation();
  const isAuthPage = ["/login", "/register"].includes(location.pathname);

  const linkClasses = `
    hover:text-green-2 
    hover:underline 
    underline-offset-2 
    transition-all 
    duration-200
  `;

  const activeLinkClasses = "text-green-2 underline underline-offset-2";

  const handleClick = () => {
    if (isMobile && onClose) {
      onClose();
    }
  };

  return (
    <ul
      className={`flex ${
        isMobile ? "flex-col gap-y-8 pb-6" : "gap-x-8 p-2 ml-8"
      } text-base font-semibold text-white-1`}
    >
      {DATA_NAVBARS.map((item) => {
        const isActive = !isAuthPage && (
          item.link === location.pathname || 
          (item.link === "#home" && location.pathname === "/")
        );

        return (
          <li key={item.id}>
            {item.link.startsWith("#") ? (
              <HashLink
                smooth
                to={`/${item.link}`}
                className={`${linkClasses} ${isActive ? activeLinkClasses : ""}`}
                onClick={handleClick}
              >
                {item.title}
              </HashLink>
            ) : (
              <Link
                to={item.link}
                className={`${linkClasses} ${isActive ? activeLinkClasses : ""}`}
                onClick={handleClick}
              >
                {item.title}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}