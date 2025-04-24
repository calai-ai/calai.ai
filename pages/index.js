import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  async function sendMessage() {
    setResponse("Calai denkt na...");
    const res = await fetch("/api/coach", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    const data = await res.json();
    setResponse(data.response);
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🤸 Welkom bij Calai</h1>
      <textarea
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Waar wil je bij stilstaan vandaag?"
        style={{ width: "100%", padding: "1rem", fontSize: "1rem" }}
      />
      <br />
      <button onClick={sendMessage} style={{ marginTop: "1rem" }}>
        Stuur naar Calai
      </button>
      <p style={{ marginTop: "1rem" }}>{response}</p>
    </main>
  );
}
