export const auraBackground = {
  minHeight: "calc(100vh - 120px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",

  background: `
    radial-gradient(
      650px 650px at left center,
      rgba(180, 0, 40, 0.28),
      transparent 70%
    ),
    radial-gradient(
      650px 650px at right center,
      rgba(80, 0, 120, 0.30),
      transparent 70%
    ),
    linear-gradient(135deg, #0b0b12, #12091a)
  `,
};
