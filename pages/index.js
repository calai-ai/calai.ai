import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSend = async () => {
    setResponse('Calai denkt na...');
    const res = await fetch('/api/coach', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });
    const data = await res.text();
    setResponse(data);
  };

  return (
    <main style={{ fontFamily: 'sans-serif', padding: '2rem', maxWidth: '600px', margin: 'auto' }}>
      <h1>🧘 Welkom bij Calai</h1>
      <p>Stel je vraag aan jouw AI-coach:</p>
      <textarea
        value={message}
        onChange={e => setMessage(e.target.value)}
        rows={4}
        style={{ width: '100%', padding: '1rem', marginTop: '1rem', fontSize: '1rem' }}
        placeholder="Waar wil je vandaag bij stilstaan?"
      />
      <button onClick={handleSend} style={{ width: '100%', padding: '1rem', marginTop: '1
