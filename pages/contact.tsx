import { useState } from "react";

export default function Contact() {
  // Local form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit — log to console
    console.log({ name, email, message });
    setSubmitted(true);
    // Optional: reset fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={{ maxWidth: 560, margin: "0 auto" }}>
      <h1>Contact</h1>
      <p>Please fill out the form. This is a mock submission (console log only).</p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}
      >
        <label>
          Name
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #d1d5db" }}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #d1d5db" }}
          />
        </label>

        <label>
          Message
          <textarea
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help?"
            rows={4}
            style={{ width: "100%", padding: 8, borderRadius: 6, border: "1px solid #d1d5db" }}
          />
        </label>

        <button
          type="submit"
          style={{
            padding: "10px 14px",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: 8,
            cursor: "pointer",
            background: "#2563eb",
            color: "#fff",
            fontWeight: 600,
          }}
        >
          Submit
        </button>
      </form>

      {submitted && (
        <p style={{ marginTop: 12, color: "green" }}>
          ✅ Thank you! Your message was recorded (check console).
        </p>
      )}
    </div>
  );
}
