import React from "react";

export function Input({ 
  label,
  error,
  className = "",
  ...props 
}) {
  return (
    <div style={{ width: "100%" }}>
      
      {label && (
        <label style={{ display: "block", fontSize: "14px", marginBottom: "5px" }}>
          {label}
        </label>
      )}

      <input
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          border: error ? "1px solid red" : "1px solid #ccc",
          outline: "none"
        }}
        className={className}
        {...props}
      />

      {error && (
        <p style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>
          {error}
        </p>
      )}

    </div>
  );
}