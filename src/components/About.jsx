import React, { useEffect, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';

// Hardcoded text constants
const TITLE = "ABOUT US";
const CONTENT = "We shatter the mold of traditional media, offering every artist a platform to be seen and heard. We do what the big companies can't, elevating voices that deserve the spotlight.";

// Function to import all images from a specified folder
const importAll = (r) => r.keys().map(r);

// Dynamically import all images from the folder
const images = importAll(require.context('../images/clientphotos', false, /\.(png|jpe?g|svg)$/));

// Function to shuffle images
const shuffleArray = (array) => {
  const shuffled = array.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const About = () => {
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    // Shuffle images and set to state
    setImageList(shuffleArray(images));
  }, []);

  const rows = Array.from({ length: 4 }).map(() =>
    shuffleArray(imageList).slice(0, 6)
  );

  return (
    <Container
      id="about-section" // Set the id for the section
      maxWidth={false} // Disable the max-width setting
      disableGutters // Disable the default padding
      sx={{
        position: 'relative',
        flex: 1,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        width: '100%',
        '&:hover .image': { filter: 'blur(2px)' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100%',
          margin: 0,
          padding: 0,
        }}
      >
        {rows.map((row, rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              margin: 0,
              padding: 0,
            }}
          >
            {row.map((src, index) => (
              <Box
                key={`${rowIndex}-${index}`}
                component="img"
                src={src}
                className="image"
                sx={{
                  width: '16.666%', // 100% / 6
                  height: 'auto',
                  objectFit: 'cover',
                  margin: 0,
                  padding: 0,
                }}
              />
            ))}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '10px',
        }}
      >
        <Box>
          <Typography
            variant="h4"
            color="white"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              marginBottom: '10px',
            }}
          >
            {TITLE}
          </Typography>
          <Typography
            variant="body1"
            color="white"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              marginBottom: '10px',
            }}
          >
            {CONTENT}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
