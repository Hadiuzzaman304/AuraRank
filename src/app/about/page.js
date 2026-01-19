"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { auraBackground } from "@/styles/auraBackground";

const STORAGE_KEY = "aurarank-global";
const ADMIN_PASSWORD = "leo15";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  function clearData() {
    if (password !== ADMIN_PASSWORD) {
      setMessage("❌ Wrong password");
      return;
    }

    localStorage.removeItem(STORAGE_KEY);
    setMessage("✅ AuraIndex data cleared");
    setPassword("");

    setTimeout(() => {
      setShowAdmin(false);
      setMessage("");
    }, 2000);
  }

  return (
    <>
      <Header />

      <main style={auraBackground}>
        <div
          style={{
            ...wrap,
            paddingTop: isMobile ? "96px" : wrap.paddingTop,
          }}
        >
          <div
            style={{
              ...card,
              width: isMobile ? "92vw" : card.width,
              padding: isMobile ? "28px 22px" : card.padding,
            }}
            onMouseEnter={(e) => !isMobile && elevate(e, true)}
            onMouseLeave={(e) => !isMobile && elevate(e, false)}
          >
            {/* IMAGE */}
            <div style={imgWrap}>
              <img
                src="/me.jpg"
                style={{
                  ...img,
                  width: isMobile ? "130px" : img.width,
                  height: isMobile ? "130px" : img.height,
                }}
              />
            </div>

            {/* NAME */}
            <h2 style={{ ...name, fontSize: isMobile ? "20px" : name.fontSize }}>
              Hadiuzzaman Ome
            </h2>

            {/* TAGLINE */}
            <p
              style={{
                ...tagline,
                fontSize: isMobile ? "12px" : tagline.fontSize,
              }}
            >
              CSE Undergraduate · AI Enthusiast
            </p>

            {/* INFO */}
            <div style={infoBox}>
              <Info label="Section" value="65-H" />
              <Info label="Student ID" value="232-15-304" />
              <Info
                label="Department"
                value="Computer Science & Engineering"
              />
              <Info
                label="University"
                value="Daffodil International University"
              />
            </div>

            {/* FOOT LINE */}
            <div style={quote}>
              “Designing systems where logic meets intuition.”
            </div>
          </div>
        </div>

        {/* SPACE BEFORE FOOTER */}
        <div style={{ height: "80px" }} />
      </main>

      {/* ADMIN FLOATING BUTTON */}
      <div
        style={adminBtn}
        onClick={() => setShowAdmin((v) => !v)}
        onMouseEnter={(e) => {
          if (!isMobile)
            e.currentTarget.style.boxShadow =
              "0 0 18px rgba(255,59,59,0.6)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "0 12px 30px rgba(0,0,0,0.6)";
        }}
      >
        Clear Data – Admin
      </div>

      {/* ADMIN PANEL */}
      {showAdmin && (
        <div style={adminPanel}>
          <h4 style={{ marginBottom: "10px" }}>Admin Access</h4>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={adminInput}
          />

          <button onClick={clearData} style={adminClearBtn}>
            Clear AuraIndex Data
          </button>

          {message && <div style={adminMsg}>{message}</div>}
        </div>
      )}

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
    ? "0 30px 70px rgba(0,0,0,0.8)"
    : "0 20px 50px rgba(0,0,0,0.6)";
}

function Info({ label, value }) {
  return (
    <div style={infoRow}>
      <span style={infoLabel}>{label}</span>
      <span style={infoValue}>{value}</span>
    </div>
  );
}

/* ================= STYLES ================= */

const wrap = {
  minHeight: "calc(100vh - 120px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "78px",
};

const card = {
  width: "360px",
  padding: "36px 30px",
  borderRadius: "22px",
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(18px)",
  border: "1.5px solid rgba(255,255,255,0.18)",
  textAlign: "center",
  color: "#fff",
  boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
  transition: "all 0.35s ease",
};

const imgWrap = { display: "flex", justifyContent: "center", marginBottom: "20px" };

const img = {
  width: "160px",
  height: "160px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "3px solid rgba(255,59,59,0.7)",
};

const name = {
  fontSize: "22px",
  fontWeight: "700",
  color: "#ff3b3b",
  fontStyle: "italic",
};

const tagline = { fontSize: "13px", color: "#d1a3ff", marginBottom: "22px" };

const infoBox = { display: "flex", flexDirection: "column", gap: "10px" };

const infoRow = {
  display: "flex",
  justifyContent: "space-between",
  background: "rgba(255,255,255,0.04)",
  padding: "10px 14px",
  borderRadius: "12px",
  fontSize: "13px",
};

const infoLabel = { opacity: 0.75 };
const infoValue = { fontWeight: "600" };

const quote = {
  marginTop: "10px",
  fontSize: "12px",
  fontStyle: "italic",
  color: "#ffbf69",
};

/* ===== ADMIN ===== */

const adminBtn = {
  position: "fixed",
  bottom: "26px",
  right: "26px",
  padding: "12px 18px",
  borderRadius: "14px",
  background: "linear-gradient(135deg,#ff3b3b,#4b1d6d)",
  color: "#fff",
  fontSize: "13px",
  fontWeight: "600",
  cursor: "pointer",
  boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
  zIndex: 999,
};

const adminPanel = {
  position: "fixed",
  bottom: "90px",
  right: "26px",
  background: "rgba(0,0,0,0.85)",
  backdropFilter: "blur(14px)",
  padding: "16px",
  borderRadius: "14px",
  width: "240px",
  color: "#fff",
  zIndex: 1000,
};

const adminInput = {
  width: "100%",
  padding: "8px",
  marginBottom: "10px",
  borderRadius: "8px",
  border: "none",
};

const adminClearBtn = {
  width: "100%",
  padding: "10px",
  borderRadius: "10px",
  background: "linear-gradient(135deg,#ff3b3b,#4b1d6d)",
  color: "#fff",
  border: "none",
  cursor: "pointer",
};

const adminMsg = {
  marginTop: "8px",
  fontSize: "12px",
  textAlign: "center",
};
