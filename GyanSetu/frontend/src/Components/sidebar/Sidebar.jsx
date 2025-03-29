// src/components/SidebarDemo.jsx
import React, { useState } from "react";
import { Sidebar, SidebarBody } from "./MainSidebar.jsx" // Import from SidebarComponents file
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";

import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const SidebarDemo = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    console.log("Logging out...");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleNavigation = (route) => {
    navigate(route);
  };

  const links = [
    {
      label: "Profile",
      icon: <IconUserBolt className="h-5 w-5 shrink-0" />,
      route: "/profile",
    },
    {
      label: "Dashboard",
      icon: <IconBrandTabler className="h-5 w-5 shrink-0" />,
      route: "/dashboard",
    },
    {
      label: "AI-Story",
      icon: <AutoFixHighIcon className="h-5 w-5 shrink-0" />,
      route: "/story",
    },
    {
      label: "Settings",
      icon: <IconSettings className="h-5 w-5 shrink-0" />,
      route: "/future",
    },

    // {
    //   label: "Talk to God",
    //   icon: <IconSettings className="h-5 w-5 shrink-0" />,
    //   route: "/future",
    // },
  ];

  return (
    <>
      <Sidebar className="fixed top-0 left-0 w-1/2 h-full z-[100]" open={open} setOpen={setOpen}>
        <SidebarBody className="-translate-y-10 justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="flex flex-col gap-2">
              {links.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavigation(link.route)}
                  className="flex mt-2 items-center gap-2 text-neutral-700 dark:text-neutral-200 hover:text-blue-500 transition-all p-1 rounded-md"
                >
                  {link.icon}
                  {link.label}
                </button>
              ))}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-neutral-700 dark:text-neutral-200 hover:text-red-500 transition-all p-2 rounded-md"
              >
                <IconArrowLeft className="h-5 w-5 shrink-0" />
                Logout
              </button>
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </>
  );
};

export const Logo = () => {
  return (
    <Link to="#" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20">
<div
  className="h-[70px] w-[70px] translate-x-[2px]"
  style={{ backgroundImage: 'url("/gyansetu.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}
/>
      
      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium text-orange-400 text-3xl dark:text-orange-700 whitespace-pre">
        GyanSetu
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link to="#" className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20 ">
<div
  className="ml-1 h-9 w-9 bg-black dark:bg-transparent"
  style={{
    backgroundImage: 'url("/gyansetu.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
/>
    </Link>
  );
};

export default SidebarDemo;
