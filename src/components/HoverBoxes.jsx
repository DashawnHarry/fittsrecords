import React, { useState } from "react";
import { Box } from "@mui/material";
import backgroundImage1 from "../images/bryce_export.png";
import backgroundImage2 from "../images/harry_export.png";

function HoverBoxes() {
  const [grayscale, setGrayscale] = useState(100);
  const [grayscale2, setGrayscale2] = useState(100);

  return (
    <Box width={"100%"} display={"flex"} height={"100vh"}>
      <a href="#about-section" target="_self" rel="noreferrer" style={{ flex: "1 1 50%", textDecoration: "none" }}>
        <Box
          sx={{
            height: "100%",
            filter: `grayscale(${grayscale}%)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${backgroundImage1})`,
            backgroundPosition: "center",
            transition: "filter 1s",
          }}
          onMouseEnter={() => setGrayscale(0)}
          onMouseLeave={() => setGrayscale(100)}
        ></Box>
      </a>
      <a href="https://dashawnharry.com" target="_blank" rel="noreferrer" style={{ flex: "1 1 50%", textDecoration: "none" }}>
        <Box
          sx={{
            height: "100%",
            filter: `grayscale(${grayscale2}%)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(${backgroundImage2})`,
            backgroundPosition: "center",
            transition: "filter 1s",
          }}
          onMouseEnter={() => setGrayscale2(0)}
          onMouseLeave={() => setGrayscale2(100)}
        ></Box>
      </a>
    </Box>
  );
}

export default HoverBoxes;
