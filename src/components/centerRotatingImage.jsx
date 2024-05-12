import React from 'react';
import { Box } from '@mui/material';
import imageSrc from '../images/FittsRecordsSticker.png'; // Ensure the path is correct

function CenteredRotatingImage() {
    return (
        <Box sx={{
            position: 'fixed', // Keeps the image fixed during scrolling
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center the image
            animation: 'rotate 20s linear infinite', // Rotate infinitely
            '@keyframes rotate': {
                from: { transform: 'translate(-50%, -50%) rotate(0deg)' },
                to: { transform: 'translate(-50%, -50%) rotate(360deg)' }
            }
        }}>
            <img src={imageSrc} alt="Rotating" style={{ maxWidth: '15%', maxHeight: '100vh' }} />
        </Box>
    );
}

export default CenteredRotatingImage;