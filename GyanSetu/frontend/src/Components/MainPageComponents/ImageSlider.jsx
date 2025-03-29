import { motion } from "framer-motion"; // corrected import
import React from "react";
import { ImagesSlider } from "../../ui/image-slider";

function ImageSlider() {
  const images = [
    "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1558659616-7742131dcfbb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1598194809345-08b8ed2dd30a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fEhpbmR1fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1617694276915-762d9749e6f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fEhpbmR1fGVufDB8fDB8fHww",
  ];

  return (
    <div className="h-full w-full relative bg-white">
      <ImagesSlider
        className="h-[600px] w-[600px]  bg-blue-400"
        images={images}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex bg-red-500 flex-col justify-center items-center"
        >
          <motion.p
            className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4"
          >
            धर्मो रक्षति रक्षितः <br />
          </motion.p>
          <button
            className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4"
          >
            <span>Join now →</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </motion.div>
      </ImagesSlider>
    </div>
  );
}

export default ImageSlider;
