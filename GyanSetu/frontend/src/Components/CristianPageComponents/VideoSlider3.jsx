import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
    {
      videoUrl: "https://www.youtube.com/embed/G7dROlU0pmk",
      title: "Introduction to Christianity",
      description: "Understanding the essence and teachings of Christianity.",
      information:
        "Christianity, founded on the teachings of Jesus Christ, is one of the world's largest religions. It emphasizes faith in God, love, and salvation through Jesus. The Bible, comprising the Old and New Testaments, is the sacred scripture of Christians. Jesus' teachings focus on compassion, forgiveness, and service to others. The core belief is that Jesus is the Son of God and the Savior of humanity. Christian practices include prayer, worship, and sacraments like baptism and communion. Churches serve as places of worship and community gathering. Love for God and neighbor is a fundamental principle of Christian life."
    },
    {
      videoUrl: "https://www.youtube.com/embed/5yZLFmVHfaw",
      title: "The Significance of the Bible",
      description: "Exploring the divine wisdom of the Holy Bible.",
      information:
        "The Bible is the central scripture of Christianity, divided into the Old Testament (shared with Judaism) and the New Testament. It contains historical accounts, teachings, prophecies, and moral guidance. The New Testament focuses on the life, death, and resurrection of Jesus Christ, offering a message of hope and redemption. Christians believe the Bible is divinely inspired and provides wisdom for daily living. Key teachings include the Ten Commandments, the Beatitudes, and the Lord’s Prayer. Many Christian traditions involve Bible study, emphasizing its role in guiding faith and personal growth."
    },
    {
      videoUrl: "https://www.youtube.com/embed/uULY8AB9SSk",
      title: "The Importance of Prayer and Worship",
      description: "Understanding the role of prayer and worship in Christian life.",
      information:
        "Prayer is a vital part of Christianity, serving as a means of communicating with God. Christians pray individually and in groups, seeking guidance, expressing gratitude, and strengthening their faith. Worship services, held in churches, include singing hymns, reading scripture, and sermons that inspire spiritual growth. The Lord's Prayer, taught by Jesus, is one of the most well-known prayers. Sacraments like Baptism and the Eucharist (Holy Communion) hold deep spiritual significance. Worship unites believers, reinforcing their connection with God and fostering a sense of community."
    }
  ];
  

const VideoSlider3 = () => {
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

export default VideoSlider3;