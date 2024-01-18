import React from "react";
import Header from "../../components/Header/Header";
import icon from "../../assets/images/undraw_winners.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  score: number;
  setScore: Function;
};

const Result = ({ setScore, score }: Props) => {
  const navigate = useNavigate();

  const tryAgain = () => {
    setScore(0);
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-95 select-none">
      <Header disableIcon />
      <div className="p-8 min-h-515 w-96 md:w-standart bg-white rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-72 z-10 ">
        <div className="flex flex-col items-center h-full w-ful">
          <img src={icon} alt="Winner" />
          <div className="mt-16 font-bold leading-11 text-blue text-5xl h-20 flex justify-center items-center">
            Results
          </div>
          <div className=" font-normal leading-11 text-lg text-blue h-14 flex justify-center items-center">
            You got
            <span className="text-green font-bold text-4xl ml-1 mr-1">
              {score}
            </span>
            correct answers
          </div>
          <div
            className="cursor-pointer mt-16 w-52 h-16 border-2 border-blue flex justify-center items-center font-semibold text-lg text-blue rounded-xl"
            onClick={tryAgain}
          >
            Try again
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
