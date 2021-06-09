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
  InputAdornment,
  TableFooter,
  TablePagination
} from "@material-ui/core";
//Material ui Icons
import AddIcon from '@material-ui/icons/Add';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Row from "./Row";
import TablePaginationActions from "../Helper";
import XLSX from "xlsx";
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
    width: "80vw",
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
const EXTENSIONS = ['xlsx', 'xls', 'csv'];
let keys = ["bus","N","L"];

const LoadData = ({isCustom}) => {
  const classes = useStyles();
  const [busNumber, setBusNumber] = useState(1);
  const [consumerNumber, setConsumerNumber] = useState("");
  const [load, setLoad] = useState("");
  const [open, setOpen] = useState(false);
  const [sheetData,setSheetData] = useState([]);
  const [inputError,setInputError] = useState(false);

  const getExention = (file) => {
    const parts = file.name.split('.')
    const extension = parts[parts.length - 1]
    return EXTENSIONS.includes(extension) // return boolean
  }

  const convertToJson = (data) => {
    const rows = []
    data.forEach(row => {
      let rowData = {}
      row.forEach((element, index) => {
        rowData[keys[index]] = element;
      })
      rows.push(rowData)
    });
    return rows;
  }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, sheetData.length - page * rowsPerPage);

  const handleChangePage = (newPage) => {
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
    if(consumerNumber<0 || load<0 ){
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
        bus: Number(busNumber),
        N: Number(consumerNumber),
        L: Number(load)
    };
    data.push(obj);
    console.log(data);
    setSheetData(data);
    setBusNumber(busNumber+1);
    setConsumerNumber("");
    setLoad("");
  } else {
    setInputError(!inputError);
    alert("Invalid input");
  }
  };

  // Closing Dialog
  const handleCloseDialog = () => {
    setOpen(false);
  };

  // Importing Excel file
  const handleFileSubmit = (e) => {
    console.log(e.target.files);
    if(e.target.files)
    {
      const file = e.target.files[0];
      console.log(file);
      const reader = new FileReader();
      reader.onload = (event) => {
      // console.log(event);
      //parse data
      const bstr = event.target.result;
      // console.log(bstr);
      const workBook = XLSX.read(bstr, { type: "binary" });
      //get first sheet
      const workSheetName = workBook.SheetNames[1];
      const workSheet = workBook.Sheets[workSheetName];
      //convert to array
      const fileData = XLSX.utils.sheet_to_json(workSheet,{header: 1});
      console.log(fileData);
      const headers = fileData[0];
      console.log(headers);
      const heads = headers.map(head => ({ title: head, field: head }));
      //removing header
      fileData.splice(0, 1);
      data=data.concat(convertToJson(fileData));
      console.log(data);
      setSheetData(data);
      setBusNumber(1+data.length);
    }

    if (file) {
      if (getExention(file)) {
        reader.readAsBinaryString(file);
      }
      else {
        alert("Invalid file input, Select Excel, CSV file");
      }
    } else {
      setSheetData([]);
    }
  }
}

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
              <TextField
                id="consumerNumber"
                label={consumerNumber >= 0 ? "No. of consumers" : "Error" }
                value={consumerNumber}
                style={{ margin: 8 }}
                helperText={consumerNumber >= 0 ? "Enter total consumers" : "Enter positive value" }
                required
                fullWidth
                error={consumerNumber >= 0 ? false : true}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                type="number"
                onChange={(e) => {
                  setConsumerNumber(e.target.value);
                }}
              />
              <TextField
                id="load"
                label={load >= 0 ? "Average load demand (kW)" : "Error" }
                value={load}
                style={{ margin: 8 }}
                helperText={load >= 0 ? "Enter avg. load demand" : "Enter positive value" }
                fullWidth
                error={load >= 0 ? false : true}
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  endAdornment: <InputAdornment position="end">kW</InputAdornment>,
                }}
                variant="outlined"
                type="number"
                onChange={(e) => {
                  setLoad(e.target.value);
                }}
              />
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
            style={{ margin: 10,display: "flex",alignItems:"center",justifyContent:"center",color:"black",fontFamily: "'Nunito', sans-serif",fontWeight: "900" }}
            variant="h4"
            color="primary"
            component="h2"
          >
            Load data
          </Typography>
          <Table aria-label="collapsible table" className={classes.container}>
            <TableHead overflow="auto">
              <TableRow>
                <StyledTableCell align="center">
                  <AddIcon onClick={handleClickOpen} />
                </StyledTableCell>
                <StyledTableCell align="center">Bus No.</StyledTableCell>
                <StyledTableCell align="center">No. of consumers</StyledTableCell>
                <StyledTableCell align="center">Average load demand (in kW)</StyledTableCell>
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
                      key={row.bus}
                      row={row}
                      count={row.bus}
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
                  colSpan={4}
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
      <div>
      {isCustom && (<Button
        variant="contained"
        component="label"
        color="primary"
        className={classes.submit}
        startIcon={<CloudUploadIcon />}
        style={{fontSize: "medium",background: "#181919",margin: "16px 55px 16px" }}
        onChange={handleFileSubmit}
      >
        Upload
        <input type="file" hidden />
      </Button>)}
      <Button
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleClickOpen}
        startIcon={<AddIcon />}
        style={{fontSize: "medium",background: "#181919",margin: "16px 55px 16px" }}
        // Add Hover Effect
      >
        Add
      </Button>
      </div>
    </div>
  );
};

export default LoadData;
