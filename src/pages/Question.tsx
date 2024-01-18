import React from "react";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

type Props = {
  first?: boolean;
};

const Question = ({ first = false }: Props) => {
  const params = useParams();

  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      <div></div>
      <div>{`${first}`}123</div>
      <Footer />
    </div>
  );
};

export default Question;
