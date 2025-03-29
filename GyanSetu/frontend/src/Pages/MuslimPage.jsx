import React, { useEffect } from 'react';
import SidebarDemo from '../Components/sidebar/Sidebar.jsx';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MuslimParalax from '../Components/MuslimPageComponents/MuslimParalax.jsx';
import News from "./News.jsx";
import VideoSlider from "../Components/MuslimPageComponents/VideoSlider4.jsx";
import GradientText from '../Components/Bhagwatgita/GradientText.jsx';
import ScrollVelocity from '../Components/MainPageComponents/ScrollVelocity.jsx';
import TimeLineDemo4 from "../Components/MuslimPageComponents/TimeLineDemo4.jsx"
// Import Dropdown
import AnimatedDropdown from '../Components/MainPageComponents/dropdown.jsx';

function MuslimPage() {

  useEffect(() => {
    // Botpress Script injection
    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = "https://files.bpcontent.cloud/2025/03/06/05/20250306054305-B3UE1L4Z.js";
    script2.async = true;
    document.body.appendChild(script2);

    // Cleanup
    return () => {
      if (script1.parentNode) document.body.removeChild(script1);
      if (script2.parentNode) document.body.removeChild(script2);
    };
  }, []);

  return (
    <div>
      <div className="z-[60] pt-2 flex flex-row relative justify-between w-full items-center">
        <GradientText
          colors={["#006400", "#8B4513", "#228B22", "#A0522D", "#006400"]} // Muslim green and brown shades
          animationSpeed={4.5}
          showBorder={false}
          className="custom-class pl-70"
        >
          <a href="https://www.alim.org/quran/"
            target="_blank"
            rel="noopener noreferrer"
            className="pl-20">
            Quran
          </a>
        </GradientText>

        {/* Dropdown beside Quran */}
        {/* <div className="pl-10">
          <AnimatedDropdown />
        </div> */}

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

      <MuslimParalax />
      <News />

      <ScrollVelocity
        texts={['السلام عليكم', 'اللہ اللہ اللہ']}
        velocity={70}
        className="custom-scroll-text"
        color="green"
      />
    <TimeLineDemo4/>
    </div>
  );
}

export default MuslimPage;
