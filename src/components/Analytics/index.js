import React from "react";
import BarChart from "./BarChart";
import BarChart2 from "./BarChart2";
import { Container, StyledPaper, Row, ContentBtn } from "./AnalyticsElements";
import { loadData, lineData } from "../Input";
import { readExcel, calculate_indices } from "../Result/CalculateData/helperFn";
import { Link } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import { withStyles } from "@material-ui/core/styles";

const DarkTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#131313",
    color: "fff",
    boxShadow: theme.shadows[1],
    fontSize: 13,
    fontFamily: "'Nunito', sans-serif",
    fontWeight: "600",
    padding: "9px",
  },
}))(Tooltip);

const Analytics = () => {
  console.log(loadData, lineData);
  const { bus, link, N, La, addInfo } = readExcel(loadData, lineData);
  let ans = calculate_indices(bus, link, N, La, addInfo);
  console.log(ans);
  let customerIndices = [];
  let energyIndices = [];
  for (let i = 0; i < 7; i++) {
    if (i === 3 || i === 4) {
      energyIndices.push(ans[i]);
    } else {
      customerIndices.push(ans[i]);
    }
  }
  const g1 = {
    xData: lineData.map((data) => `Bus ${data.S} -> ${data.R}`),
    yData: lineData.map((data) => data.F),
    label: "Failure Rate (f / yr)",
    text: "Equivalent Failure Rate Vs Connected Buses",
  };
  const g2 = {
    xData: lineData.map((data) => `Bus ${data.S} -> ${data.R}`),
    yData: lineData.map((data) => data.O),
    label: "Outage Time (hour)",
    text: "Outage Time Vs Connected Buses",
  };
  const g3 = {
    xData: loadData.map((data) => `Bus ${data.bus}`),
    yData1: loadData.map((data) => data.N),
    yData2: loadData.map((data) => data.L),
    label1: "No. of consumers",
    label2: "Avg. Load Demand (kW)",
    text: "No. of consumers & Avg. Load Demand Vs Bus",
  };
  const g4 = {
    xData: ["SAIFI", "SAIDI", "CAIDI", "ASAI", "ASUI"],
    yData: customerIndices,
    label: "Customer Oriented Reliability Indices",
    text: "Result: Customer Oriented Reliability Indices",
  };
  const g5 = {
    xData: ["TENS", "AENS"],
    yData: energyIndices,
    label: "Energy Oriented Reliability Indices",
    text: "Result: Energy Oriented Reliability Indices",
  };
  const state = [g1, g2, g3, g4, g5];

  return (
    <>
      <Container>
        {state.map((item,key) => {
          return (
            <Row margin={key === 0 ? true : false}>
              <DarkTooltip
                title={item.text}
                interactive
                arrow
                placement="top-start"
              >
                <StyledPaper
                  elevation={10}
                  style={{ backgroundColor: "#1f1f1f" }}
                >
                  {(key === 2) ?
                    (<BarChart2
                    xData={item.xData}
                    yData1={item.yData1}
                    yData2={item.yData2}
                    label1={item.label1}
                    label2={item.label2}
                    text={item.text}
                  />) : (<BarChart
                    xData={item.xData}
                    yData={item.yData}
                    label={item.label}
                    text={item.text}
                  />)}
                </StyledPaper>
              </DarkTooltip>
            </Row>
          );
        })}
        <ContentBtn>
          <Link to="/result">Back to result</Link>
        </ContentBtn>
      </Container>
    </>
  );
};

export default Analytics;
