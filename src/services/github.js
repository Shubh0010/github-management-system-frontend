import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

export const searchUser = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};