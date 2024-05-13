import React, { useState } from "react";
import { Box } from "@mui/material";
import backgroundImage1 from "../images/bryce_export.png"
import backgroundImage2 from "../images/harry_export.png"


 function HoverBoxes() {
  const [grayscale, setGrayscale] = useState(100)
  const [grayscale2, setGrayscale2] = useState(100);

  return (
    <Box width={"100vw"} position={"relative"} display={"flex"} justifyContent={"center"} zIndex={2}>
      <Box
        sx={{
          minWidth: "50%",
          height: "100vh",
          filter: `grayscale(${grayscale}%)`,
          zIndex: 2,
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
          backgroundImage: `url(${backgroundImage1})`,
          backgroundPosition: "center",
          transition: 'filter 1s'
          
        }}
        onMouseEnter={() => setGrayscale(0)}
        onMouseLeave={() => setGrayscale(100)}
      ></Box>
      <Box
        sx={{
          width: "50vw",
          height: "100vh",
          filter: `grayscale(${grayscale2}%)`,
          zIndex: 2,
          position: "relative",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "transparent",
          backgroundImage: `url(${backgroundImage2})`,
          backgroundPosition: "center",
          transition: 'filter 1s'
        }}
        onMouseEnter={() => setGrayscale2(0)}
        onMouseLeave={() => setGrayscale2(100)}
      ></Box>
    </Box>
  );
}

export default HoverBoxes

