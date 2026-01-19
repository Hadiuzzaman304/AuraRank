"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { persons } from "@/data/persons";
import { auraBackground } from "@/styles/auraBackground";

const STORAGE_KEY = "aurarank-global";

export default function Standings() {
  const [rows, setRows] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

    const data = persons.map((p) => {
      const r = stored[p.id] || { total: 0, count: 0 };
      const avg = r.count ? r.total / r.count : 0;

      return {
        id: p.id,
        name: p.name,
        img: p.images.front[0],
        total: r.total,
        count: r.count,
        avg: Number(avg.toFixed(2)),
      };
    });

    data.sort((a, b) => b.avg - a.avg);
    setRows(data);
  }, []);

  const maxAvg = Math.max(...rows.map((r) => r.avg), 5);

  return (
    <>
      <Header />

      <main
        style={{
          ...auraBackground,
          overflowX: "hidden", // ✅ prevents page-level white strip
        }}
      >
        <div
          style={{
            ...wrap,
            paddingTop: "78px",
            paddingLeft: isMobile ? "14px" : "0",
            paddingRight: isMobile ? "14px" : "0",
          }}
        >
          <h1 style={heading}>AuraIndex</h1>

          {/* ================= BAR GRAPH ================= */}
          <div style={chartBox}>
            <h3 style={chartTitle}>Average Rating Distribution</h3>

            <div
              style={{
                ...chart,
                overflowX: isMobile ? "auto" : "visible",
                paddingBottom: isMobile ? "12px" : "0",
              }}
            >
              {rows.map((r) => {
                const heightPercent = (r.avg / maxAvg) * 100;

                return (
                  <div
                    key={r.id}
                    style={{
                      ...barItem,
                      minWidth: isMobile ? "70px" : "auto",
                    }}
                  >
                    <div style={barContainer}>
                      <div
                        style={{
                          ...bar,
                          height: `${Math.max(heightPercent, 6)}%`,
                        }}
                      >
                        <span style={barValue}>{r.avg}</span>
                      </div>
                    </div>

                    <img src={r.img} style={barAvatar} />
                    <span style={barName}>{r.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= TABLE ================= */}
          <div
            style={{
              ...tableWrap,
              marginBottom: isMobile ? "50px" : "0",
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <table
              style={{
                ...table,
                display: isMobile ? "block" : "table",
                maxWidth: "100%",
              }}
            >
              <thead>
                <tr>
                  <th style={th}>Rank</th>
                  <th style={{ ...th, textAlign: "left" }}>Person</th>
                  <th style={th}>Total</th>
                  <th style={th}>Avg</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((r, i) => (
                  <tr key={r.id} style={row}>
                    <td style={rankCell}>#{i + 1}</td>

                    <td style={personCell}>
                      <img src={r.img} style={avatar} />
                      <div>
                        <div>{r.name}</div>
                        <div style={sub}>{r.count} Responses</div>
                      </div>
                    </td>

                    <td style={td}>{r.total}</td>
                    <td style={avgCell}>{r.avg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ height: "80px" }} />

          <a
            href="/"
            style={{
              ...homeBtn,
              bottom: isMobile ? "20px" : "30px",
              right: isMobile ? "20px" : "30px",
            }}
          >
            ← Home
          </a>
        </div>
      </main>

      <Footer />
    </>
  );
}

/* ================= STYLES ================= */

const wrap = {
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  position: "relative",
};

const heading = {
  textAlign: "center",
  fontStyle: "italic",
  color: "#ff3b3b",
  marginBottom: "30px",
};

/* BAR GRAPH */

const chartBox = {
  marginBottom: "60px",
  padding: "22px",
  background: "rgba(255,255,255,0.04)",
  borderRadius: "18px",
  border: "2px solid rgba(255,59,59,0.5)",
};

const chartTitle = {
  color: "#ff9a9a",
  textAlign: "center",
  marginBottom: "25px",
};

const chart = {
  display: "flex",
  alignItems: "flex-end",
  height: "320px",
};

const barItem = {
  flex: 1,
  margin: "0 6px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const barContainer = {
  height: "220px",
  width: "100%",
  display: "flex",
  alignItems: "flex-end",
};

const bar = {
  width: "100%",
  background: "linear-gradient(180deg,#ff3b3b,#4b1d6d)",
  borderRadius: "8px 8px 0 0",
};

const barValue = {
  position: "absolute",
  top: "-22px",
  width: "100%",
  textAlign: "center",
  fontSize: "12px",
  fontWeight: "700",
  color: "#ffbf69",
};

const barAvatar = {
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  marginTop: "10px",
  border: "2px solid #ff3b3b",
};

const barName = {
  marginTop: "6px",
  fontSize: "12px",
  fontWeight: "600",
};

/* TABLE */

const tableWrap = {
  width: "100%",
};

const table = {
  width: "100%",
  minWidth: "640px",
  borderCollapse: "collapse",
  background: "rgba(255,255,255,0.06)",
  backdropFilter: "blur(14px)",
  borderRadius: "16px",
  overflow: "hidden",
  border: "1.5px solid rgba(255,59,59,0.45)",
};

const th = {
  padding: "18px",
  textAlign: "center",
  color: "#ff9a9a",
};

const td = {
  padding: "16px",
  textAlign: "center",
};

const rankCell = {
  ...td,
  fontWeight: "700",
  color: "#ff3b3b",
};

const row = {
  background: "rgba(255,255,255,0.05)",
};

const personCell = {
  padding: "16px",
  textAlign: "left",
  display: "flex",
  alignItems: "center",
  gap: "14px",
};

const avatar = {
  width: "42px",
  height: "42px",
  borderRadius: "50%",
  border: "2px solid #ff3b3b",
};

const sub = {
  fontSize: "12px",
  opacity: 0.75,
};

const avgCell = {
  ...td,
  color: "#ff3b3b",
  fontWeight: "600",
};

/* HOME BUTTON */

const homeBtn = {
  position: "fixed",
  padding: "12px 26px",
  borderRadius: "14px",
  background: "linear-gradient(135deg,#ff3b3b,#4b1d6d)",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "600",
  boxShadow: "0 12px 30px rgba(0,0,0,0.6)",
};
