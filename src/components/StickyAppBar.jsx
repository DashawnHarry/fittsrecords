import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

function StickyAppBar() {
  const textArray = [
    "FITTS RECORDS",
    "FITTS RECORDS",
    "FITTS RECORDS",
    "FITTS RECORDS",
    "FITTS RECORDS",
    "FITTS RECORDS",
    "FITTS RECORDS",
    "FITTS RECORDS",
  ];
  return (
    <AppBar
      position="relative"
      color="transparent"
      elevation={0}
      style={{
        zIndex: 3,
        top: { xs: "-870px", md: "-90px" } /* adjust as needed */,
        right: "0px" /* adjust as needed */,
      }}
    >
      <Toolbar style={{ padding: 0 }}>
        <Box
          sx={{
            width: "100vw",
            overflow: "hidden",
          }}
        >
          <Typography
            sx={{
              whiteSpace: "nowrap",
              animation: "marquee 80s linear infinite",
              color: "blue",
              fontFamily: "Overpass",
              fontSize: "110px",
              fontStyle: "italic",
              fontWeight: 800, // Black outline
              textShadow:"3px 3px 0 #c7c7c7, -1px -1px 0 #c7c7c7, 1px -1px 0 #c7c7c7, -1px 1px 0 #c7c7c7, 1px 1px 0 #c7c7c7",
              WebkitTextStroke: "1px black",
              "@keyframes marquee": {
                "0%": { transform: "translateX(100%)" },
                "100%": { transform: "translateX(-100%)" },
              },
            }}
          >
            {textArray.map((text) => `${text} `)}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default StickyAppBar;
