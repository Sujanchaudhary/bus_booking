import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Button, Paper } from "@mui/material";
import { ThumbDown, ThumbUp } from "@mui/icons-material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Hemanta jung Karki",
    "ko.1.pa.2989",
    "Sunsari Yatayat",
    "Image",
    "Itaahri-Kathmandu"
  ),
];

const PaymentTable = () => {
  return (
    <Box sx={{ mx: 4 }}>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Payment No</TableCell>
              <TableCell align="center">Bus Number</TableCell>
              <TableCell align="center">Bus Name</TableCell>
              <TableCell align="center">Paid by</TableCell>
              <TableCell align="center">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  1
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">Sujan Chaudhary</TableCell>
                <TableCell align="center">Rs.1000</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PaymentTable;
