import { Button, Card, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ThumbUp from "@mui/icons-material/ThumbUp";
import ThumbDown from "@mui/icons-material/ThumbDown";

import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ pt: 5 }}>
        <Grid container justifyContent="space-between">
          <Grid item md={3}>
            <Card sx={{ p: 5, background: "indigo", color: "white" }}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                32
              </Typography>
              <Typography variant="subtitle2" textAlign="center">
                Total Buses Listed
              </Typography>
            </Card>
          </Grid>

          <Grid item md="3">
            <Card sx={{ p: 5, background: "indigo", color: "white" }}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                32
              </Typography>
              <Typography variant="subtitle2" textAlign="center">
                Total User Listed
              </Typography>
            </Card>
          </Grid>

          <Grid item md="3">
            <Card sx={{ p: 5, background: "indigo", color: "white" }}>
              <Typography variant="h5" sx={{ textAlign: "center" }}>
                Rs. 5600
              </Typography>
              <Typography variant="subtitle2" textAlign="center">
                Total Amount Earned
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="lg">
        <Grid container justifyContent="space-around">
          <Grid md="12">
            <Box sx={{ mt: 5 }}>
              <Typography variant="h6" color="indigo">
                Lates Registered Buses
              </Typography>
              <Typography variant="caption">
                Pleasem find all the lateste Buese and Accept or decline them
              </Typography>
            </Box>
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
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Dashboard;

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
