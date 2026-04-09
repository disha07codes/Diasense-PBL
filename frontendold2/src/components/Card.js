import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`bg-white text-black rounded-2xl p-6 border border-gray-200 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "", ...props }) {
  return (
    <h2
      className={`text-xl font-bold mb-4 ${className}`}
      {...props}
    >
      {children}
    </h2>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}