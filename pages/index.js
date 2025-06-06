import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSend = async () => {
    setLoading(true);
    setError("");
    setResponse("");

    try {
      const res = await fetch("/api/coach", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Er ging iets mis bij de server.");
      }

      setResponse(data.reply);
    } catch (err) {
      console.error("Fout in handleSend:", err.message);
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>👋 Welkom bij Calai</h1>
      <p>Waar wil je vandaag bij stilstaan?</p>
      <textarea
        rows="4"
        style={{ width: "100%", padding: "1rem", marginTop: "1rem" }}
        placeholder="Typ hier je gedachte..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        style={{
          marginTop: "1rem",
          padding: "1rem",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer"
        }}
        onClick={handleSend}
        disabled={loading}
      >
        {loading ? "Calai denkt..." : "Stuur naar Calai"}
      </button>

      {response && (
        <div style={{ marginTop: "2rem", background: "#f0f0f0", padding: "1rem" }}>
          <strong>Antwoord van Calai:</strong>
          <p>{response}</p>
        </div>
      )}

      {error && (
        <div style={{ marginTop: "1rem", color: "red" }}>
          <strong>Er ging iets mis:</strong> {error}
        </div>
      )}
    </div>
  );
}
