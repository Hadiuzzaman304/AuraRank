"use client";

import Footer from "@/components/Footer";
import { auraBackground } from "@/styles/auraBackground";

export default function HomePage() {
  return (
    <>
      <main
        style={{
          ...auraBackground,

          /* 🔥 KEY FIX */
          minHeight: "100vh",
          paddingTop: "78px",           // header height
          boxSizing: "border-box",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* CENTER WRAPPER */}
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            padding: "0 16px",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
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
          <div style={aboutRow}>
            <a href="/about" style={aboutCard}>
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

const hero = {
  marginBottom: "48px",
  textAlign: "center",
};

const title = {
  color: "#ff3b3b",
  fontSize: "44px",
  fontStyle: "italic",
  marginBottom: "6px",
};

const subtitle = {
  color: "#d1a3ff",
  fontSize: "14px",
};

/* ----- LAYOUT ----- */

const cardRow = {
  display: "flex",
  justifyContent: "center",
  gap: "28px",
  flexWrap: "wrap",
  marginBottom: "36px",
};

const aboutRow = {
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

const aboutCard = {
  ...card,
  width: "340px",
};

const cardTitle = {
  color: "#ffbf69",
  marginBottom: "10px",
  fontSize: "20px",
};

const cardText = {
  fontSize: "14px",
  opacity: 0.85,
};
