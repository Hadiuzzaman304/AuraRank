export default function Footer() {
  return (
    <footer style={footer}>
      <div style={line} />

      <div style={content}>
        <div style={name}>Hadiuzzaman Ome</div>
        <div style={dept}>
          CSE, Daffodil International University
        </div>
        <div style={copy}>© AuraRank</div>
      </div>
    </footer>
  );
}

/* ================= STYLES ================= */

const footer = {
  padding: "28px 20px",
  textAlign: "center",
  background:
    "linear-gradient(135deg, rgba(10,5,15,0.95), rgba(20,10,25,0.95))",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
};

const line = {
  width: "160px",
  height: "2px",
  margin: "0 auto 16px",
  background: "linear-gradient(90deg,#ff3b3b,#4b1d6d)",
  borderRadius: "2px",
};

const content = {
  color: "#ddd",
  fontSize: "13px",
};

const name = {
  color: "#ffbf69",
  fontWeight: "600",
  marginBottom: "4px",
};

const dept = {
  opacity: 0.75,
  marginBottom: "6px",
};

const copy = {
  fontSize: "12px",
  opacity: 0.6,
};
