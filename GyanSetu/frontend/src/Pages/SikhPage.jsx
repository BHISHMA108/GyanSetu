import React, { useEffect } from 'react';
import SidebarDemo from '../Components/sidebar/Sidebar.jsx';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Ecommerce from "../Components/MainPageComponents/HeroParallaxDemo.jsx"
import Sikh from "../Components/SikhPageComponents/SikhParalax.jsx"
import News from "./News.jsx"
import MusicCardContainer from "../Components/MainPageComponents/MusicCardContainer.jsx"
import VideoSlider from "../Components/SikhPageComponents/VideoSlider2.jsx"
import { ReligionSelector } from '../Components/MainPageComponents/ReligionSelector.jsx';
import GradientText from '../Components/Bhagwatgita/GradientText.jsx';
import ScrollVelocity from '../Components/MainPageComponents/ScrollVelocity.jsx';
import CristianParallax from '../Components/CristianPageComponents/ChristianParalax.jsx';
import SikhParalax from '../Components/SikhPageComponents/SikhParalax.jsx';
import TimeLineDemo2 from "../Components/SikhPageComponents/TimeLineDemo2.jsx"

// 👇 Import AnimatedDropdown
import AnimatedDropdown from '../Components/MainPageComponents/dropdown.jsx';

function MuslimPage() {

  useEffect(() => {
    // Inject Botpress Webchat script dynamically
    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://files.bpcontent.cloud/2025/03/06/05/20250306054305-B3UE1L4Z.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      if (script1.parentNode) document.body.removeChild(script1);
      if (script2.parentNode) document.body.removeChild(script2);
    };
  }, []);

  return (
    <div>
      <div className="z-[60] pt-2 flex flex-row relative justify-between w-full">
        <h2> </h2>

        <div className="flex flex-row items-center pl-90">
          <GradientText
            colors={["#FFA500", "#002366", "#FFFFFF", "#FFA500", "#002366"]}
            animationSpeed={4.5}
            showBorder={false}
            className="custom-class"
          >
            <a href="https://www.searchgurbani.com/guru-granth-sahib/ang-by-ang"
              target="_blank"
              >
              GuruGranth Sahib
            </a>
          </GradientText>

          {/* 👇 AnimatedDropdown beside the GradientText */}
          {/* <div className="ml-4">
            <AnimatedDropdown />
          </div> */}
        </div>

        <div className="pr-4 gap-2 icons flex flex-row-reverse">
          <ShoppingCartIcon className="text-blue-500" fontSize="large" />
          <FavoriteIcon className="text-red-600" fontSize="large" />
          <div>        <AnimatedDropdown />
          </div>
        </div>
      </div>

      <div className="flex h-full w-screen">
        {/* Sidebar */}
        <div className="z-[100]">
          <SidebarDemo />
        </div>

        {/* Image Slider */}
        <div className="flex-1 relative z-[50] w-1/2">
          <VideoSlider />
        </div>
      </div>

      <Sikh />
      <News />

      <ScrollVelocity
        texts={['ਸਤਿਨਾਮ ਵਾਹਿਗੁਰੂ', 'ੴ ਇਕ ਓਅੰਕਾਰ']}
        velocity={70}
        className="custom-scroll-text"
        color='Gold'
      />
      {/* You can uncomment MusicCardContainer if needed */}
      {/* <MusicCardContainer /> */}
      <TimeLineDemo2/>
    </div>
  );
}

export default MuslimPage;
