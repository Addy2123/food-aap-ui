import React, { useState, type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: darkMode ? "#111827" : "#ffffff",
        color: darkMode ? "#f9fafb" : "#111827",
        transition: "background 0.2s ease, color 0.2s ease",
      }}
    >
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode(v => !v)} />
      <main style={{ flex: 1, padding: "16px", maxWidth: 960, margin: "0 auto" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
