// import React, { useEffect, useId, useRef, useState } from "react";
// import { AnimatePresence, motion } from "motion/react";
// import { useOutsideClick } from "../ui/use-outside-click";

// const MusicCardContainer = () =>{
//   const [active, setActive] = useState(null);
//   const ref = useRef(null);
//   const id = useId();

//   useEffect(() => {
//     function onKeyDown(event) {
//       if (event.key === "Escape") {
//         setActive(false);
//       }
//     }

//     if (active && typeof active === "object") {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     window.addEventListener("keydown", onKeyDown);
//     return () => window.removeEventListener("keydown", onKeyDown);
//   }, [active]);

//   useOutsideClick(ref, () => setActive(null));

//   return (<>
//     <AnimatePresence>
//       {active && typeof active === "object" && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black/20 h-full w-full z-10" />
//       )}
//     </AnimatePresence>
//     <AnimatePresence>
//       {active && typeof active === "object" ? (
//         <div className="fixed inset-0  grid place-items-center z-[100]">
//           <motion.button
//             key={`button-${active.title}-${id}`}
//             layout
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             exit={{
//               opacity: 0,
//               transition: {
//                 duration: 0.05,
//               },
//             }}
//             className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
//             onClick={() => setActive(null)}>
//             <CloseIcon />
//           </motion.button>
//           <motion.div
//             layoutId={`card-${active.title}-${id}`}
//             ref={ref}
//             className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden">
//             <motion.div layoutId={`image-${active.title}-${id}`}>
//               <img
//                 priority
//                 width={200}
//                 height={200}
//                 src={active.src}
//                 alt={active.title}
//                 className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
//             </motion.div>

//             <div>
//               <div className="flex justify-between items-start p-4">
//                 <div className="">
//                   <motion.h3
//                     layoutId={`title-${active.title}-${id}`}
//                     className="font-bold text-neutral-700 dark:text-neutral-200">
//                     {active.title}
//                   </motion.h3>
//                   <motion.p
//                     layoutId={`description-${active.description}-${id}`}
//                     className="text-neutral-600 dark:text-neutral-400">
//                     {active.description}
//                   </motion.p>
//                 </div>

//                 <motion.a
//                   layoutId={`button-${active.title}-${id}`}
//                   href={active.ctaLink}
//                   target="_blank"
//                   className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white">
//                   {active.ctaText}
//                 </motion.a>
//               </div>
//               <div className="pt-4 relative px-4">
//                 <motion.div
//                   layout
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                   className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]">
//                   {typeof active.content === "function"
//                     ? active.content()
//                     : active.content}
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       ) : null}
//     </AnimatePresence>
//     <ul className="max-w-2xl mx-auto w-full gap-4">
//       {cards.map((card, index) => (
//         <motion.div
//           layoutId={`card-${card.title}-${id}`}
//           key={`card-${card.title}-${id}`}
//           onClick={() => setActive(card)}
//           className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer">
//           <div className="flex gap-4 flex-col md:flex-row ">
//             <motion.div layoutId={`image-${card.title}-${id}`}>
//               <img
//                 width={100}
//                 height={100}
//                 src={card.src}
//                 alt={card.title}
//                 className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top" />
//             </motion.div>
//             <div className="">
//               <motion.h3
//                 layoutId={`title-${card.title}-${id}`}
//                 className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left">
//                 {card.title}
//               </motion.h3>
//               <motion.p
//                 layoutId={`description-${card.description}-${id}`}
//                 className="text-neutral-600 dark:text-neutral-400 text-center md:text-left">
//                 {card.description}
//               </motion.p>
//             </div>
//           </div>
//           <motion.button
//             layoutId={`button-${card.title}-${id}`}
//             className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0">
//             {card.ctaText}
//           </motion.button>
//         </motion.div>
//       ))}
//     </ul>
//   </>);
// }

// export const CloseIcon = () => {
//   return (
//     (<motion.svg
//       initial={{
//         opacity: 0,
//       }}
//       animate={{
//         opacity: 1,
//       }}
//       exit={{
//         opacity: 0,
//         transition: {
//           duration: 0.05,
//         },
//       }}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className="h-4 w-4 text-black">
//       <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//       <path d="M18 6l-12 12" />
//       <path d="M6 6l12 12" />
//     </motion.svg>)
//   );
// };

