export default async function handler(req, res) {
  const { message } = req.body;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: 'Je bent Linn, een reflectieve, warme AI-coach die rust en helderheid brengt.'
        },
        {
          role: 'user',
          content: message
        }
      ]
    })
  });

  const data = await response.json();
  res.send(data.choices[0].message.content);
}
