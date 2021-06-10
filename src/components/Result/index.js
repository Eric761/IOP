import React, { useState, useEffect } from "react";
import { readExcel, calculate_indices } from "./CalculateData/helperFn";
import { loadData, lineData } from "../Input";
import Paper from "@material-ui/core/Paper";
import { Container,Title,Heading1,Heading2 } from "./ResultElements";
import BugReportIcon from "@material-ui/icons/BugReport";
import Button from "@material-ui/core/Button";
import "./helper.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import NetworkDiagram from "../NetworkRepresentation/NetworkRepresentation";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    // maxWidth: 310,
    // transition: "transform 0.15s ease-in-out",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
//   cardHovered: {
//     transform: "scale3d(1.05, 1.05, 1)",
//   },
});

const Result = () => {
  const classes = useStyles();
  console.log(loadData, lineData);
  let tempObj = readExcel(loadData, lineData);
  const { bus, link, N, La, addInfo } = tempObj;
  let ans = calculate_indices(bus, link, N, La, addInfo);
  console.log(ans);
  useEffect(() => {
      window.scrollTo(0,0);
  },[]);
//   const [state, setState] = useState({
//     raised: false,
//     shadow: 1,
//   });
  const customerRows = [
    { id: 1, title: "SAIFI", value: ans[0].toFixed(5),unit: "interupption / customer-yr" },
    { id: 2, title: "SAIDI", value: ans[1].toFixed(5),unit: "hr / customer-yr" },
    { id: 3, title: "CAIDI", value: ans[2].toFixed(5),unit: "hr / customer-interupption" },
    { id: 4, title: "ASAI", value: ans[5].toFixed(5),unit: "" },
    { id: 5, title: "ASUI", value: ans[6].toFixed(5),unit: "" },
  ];
  const systemRows = [
    { id: 1, title: "TENS", value: ans[3].toFixed(5),unit: "kWH / yr" },
    { id: 2, title: "AENS", value: ans[4].toFixed(5),unit: "kWH / customer-yr" },
  ];

  return (
    <>
      <Container>
        <Title>
            RESULT
        </Title>
        <NetworkDiagram lineData={lineData} />
        <Heading1>
            Customer Oriented Reliability Indices
        </Heading1>
        <Grid container spacing={4} className="grid-1">
          {customerRows.map((item) => {
            return (
              <Grid item spacing={3} xs={12} sm={6} md={4}>
                <Card
                  className={classes.root}
                  variant="outlined"
                  key={item.id}
                  style={{backgroundColor: "rgba(26,26,26,1)",zIndex: "999"}}
                //   classes={{ root: state.raised ? classes.cardHovered : "" }}
                //   onMouseOver={() => setState({ raised: true, shadow: 3 })}
                //   onMouseOut={() => setState({ raised: false, shadow: 1 })}
                //   raised={state.raised}
                //   zdepth={state.shadow}
                >
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={5} md={5}>
                        <Avatar
                          style={{
                            height: "15vh",
                            width: "18vh",
                            backgroundColor: "rgb(255 255 255)",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "900",
                              fontSize: "22px",
                              color: "rgb(0,0,0,1)",
                            }}
                          >
                            {item.title}
                          </span>
                        </Avatar>
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        md={7}
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: "700",
                            fontSize: "25px",
                            color: "rgba(255 255 255)",
                          }}
                        >
                          {item.value}
                        </div>
                        <div
                          style={{
                            fontWeight: "700",
                            fontSize: "16px",
                            color: "rgba(255 255 255)",
                            textAlign: "center",
                          }}
                        >
                          {item.unit}
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button size="large" startIcon={<BugReportIcon  style={{
                          color: "rgba(255 255 255)",
                        }}/>}>
                      <span
                        style={{
                          fontWeight: "600",
                          fontSize: "16px",
                          color: "rgba(255 255 255)",
                        }}
                      >
                        Run Diagnosis
                      </span>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
        <Heading2>
            Energy Oriented Reliability Indices
        </Heading2>
        <Grid container spacing={4} className="grid-2">
          {systemRows.map((item) => {
            return (
              <Grid item spacing={3} xs={12} sm={6} md={6}>
                <Card
                  className={classes.root}
                  variant="outlined"
                  key={item.id}
                  style={{backgroundColor: "rgba(26,26,26,1)",zIndex: "999"}}
                //   classes={{ root: state.raised ? classes.cardHovered : "" }}
                //   onMouseOver={() => setState({ raised: true, shadow: 3 })}
                //   onMouseOut={() => setState({ raised: false, shadow: 1 })}
                //   raised={state.raised}
                //   zdepth={state.shadow}
                >
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={6} md={6}>
                        <Avatar
                         style={{
                            height: "15vh",
                            width: "18vh",
                            backgroundColor: "rgb(255 255 255)",
                          }}
                        >
                          <span
                            style={{
                              fontWeight: "900",
                              fontSize: "22px",
                              color: "rgb(0,0,0,1)",
                            }}
                          >
                            {item.title}
                          </span>
                        </Avatar>
                      </Grid>
                      <Grid
                        item
                        xs={6}
                        md={5}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                       <div
                          style={{
                            fontWeight: "700",
                            fontSize: "25px",
                            color: "rgba(255 255 255)",
                          }}
                        >
                          {item.value}
                        </div>
                        <div
                          style={{
                            fontWeight: "700",
                            fontSize: "16px",
                            color: "rgba(255 255 255)",
                            textAlign: "center",
                          }}
                        >
                          {item.unit}
                        </div>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardActions
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button size="large" startIcon={<BugReportIcon  style={{
                          color: "rgba(255 255 255)",
                        }}/>}>
                      <span
                        style={{
                          fontWeight: "600",
                          fontSize: "16px",
                          color: "rgba(255 255 255)",
                        }}
                      >
                        Run Diagnosis
                      </span>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Result;
