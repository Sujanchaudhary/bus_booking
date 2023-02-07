import { Box } from "@mui/material";
import React from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedBus = () => {
  return (
    <>
      <Box>
        <h1>Featured Buses</h1>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              md: "repeat(4, 1fr)",
              sm: "repeat(2, 1fr)",
              xs: "repeat(1, 1fr)",
            },
            gap: 4,
          }}
        >
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </Box>
      </Box>
    </>
  );
};

export default FeaturedBus;
