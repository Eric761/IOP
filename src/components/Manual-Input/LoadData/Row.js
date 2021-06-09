import React,{useState} from "react";
import { makeStyles,withStyles,useTheme } from "@material-ui/core/styles";
//Material ui core components
import {
  IconButton,
  TableCell,
  TableRow,
  TextField
} from "@material-ui/core";
//Material ui Icons
import DeleteIcon from '@material-ui/icons/Delete';
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

const Row = ({ row }) => {
  const classes = useRowStyles();
  const theme = useTheme();
  const [consumerNumber, setConsumerNumber] = useState(row.N);
  const [load, setLoad] = useState(row.L);
  const [editable, setEditable] = useState(false);

  //Update data
  const update = () => {
    row.N = consumerNumber;
    row.L = load;
    setEditable(!editable);
  };

//   Delete data used in delete Icon Button
//   const Delete = (Bno) => {
//     if (window.confirm("Are you sure you want to delete?")) {
//     //   TODO
//     }
//   };

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
        <StyledTableCell align="center">{row.bus}</StyledTableCell>
        {editable ? (
          <>
            <StyledTableCell align="center">
              <TextField
                id="consumerNumber"
                value={consumerNumber}
                required
                margin="none"
                inputProps={{ min: 0, style: { textAlign: "center" } }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  setConsumerNumber(e.target.value);
                }}
              />
            </StyledTableCell>
            <StyledTableCell align="center">
              <TextField
                id="load"
                value={load}
                required
                margin="none"
                inputProps={{ min: 0, style: { textAlign: "center" } }}
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(e) => {
                  setLoad(e.target.value);
                }}
              />
            </StyledTableCell>
          </>
        ) : (
          <>
            <StyledTableCell align="center">{row.N}</StyledTableCell>
            <StyledTableCell align="center">{row.L}</StyledTableCell>
          </>
        )}
      </TableRow>
    </>
  );
};

export default Row;
