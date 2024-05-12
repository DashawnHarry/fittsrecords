import React, { useState, useEffect } from 'react';

const SpotifyPlaylist = ({ accessToken, playlistId }) => {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    const fetchPlaylist = async () => {
      if (!accessToken) return;

      try {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        const data = await response.json();
        setPlaylist(data);
      } catch (error) {
        console.error('Error fetching Spotify playlist:', error);
      }
    };

    fetchPlaylist();
  }, [accessToken, playlistId]);

  if (!playlist) return <div>Loading playlist...</div>;

  return (
    <div>
      <h3>{playlist.name}</h3>
      <ul>
        {playlist.tracks.items.map((track, index) => (
          <li key={index}>
            {track.track.name} by {track.track.artists.map(artist => artist.name).join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifyPlaylist;