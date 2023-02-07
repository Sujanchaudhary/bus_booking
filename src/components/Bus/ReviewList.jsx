import { Box, Typography } from "@mui/material";
import React from "react";
import RatingCard from "./RatingCard";

const ReviewList = () => {
  return (
    <Box sx={{ width: "90%", margin: "auto" }}>
      <Box sx={{ pt: 5 }}>
        <Typography>Rating & Review</Typography>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            md: "repeat(3, 1fr)",
            sm: "repeat(2, 1fr)",
            xs: "repeat(1, 1fr)",
          },
          gap: 3,
        }}
      >
        <RatingCard />
        <RatingCard />
        <RatingCard />
      </Box>
    </Box>
  );
};

export default ReviewList;
