import React from "react";
import PropTypes from "prop-types";

const VARIANT_CLASSES = {
  primary: "px-8 py-4 md:py-5 bg-green-2 text-green-1 font-bold hover:bg-green-1 hover:text-green-2 transition-colors duration-200",
  secondary: "px-8 py-4 md:py-5 bg-transparent text-green-1 border border-green-1 font-semibold hover:bg-green-1 hover:text-green-2 transition-colors duration-200",
  white: "px-5 py-3 bg-white-1 text-green-1 font-semibold hover:bg-green-2 hover:text-green-1 transition-colors duration-200",
  "white border": "px-5 py-3 bg-transparent text-white-1 border border-white-1 font-semibold hover:bg-white-1 hover:text-green-1 transition-colors duration-200",
  "secondary-long": "px-8 py-2 bg-transparent text-green-1 border border-green-1 font-semibold hover:bg-green-1 hover:text-green-2 transition-colors duration-200"
};

const SIZE_CLASSES = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

function Button({
  children,
  onClick,
  variant = "primary",
  size = "md",
  type = "button",
  className = "",
  ...props
}) {
  const variantClass = VARIANT_CLASSES[variant] ?? VARIANT_CLASSES.primary;
  const sizeClass = SIZE_CLASSES[size] ?? SIZE_CLASSES.md;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-full ${variantClass} ${sizeClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf([
    "primary", 
    "secondary", 
    "white", 
    "white border",
    "secondary-long"
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
};

export default Button;