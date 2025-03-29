import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  const moveCursor = (e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2, // smooth duration
      ease: "power2.out", // easing for smoothness
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="cursor relative w-full h-screen cursor-none">
      <div
        ref={cursorRef}
        className="absolute bg-red-500 rounded-full pointer-events-none"
        style={{
          width: "20px",
          height: "20px",
          top: 0,
          left: 0,
        }}
      ></div>
    </div>
  );
};

export default Cursor;
