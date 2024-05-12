import React from "react";
import { Box } from "@mui/material";
import backgroundImage1 from "../images/bryce_export.png"
import backgroundImage2 from "../images/harry_export.png"


 function HoverBoxes() {
  return (
    <Box width={"100vw"} position={"fixed"} display={"flex"} justifyContent={"center"}>
      <Box
        sx={{
          minWidth: "50%",
          height: "100vh",
          backgroundColor: "transparent",
          filter: "grayscale(100%)",
          zIndex: 0,
          backgroundImage: `url(${backgroundImage1})`
        }}
      ></Box>
      <Box
        sx={{
          width: "50vw",
          height: "100vh",
          backgroundColor: "transparent",
          backgroundImage: `url(${backgroundImage2})`,
          zIndex: 2
        }}
      >right</Box>
    </Box>
  );
}

export default HoverBoxes

