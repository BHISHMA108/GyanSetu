require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const stringSimilarity = require("string-similarity");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const axios = require("axios");



const getMeaning = async (verse) => {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" }); // ✅ Updated model name
        const prompt = `Give me the meaning of this Hanuman Chalisa verse in simple English: "${verse}"
        `;

        const response = await model.generateContent([prompt]); // ✅ Ensure correct format
        const text = response.response.text(); // ✅ Extract response correctly
        return text;
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Error fetching meaning.";
    }
};



const correctVerse = "जय हनुमान ज्ञान गुण सागर।";

// Function to analyze the user's chant accuracy
const getChantAnalysis = async (userSpeech) => {
    const similarity = stringSimilarity.compareTwoStrings(userSpeech, correctVerse);
    const score = Math.round(similarity * 10);

    let analysisText = "Keep practicing!";
    if (score > 7) analysisText = "Great job! Your chanting is accurate.";
    else if (score > 4) analysisText = "You're getting there! Focus on pronunciation.";

    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `A user chanted Hanuman Chalisa incorrectly. Their chant: "${userSpeech}". Correct verse: "${correctVerse}". Provide encouragement and feedback.`;
        
        const result = await model.generateContent(prompt);
        analysisText = result.response.text();
    } catch (error) {
        console.error("Gemini API Error:", error);
    }

    return { score, analysis: analysisText };
};


// talk to god make chatbot 
const getAIResponse = async (message, god) => {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" }); // ✅ Use correct model name
      const prompt = `A user is talking to ${god}. Their question: "${message}". Respond as if you are ${god}, using a spiritual and knowledgeable tone.`;
  
      const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });

      return result.response.candidates[0].content.parts[0].text; // ✅ Correct response extraction
    } catch (error) {
      console.error("AI Error:", error);
      throw new Error("AI Service unavailable");
    }
  };


module.exports = { getMeaning , getChantAnalysis ,getAIResponse };


