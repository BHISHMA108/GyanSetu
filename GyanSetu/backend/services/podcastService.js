const { GoogleGenerativeAI } = require("@google/generative-ai");
const textToSpeech = require("@google-cloud/text-to-speech"); // Corrected import
const fs = require("fs");
const path = require("path");
const util = require("util");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const ttsClient = new textToSpeech.TextToSpeechClient(); // Google Cloud TTS Client

// Function to generate podcast script using Gemini
exports.generatePodcastScript = async (topic) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });

    const response = await model.generateContent(
      `Generate a detailed podcast script on '${topic}' in a structured conversation format. The script should have engaging dialogue between the Host and Guest, similar to a real podcast. The conversation should start with a warm introduction by the Host, followed by insightful responses from the Guest. The discussion should explore key aspects of the topic, including historical, philosophical, or practical insights. The Host should ask thought-provoking questions, and the Guest should respond with deep, well-articulated answers. Finally, conclude with the Guest sharing their final thoughts, summarizing the discussion, and offering practical takeaways for listeners.`
    );
    const script = response.response.text();

    return script || "No response generated.";
  } catch (error) {
    console.error("Error generating podcast script:", error);
    return null;
  }
};