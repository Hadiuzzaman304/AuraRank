"use client";

import { useState, useMemo, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { persons } from "@/data/persons";
import { pickAngle } from "@/utils/angleQuota";
import { auraBackground } from "@/styles/auraBackground";

const STORAGE_KEY = "aurarank-global";

function getInitialData() {
  if (typeof window === "undefined") return {};
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) return JSON.parse(saved);

  const init = {};
  persons.forEach((p) => {
    init[p.id] = { total: 0, count: 0 };
  });
  return init;
}

export default function RatePage() {
  const [index, setIndex] = useState(0);
  const [globalData, setGlobalData] = useState(getInitialData);
  const [angleCount, setAngleCount] = useState(
    Object.fromEntries(
      persons.map((p) => [p.id, { front: 0, left: 0, right: 0, back: 0 }])
    )
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const person = persons[index];

  const selection = useMemo(() => {
    if (!person) return null;
    const angle = pickAngle(angleCount[person.id]);
    const img =
      person.images[angle][
        Math.floor(Math.random() * person.images[angle].length)
      ];
    return { angle, img };
  }, [person, angleCount]);

  function rate(value) {
    const updated = { ...globalData };
    updated[person.id].total += value;
    updated[person.id].count += 1;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setGlobalData(updated);

    setAngleCount((prev) => ({
      ...prev,
      [person.id]: {
        ...prev[person.id],
        [selection.angle]: prev[person.id][selection.angle] + 1,
      },
    }));

    setIndex((i) => i + 1);
  }

  const progressPercent = ((index + 1) / persons.length) * 100;

  /* ================= END SCREEN ================= */

  if (!person) {
    return (
      <>
        <Header />
        <main style={{ ...auraBackground, paddingTop: "96px" }}>
          <div style={endStyle}>
            <h2 style={{ marginBottom: "30px" }}>
              Thank you for your response
            </h2>

            <a href="/standings" style={endButton}>
              View AuraIndex →
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  /* ================= MAIN UI ================= */

  return (
    <>
      <Header />

      <main
        style={{
          ...auraBackground,
          paddingTop: isMobile ? "110px" : "78px",
        }}
      >
        <div style={pageWrap}>
          <div
            style={{
              ...card,
              width: isMobile ? "100%" : card.width,
            }}
            onMouseEnter={(e) => !isMobile && elevate(e, true)}
            onMouseLeave={(e) => !isMobile && elevate(e, false)}
          >
            {/* PROGRESS */}
            <div style={progressSection}>
              <span style={progressLabel}>Progress</span>
              <div style={progressTrack}>
                <div
                  style={{
                    ...progressFill,
                    width: `${progressPercent}%`,
                  }}
                />
              </div>
              <span style={progressText}>
                {index + 1} / {persons.length}
              </span>
            </div>

            <h2 style={{ marginBottom: "12px" }}>{person.name}</h2>

            <div style={imageWrap}>
              <img src={selection.img} style={image} />
            </div>

            {/* BUTTONS */}
            <div style={buttonRow}>
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} onClick={() => rate(n)} style={ratingBtn}>
                  {n}
                </button>
              ))}
            </div>

            <div style={defineLine}>
              Define Rank Through Aura. ⭐
            </div>
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
    ? "0 40px 90px rgba(0,0,0,0.85)"
    : "0 30px 60px rgba(0,0,0,0.6)";
}

/* ================= STYLES ================= */

const pageWrap = {
  width: "100%",
  maxWidth: "420px",      // 🔑 stops oversized mobile cards
  margin: "0 auto",
  padding: "0 16px",      // 🔑 prevents edge touching
  display: "flex",
  justifyContent: "center",
};

const card = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  padding: "28px",
  borderRadius: "18px",
  color: "#fff",
  textAlign: "center",
  boxShadow: "0 30px 60px rgba(0,0,0,0.6)",
  width: "380px",
  transition: "all 0.3s ease",
};

/* PROGRESS */

const progressSection = {
  textAlign: "left",
  marginBottom: "18px",
};

const progressLabel = {
  fontSize: "13px",
  fontStyle: "italic",
  color: "#ff9a9a",
  marginBottom: "10px",
  display: "block",
};

const progressTrack = {
  height: "10px",
  width: "100%",
  background: "rgba(255,255,255,0.12)",
  borderRadius: "6px",
  overflow: "hidden",
};

const progressFill = {
  height: "100%",
  background: "linear-gradient(90deg,#ff3b3b,#4b1d6d)",
  transition: "width 0.4s ease",
};

const progressText = {
  marginTop: "6px",
  fontSize: "12px",
  opacity: 0.8,
  textAlign: "center",
};

/* IMAGE */

const imageWrap = {
  margin: "14px 0",
};

const image = {
  width: "100%",
  maxWidth: "320px",
  borderRadius: "14px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
  display: "block",
  margin: "0 auto",
};

/* BUTTONS */

const buttonRow = {
  marginTop: "22px",
  display: "flex",
  justifyContent: "center",
  gap: "12px",
  flexWrap: "wrap",
};

const ratingBtn = {
  width: "52px",
  height: "52px",
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.25)",
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  color: "#ffbf69",
  fontSize: "18px",
  fontWeight: "700",
  cursor: "pointer",
};

/* DEFINING LINE */

const defineLine = {
  marginTop: "18px",
  fontSize: "14px",
  fontStyle: "italic",
  color: "#d1a3ff",
};

/* END SCREEN */

const endStyle = {
  minHeight: "calc(100vh - 120px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const endButton = {
  padding: "14px 36px",
  borderRadius: "14px",
  background: "linear-gradient(135deg,#ff3b3b,#4b1d6d)",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "600",
  boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
};
