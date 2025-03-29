import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 9);
  const secondRow = products.slice(9, 20);
  const thirdRow = products.slice(12, 15);
  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-10 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse -space-x-25 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row -space-x-25 mb-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
<div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
  <h1 className="text-[80px] md:text-[110px] font-extrabold dark:text-white leading-tight text-center">
    Your Gateway to <br /> Sacred Knowledge
  </h1>

  <p className="max-w-5xl text-lg md:text-xl mt-8 dark:text-neutral-200 text-center mx-auto">
    Discover a curated collection of holy books, scriptures, and spiritual classics from various faiths. <br />
    From Vedas and Puranas to the Bible, Quran, Guru Granth Sahib, and more—<br />
    we deliver timeless wisdom from diverse religions right to your doorstep.
  </p>
</div>

  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -30, // slight lift on hover
      }}
      key={product.title}
      className="group relative h-[550px] w-[350px] shrink-0 overflow-hidden rounded-lg shadow-lg -translate-y-[301px]"
    >
      <a href={product.link} target="_blank" rel="noopener noreferrer" className="block h-full">
        {/* Book Thumbnail Image */}
        <div className="relative h-full w-full overflow-hidden -translate-y-[41px]">
          <img
            src={product.thumbnail}
            className="object-cover absolute h-full w-full inset-0 transition-transform duration-500 transform group-hover:scale-110"
            alt={product.title}
          />

          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-4 max-w-[260px]">
            <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
            <p className="text-yellow-400 mb-1">Rating: ★★★★★</p>
            <p className="text-white mb-2">{product.price}</p>
            <p className="text-gray-300 text-sm mb-4">{product.description}</p>
            <button className="bg-blue-500 hover:bg-blue-600 hover:opacity-100 text-white px-4 py-2 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </a>
    </motion.div>
  );
};
