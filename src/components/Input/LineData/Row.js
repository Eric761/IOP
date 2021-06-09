import React,{useState} from "react";
import { makeStyles,withStyles,useTheme } from "@material-ui/core/styles";
//Material ui core components
import {
  IconButton,
  TableCell,
  TableRow,
  TextField,
  MenuItem
} from "@material-ui/core";
//Material ui Icons
import EditIcon from "@material-ui/icons/EditOutlined";
import CheckIcon from '@material-ui/icons/Check';

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
const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

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

const Row = ({ row }) => {
  const classes = useRowStyles();
  const theme = useTheme();
  const [sendingBus, setSendingBus] = useState(row.S);
  const [recievingBus, setRecievingBus] = useState(row.R);
  const [failureRate, setFailureRate] = useState(row.F);
  const [outageTime, setOutageTime] = useState(row.O);
  const [cb, setCb] = useState(row.CB);

  const [editable, setEditable] = useState(false);

  //Update data
  const update = () => {
    row.S = Number(sendingBus);
    row.R = Number(recievingBus);
    row.F = Number(failureRate);
    row.O = Number(outageTime);
    row.CB = cb;
    setEditable(!editable);
  };

  // Delete data used in delete Icon Button
  // const Delete = (Bno) => {
  //   if (window.confirm("Are you sure you want to delete?")) {
  //   //   TODO
  //   }
  // };

  return (
    <>
      <TableRow className={classes.root}>
        {/* <StyledTableCell align="center">
          <IconButton
            onClick={() => {
              Delete(row.Bno);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </StyledTableCell> */}
        <StyledTableCell align="center">
          {editable ? (
            <IconButton
              onClick={() => {
                update();
              }}
            >
              <CheckIcon />
            </IconButton>
          ) : (
            <IconButton
              onClick={() => {
                setEditable(!editable);
              }}
            >
              <EditIcon />
            </IconButton>
          )}
        </StyledTableCell>
        <StyledTableCell align="center">{row.Bno}</StyledTableCell>
        {editable ? (
          <>
            <StyledTableCell align="center">
              <TextField
                id="sendingBus"
                value={sendingBus}
                required
                margin="none"
                inputProps={{ min: 0, style: { textAlign: "center" } }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  setSendingBus(e.target.value);
                }}
              />
            </StyledTableCell>
            <StyledTableCell align="center">
              <TextField
                id="recievingBus"
                value={recievingBus}
                required
                margin="none"
                inputProps={{ min: 0, style: { textAlign: "center" } }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  setRecievingBus(e.target.value);
                }}
              />
            </StyledTableCell>
            <StyledTableCell align="center">
              <TextField
                id="failureRate"
                value={failureRate}
                margin="none"
                required
                inputProps={{ min: 0, style: { textAlign: "center" } }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  setFailureRate(e.target.value);
                }}
              />
            </StyledTableCell>
            <StyledTableCell align="center">
              <TextField
                id="outageTime"
                value={outageTime}
                margin="none"
                required
                inputProps={{ min: 0, style: { textAlign: "center" } }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  setOutageTime(e.target.value);
                }}
              />
            </StyledTableCell>
            <StyledTableCell align="center">
              <TextField
                id="cb"
                value={cb}
                margin="none"
                required
                select
                inputProps={{ min: 0, style: { textAlign: "center" } }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  setCb(e.target.value);
                }}>
                {selectCB.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
                </TextField>
            </StyledTableCell>
          </>
        ) : (
          <>
            {/* <StyledTableCell align="center">{row.Bno}</StyledTableCell> */}
            <StyledTableCell align="center">{row.S}</StyledTableCell>
            <StyledTableCell align="center">{row.R}</StyledTableCell>
            <StyledTableCell align="center">{row.F}</StyledTableCell>
            <StyledTableCell align="center">{row.O}</StyledTableCell>
            <StyledTableCell align="center">{row.CB}</StyledTableCell>
          </>
        )}
      </TableRow>
    </>
  );
};

export default Row;
