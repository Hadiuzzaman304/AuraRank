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
          paddingTop: isMobile ? "96px" : "120px",
          paddingBottom: "60px",
        }}
      >
        {/* HERO */}
        <div
          style={{
            ...hero,
            marginBottom: isMobile ? "36px" : hero.marginBottom,
          }}
        >
          <h1
            style={{
              ...title,
              fontSize: isMobile ? "34px" : title.fontSize,
            }}
          >
            AuraRank
          </h1>

          <p
            style={{
              ...subtitle,
              fontSize: isMobile ? "13px" : subtitle.fontSize,
            }}
          >
            Algorithm-Driven Aura Ranking System.
          </p>
        </div>

        {/* MAIN OPTIONS */}
        <div style={cardRow}>
          {/* GIVE RATING */}
          <a
            href="/rate"
            style={{
              ...card,
              width: isMobile ? "92vw" : card.width,
              maxWidth: "340px",
            }}
            onMouseEnter={(e) => !isMobile && elevate(e, true)}
            onMouseLeave={(e) => !isMobile && elevate(e, false)}
          >
            <h2 style={cardTitle}>Give Rating</h2>
            <p style={cardText}>
              Rate anonymously & contribute to the AuraIndex
            </p>
          </a>

          {/* AURA INDEX */}
          <a
            href="/standings"
            style={{
              ...card,
              width: isMobile ? "92vw" : card.width,
              maxWidth: "340px",
            }}
            onMouseEnter={(e) => !isMobile && elevate(e, true)}
            onMouseLeave={(e) => !isMobile && elevate(e, false)}
          >
            <h2 style={cardTitle}>AuraIndex</h2>
            <p style={cardText}>
              View live rankings based on community ratings
            </p>
          </a>
        </div>

        {/* ABOUT */}
        <div
          style={{
            ...aboutRow,
            marginTop: isMobile ? "6px" : "0",
          }}
        >
          <a
            href="/about"
            style={{
              ...aboutCard,
              width: isMobile ? "92vw" : aboutCard.width,
              maxWidth: "360px",
            }}
            onMouseEnter={(e) => !isMobile && elevate(e, true)}
            onMouseLeave={(e) => !isMobile && elevate(e, false)}
          >
            <h2 style={cardTitle}>About Me</h2>
            <p style={cardText}>
              Project details & developer information
            </p>
          </a>
        </div>

        {/* SPACE BEFORE FOOTER */}
        <div style={{ height: "80px" }} />
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
  WebkitBackdropFilter: "blur(14px)",
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
