import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  icon: string;
};

const BottomNavbarItem = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 ">
      <div className="w-8 h-8">
        <Image
          src={props.icon}
          alt={props.name}
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
      <span className="font-pacifico text-whitecolor text-xs">
        {props.name}
      </span>
    </div>
  );
};

export default BottomNavbarItem;
