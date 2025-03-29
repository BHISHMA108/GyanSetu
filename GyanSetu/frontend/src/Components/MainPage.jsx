import { useEffect } from "react";
import SidebarDemo from "../Components/sidebar/Sidebar.jsx";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Ecommerce from "./MainPageComponents/HeroParallaxDemo.jsx";
import MusicCardContainer from "./MainPageComponents/MusicCardContainer.jsx";
import GradientText from "./Bhagwatgita/GradientText.jsx";
import VideoSlider from "../Components/MainPageComponents/VideoSlider.jsx";
import ScrollVelocity from "./MainPageComponents/ScrollVelocity.jsx";
import TimeLineDemo from "./Timeline/TimeLineDemo.jsx";
import News from "../Pages/News.jsx";
import AnimatedDropdown from "./MainPageComponents/dropdown.jsx"; // Import dropdown


function MainPage() {
  console.log("MainPage component loaded!");

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src =
      "https://files.bpcontent.cloud/2025/03/06/05/20250306054305-B3UE1L4Z.js";
    script2.async = true;
    document.body.appendChild(script2);

    return () => {
      if (script1.parentNode) document.body.removeChild(script1);
      if (script2.parentNode) document.body.removeChild(script2);
    };
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="z-[60] pt-2 flex flex-row relative justify-between w-full items-center">
  {/* BhagwatGita Link + Dropdown */}
  <div className="flex flex-row items-center pl-150">
    <a
      href="https://bhagavadgita.io/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <GradientText
        colors={["#ffba08", "#d00000", "#ffba08", "#d00000", "#ffba08"]}
        animationSpeed={4.5}
        showBorder={false}
        style={{
          fontFamily: "'Cinzel Decorative', serif",
        }}
      >
        BhagwatGita
      </GradientText>
    </a>

    {/* Animated Dropdown exactly like SikhPage */}
  </div>
  
        {/* Icons */}


        <div className="pr-4 gap-2 icons flex flex-row-reverse">
          <ShoppingCartIcon className="text-blue-500" fontSize="large" />
          <FavoriteIcon className="text-red-600" fontSize="large" />
          <div>        <AnimatedDropdown />
          </div>
        </div>
      </div>

      {/* Main Content */}
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

      <Ecommerce />
      <News />

      <ScrollVelocity
        texts={["ॐ नमः शिवाय", "राम राम राम"]}
        velocity={70}
        className="custom-scroll-text"
        color="orange-red"
      />
      <MusicCardContainer />
      <TimeLineDemo />
    </div>
  );
}

export default MainPage;
