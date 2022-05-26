import axios from 'axios';
export const apiGETcall = async (url) => {
  console.count('call_API');
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};
