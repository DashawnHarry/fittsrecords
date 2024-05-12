import './App.css';
import { Box } from '@mui/material';
import backgroundImage from "./images/Fittsmain.png"
import backgroundImageMobile from "./images/FittsmainMobile.png"
import StickyAppBar from './components/StickyAppBar';
import CenteredRotatingImage from './components/centerRotatingImage.jsx';
import { useEffect } from 'react';
import SpotifyPlaylist from './components/spotifyplaylist.jsx';


function App() {
  const accessToken = ""
  useEffect(() => {
    fetch('/.netlify/functions/spotify-token')
    .then(response => response.json())
    .then(data => {
         accessToken = data.accessToken;
        // Now use the accessToken to make Spotify API calls
    })
    .catch(error => console.error('Error fetching access token:', error));

  }, [])
  return (
    <div className="App">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,800&display=swap');
</style>
      <Box
                  sx={{
                    // Adjust based on your needs
                    height: '100vh',  // Adjust based on your needs
                    width: '100vw',
                    backgroundImage: {xs: `url(${backgroundImageMobile})`, md: `url(${backgroundImage})` },
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}>

                  <StickyAppBar/>
                  <CenteredRotatingImage/>
                  <SpotifyPlaylist accessToken={accessToken} playlistId={"4WLfsiUDoJH0s6yQUiGh8b?si=eaf847dc660c4840"}/>

      </Box>
    </div>
  );
}

export default App;
