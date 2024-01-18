import { Answer, Country, Question, questionInitalState } from "./types";

const getNumberFrom0ToN = (N: number) => Math.floor(Math.random() * (N + 1));

const shuffle = (array: Answer[]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export const getRandomQuestion = (countries: Country[]): Question => {
  if (countries.length > 1) {
    const length = countries.length;
    const mainCountryId = getNumberFrom0ToN(length);
    const mainCountry = countries[mainCountryId];

    const additionalCountries: Country[] = [];
    let additionalCountyId = getNumberFrom0ToN(length);

    while (additionalCountries.length < 3) {
      if (mainCountryId !== additionalCountyId)
        additionalCountries.push(countries[additionalCountyId]);
      additionalCountyId = getNumberFrom0ToN(length);
    }

    if (!mainCountry || !additionalCountries[0]) return questionInitalState;

    const isItCapitalQuestion = Boolean(getNumberFrom0ToN(1));

    let question: Question = {
      isItCapitalQuestion,
      text: "",
      answers: shuffle([
        {
          answer: mainCountry ? mainCountry.name.common : "",
          isItRight: true,
        },
        {
          answer: additionalCountries[0]
            ? additionalCountries[0].name.common
            : "",
          isItRight: false,
        },
        {
          answer: additionalCountries[1]
            ? additionalCountries[1].name.common
            : "",
          isItRight: false,
        },
        {
          answer: additionalCountries[2]
            ? additionalCountries[2].name.common
            : "",
          isItRight: false,
        },
      ]),
    };

    if (isItCapitalQuestion) {
      question.text = `${mainCountry.capital} is the capital of`;
    } else {
      question.text = "Which country does this flag belong to?";
      question.flag = {
        svg: mainCountry.flags.svg,
        alt: mainCountry.flags.alt,
      };
    }
    return question;
  }

  return questionInitalState;
};
