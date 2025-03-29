import axios from "axios";

const API_URL = "http://localhost:5000/api/analyze"; // Backend URL

export const getMeaning = async (verse) => {
    try {
        const response = await axios.post(
            API_URL, 
            { verse }, 
            { headers: { "Content-Type": "application/json" } } // Ensure JSON request
        );

        return response.data; // Assuming response contains { meaning: "..." }
    } catch (error) {
        console.error("Error fetching meaning:", error.response ? error.response.data : error.message);
        return { meaning: "Error fetching meaning. Try again!" };
    }
};