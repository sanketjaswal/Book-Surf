import axios from "axios";

const API_URL = "http://localhost:3000"; 

export const getRecommendations = async (preferences) => {
  const response = await axios.post(`${API_URL}/recommendations`, preferences);
  console.log(response.data);
  return response.data;
};

export const getBooks = async () => {
  const response = await axios.get(`${API_URL}/books`);
  return response.data;
};
