import axios from 'axios';

export async function generatePolicy(firmData) {
  try {
    const response = await axios.post('http://localhost:3001/api/completions', firmData);
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error fetching completions:', error);
    throw error;
  }
}
