import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
    {
      videoUrl: "https://www.youtube.com/embed/MWsClPXLApA",
      title: "Introduction to Sikhism",
      description: "Understanding the essence and teachings of Sikh Dharma.",
      information:
        "Sikhism, founded by Guru Nanak in the 15th century, is a monotheistic religion emphasizing devotion to one God, equality, and selfless service. The Guru Granth Sahib is the central scripture, containing teachings of Sikh Gurus and other saints. Sikhism promotes the concept of 'Seva' (selfless service) and 'Naam Simran' (meditation on God's name). The Five Ks (Kesh, Kara, Kanga, Kachera, and Kirpan) symbolize commitment to faith. Gurudwaras serve as places of worship and community service, offering free meals (Langar) to all. Sikhs believe in honest living, humility, and standing against injustice."
    },
    {
      videoUrl: "https://www.youtube.com/embed/Es3UAZwN98M",
      title: "The Significance of Guru Granth Sahib",
      description: "Exploring the divine wisdom of the Sikh scripture.",
      information:
        "The Guru Granth Sahib is the eternal Guru of the Sikhs, containing hymns and teachings of Sikh Gurus and other enlightened saints. It emphasizes devotion, truth, and the oneness of humanity. The scripture teaches that God is formless (Nirankar) and can be realized through meditation and righteous actions. Daily prayers such as Japji Sahib and Anand Sahib guide Sikhs toward spiritual enlightenment. The Guru Granth Sahib is treated with utmost reverence and is read continuously in Gurudwaras (Akhand Path). It rejects rituals and promotes direct connection with God through selfless living and love."
    },
    {
      videoUrl: "https://www.youtube.com/embed/sgnlXdGhWNA",
      title: "The Importance of Seva and Langar",
      description: "Understanding the role of selfless service and community meals in Sikhism.",
      information:
        "Seva (selfless service) is a fundamental principle in Sikhism, promoting humility, equality, and compassion. Sikhs volunteer in Gurudwaras, helping with cooking, cleaning, and assisting those in need. The Langar (community kitchen) serves free meals to people of all backgrounds, symbolizing equality and selflessness. This tradition, started by Guru Nanak, teaches that no one should go hungry. Seva extends beyond Gurudwaras, with Sikhs actively participating in humanitarian efforts worldwide. By serving others without expectation, Sikhs embody the teachings of their Gurus and contribute to the well-being of society."
    }
  ];
  

const VideoSlider2 = () => {
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

export default VideoSlider2;