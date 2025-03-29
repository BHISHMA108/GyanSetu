import React, { useState } from "react";
import { Timeline } from "../../ui/timeline.jsx";
import { motion } from "framer-motion";

const TimeLineDemo = () => {
  const [hoveredYug, setHoveredYug] = useState(null);

  const yugs = [
    {
      title: "Satyug",
      avatars: [
        { 
          name: "Matsya", 
          description: "The first incarnation of Vishnu as a giant golden fish. He appeared to King Manu and warned him about an impending pralaya (great flood) that would submerge the world. Matsya instructed Manu to build a massive boat and to gather the seven sages (Saptarishis), seeds of all plants, and representatives of all living beings. When the flood arrived, Matsya guided the boat safely through the waters, ensuring the survival of life and the preservation of the Vedas, which had been stolen by a demon named Hayagriva." 
        },
        { 
          name: "Kurma", 
          description: "Vishnu took the form of a colossal tortoise to assist in the churning of the ocean (Samudra Manthan), a grand event where Devas (gods) and Asuras (demons) sought to extract the nectar of immortality (Amrit). To churn the ocean, Mount Mandara was used as a churning rod, but it kept sinking. Kurma supported the mountain on his back, stabilizing it and allowing the process to continue, eventually leading to the emergence of divine gifts, including Amrit, Goddess Lakshmi, and the deadly poison Halahala, which Lord Shiva consumed." 
        },
        { 
          name: "Varah", 
          description: "When the demon Hiranyaksha submerged the Earth (Prithvi) into the cosmic ocean, Vishnu manifested as a mighty boar. Varah fought a fierce battle with Hiranyaksha, lasting a thousand divine years, and ultimately slew him. He then lifted the Earth with his massive tusks and restored her to her rightful place in the universe. This avatar symbolizes the restoration of cosmic balance and the protection of dharma from chaos." 
        },
        { 
          name: "Narsimha", 
          description: "To protect his devotee Prahlad and to defeat the tyrant king Hiranyakashipu, Vishnu took the form of Narsimha, a half-man, half-lion. Hiranyakashipu had received a boon that he could not be killed by man or beast, inside or outside, during day or night, on earth or in the sky, and by no weapon. Narsimha, bypassing all these conditions, appeared at twilight, at the threshold of a palace, placed Hiranyakashipu on his lap, and tore him apart with his sharp claws. This incarnation represents divine intervention when evil becomes unbearable." 
        },
      ],
    },
    {
      title: "Tretayug",
      avatars: [
        { 
          name: "Vaman", 
          description: "The dwarf Brahmin incarnation of Vishnu appeared to subdue the mighty but righteous demon king, Mahabali. King Bali had conquered the three worlds and was performing a yajna (sacrificial ritual) to cement his supremacy. Vaman approached him and humbly asked for three paces of land. Bali, known for his generosity, agreed. Vaman then expanded to a cosmic form, covering the earth with one step, the heavens with another, and for the third step, Bali humbly offered his own head. This incarnation emphasizes humility, righteousness, and the balance between power and devotion." 
        },
        { 
          name: "Parshuram", 
          description: "A fierce warrior sage with an unbreakable axe (Parashu), gifted by Lord Shiva. Parshuram was born to rid the world of corrupt and oppressive Kshatriya rulers who had strayed from dharma. He waged multiple wars against them, cleansing the earth of tyranny. Though known for his wrath, he was also a great teacher, instructing legendary warriors like Bhishma, Dronacharya, and Karna. His story highlights the importance of justice and discipline." 
        },
        { 
          name: "ShriRam", 
          description: "The epitome of dharma (righteousness), Shri Ram was the prince of Ayodhya and the hero of the Ramayana. Born to King Dasharatha, he was exiled to the forest for 14 years due to a boon granted to Queen Kaikeyi. During his exile, his wife Sita was abducted by the demon king Ravana. Ram, with the help of his devoted companion Hanuman and an army of Vanaras (monkeys), waged a great war in Lanka, ultimately slaying Ravana and rescuing Sita. His reign, known as 'Rama Rajya,' is considered the ideal rule, embodying justice, sacrifice, and devotion to duty." 
        },
      ],
    },
    {
      title: "Dwaparyug",
      avatars: [
        { 
          name: "ShriKrishna", 
          description: "The supreme strategist, divine teacher, and warrior prince, Shri Krishna was born to rid the world of adharma (unrighteousness). He played a crucial role in the Mahabharata, serving as the charioteer and guide to Arjuna, delivering the Bhagavad Gita on the battlefield of Kurukshetra. Krishna's life was filled with divine play (Leelas), from lifting the Govardhan Hill to protect villagers, to defeating the tyrant king Kansa, and orchestrating the downfall of the Kauravas. His teachings emphasize duty, devotion, and the ultimate path to liberation (moksha)." 
        },
      ],
    },
    {
      title: "Kalyug",
      avatars: [
        { 
          name: "BhagwanBuddha", 
          description: "Born as Prince Siddhartha Gautama, he renounced his royal life to seek the truth about suffering. After years of meditation, he attained enlightenment under the Bodhi tree and became the Buddha ('The Awakened One'). He preached the Middle Path, the Four Noble Truths, and the Eightfold Path, guiding humanity towards self-awareness, non-violence, and detachment from worldly desires. His teachings transformed countless lives and laid the foundation for Buddhism, a path focused on compassion and wisdom." 
        },
        { 
          name: "Kalki", 
          description: "The prophesied tenth and final avatar of Vishnu, who will appear at the end of Kalyug riding a white horse named Devadatta and wielding a blazing sword. Kalki will descend to annihilate evil, destroy adharma, and restore righteousness. His arrival marks the end of Kalyug and the beginning of a new Satya Yuga, symbolizing the cycle of creation, preservation, and destruction that governs the universe." 
        },
      ],
    },
  ];

  return (
    <div className="w-full">
      <Timeline
        data={yugs.map((yug) => ({
          title: yug.title,
          content: (
            <div
              onMouseEnter={() => setHoveredYug(yug.title)}
              onMouseLeave={() => setHoveredYug(null)}
              className="relative w-full"
            >
              {/* Images */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: hoveredYug === yug.title ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-2 gap-4"
              >
                {yug.avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={`/Timeline images/${avatar.name.toLowerCase()}.webp`}
                    alt={avatar.name}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-100 w-full shadow-lg"
                  />
                ))}
              </motion.div>

              {/* Avatar Names & Descriptions */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredYug === yug.title ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute top-0 left-0 w-full p-4 bg-white dark:bg-black rounded-lg shadow-lg"
              >
                {yug.avatars.map((avatar, index) => (
                  <div key={index} className="mb-2 text-center">
                    <h3 className="text-3xl font-semibold">{avatar.name}</h3>
                    <p className="text-lg text-justify">{avatar.description}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          ),
        }))}
      />
    </div>
  );
};

export default TimeLineDemo;