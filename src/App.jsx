import "./App.css";
import { Box } from "@mui/material";
import StickyAppBar from "./components/StickyAppBar";
import HoverBoxes from "./components/HoverBoxes.jsx";
import CenteredRotatingImage from "./components/centerRotatingImage.jsx";
import { SocialMediaToolbar } from "./components/socialmediatoolbar.jsx";

function App() {
  const socialMediaHandles = [
    { platform: "instagram", url: "https://www.instagram.com/fittsbryce/" },
    { platform: "email", url: "fittsbrycebusiness@gmail.com" },
    {
      platform: "spotify",
      url: "https://open.spotify.com/user/blueelk64?si=76f3b13f2303469e",
    },
    { platform: "x.com", url: "https://twitter.com/FittsBryce" },
    { platform: "instagram", url: "https://instagram.com/username2" },
    { platform: "snapchat", url: "https://snapchat.com/username2" },
    { platform: "spotify", url: "https://spotify.com/username2" },
    { platform: "x.com", url: "https://x.com/username2" },
  ];

  return (
    <Box
      overflow={"visible"}
      boxSizing={"border-box"}
      textAlign={"center"}
      sx={{
        // Adjust based on your needs
        height: "100vh", // Adjust based on your needs
        width: "100vw",
        backgroundColor: "white",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,800&display=swap');
      </style>
      <StickyAppBar />
        <iframe
          style={{
            position: "sticky",
            
            marginLeft: { xs: "15%", md: "50%" },
            zIndex: 3,
            top: "-980px",
          }}
          title="playlist"
          src="https://open.spotify.com/embed/playlist/4WLfsiUDoJH0s6yQUiGh8b?utm_source=generator&theme=0"
          width="270px"
          height="152px"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      <HoverBoxes />
      <SocialMediaToolbar socialMediaHandles={socialMediaHandles} />
      <CenteredRotatingImage />
    </Box>
  );
}

export default App;
