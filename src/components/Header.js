"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <header
      style={{
        ...header,
        padding: isMobile ? "10px 14px" : header.padding,
        height: isMobile ? "auto" : header.height,
      }}
    >
      {/* LOGO */}
      <a
        href="/"
        style={{
          ...logoWrap,
          alignItems: isMobile ? "center" : "flex-start",
          textAlign: isMobile ? "center" : "left",
          width: isMobile ? "100%" : "auto",
        }}
        onMouseEnter={(e) => {
          if (!isMobile) {
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.textShadow =
              "0 0 14px rgba(255,59,59,0.9)";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.textShadow = "none";
        }}
      >
        <span style={logo}>AuraRank</span>
        <span style={tagline}>
          Algorithm-Driven Aura Ranking System.
        </span>
      </a>

      {/* NAV */}
      <nav
        style={{
          ...nav,
          width: isMobile ? "100%" : "auto",
          justifyContent: isMobile ? "center" : "flex-end",
          marginTop: isMobile ? "10px" : "0",
        }}
      >
        <NavItem href="/">Home</NavItem>
        <NavItem href="/rate">Give Rating</NavItem>
        <NavItem href="/standings">AuraIndex</NavItem>
        <NavItem href="/about">About Me</NavItem>
      </nav>
    </header>
  );
}

/* ================= NAV ITEM ================= */

function NavItem({ href, children }) {
  return (
    <a
      href={href}
      style={navItem}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "linear-gradient(135deg, rgba(255,59,59,0.25), rgba(80,0,120,0.35))";
        e.currentTarget.style.borderColor = "rgba(255,59,59,0.7)";
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.boxShadow =
          "0 0 14px rgba(255,59,59,0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.06)";
        e.currentTarget.style.borderColor =
          "rgba(255,255,255,0.18)";
        e.currentTarget.style.color = "#ffbf69";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {children}
    </a>
  );
}

/* ================= STYLES ================= */

const header = {
  height: "78px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",

  padding: "0 28px",

  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(22px) saturate(160%)",
  WebkitBackdropFilter: "blur(22px) saturate(160%)",

  borderBottom: "1px solid rgba(255,255,255,0.14)",

  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 100,

  boxSizing: "border-box",
};

const logoWrap = {
  textDecoration: "none",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.25s ease",
  whiteSpace: "nowrap",
};

const logo = {
  color: "#ff3b3b",
  fontSize: "30px",
  fontStyle: "italic",
  fontWeight: "800",
  lineHeight: 1.1,
};

const tagline = {
  fontSize: "12px",
  color: "#d1a3ff",
  marginTop: "2px",
};

const nav = {
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const navItem = {
  padding: "9px 18px",
  borderRadius: "22px",
  textDecoration: "none",
  fontSize: "14px",

  color: "#ffbf69",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.18)",

  transition: "all 0.25s ease",
  whiteSpace: "nowrap",
};
