import { Country } from "../../utils/types";
import { getRandomQuestion } from "../../utils/getRandomQuestion";
import Header from "../../components/Header/Header";
import "./Question.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdCheckCircleOutline } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

type Props = {
  questionsLimit: Number;
  countries: Country[];
  setScore: Function;
};

const numberToLetter = ["A", "B", "C", "D"];

const Question = ({ countries, setScore, questionsLimit }: Props) => {
  const navigate = useNavigate();
  const [question, setQuestion] = useState(getRandomQuestion(countries));
  const [clicked, setClicked] = useState(false);
  const [buttonColors, setButtonColors] = useState(["", "", "", ""]);
  const [canIncrease, setCanIncrease] = useState(true);
  const [questionsCaunt, setQuestionCaunt] = useState(1);

  useEffect(() => {
    setQuestion(getRandomQuestion(countries));
  }, [countries]);

  const buttonClick = (id: number, isRight: boolean) => {
    if (!clicked) {
      if (isRight) {
        canIncrease && setScore((prev: number) => prev + 1);

        setButtonColors((prevColors) => ({
          ...prevColors,
          [id]: " bg-green",
        }));

        setClicked(true);
      } else {
        setCanIncrease(false);

        setButtonColors((prevColors) => ({
          ...prevColors,
          [id]: " bg-red",
        }));
      }
    }
  };

  const getCollor = (id: number) => {
    if (buttonColors[id]) {
      return buttonColors[id];
    } else if (clicked) {
      return "hover:bg-white disabled:hover:border-hover hover:text-answer";
    } else {
      return "hover:bg-hover hover:border-hover hover:text-white";
    }
  };

  const nextQuestion = () => {
    if (questionsCaunt === questionsLimit) {
      navigate("/result");
    }
    setQuestionCaunt((prev) => prev + 1);
    setClicked(false);
    setButtonColors(["", "", "", ""]);
    setCanIncrease(true);
    setQuestion(getRandomQuestion(countries));
  };

  return (
    <div className="flex flex-col items-center justify-center h-90 md:h-95">
      <Header />
      <div className="p-8 min-h-515 w-96 md:w-standart bg-white rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-72 z-10 ">
        {!question.isItCapitalQuestion && (
          <img
            className="mt-8 w-84 border-2 border-answer"
            src={question.flag?.svg}
            alt={question.flag?.alt}
          />
        )}
        <div className="mt-7 font-bold text-2xl leading-9 text-primary select-none">
          {question.text}
        </div>
        <div className="mb-8 mt-8">
          {question.answers.map((answer, id) => (
            <div
              key={id}
              className={` w-80 md:w-400 h-14 rounded-xl border-2 border-answer mt-6
              flex items-center font-medium justify-between select-none
            text-answer cursor-pointer 
              ${getCollor(id)} `}
              onClick={() => {
                buttonClick(id, answer.isItRight);
              }}
            >
              <div className="flex items-center ">
                <div className="ml-4 text-2xl leading-9">
                  {numberToLetter[id]}
                </div>
                <div className="ml-9 text-lg ">{answer.answer}</div>
              </div>
              <div className="mr-4">
                {buttonColors[id] ? (
                  buttonColors[id] === " bg-green" ? (
                    <MdCheckCircleOutline size={20} />
                  ) : (
                    <MdOutlineCancel size={20} />
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
        {clicked && (
          <div className="flex justify-between">
            <div></div>
            <div
              className="h-14 w-116 bg-hover flex justify-center items-center text-white rounded-xl text-lg text-bold cursor-pointer"
              onClick={nextQuestion}
            >
              Next
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Question;
