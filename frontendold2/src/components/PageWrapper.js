import React from "react";
import { Navigation } from "./Navigation";

export function PageWrapper({ children, title, className = "" }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f9f9ff" }}>
      
      {/* Sidebar */}
      <Navigation />

      {/* Main Content */}
      <div style={{ marginLeft: "220px", width: "100%" }}>
        
        <div style={{ padding: "20px", maxWidth: "1200px", margin: "auto" }}>

          {title && (
            <div style={{ marginBottom: "20px" }}>
              <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
                {title}
              </h1>
              <p style={{ color: "gray", marginTop: "5px" }}>
                Manage your diabetes with ease
              </p>
            </div>
          )}

          <div className={className}>
            {children}
          </div>

        </div>

      </div>

    </div>
  );
}