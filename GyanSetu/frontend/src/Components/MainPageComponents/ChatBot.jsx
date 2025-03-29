import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const ChatModal = ({ god, onClose }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const chatRef = useRef(null);

    // Auto-scroll to the bottom
    useEffect(() => {
        chatRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);

        try {
            const response = await axios.post("http://localhost:5000/api/chat", {
                message: input,
                god: god?.name || "Unknown",
            });

            console.log("Response Data:", response.data); // Debugging API response

            const botMessage = { text: response.data.response, sender: "bot" };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error fetching AI response:", error);
        }

        setInput(""); // Clear input field
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className=" w-96 rounded-lg shadow-lg flex flex-col">
                {/* Header */}
                <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
                    <h2 className="text-lg font-semibold ">Chat with {god?.name || "Unknown"}</h2>
                    <button className="text-white text-xl" onClick={onClose}>✖</button>
                </div>

                {/* Chat Body */}
                <div className="p-4 h-80 overflow-y-auto flex flex-col space-y-3 bg-gray-300">
                    {messages.map((msg, index) => (
                        <p 
                            key={index} 
                            className={`px-4 py-2 rounded-lg max-w-3/4 ${msg.sender === "user" ? "bg-blue-500 text-white self-end" : "bg-white border border-gray-300 text-black self-start"}`}
                        >
                            {msg.sender === "user" ? "👤" : "🛕"} {msg.text}
                        </p>
                    ))}
                    <div ref={chatRef}></div>
                </div>

                {/* Chat Footer */}
                <div className="flex items-center p-4 border-t bg-white">
                    <input
                        type="text"
                        placeholder="Ask something..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        className="flex-1 px-3 py-2 bg-gray-400 text-white border-none rounded-lg outline-none"
                    />
                    <button 
                        onClick={sendMessage} 
                        className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-lg"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatModal;
