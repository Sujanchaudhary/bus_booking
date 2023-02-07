import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Booking from "./Booking";
import Routes from "./Routes";
import RatingModal from "./Rating";
import ReviewList from "./ReviewList";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const BusSingleInfo = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1, pt: 10, width: "90%", margin: "auto" }}>
        <Grid container spacing={2}>
          <Grid item md={4} xs={12}>
            <img
              src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D"
              style={{ objectFit: "cover", width: "100%" }}
            />
          </Grid>
          <Grid item md={8} xs={12}>
            <Box sx={{ pl: 3 }}>
              <Typography sx={{ fontWeight: "800", fontSize: "34px" }}>
                Hamro Yatayat
              </Typography>
              <Rating name="size-small" defaultValue={2} size="small" />
              <Typography sx={{ fontWeight: "400", fontSize: "14px" }}>
                Bus Type: Super Deluxe
              </Typography>
              <Box>
                <Typography sx={{ fontWeight: "400", fontSize: "14px" }}>
                  Wifi
                </Typography>
                <Typography sx={{ fontWeight: "400", fontSize: "14px" }}>
                  A/C and Fan System
                </Typography>
                <Typography sx={{ fontWeight: "400", fontSize: "14px" }}>
                  Music System
                </Typography>
                <Typography sx={{ fontWeight: "400", fontSize: "14px" }}>
                  Comfortable Seats
                </Typography>
                <Typography sx={{ fontWeight: "400", fontSize: "14px" }}>
                  Mobile Charger
                </Typography>
                <Typography sx={{ fontWeight: "400", fontSize: "14px" }}>
                  On Time Departure
                </Typography>
                <Typography sx={{ fontWeight: "400", fontSize: "14px" }}>
                  Mineral Water
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "20px", fontWeight: "800" }}>
                  Available Seats: 40
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <RatingModal />
      </Box>
      <Routes />
      <Booking />
      <ReviewList />
    </div>
  );
};

export default BusSingleInfo;
