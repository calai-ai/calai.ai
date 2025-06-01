export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { message } = req.body;

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "Je bent een liefdevolle, rustige AI coach die mensen helpt reflecteren zonder oordeel."
          },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();

    if (response.ok) {
      res.status(200).json({ reply: data.choices[0].message.content });
    } else {
      res.status(500).json({ error: data.error.message });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
