import React from "react";
import PageTwo from "../Components/PageTwo.jsx";
import OpeningPage from "../Components/OpeningPage.jsx";
import PageTwobottom from "../Components/PageTwobottom.jsx";
import PageTwofooter from "../Components/PageTwofooter.jsx";
import Navbar from "../Components/FloatingNav.jsx";
import { useNavigate } from "react-router-dom";

import { useEffect , useState } from "react";
import CalendarDrawer from "../Components/calender/CalendarDrawer.jsx";

const LandingPage = () => {
    const navigate = useNavigate(); // Hook for navigation

    const [openCalendar, setOpenCalendar] = useState(false);
    // const [quizVisible, setQuizVisible] = useState(false);

    // Toggle the calendar drawer
    const toggleCalendar = () => {
        setOpenCalendar(!openCalendar);
    };
    return (
        <>
            <Navbar toggleCalendar={toggleCalendar}/>
            <CalendarDrawer open={openCalendar} onClose={toggleCalendar} />
            <OpeningPage />
            <PageTwo />
            <PageTwobottom />
            <PageTwofooter />
        </>
    );
};

export default LandingPage;
