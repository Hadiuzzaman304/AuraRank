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
          flexDirection: "column",
          paddingTop: "78px",        // ✅ ONLY header height
          paddingBottom: "80px",
        }}
      >
        {/* CENTER CONTAINER */}
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            margin: "0 auto",
            padding: isMobile ? "40px 16px 0" : "60px 0 0", // ✅ controlled vertical start
            boxSizing: "border-box",
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

          {/* TOP OPTIONS */}
          <div style={cardRow}>
            <a
              href="/rate"
              style={card}
              onMouseEnter={(e) => !isMobile && elevate(e, true)}
              onMouseLeave={(e) => !isMobile && elevate(e, false)}
            >
              <h2 style={cardTitle}>🎯 Give Rating</h2>
              <p style={cardText}>
                Rate anonymously & contribute to the AuraIndex
              </p>
            </a>

            <a
              href="/standings"
              style={card}
              onMouseEnter={(e) => !isMobile && elevate(e, true)}
              onMouseLeave={(e) => !isMobile && elevate(e, false)}
            >
              <h2 style={cardTitle}>📊 AuraIndex</h2>
              <p style={cardText}>
                View live rankings based on community ratings
              </p>
            </a>
          </div>

          {/* DEVELOPER */}
          <div style={aboutRow}>
            <a
              href="/about"
              style={aboutCard}
              onMouseEnter={(e) => !isMobile && elevate(e, true)}
              onMouseLeave={(e) => !isMobile && elevate(e, false)}
            >
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

/* ----- CARD LAYOUT ----- */

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
  transition: "all 0.3s ease",
  boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
  boxSizing: "border-box",
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
