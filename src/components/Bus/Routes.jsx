import { Box, Chip, Typography } from "@mui/material";
import React from "react";

const Routes = () => {
  return (
    <>
      <Box
        sx={{
          width: "90%",
          margin: "auto",
          pt: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box
              sx={{
                background: "grey",
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
              }}
            >
              <Typography sx={{ fontSize: "10px" }}>itahari</Typography>
            </Box>

            <img
              src="  https://img.freepik.com/premium-vector/red-flag-icon-concept-pointer-tag-important-sign-vector-triangle-silk-stick_390775-502.jpg"
              style={{ height: "50px", width: "50px" }}
            />
            <Box>
              <Chip label="start" color="success" />
            </Box>
          </Box>
          <Box>
            <Box
              sx={{
                background: "grey",
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
              }}
            >
              <Typography sx={{ fontSize: "10px" }}>1st stop</Typography>
              <Typography sx={{ fontSize: "10px" }}>koshi Barage</Typography>
            </Box>

            <img
              src="https://cliply.co/wp-content/uploads/2019/08/371908200_SCHOOL_BUS_400px.gif"
              style={{ height: "50px", width: "50px" }}
            />
          </Box>
          <Box>
            <Box
              sx={{
                background: "grey",
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
              }}
            >
              <Typography sx={{ fontSize: "10px" }}>1st stop</Typography>
              <Typography sx={{ fontSize: "10px" }}>koshi Barage</Typography>
            </Box>

            <img
              src="https://cliply.co/wp-content/uploads/2019/08/371908200_SCHOOL_BUS_400px.gif"
              style={{ height: "50px", width: "50px" }}
            />
          </Box>
          <Box>
            <Box
              sx={{
                background: "grey",
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
              }}
            >
              <Typography sx={{ fontSize: "10px" }}>1st stop</Typography>
              <Typography sx={{ fontSize: "10px" }}>koshi Barage</Typography>
            </Box>

            <img
              src="https://cliply.co/wp-content/uploads/2019/08/371908200_SCHOOL_BUS_400px.gif"
              style={{ height: "50px", width: "50px" }}
            />
          </Box>
          <Box>
            <Box
              sx={{
                background: "grey",
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
              }}
            >
              <Typography sx={{ fontSize: "10px" }}>1st stop</Typography>
              <Typography sx={{ fontSize: "10px" }}>koshi Barage</Typography>
            </Box>

            <img
              src="https://cliply.co/wp-content/uploads/2019/08/371908200_SCHOOL_BUS_400px.gif"
              style={{ height: "50px", width: "50px" }}
            />
          </Box>
          <Box>
            <Box
              sx={{
                background: "grey",
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
              }}
            >
              <Typography sx={{ fontSize: "10px" }}>kathmandu</Typography>
            </Box>

            <img
              src="  https://img.freepik.com/premium-vector/red-flag-icon-concept-pointer-tag-important-sign-vector-triangle-silk-stick_390775-502.jpg"
              style={{ height: "50px", width: "50px" }}
            />
            <Box>
              <Chip label="End" color="warning" />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Routes;
