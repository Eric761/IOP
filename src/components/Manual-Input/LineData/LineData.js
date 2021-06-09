import React, { useState } from "react";
//Material ui style components
import { makeStyles,withStyles } from "@material-ui/core/styles";
//Material ui core components
import {
  Grid,
  Container,
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Button,
  Dialog,
  Slide,
  TextField,
  MenuItem,
  InputAdornment,
  TableFooter,
  TablePagination
} from "@material-ui/core";
//Material ui Icons
import AddIcon from '@material-ui/icons/Add';
import Row from "./Row";
import TablePaginationActions from "../Helper";

//Function for Dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

//Style for table cell
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

//Defining style
const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  root: {
    width: "94vw",
  },
  container: {
    minWidth: 600,
  },

  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(2, 19, 2),
  },
}));

let data = [];
const selectCB = [
  {
    value: 'N',
    label: 'N',
  },
  {
    value: 'Y',
    label: 'Y',
  }
];

const LineData = () => {
  const classes = useStyles();
  const [branchNumber, setBranchNumber] = useState(1);
  const [sendingBus, setSendingBus] = useState("1");
  const [recievingBus, setRecievingBus] = useState("");
  const [failureRate, setFailureRate] = useState("");
  const [outageTime, setOutageTime] = useState("");
  const [cb, setCb] = useState("");
  const [open, setOpen] = useState(false);
  const [sheetData,setSheetData] = useState([]);
  const [inputError,setInputError] = useState(false);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, sheetData.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  }

  const validInput = () => {
    if(sendingBus<=0 || recievingBus<=0 || failureRate < 0 || outageTime < 0 || (sendingBus === recievingBus)){
      return false;
    } else {
      return true;
    }
  }
  //Adding new data
  const handleToggle = (e) => {
    e.preventDefault();
    const flag = validInput();
    if(flag){
    setOpen(!open);
    let obj = {
      Bno: branchNumber,
      S: sendingBus,
      R: recievingBus,
      F: failureRate,
      O: outageTime,
      CB: cb,
    };
    data.push(obj);
    console.log(data);
    setSheetData(data);
    setBranchNumber(branchNumber+1);
    setSendingBus("1");
    setRecievingBus("");
    setFailureRate("");
    setOutageTime("");
    setCb("");
  } else {
    setInputError(!inputError);
    alert("Invalid input");
  }
  };

  //Closing Dialog
  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <div style={{marginTop: "5vh",display: "flex", flexDirection: "column",alignItems: "flex-end",justifyContent: "center"}}>
      {/* Adding data */}
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleCloseDialog}
        aria-labelledby="responsive-dialog-title"
      >
        <Container className="main" component="main" maxWidth="xs">
          <CssBaseline />
          <div>
            <form
              className={classes.form}
              autoComplete="off"
              onSubmit={handleToggle}
            >
              {/* <TextField
                id="branchNumber"
                value={branchNumber}
                label="Branch No."
                style={{ margin: 8 }}
                placeholder="None"
                helperText="Enter branch number"
                required
                fullWidth
                style={{ margin: 8 }}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e) => {
                  setBranchNumber(e.target.value);
                }}
              /> */}
              <TextField
                id="sendingBus"
                label={sendingBus === recievingBus ? "Error" : "Sending-end Bus"}
                value={sendingBus}
                style={{ margin: 8 }}
                helperText={sendingBus === recievingBus ? "Enter different bus number" : "Enter sending end bus number"}
                required
                fullWidth
                error={sendingBus === recievingBus ? true : false}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                type="number"
                onChange={(e) => {
                  setSendingBus(e.target.value);
                }}
              />
              <TextField
                id="recievingBus"
                label={(sendingBus === recievingBus) ? "Error" : "Recieving-end Bus"}
                value={recievingBus}
                style={{ margin: 8 }}
                helperText={sendingBus === recievingBus ? "Enter different bus number" :"Enter recieving end bus number"}
                required
                fullWidth
                error={sendingBus === recievingBus ? true : false}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                type="number"
                onChange={(e) => {
                  setRecievingBus(e.target.value);
                }}
              />
              <TextField
                id="failureRate"
                label={failureRate >= 0 ? "Failure Rate (f/year)" : "Error" }
                value={failureRate}
                style={{ margin: 8 }}
                helperText={failureRate >= 0 ? "Enter failure rate" : "Enter positive value" }
                required
                fullWidth
                error={failureRate >= 0 ? false : true}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">f/year</InputAdornment>,
                }}
                variant="outlined"
                type="number"
                onChange={(e) => {
                  setFailureRate(e.target.value);
                }}
              />
              <TextField
                id="outageTime"
                label={outageTime >= 0 ? "Outage Time (hour)" : "Error" }
                value={outageTime}
                style={{ margin: 8 }}
                helperText={outageTime >= 0 ? "Enter outage time" : "Enter positive value" }
                fullWidth
                error={outageTime >= 0 ? false : true}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">hour</InputAdornment>,
                }}
                variant="outlined"
                type="number"
                onChange={(e) => {
                  setOutageTime(e.target.value);
                }}
              />
              <TextField
                id="cb"
                label="Does sending end bus has a CB?"
                value={cb}
                style={{ margin: 8 }}
                helperText="Select 'Y' if bus has CB else 'N'"
                required
                fullWidth
                select
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                onChange={(e) => {
                  setCb(e.target.value);
                }}>
                {selectCB.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                </TextField>
              <Button
                variant="contained"
                color="secondary"
                className={classes.submit}
                type="submit"
                style={{fontSize: "medium",background: "#181919"}}
              >
                Add
              </Button>
            </form>
          </div>
        </Container>
      </Dialog>
      {/* Table Header */}
      <Grid container direction="row" justify="center" alignItems="center">
        <TableContainer component={Paper} className={classes.root}>
          <Typography
            style={{ margin: 10,display: "flex",alignItems:"center",justifyContent:"center",color:"black",fontFamily: "'Nunito', sans-serif" }}
            variant="h4"
            color="primary"
            component="h2"
          >
            Line data
          </Typography>
          <Table aria-label="collapsible table" className={classes.container}>
            <TableHead overflow="auto">
              <TableRow>
                <StyledTableCell align="center">
                  <AddIcon onClick={handleClickOpen} />
                </StyledTableCell>
                <StyledTableCell align="center">Branch No.</StyledTableCell>
                <StyledTableCell align="center">Sending-end Bus</StyledTableCell>
                <StyledTableCell align="center">Recieving-end Bus</StyledTableCell>
                <StyledTableCell align="center">Failure Rate (f/year)</StyledTableCell>
                <StyledTableCell align="center">Outage Time (hour)</StyledTableCell>
                <StyledTableCell align="center">Does sending-end bus has a circuit breaker?</StyledTableCell>
                {/* <StyledTableCell align="center">Edit</StyledTableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* mapping to above Row component */}
              {/* {sheetData.map((row) => (
                <Row
                  key={row.Bno}
                  row={row}
                  count={row.Bno}
                />
              ))} */}
              {(rowsPerPage > 0
                ? sheetData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : sheetData
              ).map((row) => (
                    <Row
                      key={row.Bno}
                      row={row}
                      count={row.Bno}
                    />
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value:  sheetData.length}]}
                  colSpan={7}
                  count={sheetData.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'rows per page' },
                    native: true,
                  }}
                  onChangePage={handleChangePage}
                  onChangeRowsPerPage={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
        style={{fontSize: "medium",background: "#181919"}}
        // Add Hover Effect
      >
        Add
      </Button>
    </div>
  );
};

export default LineData;
