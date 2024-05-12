import './App.css';
import React, { useState } from 'react';
import { Box } from '@mui/material';
import backgroundImage from "./images/Fittsmain.png"
import backgroundImageMobile from "./images/FittsmainMobile.png"
import StickyAppBar from './components/StickyAppBar';
import CenteredRotatingImage from './components/centerRotatingImage.jsx';
import { SocialMediaToolbar } from './components/socialmediatoolbar.jsx';
function App() {
  const [grayscale, setGrayscale] = useState(0)
  const socialMediaHandles = [
    { platform: 'instagram', url: 'https://www.instagram.com/fittsbryce/' },
    { platform: 'email', url: 'mailto:fittsbrycebusiness@gmail.com' },
    { platform: 'spotify', url: 'https://open.spotify.com/user/blueelk64?si=76f3b13f2303469e' },
    { platform: 'x.com', url: 'https://twitter.com/FittsBryce' },
    { platform: 'instagram', url: 'https://instagram.com/username2' },
    { platform: 'snapchat', url: 'https://snapchat.com/username2' },
    { platform: 'spotify', url: 'https://spotify.com/username2' },
    { platform: 'x.com', url: 'https://x.com/username2' }
  ];

  return (
    <div className="App">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,800&display=swap');
</style>


<Box sx={{ display: 'flex', width: '100vw', height: '100vh', position: 'relative' }}>
      {/* This outer box gets the filter applied dynamically */}
      <Box
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transition: 'filter 1s', // Adjust timing for smoother or faster transitions
          filter: `grayscale(${grayscale}%)`, // Apply dynamic grayscale
          zIndex: -1 // Ensure it's under the interactive layers
        }}
      />

      {/* Transparent hover trigger boxes */}
      <Box
        sx={{
          width: '50%',
          height: '100%',
          position: 'absolute',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          filter: `grayscale(${grayscale}%)`,
          '&:hover': {
            zIndex: -2
          }
        }}
        onMouseEnter={() => setGrayscale(1)}  // Turn grayscale to 100% on hover
        onMouseLeave={() => setGrayscale(0)}  // Revert grayscale to 0% on mouse leave
      />
          <Box
                            sx={{
                              // Adjust based on your needs
                              height: '100vh',  // Adjust based on your needs
                              width: '100vw',
                              backgroundImage: {xs: `url(${backgroundImageMobile})`, md: `url(${backgroundImage})` },
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              zIndex: -3
                            }}>
                            <StickyAppBar/>
                            <Box sx={{marginLeft: '35%', marginRight: '35%',}}>
                              <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/4WLfsiUDoJH0s6yQUiGh8b?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          
                            </Box>
                            <SocialMediaToolbar  socialMediaHandles={socialMediaHandles}/>
                            <CenteredRotatingImage/>
                </Box>
      <Box
        sx={{
          width: '50%',
          height: '100%',
          position: 'absolute',
          left: '50%',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          filter: `grayscale(${grayscale}%)`,
          '&:hover': {
            zIndex: -2
          }
        }}
        onMouseEnter={() => setGrayscale(1)}  // Turn grayscale to 100% on hover
        onMouseLeave={() => setGrayscale(0)}  // Revert grayscale to 0% on mouse leave
      />
    </Box>





    </div>
  );
}

export default App;
