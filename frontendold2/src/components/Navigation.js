import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/tracker", label: "Tracker" },
  { href: "/awareness", label: "Awareness" },
  { href: "/diet", label: "Diet Plan" },
  { href: "/exercise", label: "Exercise" },
  { href: "/symptoms", label: "Symptoms" },
  { href: "/help", label: "Help" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (href) => {
    return location.pathname === href;
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav
        style={{
          width: "220px",
          background: "#6C63FF",
          color: "white",
          padding: "20px",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Diasense 💖</h2>

        {navLinks.map((link) => (
          <div key={link.href} style={{ marginBottom: "10px" }}>
            <Link
              to={link.href}
              style={{
                color: isActive(link.href) ? "#FFD700" : "white",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          </div>
        ))}
      </nav>

      {/* Mobile Button */}
      <div style={{ marginLeft: "240px", padding: "10px" }}>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "Close Menu" : "Open Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            background: "#eee",
            padding: "10px",
            marginLeft: "240px",
          }}
        >
          {navLinks.map((link) => (
            <div key={link.href}>
              <Link to={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}