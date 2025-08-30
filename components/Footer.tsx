export default function Footer() {
  return (
    <footer
      style={{
        padding: "12px 16px",
        background: "#e5e7eb",
        color: "#111827",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <small>© {new Date().getFullYear()} My Next.js Demo</small>
    </footer>
  );
}
