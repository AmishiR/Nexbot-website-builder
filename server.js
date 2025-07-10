import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: 'AIzaSyCt9eZD4lIEecKY70wGGgaSB-xv7lboLsE' });

// Generate route
app.post('/generate', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || prompt.trim() === '') {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const chat = await ai.models.generateContent({
      model: 'gemini-1.5-flash',
      contents: [
        { role: 'user', parts: [{ text: `Generate a beautiful responsive HTML + CSS website based on this prompt: ${prompt}. Only give the complete code in one HTML file.` }] },
      ],
    });

    const responseText = chat.response.text || '';
    const codeMatch = responseText.match(/<\s*html[\s\S]*<\/\s*html\s*>/i);
    const generatedHTML = codeMatch ? codeMatch[0] : `<html><body><pre>${responseText}</pre></body></html>`;

    res.json({ html: generatedHTML });

  } catch (error) {
    console.error('Error generating site:', error);
    res.status(500).json({ error: 'Something went wrong while generating the site.' });
  }
});

// Serve index.html on root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running: http://localhost:${PORT}`);
});
