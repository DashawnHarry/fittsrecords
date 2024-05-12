import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';


function StickyAppBar() {
    const textArray = ["Fitts Records", "Fitts Records", "Fitts Records", "Fitts Records", "Fitts Records", "Fitts Records","Fitts Records","Fitts Records",   ]
    return (
        <AppBar position="sticky" color="transparent" elevation={0}>
            <Toolbar style={{padding: 0}}>
                <Box sx={{
                    width: '100vw',
                    overflow: 'hidden',     
                }}>
                    <Typography
                        sx={{
                            whiteSpace: 'nowrap',
                            animation: 'marquee 80s linear infinite',
                            color: "blue",
                            fontFamily: "Montserrat",
                            fontSize: "100px",
                            fontStyle: 'italic',
                            fontWeight: 800, // Black outline
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                            '@keyframes marquee': {
                                '0%': { transform: 'translateX(100%)' },
                                '100%': { transform: 'translateX(-100%)' }
                            }
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