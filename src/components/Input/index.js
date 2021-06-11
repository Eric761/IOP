import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import LoadData from "./LoadData/LoadData";
import LineData from "./LineData/LineData";
import { Link } from "react-router-dom";
import { Container, Tables, ContentBtn } from "./InputElements";

let loadData = [];
let lineData = [];
const Input = ({ title, isCustom, handleResult }) => {
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  // Passing Data from Child to Parent
  const handleCallbackLoadData = (childData) => {
    loadData = childData;
  };
  const handleCallbackLineData = (childData) => {
    lineData = childData;
  };

  const handleClick = () => {
    if (loadData.length === 0) {
      alert("Fill the Load data");
    } else if (lineData.length === 0) {
      alert("Fill the Line data");
    } else {
      setFlag(true);
      alert(
        "Data validated! Click calculation button to evaluate reliability indices"
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>{title} | Reliability Indices Calculation </title>
      </Helmet>
      <Container>
        <Tables>
          <LoadData
            isCustom={isCustom}
            parentCallbackLoadData={handleCallbackLoadData}
          />
          <LineData
            isCustom={isCustom}
            parentCallbackLineData={handleCallbackLineData}
          />
        </Tables>
        <ContentBtn>
          <Link
            to={flag ? "/result" : "#"}
            onClick={flag ? handleResult : handleClick}
          >
            {flag ? "Calculate Reliability Indices" : "Validate Data"}
          </Link>
        </ContentBtn>
      </Container>
    </>
  );
};

export default Input;
export { loadData, lineData };