// const cards = [
//   {
//     description: "Lana Del Rey",
//     title: "Summertime Sadness",
//     src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
//     ctaText: "Play",
//     ctaLink: "https://ui.aceternity.com/templates",
//     content: () => {
//       return (
//         (<p>Lana Del Rey, an iconic American singer-songwriter, is celebrated for
//                     her melancholic and cinematic music style. Born Elizabeth Woolridge
//                     Grant in New York City, she has captivated audiences worldwide with
//                     her haunting voice and introspective lyrics. <br /> <br />Her songs
//                     often explore themes of tragic romance, glamour, and melancholia,
//                     drawing inspiration from both contemporary and vintage pop culture.
//                     With a career that has seen numerous critically acclaimed albums, Lana
//                     Del Rey has established herself as a unique and influential figure in
//                     the music industry, earning a dedicated fan base and numerous
//                     accolades.
//                   </p>)
//       );
//     },
//   },
//   {
//     description: "Babbu Maan",
//     title: "Mitran Di Chhatri",
//     src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
//     ctaText: "Play",
//     ctaLink: "https://ui.aceternity.com/templates",
//     content: () => {
//       return (
//         (<p>Babu Maan, a legendary Punjabi singer, is renowned for his soulful
//                     voice and profound lyrics that resonate deeply with his audience. Born
//                     in the village of Khant Maanpur in Punjab, India, he has become a
//                     cultural icon in the Punjabi music industry. <br /> <br />His songs
//                     often reflect the struggles and triumphs of everyday life, capturing
//                     the essence of Punjabi culture and traditions. With a career spanning
//                     over two decades, Babu Maan has released numerous hit albums and
//                     singles that have garnered him a massive fan following both in India
//                     and abroad.
//                   </p>)
//       );
//     },
//   },

//   {
//     description: "Metallica",
//     title: "For Whom The Bell Tolls",
//     src: "https://assets.aceternity.com/demos/metallica.jpeg",
//     ctaText: "Play",
//     ctaLink: "https://ui.aceternity.com/templates",
//     content: () => {
//       return (
//         (<p>Metallica, an iconic American heavy metal band, is renowned for their
//                     powerful sound and intense performances that resonate deeply with
//                     their audience. Formed in Los Angeles, California, they have become a
//                     cultural icon in the heavy metal music industry. <br /> <br />Their
//                     songs often reflect themes of aggression, social issues, and personal
//                     struggles, capturing the essence of the heavy metal genre. With a
//                     career spanning over four decades, Metallica has released numerous hit
//                     albums and singles that have garnered them a massive fan following
//                     both in the United States and abroad.
//                   </p>)
//       );
//     },
//   },
//   {
//     description: "Led Zeppelin",
//     title: "Stairway To Heaven",
//     src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
//     ctaText: "Play",
//     ctaLink: "https://ui.aceternity.com/templates",
//     content: () => {
//       return (
//         (<p>Led Zeppelin, a legendary British rock band, is renowned for their
//                     innovative sound and profound impact on the music industry. Formed in
//                     London in 1968, they have become a cultural icon in the rock music
//                     world. <br /> <br />Their songs often reflect a blend of blues, hard
//                     rock, and folk music, capturing the essence of the 1970s rock era.
//                     With a career spanning over a decade, Led Zeppelin has released
//                     numerous hit albums and singles that have garnered them a massive fan
//                     following both in the United Kingdom and abroad.
//                   </p>)
//       );
//     },
//   },
//   {
//     description: "Mustafa Zahid",
//     title: "Toh Phir Aao",
//     src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
//     ctaText: "Play",
//     ctaLink: "https://ui.aceternity.com/templates",
//     content: () => {
//       return (
//         (<p>"Aawarapan", a Bollywood movie starring Emraan Hashmi, is
//                     renowned for its intense storyline and powerful performances. Directed
//                     by Mohit Suri, the film has become a significant work in the Indian
//                     film industry. <br /> <br />The movie explores themes of love,
//                     redemption, and sacrifice, capturing the essence of human emotions and
//                     relationships. With a gripping narrative and memorable music,
//                     "Aawarapan" has garnered a massive fan following both in
//                     India and abroad, solidifying Emraan Hashmi's status as a
//                     versatile actor.
//                   </p>)
//       );
//     },
//   },
// ];

// export default MusicCardContainer;


// import React, { useState, useRef } from "react";

// const songs = [
//     { id: 1, title: "Summertime Sadness", artist: "Lana Del Rey", src: "song1.mp3", cover: "cover1.jpg" },
//     { id: 2, title: "Mitran Di Chhatri", artist: "Babbu Maan", src: "song2.mp3", cover: "cover2.jpg" },
//     { id: 3, title: "For Whom The Bell Tolls", artist: "Metallica", src: "song3.mp3", cover: "cover3.jpg" },
//     { id: 4, title: "Stairway To Heaven", artist: "Led Zeppelin", src: "song4.mp3", cover: "cover4.jpg" },
//     { id: 5, title: "Toh Phir Aao", artist: "Mustafa Zahid", src: "song5.mp3", cover: "cover5.jpg" }
// ];

// const MusicCardContainer = () => {
//     const [playingSong, setPlayingSong] = useState(null);
//     const audioRef = useRef(null);

