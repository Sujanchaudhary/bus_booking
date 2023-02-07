import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Profile = () => {
  return (
    <Box sx={{ pt: 10, width: "80%", margin: "auto" }}>
      <Box sx={{ pt: 15 }}>
        <Paper>
          <Box
            sx={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
              gridTemplateColumns: "repeat(3, 1fr)",
              width: "100%",
              p: 4,
            }}
          >
            <Box>
              <Typography>xyz</Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",

                marginX: "auto",
              }}
            >
              <Box
                sx={{
                  height: "150px",
                  width: "150px",
                  position: "absolute",
                  display: "flex",
                  justifyContent: "center",
                  mt: -15,
                  marginX: "auto",
                }}
              >
                <Avatar
                  src="https://images.unsplash.com/photo-1675448780891-2de555357e63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  sx={{
                    height: "150px",
                    width: "150px",
                  }}
                />
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Typography>xyz</Typography>
            </Box>
          </Box>
          <Box sx={{ pt: 10 }}>
            <Typography
              sx={{ textAlign: "center", fontWeight: "600", fontSize: "18px" }}
            >
              Sujan Chaudhary
            </Typography>
            <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
              sujanchaudhary@gmail.com
            </Typography>
            <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
              Mobile number: 9824387258
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
              <FacebookIcon />
              <InstagramIcon />
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Profile;
