import React, { useState } from 'react';
import { Box } from '@mui/material';

function DesaturateOverlay() {
  const [grayscale, setGrayscale] = useState(0); // Controls the level of grayscale filter

  return (
    <Box sx={{ display: 'flex', width: '100vw', height: '100vh', position: 'relative' }}>
      {/* Background component or image goes here */}
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
          '&:hover': {
            zIndex: 1
          }
        }}
        onMouseEnter={() => setGrayscale(100)}  // Turn grayscale to 100% on hover
        onMouseLeave={() => setGrayscale(0)}  // Revert grayscale to 0% on mouse leave
      />
      <Box
        sx={{
          width: '50%',
          height: '100%',
          position: 'absolute',
          left: '50%',
          backgroundColor: 'transparent',
          cursor: 'pointer',
          '&:hover': {
            zIndex: 1
          }
        }}
        onMouseEnter={() => setGrayscale(100)}  // Turn grayscale to 100% on hover
        onMouseLeave={() => setGrayscale(0)}  // Revert grayscale to 0% on mouse leave
      />
    </Box>
  );
}

export default DesaturateOverlay;
