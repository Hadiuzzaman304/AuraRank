"use client";

import Footer from "@/components/Footer";
import { auraBackground } from "@/styles/auraBackground";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <main
        style={{
          ...auraBackground,
          paddingTop: isMobile ? "88px" : "120px", // ✅ header height only
          paddingBottom: "80px",
        }}
      >
        {/* CENTER WRAPPER */}
        <div style={pageWrap}>
          {/* HERO */}
          <div style={hero}>
            <h1 style={title}>AuraRank</h1>
            <p style={subtitle}>
              Algorithm-Driven Aura Ranking System.
            </p>
          </div>

          {/* TOP CARDS */}
          <div style={cardRow}>
            <a href="/rate" style={card}>
              <h2 style={cardTitle}>🎯 Give Rating</h2>
              <p style={cardText}>
                Rate anonymously & contribute to the AuraIndex
              </p>
            </a>

            <a href="/standings" style={card}>
              <h2 style={cardTitle}>📊 AuraIndex</h2>
              <p style={cardText}>
                View live rankings based on community ratings
              </p>
            </a>
          </div>

          {/* DEVELOPER */}
          <div style={developerRow}>
            <a href="/about" style={developerCard}>
              <h2 style={cardTitle}>👨‍💻 Developer</h2>
              <p style={cardText}>
                Project details & developer information
              </p>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

/* ================= STYLES ================= */

const pageWrap = {
  width: "100%",
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "0 18px", // ✅ prevents edge touching on mobile
  boxSizing: "border-box",
};

const hero = {
  textAlign: "center",
  marginBottom: "56px",
};

const title = {
  color: "#ff3b3b",
  fontSize: "44px",
  fontStyle: "italic",
  marginBottom: "8px",
};

const subtitle = {
  color: "#d1a3ff",
  fontSize: "14px",
};

/* ----- CARD LAYOUT ----- */

const cardRow = {
  display: "flex",
  justifyContent: "center",
  gap: "30px",
  flexWrap: "wrap",
  marginBottom: "36px",
};

const developerRow = {
  display: "flex",
  justifyContent: "center",
};

/* ----- CARDS ----- */

const card = {
  width: "300px",
  padding: "32px",
  borderRadius: "22px",
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  textDecoration: "none",
  color: "#fff",
  boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
};

const developerCard = {
  ...card,
  width: "340px",
};

const cardTitle = {
  color: "#ffbf69",
  marginBottom: "10px",
  fontSize: "18px", // ✅ restored size
};

const cardText = {
  fontSize: "14px",
  opacity: 0.85,
};
