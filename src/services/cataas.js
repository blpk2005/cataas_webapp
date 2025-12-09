import axios from 'axios';

// API service for CATAAS endpoints
const BASE_URL = 'https://cataas.com';

export const fetchRandomCat = async () => {
  return `${BASE_URL}/cat?${Date.now()}`;
};

export const fetchCatByTag = async (tag) => {
  return `${BASE_URL}/cat?tags=${encodeURIComponent(tag)}&${Date.now()}`;
};

export const fetchCatWithText = async (text) => {
  return `${BASE_URL}/cat/says/${encodeURIComponent(text)}?${Date.now()}`;
};

export const fetchRandomGif = async () => {
  return `${BASE_URL}/cat/gif?${Date.now()}`;
};
