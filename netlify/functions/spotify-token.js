exports.handler = async function(event, context) {
    const fetch = (await import('node-fetch')).default;
    const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
    const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

    const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64'),
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();

    if (data.access_token) {
        return {
            statusCode: 200,
            body: JSON.stringify({ accessToken: data.access_token })
        };
    } else {
        return {
            statusCode: 400,
            body: 'Failed to obtain access token'
        };
    }
};
