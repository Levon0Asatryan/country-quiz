//import { useParams } from "react-router-dom";
import { Country } from "../../utils/types";
import { getRandomQuestion } from "../../utils/getRandomQuestion";
import Header from "../../components/Header/Header";
import "./Question.css";

type Props = {
  first?: boolean;
  countries: Country[];
  setScore: Function;
};

const numberToLetter = ["A", "B", "C", "D"];

const Question = ({ first = false, countries }: Props) => {
  //const params = useParams();
  const question = getRandomQuestion(countries);

  return (
    <div className="flex flex-col items-center justify-center h-95">
      <Header />
      <div className="p-8 min-h-515 w-standart bg-white rounded-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-72 z-10 ">
        {!question.isItCapitalQuestion && (
          <img
            className="mt-8 w-84 border-2 border-answer"
            src={question.flag?.svg}
            alt={question.flag?.alt}
          />
        )}
        <div className="mt-7 font-bold text-2xl leading-9 text-primary">
          {question.text}
        </div>
        <div className="mb-8 mt-8">
          {question.answers.map((answer, id) => (
            <div
              key={id}
              className="w-400 h-14 rounded-xl border-2 border-answer mt-6 flex items-center font-medium text-answer cursor-pointer hover:bg-hover hover:border-hover hover:text-white"
            >
              <div className="ml-4 text-2xl leading-9">
                {numberToLetter[id]}
              </div>
              <div className="ml-9 text-lg">{answer.answer}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
