import { Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Question from "./pages/Question/Question";
import { getCountries } from "./utils/getCountries";
import { Country, countryInitalState } from "./utils/types";
import Footer from "./components/Footer/Footer";

type Props = {};

const App = (props: Props) => {
  const location = useLocation();
  const [score, setScore] = useState(0);
  const [countries, setCountries] = useState<Country[]>([countryInitalState]);

  useEffect(() => {
    console.log(score);
  }, [score]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCountries();
      setCountries(data);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Question first countries={countries} setScore={setScore} />}
        />
        <Route
          path="/:id"
          element={<Question countries={countries} setScore={setScore} />}
        />
        <Route path="/results" element={<div>{score}</div>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
