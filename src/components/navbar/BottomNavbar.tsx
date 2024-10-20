import React from "react";
import BottomNavbarItem from "./BottomNavbarItem";

const BottomNavbar = () => {
  const links = [
    {
      name: "Home",
      icon: "/home.svg",
    },
    {
      name: "About",
      icon: "/about.svg",
    },
    {
      name: "Steps",
      icon: "/steps.svg",
    },
    {
      name: "Testimonial",
      icon: "/testimonial.svg",
    },
  ];

  return (
    <div className="z-50 w-full fixed h-20 bottom-0 rounded-t-[56px] bg-gradient-to-t from-firstcolormedium to-firstcolorlight mobile hidden max-md:flex justify-center items-center">
      <div className=" w-10/12 h-10/12 flex justify-center items-center gap-9">
        {links.map((link, index) => (
          <BottomNavbarItem key={index} name={link.name} icon={link.icon}  />
        ))}
      </div>
    </div>
  );
};

export default BottomNavbar;
