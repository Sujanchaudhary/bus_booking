import { Box, Typography } from "@mui/material";
import React from "react";
import { data } from "./Cities";

const TopDestination = () => {
  return (
    <Box sx={{ pt: 5 }}>
      <Typography
        sx={{ textAlign: "center", fontWeight: "800", fontSize: "40px" }}
      >
        Top Destination
      </Typography>
      <Box sx={{ display: "flex", gap: 3, pt: 5, flexWrap: "wrap" }}>
        <img
          src="https://thumbs.dreamstime.com/b/impressions-nepal-collage-travel-images-78327588.jpg"
          style={{ width: "100%", flex: "1 0" }}
        />
        <Box sx={{ flex: "1 0" }}>
          <Typography sx={{ fontWeight: "800", fontSize: "20px" }}>
            Nepal Major Cities
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
            {data.map((d, index) => {
              return <Typography key={index}>{d.city}</Typography>;
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TopDestination;
