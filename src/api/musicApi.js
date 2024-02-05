// src/api/musicApi.js
import axios from 'axios';

const LOCAL_PROXY_URL = 'http://localhost:3001/api/music';

export const searchMusic = async (query) => {
  try {
    const response = await axios.get(`${LOCAL_PROXY_URL}`, {
      params: {
        search: query
      }
    });
    return response.data; 
  } catch (error) {
    console.error("Error fetching music:", error);
    return null;
  }
};
