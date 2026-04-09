import React from "react";

export function Button({ 
  children, 
  className = "",
  variant = "primary",
  size = "md",
  ...props 
}) {

  const baseStyles = "font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary: "bg-purple-500 text-white hover:opacity-90",
    secondary: "bg-gray-300 text-black hover:opacity-90",
    outline: "border border-gray-400 text-black hover:bg-gray-100",
  };

  const sizeStyles = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}