import React from 'react';
import { AppBar, Toolbar,  Link, Box } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import InboxIcon from '@mui/icons-material/Inbox';

const SnapchatIcon = () => <FontAwesomeIcon icon={faSnapchatGhost} />;
const SpotifyIcon = () =><FontAwesomeIcon icon={faSpotify} />
const XIcon = () => <FontAwesomeIcon icon={faSquareXTwitter} />



// case 'snapchat':
//     return <div></div>
export function SocialMediaToolbar({ socialMediaHandles }) {
    // Function to select the appropriate icon for each platform
    const getIcon = (platform) => {
      switch (platform) {
        case 'instagram':
          return <InstagramIcon />;
        case 'spotify':
          return <SpotifyIcon />;
        case 'snapchat':
            return <SnapchatIcon />;
        case 'x.com':
          return <XIcon />; // Placeholder, replace with appropriate icon
          case 'email':
            return <InboxIcon />
        default:
          return <div>?</div>; // Placeholder for unknown platforms
      }
    };
  
    return (
      <AppBar position="fixed"  sx={{ top: 'auto', bottom: 0 , zIndex: 3 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-evenly' }}>
            {socialMediaHandles.slice(0, 4).map((handle, index) => (
              <Link key={index} href={handle.url} color="inherit" target="_blank">
                {getIcon(handle.platform)}
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-evenly' }}>
            {socialMediaHandles.slice(4, 8).map((handle, index) => (
              <Link key={index} href={handle.url} color="inherit" target="_blank">
                {getIcon(handle.platform)}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    );
  }