import React from "react";

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  autoComplete,
  className = "",
  ...props
}) => (
  <div className="flex flex-col gap-1 mb-3">
    {label && (
      <label htmlFor={name} className="text-sm font-medium mb-1">
        {label}
      </label>
    )}
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      className={`px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-1 ${className}`}
      {...props}
    />
  </div>
);

export default Input;