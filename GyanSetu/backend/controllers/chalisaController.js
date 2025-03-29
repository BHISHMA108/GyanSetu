const hanumanChalisa = require("../data/chalisaData");
const { getMeaning , getChantAnalysis , getAIResponse} = require("../services/geminiService");

// Get all Hanuman Chalisa verses
const getChalisa = (req, res) => {
    res.json(hanumanChalisa);
};

// Get meaning of a selected verse
const analyzeVerse = async (req, res) => {
    const { verse } = req.body;
    if (!verse) return res.status(400).json({ error: "Verse is required" });

    const meaning = await getMeaning(verse);
    res.json({ meaning });
};

const analyzeChant = async (req, res) => {
    const { userSpeech } = req.body;

    if (!userSpeech) return res.status(400).json({ error: "Speech input is required." });

    const { score, analysis } = await getChantAnalysis(userSpeech);
    res.json({ score, analysis });
};

const chatWithGod = async (req, res) => {
    const { message, god } = req.body;
    if (!message || !god) {
      return res.status(400).json({ response: "Message and God name are required." });
    }
  
    try {
      const response = await getAIResponse(message, god);
      res.json({ response });
    } catch (error) {
      console.error("Chat Error:", error);
      res.status(500).json({ response: "Something went wrong. Try again later." });
    }
  };

module.exports = { getChalisa, analyzeVerse , analyzeChant ,chatWithGod };





