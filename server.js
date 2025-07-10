// server.js - CORRECTED VERSION
import express from 'express';
import cors from 'cors';
// The line below is now correct. The package is "@google/generative-ai"
import { GoogleGenerativeAI } from "@google/generative-ai";

// --- CONFIGURATION ---
const API_KEY = "AIzaSyCt9eZD4lIEecKY70wGGgaSB-xv7lboLsE"; // <-- PASTE YOUR REAL API KEY HERE
const PORT = 3000;

// --- INITIALIZATION ---
const app = express();
const genAI = new GoogleGenerativeAI(API_KEY);

// --- MIDDLEWARE ---
app.use(cors());
app.use(express.json());

async function generateWebsiteCode(prompt) {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const fullPrompt = `
        You are an expert web developer. Your task is to generate the complete HTML code for a single-page website based on the user's request.
        
        **User Request:** "${prompt}"

        **Instructions:**
        1.  Create a visually appealing, modern, and responsive design.
        2.  Generate a **single, self-contained HTML file**.
        3.  All CSS must be included within a \`<style>\` tag in the \`<head>\`.
        4.  All JavaScript (if any is needed) must be included within a \`<script>\` tag.
        5.  Do not use any external CSS or JS files.
        6.  Use professional-looking placeholder content. For images, use placeholder services like https://via.placeholder.com/400x300.
        7.  Your entire response should be ONLY the HTML code, starting with \`<!DOCTYPE html>\` and ending with \`</html>\`. Do not include any other text, explanations, or markdown formatting like \`\`\`html.
    `;

    try {
        console.log("Sending request to Gemini API...");
        const result = await model.generateContent(fullPrompt);
        const response = await result.response;
        const generatedCode = response.text();
        console.log("Successfully received code from Gemini.");
        return generatedCode.replace(/^```html\n?/, '').replace(/```$/, '');
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to generate website from AI model.");
    }
}

app.post('/generate', async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        return res.status(400).json({ error: 'Prompt is required' });
    }

    try {
        const htmlCode = await generateWebsiteCode(prompt);
        res.json({ html: htmlCode });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`AI Website Builder server running on http://localhost:${PORT}`);
});