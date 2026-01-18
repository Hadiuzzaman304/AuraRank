"use client";

import Footer from "@/components/Footer";
import { auraBackground } from "@/styles/auraBackground";

export default function HomePage() {
  return (
    <>
      <main style={{ ...auraBackground, flexDirection: "column" }}>
        {/* HERO */}
        <div style={hero}>
          <h1 style={title}>AuraRank</h1>
          <p style={subtitle}>
            Algorithm-Driven Aura Ranking System.
          </p>
        </div>

        {/* MAIN OPTIONS */}
        <div style={cardRow}>
          {/* GIVE RATING */}
          <a
            href="/rate"
            style={card}
            onMouseEnter={(e) => elevate(e, true)}
            onMouseLeave={(e) => elevate(e, false)}
          >
            <h2 style={cardTitle}>Give Rating</h2>
            <p style={cardText}>
              Rate anonymously & contribute to the AuraIndex
            </p>
          </a>

          {/* AURA INDEX */}
          <a
            href="/standings"
            style={card}
            onMouseEnter={(e) => elevate(e, true)}
            onMouseLeave={(e) => elevate(e, false)}
          >
            <h2 style={cardTitle}>AuraIndex</h2>
            <p style={cardText}>
              View live rankings based on community ratings
            </p>
          </a>
        </div>

        {/* ABOUT */}
        <div style={aboutRow}>
          <a
            href="/about"
            style={aboutCard}
            onMouseEnter={(e) => elevate(e, true)}
            onMouseLeave={(e) => elevate(e, false)}
          >
            <h2 style={cardTitle}>About Me</h2>
            <p style={cardText}>
              Project details & developer information
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}

/* ================= HELPERS ================= */

function elevate(e, up) {
  e.currentTarget.style.transform = up
    ? "translateY(-6px)"
    : "translateY(0)";
  e.currentTarget.style.boxShadow = up
    ? "0 30px 70px rgba(0,0,0,0.85)"
    : "0 20px 50px rgba(0,0,0,0.6)";
}

/* ================= STYLES ================= */

const hero = {
  marginBottom: "60px",
  textAlign: "center",
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
  marginBottom: "40px",
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
  textDecoration: "none",
  color: "#fff",
  transition: "all 0.3s ease",
  boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
};

const aboutCard = {
  ...card,
  width: "340px",
};

const cardTitle = {
  color: "#ffbf69",
  marginBottom: "10px",
};

const cardText = {
  fontSize: "14px",
  opacity: 0.85,
};
