import { Button, Typography } from "@mui/material";
import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Checkout from "./Checkout/Checkout";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const busData = [
  { seatNumber: "A1", side: "A" },
  { seatNumber: "A2", side: "A" },
  { seatNumber: "A3", side: "A" },
  { seatNumber: "A4", side: "A" },
  { seatNumber: "A5", side: "A" },
  { seatNumber: "A6", side: "A" },
  { seatNumber: "A7", side: "A" },
  { seatNumber: "A8", side: "A" },
  { seatNumber: "A9", side: "A" },
  { seatNumber: "A10", side: "A" },
  { seatNumber: "A11", side: "A" },
  { seatNumber: "A12", side: "A" },
  { seatNumber: "B1", side: "B" },
  { seatNumber: "B2", side: "B" },
  { seatNumber: "B3", side: "B" },
  { seatNumber: "B4", side: "B" },
  { seatNumber: "B5", side: "B" },
  { seatNumber: "B6", side: "B" },
  { seatNumber: "B7", side: "B" },
  { seatNumber: "B8", side: "B" },
  { seatNumber: "B9", side: "B" },
  { seatNumber: "B10", side: "B" },
];

const Booking = () => {
  return (
    <Box sx={{ flexGrow: 1, width: "90%", margin: "auto", pt: 5 }}>
      <Grid container spacing={2}>
        <Grid item md={8} xs={12}>
          <Item>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    border: "1px solid grey",
                    p: 4,
                    mx: 5,
                  }}
                >
                  <Typography>Cabin</Typography>
                </Box>
                <Typography>A side</Typography>
                <Box
                  sx={{
                    display: "flex",
                    width: "170px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {busData.map((b, index) => {
                    if (b.side === "A") {
                      return (
                        <div style={{ display: "flex" }} key={index}>
                          <Checkbox />
                          <Typography
                            sx={{
                              background: `url(${"https://i7.uihere.com/icons/572/337/91/seat-border-1bec7cb26b10f7ff80b54393d015d762.png"})`,
                              backgroundSize: "cover",
                              height: { md: "40px", xs: "30px" },
                              width: { md: "40px", xs: "30px" },
                              fontSize: { md: "15px", sm: "12px", xs: "12px" },
                              color: "red",
                              pt: 1,
                            }}
                          >
                            {b.seatNumber}
                          </Typography>
                        </div>
                      );
                    }
                  })}
                </Box>
              </Box>
              <Box>
                <img
                  src="https://static.vecteezy.com/system/resources/previews/014/279/267/original/car-part-steering-wheel-icon-cartoon-style-vector.jpg"
                  style={{ width: "100px", height: "100px" }}
                />
                <Typography>B side</Typography>
                <Box
                  sx={{
                    display: "flex",
                    width: "170px",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {busData.map((b, index) => {
                    if (b.side === "B") {
                      return (
                        <div style={{ display: "flex" }} key={index}>
                          <Checkbox />
                          <Typography
                            sx={{
                              background: `url(${"https://i7.uihere.com/icons/572/337/91/seat-border-1bec7cb26b10f7ff80b54393d015d762.png"})`,
                              backgroundSize: "cover",
                              height: { md: "40px", xs: "30px" },
                              width: { md: "40px", xs: "30px" },
                              fontSize: { md: "15px", sm: "12px", xs: "12px" },
                              color: "red",
                              pt: 1,
                            }}
                          >
                            {b.seatNumber}
                          </Typography>
                        </div>
                      );
                    }
                  })}
                </Box>
              </Box>
            </Box>
          </Item>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box>
            <table
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                width: "100%",
              }}
            >
              <tbody>
                <tr>
                  <td style={{ textAlign: "left", padding: "15px" }}>
                    kathmandu-itahari
                  </td>
                </tr>
              </tbody>
            </table>
            <table
              style={{
                border: "1px solid black",
                borderCollapse: "collapse",
                width: "100%",
              }}
            >
              <tbody>
                <tr>
                  <td style={{ textAlign: "left", padding: "15px" }}>
                    Seat(s)
                  </td>
                  <td>:</td>
                  <td>3</td>
                </tr>
                <tr>
                  <td style={{ textAlign: "left", padding: "15px" }}>
                    Amount(s)
                  </td>
                  <td>:</td>
                  <td>Rs: 2000</td>
                </tr>
                <tr>
                  <td style={{ padding: "15px" }}>
                    <Checkout />
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Booking;
