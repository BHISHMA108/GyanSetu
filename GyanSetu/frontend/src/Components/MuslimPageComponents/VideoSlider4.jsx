import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
    {
      videoUrl: "https://www.youtube.com/embed/Qtz4NGzpOco",
      title: "Introduction to Islam",
      description: "Understanding the essence and teachings of Islam.",
      information:
        "Islam is a monotheistic religion founded on the teachings of Prophet Muhammad (peace be upon him) and the divine revelations in the Quran. It emphasizes submission to one God (Allah) and following His guidance. The Five Pillars of Islam—Shahada (faith), Salah (prayer), Zakat (charity), Sawm (fasting), and Hajj (pilgrimage)—form the foundation of Islamic practice. The Quran and Hadith provide spiritual and moral guidance. Islam promotes peace, justice, and compassion. Mosques serve as places of worship and community gatherings. The concept of Tawheed (oneness of God) is central to Islamic belief."
    },
    {
      videoUrl: "https://www.youtube.com/embed/PSTho53GZU4",
      title: "The Significance of the Quran",
      description: "Exploring the divine wisdom of the Holy Quran.",
      information:
        "The Quran is the holy book of Islam, believed to be the word of God as revealed to Prophet Muhammad (peace be upon him) through Angel Jibreel (Gabriel). It provides guidance on all aspects of life, including faith, morality, law, and social justice. Muslims recite and memorize the Quran as an act of devotion. The Quran emphasizes worshiping Allah alone, performing good deeds, and seeking knowledge. It is written in Arabic and remains unchanged since its revelation. Tafsir (interpretation) helps believers understand its deeper meanings and apply its teachings in daily life."
    },
    {
      videoUrl: "https://www.youtube.com/embed/j0xitQtLljg",
      title: "The Importance of Prayer in Islam",
      description: "Understanding the role of Salah in Muslim life.",
      information:
        "Salah (prayer) is one of the Five Pillars of Islam and is performed five times a day at prescribed times. It is a direct link between Muslims and Allah, fostering discipline and spiritual connection. Prayers include recitation of Quranic verses and supplications (Dua). The Friday congregational prayer (Jumu’ah) holds special significance. Prayers are performed facing the Kaaba in Mecca. Wudu (ablution) is required before prayer, ensuring physical and spiritual purity. Salah strengthens faith, brings inner peace, and reminds Muslims of their purpose in life."
    }
  ];
  
  

const VideoSlider4 = () => {
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

export default VideoSlider4;