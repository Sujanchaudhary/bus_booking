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

const BusTable = () => {
  return (
    <Box sx={{ mx: 4 }}>
      <TableContainer component={Paper} style={{ marginTop: "20px" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="center">V.No</TableCell>
              <TableCell align="center">Bus Name</TableCell>
              <TableCell align="center">Licence</TableCell>
              <TableCell align="center">Route</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.calories}</TableCell>
                <TableCell align="center">{row.fat}</TableCell>
                <TableCell align="center">{row.carbs}</TableCell>
                <TableCell align="center">{row.protein}</TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    endIcon={<ThumbUp />}
                    size="small"
                    sx={{ mr: 2 }}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ background: "red" }}
                    endIcon={<ThumbDown />}
                    size="small"
                  >
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default BusTable;
