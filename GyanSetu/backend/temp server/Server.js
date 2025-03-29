const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Add request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, req.body);
  next();
});

app.post('/generate-story', async (req, res) => {
  try {
    const { prompt, language } = req.body;
    const apiKey = process.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      console.error('API key is missing');
      return res.status(500).json({
        success: false,
        error: 'API key configuration error'
      });
    }

    if (!prompt) {
      return res.status(400).json({
        success: false,
        error: 'Prompt is required'
      });
    }

    console.log('Processing request:', { prompt, language });

    const finalPrompt = `Create a story about ${prompt}. ${language && language !== 'english' ? `Write the story in ${language} language. ` : ''}Please divide the story into 4-5 clear paragraphs.`;

    console.log('Final prompt:', finalPrompt);

    const apiResponse = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent',
      {
        contents: [{
          parts: [{
            text: finalPrompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
      }
    );

    console.log('Gemini API Response:', JSON.stringify(apiResponse.data, null, 2));

    if (!apiResponse.data.candidates || !apiResponse.data.candidates[0]?.content?.parts[0]?.text) {
      throw new Error('Invalid response from Gemini API');
    }

    const storyText = apiResponse.data.candidates[0].content.parts[0].text;
    const paragraphs = storyText
      .split(/\n\s*\n/)
      .map(para => para.trim())
      .filter(para => para.length > 0);

    if (paragraphs.length === 0) {
      throw new Error('No story content generated');
    }

    console.log('Sending response:', { success: true, story: paragraphs });

    res.json({
      success: true,
      story: paragraphs
    });

  } catch (error) {
    console.error('Server error:', {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status
    });

    res.status(error.response?.status || 500).json({
      success: false,
      error: error.message,
      details: error.response?.data || 'Unknown error'
    });
  }
});

// Add a test endpoint
app.get('/test-voices', (req, res) => {
  res.json({ message: 'Server is running correctly' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});