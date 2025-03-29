import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useScroll, motion } from "framer-motion";
import ShinyText from "./ShinyTexts/ShinyText";

// import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";

import "./PageTwo.css";

// Define a reusable rotating component
function RotatingModel({ children, speed = 0.01 }) {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += speed; // Rotate around Y-axis
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

// Moving Canvas Wrapper
function MovingCanvas({ children, direction = "left", speedFactor = 900 }) {
  const { scrollYProgress } = useScroll();
  const [xPosition, setXPosition] = useState(direction === "left" ? -200 : 200); // Start position

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const moveDistance = latest * speedFactor;
      setXPosition(direction === "left" ? -200 + moveDistance : 200 - moveDistance);
    });

    return () => unsubscribe();
  }, [scrollYProgress, direction, speedFactor]);

  return (
    <motion.div
      style={{
        transform: `translateX(${xPosition}px)`, // Move Canvas
        transition: "transform 0.1s linear",
      }}
    >
      {children}
    </motion.div>
  );
}

// Define the models
function Om() {
  const { scene } = useGLTF("/om_symbol.glb");
  return <primitive object={scene} scale={1.5} />;
}

function Khanda() {
  const { scene } = useGLTF("/khanda.glb");
  return <primitive object={scene} scale={3.5} position={[0, -0.4, 0]} />;
}

function Kuran() {
  const { scene } = useGLTF("/quran.glb");
  return <primitive object={scene} scale={3} />;
}

function Cross() {
  const { scene } = useGLTF("/cross.glb");
  return <primitive object={scene} scale={2.5} />;
}

// Preload models for better performance
useGLTF.preload("/om_symbol.glb");
useGLTF.preload("/khanda.glb");
useGLTF.preload("/quran.glb");
useGLTF.preload("/cross.glb");

export default function PageTwo() {
  return (
    <div data-scroll data-scroll-translate="0 -100" data-scroll-speed="0.9" className="Page2 ">
      
      {/* Background Video */}
      <video autoPlay loop muted playsInline className="background-video">
        <source src="./Assets/background_black.mp4" type="video/mp4" />
      </video>

      <div className="CanvasContainer">

      <video autoPlay loop muted playsInline className="background-video">
        <source src="./Assets/background_black.mp4" type="video/mp4" />
      </video>

        
        {/* Om Symbol (Moves Left to Right) */}
        <MovingCanvas direction="left">
          <div className="om">
            <Canvas camera={{ position: [0, 0, 18], fov: 75 }}>
              <ambientLight intensity={3} />
              <directionalLight position={[0, 5, 10]} intensity={9} />
              <pointLight position={[0, 2, 5]} intensity={1.5} />
              <OrbitControls enableZoom={false} />
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial metalness={1} roughness={0.2} color="gray" />
              <RotatingModel>
                <Om />
              </RotatingModel>
            </Canvas>
          </div>
        </MovingCanvas>

        <ShinyText text="We are followers of an ancient and sacred way of life, deeply rooted in the principles of Dharma (righteousness), Karma (actions and consequences), and Moksha (liberation). Our faith teaches us the importance of devotion, respect for all living beings, and harmony with nature. We celebrate grand festivals like Diwali, Holi, and Navratri, where we come together with joy and devotion. Our sacred texts—the Vedas, Upanishads, and Bhagavad Gita—guide us in our spiritual journey. Temples are not just places of worship but centers of community and culture, where we seek divine blessings and inner peace.
" disabled={false} speed={3} className='custom-class' />


        {/* <TextGenerateEffectDemo/> */}


        {/* Khanda Symbol (Moves Right to Left) */}
        <MovingCanvas direction="right">
          <div className="khanda">
            <Canvas camera={{ position: [0, 0, 1.5], fov: 75 }}>
              <ambientLight intensity={3} />
              <directionalLight position={[0, 5, 10]} intensity={2} />
              <pointLight position={[0, 2, 5]} intensity={1.5} />
              <OrbitControls enableZoom={false} />
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial metalness={9} roughness={0.2} color="gray" />
              <RotatingModel>
                <Khanda />
              </RotatingModel>
            </Canvas>
          </div>
        </MovingCanvas>
        <ShinyText text="We walk the path shown by Guru Nanak and the ten Sikh Gurus, who taught us the values of selfless service (Seva), devotion (Naam Japna), and honest living (Kirat Karni). Our holy scripture, Guru Granth Sahib, is not just a book—it is our eternal Guru, guiding us in every step of life. We believe in equality and stand against injustice, protecting the weak and upholding righteousness. Every Gurdwara is open to all, serving free meals (Langar) to anyone, regardless of caste or faith. Our festivals, such as Gurpurab and Baisakhi, celebrate the spirit of faith, courage, and unity. 
" disabled={false} speed={3} className='custom-class' />

        {/* Kuran Symbol (Moves Left to Right) */}
        <MovingCanvas direction="left">
          <div className="quran">
            <Canvas camera={{ position: [0, 1, 0], fov: 50 }}>
              <ambientLight intensity={3} />
              <directionalLight position={[0, 5, 10]} intensity={2} />
              <pointLight position={[0, 2, 5]} intensity={1.5} />
              <OrbitControls enableZoom={false} />
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial metalness={1} roughness={0.2} color="gray" />
              <RotatingModel>
                <Kuran />
              </RotatingModel>
            </Canvas>
          </div>
        </MovingCanvas>
        <ShinyText text="We live by the teachings of the Holy Quran and the guidance of our beloved Prophet Muhammad (peace be upon him). Our faith is built on five pillars—Shahada (faith), Salah (prayer), Zakat (charity), Sawm (fasting), and Hajj (pilgrimage). Through our daily prayers, we stay connected to Allah, seeking His mercy and blessings. Ramadan is a time of fasting, reflection, and gratitude, while Eid-ul-Fitr and Eid-ul-Adha bring us together in celebration and giving. Brotherhood, humility, and service to humanity define who we are, as we strive to spread peace and kindness in the world.
" disabled={false} speed={3} className='custom-class' />

        {/* Cross Symbol (Moves Right to Left) */}
        <MovingCanvas direction="right">
          <div className="cross">
            <Canvas camera={{ position: [0, 0, 4], fov: 75 }}>
              <ambientLight intensity={3} />
              <directionalLight position={[0, 7, 5]} intensity={69} castShadow />
              <pointLight position={[0, 3, 5]} intensity={14} />
              <OrbitControls enableZoom={false} />
              <sphereGeometry args={[1, 32, 32]} />
              <meshStandardMaterial metalness={5} roughness={0.2} color="gray" />
              <RotatingModel>
                <Cross />
              </RotatingModel>
            </Canvas>
          </div>
        </MovingCanvas>
        <ShinyText text="We follow the path of love, compassion, and forgiveness, as taught by Jesus Christ. The Bible is our guiding light, teaching us to serve others, be kind, and spread peace. Our faith is built on hope, prayer, and trust in God’s plan. Christmas brings the joy of giving, while Easter reminds us of sacrifice and resurrection. We believe in supporting our communities through education, healthcare, and charity. Whether through churches, schools, or hospitals, we strive to help those in need, living by the words of Christ.
" disabled={false} speed={3} className='custom-class' />
      </div>
    </div>
  );
}
