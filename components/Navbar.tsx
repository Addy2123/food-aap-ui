import Link from "next/link";
import React from "react";

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ darkMode, onToggleTheme }: NavbarProps) {
  return (
    <nav
      style={{
        padding: "12px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: darkMode ? "#1f2937" : "#f3f4f6",
        color: darkMode ? "#f9fafb" : "#111827",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <div style={{ display: "flex", gap: 12 }}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <button
        onClick={onToggleTheme}
        style={{
          padding: "6px 10px",
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: 8,
          cursor: "pointer",
          background: darkMode ? "#374151" : "#fff",
          color: darkMode ? "#f9fafb" : "#111827",
        }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}
