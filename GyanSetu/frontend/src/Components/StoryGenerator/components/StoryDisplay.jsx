// ... existing imports ...

const StoryGenerator = () => {
  // ... existing states ...
  const [isMuted, setIsMuted] = useState(false);
  
  const generateTitle = async (prompt) => {
    try {
      const response = await generateStoryWithGemini(
        `Generate a short, creative title in Hindi for a story about: ${prompt}`
      );
      return response[0] || prompt;
    } catch (error) {
      return prompt;
    }
  };

  const startSpeaking = (text) => {
    if (isMuted) return;
    if (utteranceRef.current) {
      speechSynthesis.cancel();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'hi-IN';
    utterance.rate = 0.9; // Slower rate for better comprehension
    utterance.onend = () => {
      // Optional: Auto-advance to next paragraph
      if (currentPara < story.length - 1) {
        setCurrentPara(prev => prev + 1);
      }
    };
    utteranceRef.current = utterance;
    speechSynthesis.speak(utterance);
  };

  const handleReplayParagraph = () => {
    if (story[currentPara]) {
      startSpeaking(story[currentPara]);
    }
  };

  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    if (!isMuted) {
      speechSynthesis.cancel();
    }
  };

  // Update handleGenerateStory to include title generation
  const handleGenerateStory = async () => {
    // ... existing code ...
    try {
      const paragraphs = await generateStoryWithGemini(promptText);
      const generatedTitle = await generateTitle(promptText);
      setStoryTitle(generatedTitle);
      setStory(paragraphs);
      setCurrentPara(0);
      startSpeaking(paragraphs[0]);
    } catch (error) {
      // ... error handling ...
    }
  };

  return (
    <div className="story-generator-container">
      <div className="content-wrapper">
        {/* ... existing JSX ... */}
        <StoryDisplay
          // ... existing props ...
          isMuted={isMuted}
          onToggleMute={handleToggleMute}
          onReplayParagraph={handleReplayParagraph}
        />
      </div>
    </div>
  );
};

export default StoryGenerator;