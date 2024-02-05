// src/api/imageApi.js
import axios from 'axios';

const LOCAL_IMAGE_SEARCH_URL = 'http://localhost:3001/api/images';

export const searchImages = async (query) => {
  try {
    const response = await axios.get(`${LOCAL_IMAGE_SEARCH_URL}`, {
      params: { search: query }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};
