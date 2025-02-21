import axios from "axios";

// const API_URL = "http://localhost:5000"; 
const API_URL = "https://book-recommeder-backend.onrender.com"; 



export const getRecommendations = async (preferences) => {
  const response = await axios.post(`${API_URL}/recommendations`, preferences);
  console.log(response.data);
  return response.data;
};

export const getBooks = async () => {
  const response = await axios.get(`${API_URL}/books`);
  return response.data;
};

export const addPreferences = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users/preferences`, userData);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    return null;
  }
}