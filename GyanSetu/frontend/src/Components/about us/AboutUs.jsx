import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";
import { Link , useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div>
    <span className="translate-x-[51px] translate-y-[38px] flex flex-row"><ArrowBackIcon color="primary" fontSize="medium" />
    &nbsp;<p onClick={()=>navigate("/")} className=" text-blue-500">Go back</p></span>
    <section className="aboutus-bg-orange-200 aboutus-min-h-screen aboutus-flex aboutus-flex-col aboutus-items-center aboutus-py-12 aboutus-px-6">
      {/* Heading */}

      <motion.h1
        className="aboutus-text-5xl aboutus-font-bold aboutus-text-gray-800 aboutus-mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>

      {/* Description */}
      <motion.p
        className="aboutus-text-lg aboutus-max-w-4xl aboutus-text-gray-700 aboutus-text-center aboutus-mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        Welcome to <strong>GyanSetu</strong>, a platform dedicated to preserving and sharing
        the rich literary heritage of the world’s most ancient and revered traditions — Hindu, Sikh,
        Muslim, and Christian. Our mission is to honor the wisdom passed down through generations
        by making these timeless texts accessible to all.
      </motion.p>
      <hr className="aboutus-w-full aboutus-mb-8" />

      {/* Image Row with Left-to-Right Transition */}
      <motion.div 
        className="aboutus-flex aboutus-flex-row aboutus-justify-center aboutus-items-center aboutus-gap-6 aboutus-overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1, staggerChildren: 0.2 }}
      >
        {[  
          { src: "src/assets/bhagwatgita.jpeg", alt: "Bhagwat Geeta" },
          { src: "src/assets/kuran.jpeg", alt: "Quran" },
          { src: "src/assets/sikh.jpeg", alt: "Shabad Guru" },
          { src: "src/assets/bible.jpeg", alt: "Bible" }
        ].map((image, index) => (
          <motion.img
            key={index}
            src={image.src}
            alt={image.alt}
            className="aboutus-img w-40 md:w-56 rounded-lg shadow-lg"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
          />
        ))}
      </motion.div>

      <hr className="aboutus-w-full aboutus-mt-10 aboutus-mb-8" />

      {/* What We Offer */}
      <motion.div
        className="aboutus-text-centered aboutus-text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        <h2 className="aboutus-text-3xl aboutus-font-semibold aboutus-mb-4">What We Offer!</h2>
        
        <p className="aboutus-text-lg aboutus-text-gray-600 aboutus-max-w-3xl">
          Our platform provides various services that cater to the spiritual and
          intellectual needs of our diverse audience. From an e-commerce store to a cultural chatbot,
          we offer a variety of features to help you engage with ancient texts and teachings in a modern context.
        </p>
      </motion.div>

      {/* Offer Cards - Centered Below */}
      <motion.div
        className="aboutus-offer-container aboutus-grid aboutus-grid-cols-1 aboutus-gap-6 aboutus-mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        {[  
          { title: "E-Commerce Store", desc: "A curated collection of rare and ancient books for purchase." },
          { title: "Calendar of Events", desc: "Stay updated with significant religious and cultural events." },
          { title: "Cultural Chatbot", desc: "Engage with an AI chatbot powered by sacred teachings." },
          { title: "Information on Religious Places", desc: "Explore the history, significance, and events of sacred sites around the world." },  
          { title: "AI-Powered Legends", desc: "Uncover and preserve ancient myths and scriptures with AI-driven insights." },            
          { title: "Online Resources", desc: "Explore digitized ancient scriptures and teachings." }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="aboutus-offer-card aboutus-w-full aboutus-max-w-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="aboutus-text-xl aboutus-font-bold aboutus-mt-2">{item.title}</h4>
            <p className="aboutus-text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Vision Section */}
      <motion.div
        className="aboutus-max-w-4xl aboutus-text-center aboutus-mt-16 aboutus-p-8 aboutus-bg-gradient-to-r from-orange-200 to-orange-400 aboutus-text-white aboutus-rounded-xl aboutus-shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2 }}
      >
        <h3 className="aboutus-text-3xl aboutus-font-semibold aboutus-mb-4">Our Vision</h3>
        <p className="aboutus-text-lg aboutus-leading-relaxed">
          We are more than just a website — <span className="aboutus-font-bold">we are a movement</span> to safeguard
          the heritage of the world’s great religions. By making these books and teachings available online,
          we hope to foster a <span className="aboutus-font-bold">greater appreciation</span> of our shared human history.
        </p>
        <p className="aboutus-footer aboutus-text-xl aboutus-font-semibold aboutus-mt-4">Join us in preserving these invaluable treasures for the future.</p>
      </motion.div>
    </section>
    </div>
  );
};

export default AboutUs;
