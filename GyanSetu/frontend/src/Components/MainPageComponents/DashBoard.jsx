// import { FocusCards } from "../ui/focus-cards";

// const DashBoard = ()=>{
//   const cards = [
//     {
//       title: "Hanuman-chalisa",
//       src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Talk to God",
//       src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Podcast",
//       src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Community",
//       src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Quiz",
//       src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Temples",
//       src: "https://assets.aceternity.com/the-first-rule.png",
//     },
//     {
//         title: "Myth",
//         src: "https://assets.aceternity.com/the-first-rule.png",
//       },
//       {
//         title: "Stories",
//         src: "https://assets.aceternity.com/the-first-rule.png",
//       },
//       {
//         title: "Temples",
//         src: "https://assets.aceternity.com/the-first-rule.png",
//       },
//   ];

//   return <FocusCards cards={cards} />;
// }

// export default DashBoard;

// import React from 'react';
// import {
//   Book,
//   Headphones,
//   Building2,
//   Brain,
//   MessageCircle,
//   Music,
//   Podcast,
//   ScrollText,
//   History
// } from 'lucide-react';

// const features = [
//   {
//     icon: <MessageCircle size={24} />,
//     title: 'Talk to God',
//     description: 'Connect spiritually through guided meditation and prayer',
//     color: 'bg-indigo-500',
//     gradient: 'from-indigo-500 to-indigo-600',
//   },
//   {
//     icon: <Music size={24} />,
//     title: 'Sacred Music',
//     description: 'Listen to spiritual songs and devotional music',
//     color: 'bg-rose-500',
//     gradient: 'from-rose-500 to-rose-600',
//   },
// {
//   icon: <Podcast size={24} />,
//   title: 'Spiritual Podcasts',
//   description: 'Listen to enlightening discussions and teachings',
//   color: 'bg-purple-500',
//   gradient: 'from-purple-500 to-purple-600',
// },
// {
//   icon: <Building2 size={24} />,
//   title: 'Sacred Places',
//   description: 'Discover temples and holy sites near you',
//   color: 'bg-emerald-500',
//   gradient: 'from-emerald-500 to-emerald-600',
// },
// {
//   icon: <Book size={24} />,
//   title: 'Sacred Texts',
//   description: 'Read and learn from religious scriptures',
//   color: 'bg-amber-500',
//   gradient: 'from-amber-500 to-amber-600',
// },
// {
//   icon: <History size={24} />,
//   title: 'Myths & Stories',
//   description: 'Explore ancient myths and spiritual stories',
//   color: 'bg-cyan-500',
//   gradient: 'from-cyan-500 to-cyan-600',
// },
// {
//   icon: <ScrollText size={24} />,
//   title: 'Daily Wisdom',
//   description: 'Receive daily spiritual quotes and teachings',
//   color: 'bg-teal-500',
//   gradient: 'from-teal-500 to-teal-600',
// },
// {
//   icon: <Brain size={24} />,
//   title: 'Spiritual Quiz',
//   description: 'Test your knowledge of religious teachings',
//   color: 'bg-fuchsia-500',
//   gradient: 'from-fuchsia-500 to-fuchsia-600',
// },
// ];

// const Dashboard = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <header className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-gray-900 mb-4">
//             Your Spiritual Journey
//           </h1>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Explore sacred wisdom, connect with divine energy, and deepen your spiritual practice
//             through our comprehensive collection of resources.
//           </p>
//         </header>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
//             >
//               <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
//               <div className={`${feature.color} p-6 flex items-center justify-center text-white relative z-10`}>
//                 <div className="transform group-hover:scale-110 transition-transform duration-300">
//                   {feature.icon}
//                 </div>
//               </div>
//               <div className="p-6 relative z-10">
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
//                   {feature.description}
//                 </p>
//                 <button className="mt-4 w-full px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300 group-hover:bg-opacity-10 group-hover:text-white group-hover:border-white">
//                   Explore
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <p className="text-gray-600">
//             Start your spiritual journey today and discover the path to inner peace.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

import React from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
  Book,
  Headphones,
  Building2,
  Brain,
  MessageCircle,
  Podcast,
  ScrollText,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { path } from "framer-motion/client";

const features = [
  {
    icon: <MessageCircle size={24} />,
    path: "/talk-to-god",
    title: "Talk to God",
    description: "Connect spiritually through guided meditation and prayer",
    color: "bg-indigo-500",
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    icon: <ScrollText size={24} />,
    path: "/hanuman-chalisa",
    title: "Hanuman Chalisa",
    description: "Read the powerful Hanuman Chalisa for strength & devotion",
    color: "bg-orange-500",
    gradient: "from-orange-500 to-orange-600",
  },
  // Add Path to this part

  {
    icon: <Podcast size={24} />,

    title: "Spiritual Podcasts",
    path: "/spiritual-podcast",
    description: "Listen to enlightening discussions and teachings",
    color: "bg-purple-500",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: <Building2 size={24} />,
    title: "AI-Powered Legends",
    path: "/story",
    description: "Uncover and relive historic tales with AI-generated narratives.",
    color: "bg-emerald-500",
    gradient: "from-emerald-500 to-emerald-600",
  },
  
  // {
  //   icon: <Book size={24} />,
  //   title: "Epics and Purans",
  //   description: "Read and learn from religious scriptures",
  //   color: "bg-amber-500",
  //   gradient: "from-amber-500 to-amber-600",
  // },
  // {
  //   icon: <History size={24} />,
  //   title: "Myths & Stories",
  //   description: "Explore ancient myths and spiritual stories",
  //   color: "bg-cyan-500",
  //   gradient: "from-cyan-500 to-cyan-600",
  // },
  {
    icon: <ScrollText size={24} />,
    title: "Know About Temple",
    path: "/StickyScrollRevealDemo",
    description: "Discover temples and holy sites near you",
    color: "bg-teal-500",
    gradient: "from-teal-500 to-teal-600",
  },
  {
    icon: <Brain size={24} />,
    title: "Spiritual Quiz",
    path: "/quiz",
    description: "Test your knowledge of religious teachings",
    color: "bg-fuchsia-500",
    gradient: "from-fuchsia-500 to-fuchsia-600",
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
    <span className="translate-x-[51px] translate-y-[38px] flex flex-row"><ArrowBackIcon color="primary" fontSize="medium" />
    &nbsp;<p onClick={()=>navigate("/main")} className=" text-blue-500">Go back</p></span>
    <div className=" min-h-screen  bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="bg-black max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="text-center mb-16">
          <h1 className="text-8xl font-bold text-white-900 mb-4">
            Your Spiritual Journey
          </h1>
          <p className="text-xl text-blue-400 max-w-2xl mx-auto">
            Explore sacred wisdom, connect with divine energy, and deepen your
            spiritual practice.
          </p>
        </header>

        <div className="grid bg-black grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.path}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <div
                className={`${feature.color} p-6 flex items-center justify-center text-white relative z-10`}
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <div className="p-6 relative z-10">
                <p className="text-gray-600 group-hover:text-gray-100 transition-colors duration-300">
                  {feature.description}
                </p>
                <button className="mt-4 w-full px-4 py-2 bg-white text-gray-900 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-300 group-hover:bg-opacity-10 group-hover:text-orange group-hover:border-white">
                  Explore
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
