import React, { useState, useEffect } from "react";
import { readExcel, calculate_indices } from "./CalculateData/helperFn";
import { loadData, lineData } from "../Input";
import {
  Container,
  Title,
  Left,
  Heading1,
  Heading2,
  ContentBtnRight,
  ContentBtnLeft,
  ValueContainer,
  UnitContainer,
  StyledGrid1,
  StyledGrid2,
} from "./ResultElements";
import BugReportIcon from "@material-ui/icons/BugReport";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import NodalAnalysis from "./NodalAnalysis/index";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    transition: "transform 0.15s ease-in-out",
    "&:hover": {
      cursor: "pointer",
    },
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
  cardHovered: {
    transform: "scale3d(1.05, 1.05, 1)",
  },
});

const Result = ({ handleSuggestion }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    raised1: false,
    raised2: false,
    raised3: false,
    raised4: false,
    raised5: false,
    raised6: false,
    raised7: false,
    shadow: 1,
  });
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  console.log(loadData, lineData);
  const { bus, link, N, La, addInfo } = readExcel(loadData, lineData);
  let ans = calculate_indices(bus, link, N, La, addInfo);
  console.log(ans);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const customerRows = [
    {
      id: 1,
      title: "SAIFI",
      value: ans[0].toFixed(5),
      unit: "interupption / customer-yr",
    },
    {
      id: 2,
      title: "SAIDI",
      value: ans[1].toFixed(5),
      unit: "hr / customer-yr",
    },
    {
      id: 3,
      title: "CAIDI",
      value: ans[2].toFixed(5),
      unit: "hr / customer-interupption",
    },
    { id: 4, title: "ASAI", value: ans[5].toFixed(5), unit: "" },
    { id: 5, title: "ASUI", value: ans[6].toFixed(5), unit: "" },
  ];
  const systemRows = [
    { id: 6, title: "TENS", value: ans[3].toFixed(5), unit: "kWh / yr" },
    {
      id: 7,
      title: "AENS",
      value: ans[4].toFixed(5),
      unit: "kWh / customer-yr",
    },
  ];

  return (
    <>
      <Container>
        <Title>
          <Left>RESULT</Left>
          <ContentBtnRight>
            <Link to="/suggestion" onClick={handleSuggestion}>
              Suggestion
            </Link>
          </ContentBtnRight>
          <ContentBtnLeft>
            <Link to="#" onClick={handleClickOpen}>
              Nodal Analysis
            </Link>
          </ContentBtnLeft>
        </Title>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle
            id="responsive-dialog-title"
            style={{ textAlign: "center" }}
          >
            Nodal Analysis
          </DialogTitle>
          <DialogContent>
            <NodalAnalysis lineData={lineData} />
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={handleClose}
              style={{ color: "black", fontSize: "18px", fontWeight: "800" }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <Heading1>Customer Oriented Reliability Indices</Heading1>
        <StyledGrid1 container spacing={4}>
          {customerRows.map((item) => {
            return (
              <Grid item spacing={3} xs={12} sm={6} md={4}>
                <Card
                  className={classes.root}
                  variant="outlined"
                  key={item.id}
                  style={{ backgroundColor: "rgba(26,26,26,1)", zIndex: "999" }}
                  classes={{
                    root: state[`raised${item.id}`] ? classes.cardHovered : "",
                  }}
                  onMouseOver={() =>
                    setState({
                      ...state,
                      [`raised${item.id}`]: true,
                      shadow: 3,
                    })
                  }
                  onMouseOut={() =>
                    setState({
                      ...state,
                      [`raised${item.id}`]: false,
                      shadow: 1,
                    })
                  }
                  raised={state[`raised${item.id}`]}
                  zdepth={state.shadow}
                >
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={5} md={5}>
                        <Avatar
                          style={{
                            height: "15vh",
                            width: "18vh",
                            // backgroundColor: "#dfe4e0",
                            background:
                              "linear-gradient(45deg, rgb(95 94 10), rgb(255 255 255))",
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
                        <ValueContainer>{item.value}</ValueContainer>
                        <UnitContainer>{item.unit}</UnitContainer>
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
                    <Button
                      size="large"
                      startIcon={
                        <BugReportIcon
                          style={{
                            color: "rgba(255 255 255)",
                          }}
                        />
                      }
                    >
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
        </StyledGrid1>
        <Heading2>Energy Oriented Reliability Indices</Heading2>
        <StyledGrid2 container spacing={4}>
          {/* Added backgroundColor for removing white background from bottom */}
          {systemRows.map((item) => {
            return (
              <Grid item spacing={3} xs={12} sm={6} md={6}>
                <Card
                  className={classes.root}
                  variant="outlined"
                  key={item.id}
                  style={{ backgroundColor: "rgba(26,26,26,1)", zIndex: "999" }}
                  classes={{
                    root: state[`raised${item.id}`] ? classes.cardHovered : "",
                  }}
                  onMouseOver={() =>
                    setState({
                      ...state,
                      [`raised${item.id}`]: true,
                      shadow: 3,
                    })
                  }
                  onMouseOut={() =>
                    setState({
                      ...state,
                      [`raised${item.id}`]: false,
                      shadow: 1,
                    })
                  }
                  raised={state[`raised${item.id}`]}
                  zdepth={state.shadow}
                >
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={6} md={6}>
                        <Avatar
                          style={{
                            height: "15vh",
                            width: "18vh",
                            // backgroundColor: "#dfe4e0",
                            background:
                              "linear-gradient(45deg, rgb(95 94 10), rgb(255 255 255))",
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
                        <ValueContainer>{item.value}</ValueContainer>
                        <UnitContainer>{item.unit}</UnitContainer>
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
                    <Button
                      size="large"
                      startIcon={
                        <BugReportIcon
                          style={{
                            color: "rgba(255 255 255)",
                          }}
                        />
                      }
                    >
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
        </StyledGrid2>
      </Container>
    </>
  );
};

export default Result;
