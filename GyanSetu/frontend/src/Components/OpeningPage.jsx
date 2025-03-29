import React, { useEffect, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "./OpeningPage.css";
import FloatingNav from "./FloatingNav";
import CalendarDrawer from "../Components/calender/CalendarDrawer.jsx";
import IntroLogo from "./intrologo.jsx";

export default function OpeningPage(props) {
    useEffect(() => {
        const scroll = new LocomotiveScroll();
    }, []);
    

    const [openCalendar, setOpenCalendar] = useState(false);
    const toggleCalendar = () => {
        setOpenCalendar((prev) => !prev);
        console.log("Calendar Open:", !openCalendar);
    };
    
    return (
        <div className="Container">
            <FloatingNav toggleCalendar={toggleCalendar} />
            <IntroLogo/>
            <div className="video">
                <video loop muted autoPlay src="/src/Components/Assets/Video.mp4"></video>
            </div>
            <CalendarDrawer open={openCalendar} onClose={toggleCalendar} />
        </div>
    );
}
