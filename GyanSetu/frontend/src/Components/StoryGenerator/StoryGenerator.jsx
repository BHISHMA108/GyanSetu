import React, { useState, useEffect } from 'react';
// import { storyPrompts, languageOptions } from '../../data/storyPrompts';
import { storyPrompts, languageOptions } from "../../data/storyPrompts.js"
import './StoryGenerator.css';
import { generateStoryWithGemini } from '../../utils/geminiAPI.js';  // Import the Gemini API utility
import { FaVolumeUp, FaVolumeOff, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Add icons
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StoryGenerator = () => {
  const navigate = useNavigate();
  const [selectedReligion, setSelectedReligion] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState('');
  const [customPrompt, setCustomPrompt] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [generatedStory, setGeneratedStory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeField, setActiveField] = useState(null);
  const [showReligionSelector, setShowReligionSelector] = useState(true);
  const [customInputLabel, setCustomInputLabel] = useState("Or Write Your Own Story Idea");
  const [error, setError] = useState(null);
  const [paragraphs, setParagraphs] = useState([]);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [isStoryMode, setIsStoryMode] = useState(false);
  const [isTTSEnabled, setIsTTSEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speechSynthesisUtterance, setSpeechSynthesisUtterance] = useState(null);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [voices, setVoices] = useState([]); // Store available voices

  const speakParagraph = (text) => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
  
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => {
        setIsPlaying(false);
        if (currentParagraph < paragraphs.length - 1) {
          setCurrentParagraph((prev) => prev + 1);
          speakParagraph(paragraphs[currentParagraph + 1]); // Speak next paragraph
        }
      };
      utterance.onerror = () => setIsPlaying(false);
  
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }
  
      synth.speak(utterance);
      setSpeechSynthesisUtterance(utterance);
    } else {
      console.error('Text-to-speech not supported in this browser.');
    }
  };

  const stopSpeaking = () => {
    if ('speechSynthesis' in window && speechSynthesisUtterance) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;
  
      const populateVoices = () => {
        setVoices(synth.getVoices());
      };
  
      populateVoices(); // Initial population
      synth.onvoiceschanged = populateVoices; // Update voices when they change
  
      return () => {
        synth.onvoiceschanged = null; // Clean up listener
      };
    }
  }, []);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (selectedReligion) {
      const availableLanguages = languageOptions[selectedReligion.toLowerCase()];
      if (availableLanguages && !availableLanguages.includes(selectedLanguage)) {
        setSelectedLanguage('english'); // Default to English if current language not available
      }
    }
  }, [selectedReligion]);

  const handleCustomPromptChange = (e) => {
    const value = e.target.value;
    setCustomPrompt(value);
    
    setCustomInputLabel(value.length > 0 ? "My idea about the story is..." : "Or Write Your Own Story Idea");
    
    if (value.length > 0 && !selectedReligion) {
      setShowReligionSelector(false);
      setSelectedPrompt('');
    } else if (value.length === 0 && !selectedReligion) {
      setShowReligionSelector(true);
    }

    if (selectedReligion && value.length > 0) {
      setSelectedPrompt('');
    }
  };

  const showLanguageSelector = selectedPrompt || customPrompt;

  const handleGenerateStory = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const prompt = selectedPrompt || customPrompt;
      if (!prompt) {
        throw new Error('Please select or enter a story prompt');
      }

      let promptText = '';
      if (selectedReligion && selectedPrompt) {
        const selectedStoryPrompt = storyPrompts[selectedReligion].prompts.find(
          p => p.value === selectedPrompt
        );
        promptText = selectedStoryPrompt?.prompt || prompt;
      } else {
        promptText = customPrompt;
      }

      const finalPrompt = `
        ${promptText}
        ${selectedReligion ? `This is a story from ${selectedReligion} religion.` : ''}
        Please tell the story in ${selectedLanguage || 'english'} language.
        Split the story into clear paragraphs.
      `.trim();

      const response = await generateStoryWithGemini(finalPrompt);
      console.log('Received response:', response);

      if (response.success && response.story) {
        const storyParagraphs = Array.isArray(response.story) 
          ? response.story 
          : response.story.split('\n\n').filter(p => p.trim());
        
        setParagraphs(storyParagraphs);
        setCurrentParagraph(0);
        setIsStoryMode(true);
      } else {
        throw new Error('Invalid story format received');
      }

    } catch (error) {
      console.error('Error generating story:', error);
      setError(error.message || 'Failed to generate story');
      setParagraphs([]);
      setIsStoryMode(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Add navigation functions
  const goToNextParagraph = () => {
    if (currentParagraph < paragraphs.length - 1) {
      setCurrentParagraph(prev => prev + 1);
    }
  };

  const goToPreviousParagraph = () => {
    if (currentParagraph > 0) {
      setCurrentParagraph(prev => prev - 1);
    }
  };

  const goBack = () => {
    setIsStoryMode(false);
    setParagraphs([]);
    setCurrentParagraph(0);
  };

  const renderLanguageSelector = () => {
    if (!selectedPrompt && !customPrompt) return null;

    const availableLanguages = selectedReligion 
      ? languageOptions[selectedReligion.toLowerCase()] 
      : ['english', 'hindi', 'marathi']; // Default languages for custom prompt

    return (
      <div className="language-section fade-in text-gray-500 gap-y-[10px] -translate-y-[21px]">
        <div className={`language-section-title ${activeField === 'language' ? 'glowing-text' : ''}`}>
          Select Language
        </div>
        <div className="language-selector">
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              className={`language-chip ${selectedLanguage === lang ? 'active' : ''}`}
              onClick={() => setSelectedLanguage(lang)}
            >
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </button>
          ))}
        </div>
      </div>
    );
  };

  // const renderStoryMode = () => (
  //   <div className="story-mode">
  //     <div className="story-content story-text">
  //         {paragraphs[currentParagraph]}
        
  //     </div>
      
  //     <div className="story-controls">
  //       <button 
  //         className="nav-button"
  //         onClick={goToPreviousParagraph}
  //         disabled={currentParagraph === 0}
  //       >
  //         <FaArrowLeft /> Previous
  //       </button>

  //       <div className="tts-controls">
  //         <button
  //           className={`tts-toggle ${isTTSEnabled ? 'active' : ''}`}
  //           onClick={() => {
  //             setIsTTSEnabled(!isTTSEnabled);
  //             stopSpeaking();
  //           }}
  //         >
  //           {isTTSEnabled ? <FaVolumeUp size={20} /> : <FaVolumeOff size={20} />}
  //         </button>

  //         {isTTSEnabled && (
  //           <button
  //             className={`play-pause ${isPlaying ? 'playing' : ''}`}
  //             onClick={() => {
  //               if (isPlaying) {
  //                 stopSpeaking();
  //               } else {
  //                 speakParagraph(paragraphs[currentParagraph]);
  //               }
  //             }}
  //           >
  //             {isPlaying ? 'Stop' : 'Play'}
  //           </button>
  //         )}
  //       </div>
        
  //       <div className="progress-bar">
  //         <div 
  //           className="progress"
  //           style={{ 
  //             width: `${((currentParagraph + 1) / paragraphs.length) * 100}%` 
  //           }}
  //         />
  //       </div>
        
  //       <button 
  //         className="nav-button"
  //         onClick={goToNextParagraph}
  //         disabled={currentParagraph === paragraphs.length - 1}
  //       >
  //         Next <FaArrowRight />
  //       </button>
  //     </div>
      
  //     <button className="back-button" onClick={goBack}>
  //       <FaArrowLeft /> Back to Selection
  //     </button>
  //   </div>
  // );
  const renderStoryMode = () => (
    <div className="story-mode">
      <div className="story-content story-text">
        {paragraphs[currentParagraph]}
      </div>
  
      <div className="story-controls">
        <button
          className="nav-button"
          onClick={goToPreviousParagraph}
          disabled={currentParagraph === 0}
        >
          <FaArrowLeft /> Previous
        </button>
  
        <div className="tts-controls">
          <button
            className={`tts-toggle ${isTTSEnabled ? 'active' : ''}`}
            onClick={() => {
              setIsTTSEnabled(!isTTSEnabled);
              stopSpeaking();
            }}
          >
            {isTTSEnabled ? <FaVolumeUp size={20} /> : <FaVolumeOff size={20} />}
          </button>
  
          {isTTSEnabled && (
            <>
              <select
                value={selectedVoice ? selectedVoice.name : ''}
                onChange={(e) => {
                  const voice = voices.find((v) => v.name === e.target.value);
                  setSelectedVoice(voice);
                }}
                style={{ width: '150px', fontSize: '12px' }}
              >
                <option value="">Default Voice</option>
                {voices.map((voice) => (
                  <option key={voice.name} value={voice.name}>
                    {voice.name} ({voice.lang})
                  </option>
                ))}
              </select>
  
              <button
                className={`play-pause ${isPlaying ? 'playing' : ''}`}
                onClick={() => {
                  if (isPlaying) {
                    stopSpeaking();
                  } else {
                    speakParagraph(paragraphs[currentParagraph]);
                  }
                }}
              >
                {isPlaying ? 'Stop' : 'Play'}
              </button>
            </>
          )}
        </div>
  
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${((currentParagraph + 1) / paragraphs.length) * 100}%`,
            }}
          />
        </div>
  
        <button
          className="nav-button"
          onClick={goToNextParagraph}
          disabled={currentParagraph === paragraphs.length - 1}
        >
          Next <FaArrowRight />
        </button>
      </div>
  
      <button className="back-button" onClick={goBack}>
        <FaArrowLeft /> Back to Selection
      </button>
    </div>
  );

  return (
    <div>
    <span className="translate-x-[51px] translate-y-[38px] flex flex-row absolute z-20"><ArrowBackIcon color="primary" fontSize="medium" />
    &nbsp;<p onClick={()=>navigate("/dashboard")} className=" text-blue-500">Go back</p></span>
    <div className="story-generator-container relative z-10">
      <div
        className="cursor-glow"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      />

      {!isStoryMode ? (
        <div className="content-wrapper">
          <h1  id='heading' className="main-title">Story Generator</h1>
          <p className="subtitle">Listen to religious stories or create your own</p>
          
          <div className="selection-area">
            <div className={`selector-group ${!showReligionSelector ? 'fade-out' : ''}`}>
              <label className={`section-title ${activeField === 'religion' ? 'glowing-text' : ''}`}>
                Select Religion
              </label>
              <select
                value={selectedReligion}
                onChange={(e) => {
                  setSelectedReligion(e.target.value);
                  setSelectedPrompt('');
                  setShowReligionSelector(true);
                }}
                onFocus={() => setActiveField('religion')}
                onBlur={() => setActiveField(null)}
                className="select-dropdown"
              >
                <option value="">Choose a religion</option>
                {Object.keys(storyPrompts).map((religion) => (
                  <option key={religion} value={religion}>
                    {storyPrompts[religion].label}
                  </option>
                ))}
              </select>
            </div>

            {!showReligionSelector && !selectedReligion && (
              <div className="irrespective-text fade-in">
                <span>Irrespective of Religion</span>
              </div>
            )}

            {selectedReligion && (
              <div className={`selector-group ${customPrompt ? 'fade-out' : 'fade-in'}`}>
                <label className={`section-title ${activeField === 'story' ? 'glowing-text' : ''}`}>
                  Select Story
                </label>
                <select
                  value={selectedPrompt}
                  onChange={(e) => setSelectedPrompt(e.target.value)}
                  onFocus={() => setActiveField('story')}
                  onBlur={() => setActiveField(null)}
                  className="select-dropdown"
                >
                  <option value="">Choose a story</option>
                  {storyPrompts[selectedReligion]?.prompts.map((prompt) => (
                    <option key={prompt.value} value={prompt.value}>
                      {prompt.label}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className={`selector-group ${selectedPrompt ? 'fade-out' : 'fade-in'}`}>
              <label className={`section-title ${activeField === 'custom' ? 'glowing-text' : ''} ${customPrompt ? 'active-label' : ''}`}>
                {customInputLabel}
              </label>
              <input
              id='input2'
                type="text"
                className="custom-story-input"
                placeholder="Enter your story idea... (Can be from any religion or none)"
                value={customPrompt}
                onChange={handleCustomPromptChange}
                onFocus={() => setActiveField('custom')}
                onBlur={() => setActiveField(null)}
              />
            </div>

            <div className="action-container">
              {renderLanguageSelector()}

              <button
                className="generate-button"
                onClick={handleGenerateStory}
                disabled={isLoading || (!selectedPrompt && !customPrompt)}
              >
                {isLoading ? 'Generating...' : 'Generate Story'}
              </button>
            </div>
          </div>
        </div>
      ) : (
        renderStoryMode()
      )}

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}
    </div>
    </div>
  );
};

export default StoryGenerator;


