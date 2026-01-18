import Header from "@/components/Header";

export const metadata = {
  title: "AuraRank",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Inter, system-ui" }}>
        {children}
      </body>
    </html>
  );
}
