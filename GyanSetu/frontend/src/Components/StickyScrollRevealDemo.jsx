import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const content = [
  {
    title: "Kashi Vishwanath Temple (Varanasi, Uttar Pradesh)",
    description:
      "The Kashi Vishwanath Temple, dedicated to Lord Shiva, is one of the twelve Jyotirlingas and holds a timeless spiritual aura. Located in Varanasi—the 'Spiritual Capital of India'—the temple is situated on the western bank of the holy Ganges. Pilgrims believe a visit to this temple and a dip in the Ganges can cleanse one's sins and aid in attaining Moksha (liberation). Despite invasions and destruction over centuries, it stands as a resilient beacon of devotion, rebuilt in its current form by Maharani Ahilyabai Holkar in 1780. The temple's gold-plated spire and intricate architecture reflect both cultural richness and deep-rooted spirituality.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white text-center">
        <img
          src="https://shrikashidham.com/wp-content/uploads/2023/08/1-3.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover scale-160 -translate-y-[6px]"
          alt="Kashi Vishwanath Temple" />
      </div>
    ),
  },
  {
    title: "Meenakshi Temple (Madurai, Tamil Nadu)",
    description:
      "The Meenakshi Amman Temple, a majestic Dravidian architectural wonder, is dedicated to Goddess Meenakshi and Lord Sundareswarar (Shiva). Its towering gopurams, adorned with over 33,000 vividly colored sculptures, represent mythological stories, gods, goddesses, and celestial beings. Built around 1623–1655 CE, the temple complex spans 14 acres and symbolizes Tamil culture, architecture, and spirituality. The 'Hall of Thousand Pillars' displays exquisitely carved columns, some producing musical notes when tapped. The temple plays a central role in the annual Meenakshi Thirukalyanam festival, drawing millions of devotees globally.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white text-center">
        <img
          src="https://i.natgeofe.com/n/b9e9b8d1-fa08-4b90-96bb-310cace03847/meenakshi-amman-temple-india.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover scale-160 -translate-y-[6px]"
          alt="Meenakshi Temple" />
      </div>
    ),
  },
  {
    title: "Badrinath Temple (Uttarakhand)",
    description:
      "Nestled in the Garhwal Himalayas at an elevation of 3,300 meters, Badrinath Temple is one of the holiest Hindu temples dedicated to Lord Vishnu. As part of the Char Dham Yatra, it holds immense religious significance. According to legend, the temple was originally established by Adi Shankaracharya in the 8th century to promote spiritual unity. The temple's vivid facade and backdrop of snow-clad mountains create a surreal setting. Due to harsh winters, the temple is accessible only for six months a year, with rituals and festivals like the Badri-Kedar festival marking its vibrant culture and devotion.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white text-center">
        <img
          src="https://www.chardham-pilgrimage-tour.com/assets/images/badrinath-banner3.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover scale-160 -translate-y-[6px]"
          alt="Badrinath Temple" />
      </div>
    ),
  },
  {
    title: "Jagannath Temple (Puri, Odisha)",
    description:
      "Built in the 12th century by King Anantavarman Chodaganga Deva, the Jagannath Temple in Puri is revered as part of the Char Dham pilgrimage. Dedicated to Lord Jagannath (a form of Vishnu), the temple is renowned for its massive wooden deities, which are ceremoniously replaced every 12 to 19 years during Nabakalebara. The temple's towering spire and unique kitchen, which feeds thousands daily, reflect its grandeur and cultural importance. The annual Rath Yatra, where deities are paraded on grand chariots, attracts millions of devotees from across the world.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white text-center">
        <img
          src="https://pujaitems.co.in/cdn/shop/articles/1280px-Shri_Jagannatha_Temple-1024x682_3009d848-c6a6-44d3-9397-7ced3c29b4cf.webp?v=1739957430"
          width={300}
          height={300}
          className="h-full w-full object-cover scale-160 -translate-y-[6px]"
          alt="Jagannath Temple" />
      </div>
    ),
  },
  {
    title: "Somnath Temple (Gujarat)",
    description:
      "The Somnath Temple, situated along the Arabian Sea, is the first among the twelve Jyotirlinga shrines of Lord Shiva. With a history dating back over a thousand years, it has faced destruction and reconstruction numerous times due to invasions. The current structure, built in the Chalukya style in 1951 under the guidance of Sardar Vallabhbhai Patel, symbolizes resilience and faith. Legends say the temple's Shivalinga was originally created by the Moon God (Chandra) himself. Its serene coastal backdrop and divine aura continue to draw devotees, historians, and tourists alike.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white text-center">
        <img
          src="https://static.wixstatic.com/media/3ed1e1_4101fa42a459451ab0b3c42c857e6eff~mv2.jpg/v1/fill/w_980,h_513,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3ed1e1_4101fa42a459451ab0b3c42c857e6eff~mv2.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover scale-160 -translate-y-[6px]"
          alt="Somnath Temple" />
      </div>
    ),
  },
  {
    title: "More Temples Coming Soon...",
    description:
      "Stay tuned as we continue to explore and showcase more of India's rich spiritual heritage. Each temple holds a unique story of devotion, history, and architectural brilliance, waiting to be discovered. New additions will be added regularly to enrich your spiritual journey.",
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4 text-justify">
      <StickyScroll content={content} />
    </div>
  );
}
