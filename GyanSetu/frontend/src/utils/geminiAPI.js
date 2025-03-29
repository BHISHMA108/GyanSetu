// geminiAPI.js
export const generateStoryWithGemini = async (prompt) => {
  try {
    const response = await fetch('http://localhost:3000/generate-story', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('API Response:', data); // Debug log

    // Check if we have a valid response
    if (!data) {
      throw new Error('Empty response received');
    }

    // Return the story content
    return data;

  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
};

