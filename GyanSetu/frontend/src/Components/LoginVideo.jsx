import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginVideo.css";

const LoginVideo = ({ setShowVideo }) => {
    const navigate = useNavigate();
    const videoRef = useRef(null);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const handleVideoEnd = () => {
            setFadeOut(true); // Start fade-out effect

            setTimeout(() => {
                setShowVideo(false); // Hide video
                navigate("/religionselector"); // Redirect after fade-out
            }, 1500); // Matches CSS transition duration
        };

        const video = videoRef.current;
        if (video) {
            video.addEventListener("ended", handleVideoEnd);
        }

        return () => {
            if (video) {
                video.removeEventListener("ended", handleVideoEnd);
            }
        };
    }, [navigate, setShowVideo]);

    return (
        <div className={`back ${fadeOut ? "fade-out" : ""}`}>
            <video ref={videoRef} autoPlay>
                <source src="/Latest.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default LoginVideo;
