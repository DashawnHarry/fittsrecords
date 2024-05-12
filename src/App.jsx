import './App.css';
import { Box } from '@mui/material';
import backgroundImage from "./images/Fittsmain.png"
import backgroundImageMobile from "./images/FittsmainMobile.png"
import StickyAppBar from './components/StickyAppBar';
import CenteredRotatingImage from './components/centerRotatingImage.jsx';


function App() {
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

      </Box>
    </div>
  );
}

export default App;
