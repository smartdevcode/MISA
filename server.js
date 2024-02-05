// server/index.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config(); // If you're using dotenv to manage environment variables

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); 

app.get('/api/music', async (req, res) => {
  const { search } = req.query;
  const JAMENDO_API_URL = 'https://api.jamendo.com/v3.0/tracks';
  const CLIENT_ID = process.env.REACT_APP_JAMENDO_CLIENT_ID; 

  try {
    const response = await axios.get(JAMENDO_API_URL, {
      params: {
        client_id: CLIENT_ID,
        format: 'json',
        limit: 1,
        search: search,
      },
    });
    res.json(response.data.results[0]); 
  } catch (error) {
    console.error("Error proxying music request:", error);
    res.status(500).json({ message: 'Error fetching music from Jamendo' });
  }
});

// New route for image search
app.get('/api/images', async (req, res) => {
  const { search } = req.query;
  const UNSPLASH_API_URL = 'https://api.unsplash.com/search/photos';
  const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY; 

  try {
    const response = await axios.get(UNSPLASH_API_URL, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}` 
      },
      params: {
        query: search,
        per_page: 10 
      },
    });
    const imageUrls = response.data.results.map(img => img.urls.small);
    res.json(imageUrls);
  } catch (error) {
    console.error("Error proxying image request:", error);
    res.status(500).json({ message: 'Error fetching images from Unsplash' });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
