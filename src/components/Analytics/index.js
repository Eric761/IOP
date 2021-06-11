import React from "react";
import BarChart from "./BarChart";
import BarChart2 from "./BarChart2";
import { Container,StyledPaper,Row,ContentBtn } from "./AnalyticsElements";
import { loadData, lineData } from "../Input";
import { readExcel, calculate_indices } from "../Result/CalculateData/helperFn";
import {Link} from "react-router-dom";

const Analytics = () => {
    console.log(loadData, lineData);
    const { bus, link, N, La, addInfo } = readExcel(loadData, lineData);
    let ans = calculate_indices(bus, link, N, La, addInfo);
    console.log(ans);
    let customerIndices = [];
    let energyIndices = [];
    for(let i=0;i<7;i++){
        if(i===3 || i===4){
            energyIndices.push(ans[i]);
        } else {
            customerIndices.push(ans[i]);
        }
    } 
    const g1 = {
        xData: lineData.map((data) => 
            `Bus ${data.S} -> ${data.R}`
        ),
        yData: lineData.map((data) => 
            data.F
        ),
        label: "Failure Rate (f / yr)",
        text: "Equivalent Failure Rate Vs Connected Buses",
    };
    const g2 = {
        xData: lineData.map((data) => 
            `Bus ${data.S} -> ${data.R}`
        ),
        yData: lineData.map((data) => 
            data.O
        ),
        label: "Outage Time (hour)",
        text: "Outage Time Vs Connected Buses",
    };
    const g3 = {
        xData: loadData.map((data) => 
            `Bus ${data.bus}`
        ),
        yData1: loadData.map((data) => 
            data.N
        ),
        yData2: loadData.map((data) => 
            data.L
        ),
        label1: "No. of consumers",
        label2: "Avg. Load Demand (kW)",
        text: "No. of consumers & Avg. Load Demand Vs Bus",
    };
    const g4 = {
        xData: ["SAIFI","SAIDI","CAIDI","ASAI","ASUI"],
        yData: customerIndices,
        label: "Customer Oriented Reliability Indices",
        text: "Result: Customer Oriented Reliability Indices",
    }
    const g5 = {
        xData: ["TENS","AENS"],
        yData: energyIndices,
        label: "Energy Oriented Reliability Indices",
        text: "Result: Energy Oriented Reliability Indices",
    }

  return (
    <>
      <Container>
      <Row left={true}>
        <StyledPaper elevation={10} style={{backgroundColor: "#1f1f1f"}}>
          <BarChart xData={g1.xData} yData={g1.yData} label={g1.label} text={g1.text} />
        </StyledPaper>
        </Row>
        <Row left={false}>
        <StyledPaper elevation={10} style={{backgroundColor: "#1f1f1f"}}>
          <BarChart xData={g2.xData} yData={g2.yData} label={g2.label} text={g2.text} />
        </StyledPaper>
        </Row>
        <Row>
        <StyledPaper elevation={10} style={{backgroundColor: "#1f1f1f"}}>
          <BarChart2 xData={g3.xData} yData1={g3.yData1} yData2={g3.yData2} label1={g3.label1} label2={g3.label2} text={g3.text} />
        </StyledPaper>
        </Row>
        <Row>
        <StyledPaper elevation={10} style={{backgroundColor: "#1f1f1f"}}>
          <BarChart xData={g4.xData} yData={g4.yData} label={g4.label} text={g4.text} />
        </StyledPaper>
        </Row>
        <Row>
        <StyledPaper elevation={10} style={{backgroundColor: "#1f1f1f"}}>
          <BarChart xData={g5.xData} yData={g5.yData} label={g5.label} text={g5.text} />
        </StyledPaper>
        </Row>
        <ContentBtn>
          <Link
            to="/result"
          >
            Back to result
          </Link>
        </ContentBtn>
      </Container>
    </>
  );
};

export default Analytics;
