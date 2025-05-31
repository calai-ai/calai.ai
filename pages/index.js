export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>👋 Welkom bij Calai</h1>
      <p>Stel je vraag aan jouw AI-coach:</p>
      <textarea
        rows="4"
        style={{ width: '100%', padding: '1rem', marginTop: '1rem' }}
        placeholder="Waar wil je vandaag bij stilstaan?"
      />
      <button
        style={{
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: '#0070f3',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Stuur naar Calai
      </button>
    </div>
  );
}
