import React from "react";
import logo1 from "../../assets/images/undraw_adventure.svg";

type Props = {
  disableIcon?: boolean;
};

const Header = ({ disableIcon = false }: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-96 z-20">
      <div className="flex w-standart justify-between items-center mt-6 h-116  ">
        <div className="ml-0.5  font-bold text-4xl leading-11 text-gray95 mb-8">
          COUNTRY QUIZ
        </div>
        {!disableIcon && (
          <img className=" h-116 w-162 z-20" src={logo1} alt="adventure" />
        )}
      </div>
    </div>
  );
};

export default Header;
