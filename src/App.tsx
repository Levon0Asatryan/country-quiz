import { Route, Routes, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Question from "./pages/Question/Question";
import { getCountries } from "./utils/getCountries";
import { Country, countryInitalState } from "./utils/types";
import Footer from "./components/Footer/Footer";
import Result from "./pages/Result/Result";

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
  }, []);

  return (
    <div className="flex flex-col items-center h-screen">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Question
              questionsLimit={10}
              countries={countries}
              setScore={setScore}
            />
          }
        />
        <Route
          path="/result"
          element={<Result score={score} setScore={setScore} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
