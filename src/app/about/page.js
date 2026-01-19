"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { auraBackground } from "@/styles/auraBackground";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
            <h2
              style={{
                ...name,
                fontSize: isMobile ? "20px" : name.fontSize,
              }}
            >
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

/* ================= SMALL COMPONENT ================= */

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
  WebkitBackdropFilter: "blur(18px)",
  border: "1.5px solid rgba(255,255,255,0.18)",
  textAlign: "center",
  color: "#fff",
  boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
  transition: "all 0.35s ease",
};

const imgWrap = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "20px",
};

const img = {
  width: "160px",
  height: "160px",
  borderRadius: "50%",
  objectFit: "cover",
  border: "3px solid rgba(255,59,59,0.7)",
  boxShadow: "0 12px 30px rgba(0,0,0,0.7)",
  transition: "all 0.3s ease",
};

const name = {
  margin: "10px 0 4px",
  fontSize: "22px",
  fontWeight: "700",
  color: "#ff3b3b",
  fontStyle: "italic",
};

const tagline = {
  fontSize: "13px",
  color: "#d1a3ff",
  marginBottom: "22px",
};

const infoBox = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  marginBottom: "24px",
};

const infoRow = {
  display: "flex",
  justifyContent: "space-between",
  background: "rgba(255,255,255,0.04)",
  padding: "10px 14px",
  borderRadius: "12px",
  fontSize: "13px",
};

const infoLabel = {
  opacity: 0.75,
};

const infoValue = {
  fontWeight: "600",
};

const quote = {
  marginTop: "10px",
  fontSize: "12px",
  fontStyle: "italic",
  color: "#ffbf69",
  opacity: 0.9,
};
