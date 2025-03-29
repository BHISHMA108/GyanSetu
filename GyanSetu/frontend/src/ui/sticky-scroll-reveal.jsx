import React, { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import cn from "../lib/utils";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";

export const StickyScroll = ({
  content,
  contentClassName
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 13 and comment line 14,15 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref
    //container: ref,
    //offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });
  const backgroundColors = [
    "#140d04", // Deep coffee brown with an orange hint 
    "#241000", // Dark roasted amber  
    "#3b1c0a", // Rich caramelized brown  
    "#4e260f", // Burnt orange chocolate  
    "#693e20", 
    // Dark sunset orange  
  ];
  const navigate = useNavigate();

  return (
    <div>
    <div className="fixed top-10 left-10 z-[999] flex items-center space-x-2 cursor-pointer">
  <ArrowBackIcon color="primary" fontSize="medium" />
  <p onClick={() => navigate("/dashboard")} className="text-blue-500">
    Go back
  </p>
</div>

    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex w-[100rem] h-full justify-left space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}>
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20 translate-x-[100px]">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100">
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-1xl mt-10 max-w-sm text-slate-300">
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background:"transparent" }}
        className={cn(
          "sticky fixed top-45 right-40 hidden h-80 w-100 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}>
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
    </div>
  );
};