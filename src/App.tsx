import { Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Question from "./pages/Question";
import { getCountries } from "./utils/getCountries";
import { getRandomQuestion } from "./utils/getRandomQuestion";
import { Country, countryInitalState } from "./utils/types";

type Props = {};

const App = (props: Props) => {
  const location = useLocation();
  const [score, setScore] = useState(0);
  const [countries, setCountries] = useState<Country[]>([countryInitalState]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };

    fetchData().catch(console.error);
  });

  const question = getRandomQuestion(countries);

  return (
    <div>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Question first />} />
        <Route path="/:id" element={<Question />} />
      </Routes>
    </div>
  );
};

export default App;
