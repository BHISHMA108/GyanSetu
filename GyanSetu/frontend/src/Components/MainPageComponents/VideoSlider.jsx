import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    videoUrl: "https://www.youtube.com/embed/czN0fzK1LVI",
    title: "Introduction to Hindu Dharma",
    description: "Understanding the essence and teachings of Hinduism.",
    information:
      "Hindu Dharma, one of the world's oldest religions, is more than just a belief system; it is a way of life. Rooted in the Vedas, it encompasses diverse philosophies, rituals, and traditions. The concept of Dharma (righteousness) guides individuals in their duties. Karma and rebirth are central beliefs, emphasizing the consequences of actions. Hinduism promotes self-realization through Bhakti (devotion), Jnana (knowledge), and Karma (action). The Upanishads and Bhagavad Gita provide profound spiritual insights. Temples and festivals play a crucial role in preserving traditions. Yoga and meditation are integral for mental and physical well-being. Respect for all living beings is a fundamental principle."
  },
  {
    videoUrl: "https://www.youtube.com/embed/XflN-pemBD0",
    title: "The Significance of Bhagavad Gita",
    description: "Exploring the timeless wisdom of the Bhagavad Gita.",
    information:
      "The Bhagavad Gita, part of the Mahabharata, is a sacred scripture of Hindu Dharma. It is a dialogue between Lord Krishna and Arjuna, offering guidance on duty, righteousness, and devotion. The Gita emphasizes selfless action (Karma Yoga), devotion (Bhakti Yoga), and knowledge (Jnana Yoga). It teaches that one must perform their duty without attachment to the results. Krishna reveals his divine form to Arjuna, demonstrating the omnipresence of the Supreme Being. The Gita provides solutions to dilemmas in life, guiding one toward inner peace and self-realization. It is revered by seekers worldwide for its spiritual wisdom."
  },
  {
    videoUrl: "https://www.youtube.com/embed/6BhDqy0bjl4",
    title: "The Importance of Vedic Rituals",
    description: "Understanding the role and significance of Vedic rituals in Hindu Dharma.",
    information:
      "Vedic rituals are an essential part of Hindu traditions, dating back thousands of years. They include yajnas (fire sacrifices), pujas (worship ceremonies), and mantra chanting. These rituals are performed to seek blessings from deities, purify the environment, and enhance spiritual progress. The Vedas, particularly the Rigveda, Samaveda, Yajurveda, and Atharvaveda, provide instructions for these sacred rites. Rituals like havan invoke divine energies and create a positive aura. They foster discipline, devotion, and a sense of community. Many festivals, such as Diwali and Navaratri, are deeply rooted in Vedic traditions. Rituals also serve as a means of connecting with the cosmic forces."
  }
];

const VideoSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-black relative">
      <div className="w-[85%] scale-100">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex flex-row justify-between items-start bg-black p-10 rounded-lg shadow-lg"
            >
              <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8">
                {/* Video Section */}
                <div className="w-full md:w-1/2 flex flex-col items-center">
                  <iframe
                    className="w-full h-[320px] rounded-lg shadow-md"
                    src={slide.videoUrl}
                    title={slide.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>

                  {/* Text Below Video */}
                  <div className="text-left mt-4">
                    <h2 className="text-4xl font-bold text-white mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-md text-gray-300">{slide.description}</p>
                  </div>
                </div>

                {/* Info Section aligned to top */}
                <div className="w-full md:w-1/2 flex flex-col text-left">
  <p className="text-base md:text-lg text-gray-200 leading-relaxed">
    {slide.information}
  </p>
</div>

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoSlider;
