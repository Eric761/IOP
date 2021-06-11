import React from "react";
import { loadData, lineData } from "../Input";
import { readExcel, calculate_indices } from "../Result/CalculateData/helperFn";
import fn from "./calculation";
import { Bar } from "react-chartjs-2";
import { Container, StyledPaper, Row,Title,ContentBtn } from "./SuggestionElements";
import { Link } from "react-router-dom";

const Suggestion = () => {
  console.log(loadData, lineData);
  const { bus, link, N, La, addInfo } = readExcel(loadData, lineData);
  let ans = calculate_indices(bus, link, N, La, addInfo);
  console.log(ans);
  console.log(fn());

  const x1Data = ["SAIFI", "SAIDI", "CAIDI", "ASAI", "ASUI"];
  const x2Data = ["TENS", "AENS"];
  const name = ["SAIFI", "SAIDI", "CAIDI", "TENS", "AENS","ASAI", "ASUI"];
  const y1Data = [];
  const y2Data = [];
  for (let i = 0; i < 7; i++) {
    if (i === 3 || i === 4) {
      y2Data.push(ans[i]);
    } else {
      y1Data.push(ans[i]);
    }
  }
  const { fr, ot, cb } = fn();
  console.log(fr, ot, cb);

  const arrCb = [];
  const arrFr = [];
  const arrOt = [];

  for (let i = 0; i < 7; i++) {
    const y1Data = [];
    const y2Data = [];
    for (let j = 0; j < 7; j++) {
      if (j === 3 || j === 4) {
        y2Data.push(cb[i].ansIndices[j]);
      } else {
        if (cb) {
          y1Data.push(cb[i].ansIndices[j]);
        }
      }
    }
    arrCb.push({ y1Data: y1Data, y2Data: y2Data });
  }

  for (let i = 0; i < 7; i++) {
    const y1Data = [];
    const y2Data = [];
    for (let j = 0; j < 7; j++) {
      if (j === 3 || j === 4) {
        y2Data.push(fr[i].ansIndices[j]);
      } else {
        if (fr) {
          y1Data.push(fr[i].ansIndices[j]);
        }
      }
    }
    arrFr.push({ y1Data: y1Data, y2Data: y2Data });
  }

  for (let i = 0; i < 7; i++) {
    const y1Data = [];
    const y2Data = [];
    for (let j = 0; j < 7; j++) {
      if (j === 3 || j === 4) {
        y2Data.push(ot[i].ansIndices[j]);
      } else {
        if (ot) {
          y1Data.push(ot[i].ansIndices[j]);
        }
      }
    }
    arrOt.push({ y1Data: y1Data, y2Data: y2Data });
  }

  console.log(arrFr,arrOt,arrCb);
  const stateFr = arrFr.map((item,key) => {
    return {
      state1: {
        labels: x1Data,
        datasets: [
          {
            label: "Actual Indices",
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: y1Data,
          },
          {
            label: `Suggested Indices (wrt Failure Rate - ${name[key]})`,
            backgroundColor: "rgba(255,140,0,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: item.y1Data,
          },
        ],
      },
      state2: {
        labels: x2Data,
        datasets: [
          {
            label: "Actual Indices",
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: y2Data,
          },
          {
            label: `Suggested Indices (wrt Failure Rate - ${name[key]})`,
            backgroundColor: "rgba(255,140,0,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: item.y2Data,
          },
        ],
      },
    };
  });

  const stateCb = arrCb.map((item,key) => {
    return {
      state1: {
        labels: x1Data,
        datasets: [
          {
            label: "Actual Indices",
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: y1Data,
          },
          {
            label: `Suggested Indices (wrt Circuit Breaker - ${name[key]})`,
            backgroundColor: "rgba(255,140,0,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: item.y1Data,
          },
        ],
      },
      state2: {
        labels: x2Data,
        datasets: [
          {
            label: "Actual Indices",
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: y2Data,
          },
          {
            label: `Suggested Indices (wrt Circuit Breaker - ${name[key]})`,
            backgroundColor: "rgba(255,140,0,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: item.y2Data,
          },
        ],
      },
    };
  });

  const stateOt = arrOt.map((item,key) => {
    return {
      state1: {
        labels: x1Data,
        datasets: [
          {
            label: "Actual Indices",
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: y1Data,
          },
          {
            label: `Suggested Indices (wrt Outage Time - ${name[key]})`,
            backgroundColor: "rgba(255,140,0,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: item.y1Data,
          },
        ],
      },
      state2: {
        labels: x2Data,
        datasets: [
          {
            label: "Actual Indices",
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: y2Data,
          },
          {
            label: `Suggested Indices (wrt Outage Time - ${name[key]})`,
            backgroundColor: "rgba(255,140,0,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: item.y2Data,
          },
        ],
      },
    };
  });
  console.log(stateFr,stateOt,stateCb);

  return (
    <>
      <Container>
        <Title>Changing Failure Rate</Title>
        {stateFr.map((obj) => {
        return (<Row>
            <StyledPaper left={true} elevation={10} style={{ backgroundColor: "#1f1f1f",marginRight: "45px" }}>
                <Bar
                    data={obj.state1}
                    options={{
                    title: {
                        display: true,
                        fontSize: 2,
                    },
                    legend: {
                        display: true,
                        position: "right",
                        labels: {
                        fontColor: "white",
                        fontSize: 18,
                        },
                    },
                    }}
                />
            </StyledPaper>
            <StyledPaper left={false} elevation={10} style={{ backgroundColor: "#1f1f1f" }}>
                <Bar
                    data={obj.state2}
                    options={{
                    title: {
                        display: true,
                        fontSize: 2,
                    },
                    legend: {
                        display: true,
                        position: "right",
                        labels: {
                        fontColor: "white",
                        fontSize: 18,
                        },
                    },
                    }}
                />
            </StyledPaper>
        </Row>)
        })}
        <Title>Changing Outage Time</Title>
        {stateOt.map((obj) => {
        return(<Row>
            <StyledPaper left={true} elevation={10} style={{ backgroundColor: "#1f1f1f",marginRight: "45px" }}>
                <Bar
                    data={obj.state1}
                    options={{
                    title: {
                        display: true,
                        fontSize: 2,
                    },
                    legend: {
                        display: true,
                        position: "right",
                        labels: {
                        fontColor: "white",
                        fontSize: 18,
                        },
                    },
                    }}
                />
            </StyledPaper>
            <StyledPaper left={false} elevation={10} style={{ backgroundColor: "#1f1f1f" }}>
                <Bar
                    data={obj.state2}
                    options={{
                    title: {
                        display: true,
                        fontSize: 2,
                    },
                    legend: {
                        display: true,
                        position: "right",
                        labels: {
                        fontColor: "white",
                        fontSize: 18,
                        },
                    },
                    }}
                />
            </StyledPaper>
        </Row>)
        })}
        <Title>Changing Circuit Breaker</Title>
        {stateCb.map((obj) => {
        return(<Row>
            <StyledPaper left={true} elevation={10} style={{ backgroundColor: "#1f1f1f",marginRight: "45px" }}>
                <Bar
                    data={obj.state1}
                    options={{
                    title: {
                        display: true,
                        fontSize: 2,
                    },
                    legend: {
                        display: true,
                        position: "right",
                        labels: {
                        fontColor: "white",
                        fontSize: 18,
                        },
                    },
                    }}
                />
            </StyledPaper>
            <StyledPaper left={false} elevation={10} style={{ backgroundColor: "#1f1f1f" }}>
                <Bar
                    data={obj.state2}
                    options={{
                    title: {
                        display: true,
                        fontSize: 2,
                    },
                    legend: {
                        display: true,
                        position: "right",
                        labels: {
                        fontColor: "white",
                        fontSize: 18,
                        },
                    },
                    }}
                />
            </StyledPaper>
        </Row>)
        })}
      </Container>
    </>
  );
};

export default Suggestion;