//     const playSong = (song) => {
//         if (playingSong?.id === song.id) {
//             audioRef.current.pause();
//             setPlayingSong(null);
//         } else {
//             setPlayingSong(song);
//             setTimeout(() => audioRef.current.play(), 100);
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-md">
//             <h1 className="text-2xl font-bold mb-4">🎵 My Music Player</h1>
//             <ul>
//                 {songs.map((song) => (
//                     <li
//                         key={song.id}
//                         className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer ${
//                             playingSong?.id === song.id ? "bg-gray-100" : ""
//                         }`}
//                         onClick={() => playSong(song)}
//                     >
//                         <img src={song.cover} alt={song.title} className="w-12 h-12 rounded-md" />
//                         <div className="flex-1">
//                             <p className="font-semibold">{song.title}</p>
//                             <p className="text-gray-500 text-sm">{song.artist}</p>
//                         </div>
//                         <button className="px-4 py-1 bg-gray-200 rounded-lg">{playingSong?.id === song.id ? "Pause" : "Play"}</button>
//                     </li>
//                 ))}
//             </ul>
//             {playingSong && <audio ref={audioRef} src={playingSong.src} controls className="w-full mt-4" autoPlay />}
//         </div>
//     );
// };

// export default MusicCardContainer;


// import React, { useState, useRef, useEffect } from "react";
// import axios from "axios";

// const MusicCardContainer = () => {
//     const [songs, setSongs] = useState([]);
//     const [playingSong, setPlayingSong] = useState(null);
//     const audioRef = useRef(null);

//     useEffect(() => {
//         axios.get("http://localhost:5000/api/songs")
//             .then(response => setSongs(response.data))
//             .catch(error => console.error("Error fetching songs:", error));
//     }, []);

//     const playSong = (song) => {
//       if (playingSong?.id === song.id) {
//           audioRef.current.pause();
//           setPlayingSong(null);
//       } else {
//           if (audioRef.current) {
//               audioRef.current.pause();
//           }
//           setPlayingSong(song);
//       }
//   };
  
//     return (
//         <div className="max-w-md mx-auto bg-white p-4 rounded-lg shadow-md">
//             <h1 className="text-2xl font-bold mb-4">🎵 My Music Player</h1>
//             <ul>
//                 {songs.map((song) => (
//                     <li
//                         key={song.id}
//                         className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer ${
//                             playingSong?.id === song.id ? "bg-gray-100" : ""
//                         }`}
//                         onClick={() => playSong(song)}
//                     >
//                         <img src={song.cover} alt={song.title} className="w-12 h-12 rounded-md" />
//                         <div className="flex-1">
//                             <p className="font-semibold">{song.title}</p>
//                             <p className="text-gray-500 text-sm">{song.artist}</p>
//                         </div>
//                         <button className="px-4 py-1 bg-gray-200 rounded-lg">{playingSong?.id === song.id ? "Pause" : "Play"}</button>
//                     </li>
//                 ))}
//             </ul>
//             {playingSong && <audio ref={audioRef} src={playingSong.src} controls className="w-full mt-4" autoPlay />}
//         </div>
//     );
// };

// export default MusicCardContainer;



import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

const SpotifyClone = () => {
    const [songs, setSongs] = useState([]);
    const [playingSong, setPlayingSong] = useState(null);
    const audioRef = useRef(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/songs")
            .then(response => setSongs(response.data))
            .catch(error => console.error("Error fetching songs:", error));
    }, []);

    const playSong = (song) => {
        if (playingSong?.id === song.id) {
            audioRef.current.pause();
            setPlayingSong(null);
        } else {
            setPlayingSong(song);
            setTimeout(() => {
                if (audioRef.current) {
                    audioRef.current.src = song.url;
                    audioRef.current.play().catch(err => console.error("Playback error:", err));
                }
            }, 100);
        }
    };

    return (
        <div className="max-w-full mx-auto bg-gray-900 text-white p-4 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">🎵 My Music Player</h1>
            <ul>
                {songs.map((song) => (
                    <li
                        key={song.id}
                        className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition duration-300 hover:bg-gray-700 ${
                            playingSong?.id === song.id ? "bg-gray-800" : ""
                        }`}
                        onClick={() => playSong(song)}
                    >
                        <div className="flex-1">
                            <p className="font-semibold">{song.name}</p>
                        </div>
                        <button className="px-4 py-1 bg-gray-600 hover:bg-gray-500 text-white rounded-lg">
                            {playingSong?.id === song.id ? "Pause" : "Play"}
                        </button>
                    </li>
                ))}
            </ul>
            {playingSong && <AudioPlayer playingSong={playingSong.url} audioRef={audioRef} />}
        </div>
    );
};

const AudioPlayer = ({ playingSong, audioRef }) => {
    return (
        <div className="mt-4 bg-gray-800 p-4 rounded-lg">
            <h2 className="text-lg font-semibold">🎶 Now Playing</h2>
            {playingSong ? (
                <audio ref={audioRef} controls className="w-full mt-2" />
            ) : (
                <p className="text-gray-400">No song selected</p>
            )}
        </div>
    );
};

export default SpotifyClone;

