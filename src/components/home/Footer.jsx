import { Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Box sx={{ background: "#41b3a3", pt: 3, color: "white" }}>
      <div style={{ margin: "0 auto", width: "90%" }}>
        <Grid
          container
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Grid md={2}>
            <p>About</p>
            <p>Contact</p>
            <p>Terms and Condition</p>
            <p>Privacy Policy</p>
            <p>Feedback</p>
          </Grid>
          <Grid
            md={3}
            style={{ alignText: "text-center", margin: "auto" }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Typography
              variant="button"
              style={{ alignText: "text-center", width: "80%" }}
            >
              Subscribe
            </Typography>
            <TextField
              id="outlined-basic"
              label="Enter your email"
              variant="outlined"
              sx={{ width: "80%" }}
              size="small"
            />
            <Typography variant="caption" sx={{ mt: 2 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              beatae incidunt vel repudiandae ipsum obcaecati? Doloribus enim
              nemo, quam iure dicta minus delectus necessitatibus deleniti
              placeat fugit incidunt aliquid quas!
            </Typography>
          </Grid>
          <Grid
            item
            md={2}
            style={{ alignText: "text-center", margin: "auto" }}
          >
            <Typography
              variant="button"
              style={{ alignText: "text-center", width: "80%" }}
            >
              Payment
            </Typography>
            <img
              src="https://dao578ztqooau.cloudfront.net/static/img/logo1.png"
              loading="lazy"
              style={{ width: "80%" }}
            />
          </Grid>
          <Grid
            item
            md={4}
            style={{ alignText: "text-center", margin: "auto" }}
          >
            <Typography
              variant="button"
              style={{ alignText: "text-center", width: "80%" }}
            >
              Top Route
            </Typography>
            <p>itahar - kathmandu</p>
            <p>itahar - kathmandu</p>
            <p>itahar - kathmandu</p>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default Footer;
