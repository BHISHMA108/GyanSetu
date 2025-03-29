import React, { useState } from "react";
import { Timeline } from "../../ui/timeline3.jsx";
import { motion } from "framer-motion";

const ChristianTimeline = () => {
  const [hoveredEvent, setHoveredEvent] = useState(null);

  const events = [
    {
      title: "Birth of Jesus Christ (c. 4-6 BC)",
      description: "Jesus Christ, believed to be the Son of God, was born in Bethlehem to the Virgin Mary, marking the beginning of Christianity.",
      image: "1.webp",
    },
    {
      title: "Baptism of Jesus (c. 27-29 AD)",
      description: "Jesus was baptized by John the Baptist in the River Jordan, beginning his public ministry.",
      image: "2.webp",
    },
    {
      title: "The Crucifixion (c. 30-33 AD)",
      description: "Jesus was crucified in Jerusalem under Roman rule, an event central to Christian faith as a sacrifice for humanity's sins.",
      image: "3.webp",
    },
    {
      title: "The Resurrection (c. 30-33 AD)",
      description: "Three days after his crucifixion, Jesus rose from the dead, affirming his divinity and fulfilling biblical prophecies.",
      image: "4.webp",
    },
    {
      title: "Ascension of Jesus (c. 30-33 AD)",
      description: "Jesus ascended to heaven in the presence of his disciples, promising to return at the end of time.",
      image: "5.webp",
    },
    {
      title: "Pentecost and the Early Church (c. 30-33 AD)",
      description: "The Holy Spirit descended upon the apostles, empowering them to spread Jesus' teachings, leading to the formation of the Christian Church.",
      image: "6.webp",
    },
    {
      title: "Council of Nicaea (325 AD)",
      description: "Christian leaders gathered to define core doctrines, resulting in the Nicene Creed, which outlined the divinity of Christ.",
      image: "7.jpg",
    },
    {
      title: "Great Schism (1054 AD)",
      description: "The split between the Roman Catholic Church and the Eastern Orthodox Church due to theological and political differences.",
      image: "8.jpg",
    },
    {
      title: "Protestant Reformation (1517 AD)",
      description: "Led by Martin Luther, the Reformation challenged Catholic practices, leading to the formation of Protestant denominations.",
      image: "9.jpg",
    },
    {
      title: "Modern Christianity (Present)",
      description: "Christianity remains one of the largest religions in the world, evolving with new movements and interpretations of the faith.",
      image: "10.jpg",
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
                  src={`../public/Christian Timeline/Christian Timeline/${event.image}`}
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

export default ChristianTimeline;