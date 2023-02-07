import { Box } from "@mui/material";
import React from "react";

const SliderItems = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ height: "400px" }}>
        <img
          src="https://images.unsplash.com/photo-1675084364782-605b9986b6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D"
          alt=""
          style={{ objectFit: "cover", height: "400px", width: "100%" }}
        />
      </Box>
    </Box>
  );
};

export default SliderItems;
