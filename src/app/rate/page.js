"use client";

import { useState, useMemo } from "react";
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

  if (!person) {
    return (
      <>
        <Header />
        <main style={{ ...auraBackground, paddingTop: "78px" }}>
          <div style={endStyle}>
            <h2 style={{ marginBottom: "30px" }}>
              Thank you for your response
            </h2>

            {/* 🔴 RED AURA HOVER HERE */}
            <a
              href="/standings"
              style={endButton}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 26px rgba(255,59,59,0.75)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(0,0,0,0.5)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              View AuraIndex →
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main style={{ ...auraBackground, paddingTop: "78px" }}>
        <div style={container}>
          <div
            style={card}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 40px 90px rgba(0,0,0,0.85)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow =
                "0 30px 60px rgba(0,0,0,0.6)";
            }}
          >
            {/* PROGRESS */}
            <div
              style={progressSection}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter =
                  "drop-shadow(0 0 6px rgba(0,0,0,0.8))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = "none";
              }}
            >
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

            <img
              src={selection.img}
              style={image}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 30px 60px rgba(0,0,0,0.85)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.6)";
              }}
            />

            {/* RATING BUTTONS — BLACK GLASS HOVER */}
            <div style={buttonRow}>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => rate(n)}
                  style={ratingBtn}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "rgba(0,0,0,0.35)";
                    e.currentTarget.style.boxShadow =
                      "0 0 18px rgba(0,0,0,0.9)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "rgba(255,255,255,0.08)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 30px rgba(0,0,0,0.35)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.25)";
                  }}
                >
                  {n}
                </button>
              ))}
            </div>

            {/* DEFINING LINE */}
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

/* ================= STYLES ================= */

const container = {
  minHeight: "calc(100vh - 120px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const card = {
  background: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(14px)",
  padding: "40px",
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
  marginBottom: "22px",
  transition: "all 0.3s ease",
};

const progressLabel = {
  fontSize: "13px",
  fontStyle: "italic",
  color: "#ff9a9a",
  marginBottom: "12px",
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
  display: "block",
  textAlign: "center",
};

/* IMAGE */

const image = {
  width: "320px",
  borderRadius: "14px",
  boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
  transition: "all 0.35s ease",
};

/* BUTTONS */

const buttonRow = {
  marginTop: "26px",
  display: "flex",
  justifyContent: "center",
  gap: "14px",
};

const ratingBtn = {
  width: "54px",
  height: "54px",
  borderRadius: "50%",
  border: "1px solid rgba(255,255,255,0.25)",
  background: "rgba(255,255,255,0.08)",
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  color: "#ffbf69",
  fontSize: "20px",
  fontWeight: "700",
  cursor: "pointer",
  boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
  transition: "all 0.25s ease",
};

/* DEFINING LINE */

const defineLine = {
  marginTop: "20px",
  fontSize: "15px",
  fontStyle: "italic",
  color: "#d1a3ff",
  opacity: 0.95,
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
  transition: "all 0.3s ease",
};
