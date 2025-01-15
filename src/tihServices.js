import axios from 'axios';

const API_KEY = 'BnTpWWzzFpHMJbVF5o4veuN00sZaBhG1'; // TIH API key

// Function to get a list of places (e.g., Attractions, POIs, etc.)
export const getPlaces = async (category) => {
  try {
    const response = await axios.get(`https://api.stb.gov.sg/content/common/v2/${category}`, {
      headers: {
        'X-API-Key': API_KEY,
        'Accept': 'application/json',
        'X-Content-Language': 'en', 
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching places:', error);
    throw error;
  }
};

// Function to get the media's related to an UUID (Business)
export const downloadMedia = async (uuid) => {
  try {
    const response = await axios.get(`https://api.stb.gov.sg/media/download/v2/${uuid}?fileType=Default`, {
      headers: {
        'X-API-Key': API_KEY,
        'Accept': 'application/json',
      },
      responseType: 'blob'
    });
    
    return response.data;
  } catch (error) {
    return '';
  }
};

// Function to find the Google Business Profile from the UUID
export const googleLink = async (uuid) => {
  try {
    const response = await axios.get(`https://api.stb.gov.sg/services/navigation/v2/places/${uuid}`, {
      headers: {
        'X-API-Key': API_KEY,
        'Accept': 'application/json',
      },
      responseType: 'json' // Expecting a JSON response
    });

    // Check if the expected field exists
    const url = response.data.data?.url;
    if (url) {
      return url;
    } else {
      console.error('URL not found in response data');
      return '';
    }
  } catch (error) {
    console.error('Error fetching Google link:', error);
    return '';
  }
};

// Function to find the Google Reviews from a business (if it is missing from the Dataset)
export const googleReviews = async (uuid) => {
  try {
    const response = await axios.get(`https://api.stb.gov.sg/services/navigation/v2/places/${uuid}`, {
      headers: {
        'X-API-Key': API_KEY,
        'Accept': 'application/json',
      },
      responseType: 'json' // Expecting a JSON response
    });

    // Check if the expected field exists
    const reviews = response.data.data?.reviews;
    if (reviews) {
      return reviews;
    } else {
      console.error('URL not found in response data');
      return '';
    }
  } catch (error) {
    console.error('Error fetching Google link:', error);
    return '';
  }
};