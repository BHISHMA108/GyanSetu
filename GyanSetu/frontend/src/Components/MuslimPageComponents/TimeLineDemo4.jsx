import React, { useState } from "react";
import { Timeline } from "../../ui/timeline4.jsx";
import { motion } from "framer-motion";

const IslamicTimeline = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const events = [
    {
      title: "Birth of Prophet Muhammad (570 CE)",
      description: "Prophet Muhammad was born in Mecca, in the Hashim clan of the Quraysh tribe. His birth marked the beginning of a new era in human history.",
      image: "1.jpg",
    },
    {
      title: "First Revelation (610 CE)",
      description: "While meditating in the Cave of Hira, Prophet Muhammad received his first revelation from Angel Jibreel (Gabriel), marking the beginning of his prophethood.",
      image: "2.jpg",
    },
    {
      title: "Hijrah to Medina (622 CE)",
      description: "Prophet Muhammad and his followers migrated from Mecca to Medina to escape persecution. This event marks the beginning of the Islamic calendar (Hijri year).",
      image: "3.jpg",
    },
    {
      title: "Conquest of Mecca (630 CE)",
      description: "The Prophet and his followers peacefully entered Mecca, removed idols from the Kaaba, and established Islam as the dominant faith in the region.",
      image: "4.jpg",
    },
    {
      title: "The Farewell Sermon (632 CE)",
      description: "In his final sermon, Prophet Muhammad delivered a powerful message of unity, equality, and devotion to God at Mount Arafat during Hajj.",
      image: "5.jpg",
    },
    {
      title: "The Four Caliphs (632-661 CE)",
      description: "The Rashidun Caliphs (Abu Bakr, Umar, Uthman, and Ali) led the Muslim world, spreading Islam across the Arabian Peninsula, Persia, and North Africa.",
      image: "6.jpg",
    },
    {
      title: "Umayyad and Abbasid Dynasties (661-1258 CE)",
      description: "Islamic civilization flourished with advancements in science, medicine, philosophy, and art under these caliphates, leading to the Golden Age of Islam.",
      image: "7.jpg",
    },
    {
      title: "Ottoman Empire (1299-1924 CE)",
      description: "The Ottomans established one of the most powerful Islamic empires, which lasted for over six centuries, significantly influencing global history.",
      image: "8.jpg",
    },
    {
      title: "Modern Islamic Movements (20th Century - Present)",
      description: "Islam continues to evolve globally, influencing politics, culture, and societies in various ways while maintaining its core teachings and values.",
      image: "9.jpg",
    },
  ];

  return (
    <div className="w-full">
      <Timeline
        data={events.map((event) => ({
          title: event.title,
          content: (
            <div
              onMouseEnter={() => setHoveredEvent(event.title)}
              onMouseLeave={() => setHoveredEvent(null)}
              className="relative w-full"
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: hoveredEvent === event.title ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <img
                  src={`../public/Islam Timeline/${event.image}`}
                  alt={event.title}
                  className="rounded-lg object-cover h-44 md:h-64 lg:h-80 w-auto shadow-lg"
                />
              </motion.div>
              
              {/* Description */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredEvent === event.title ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full p-4 bg-white dark:bg-black rounded-lg shadow-lg"
              >
                <h3 className="text-3xl font-semibold text-center">{event.title}</h3>
                <p className="text-lg text-justify mt-2">{event.description}</p>
              </motion.div>
            </div>
          ),
        }))}
      />
    </div>
  );
};

export default IslamicTimeline;
