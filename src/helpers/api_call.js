import axios from 'axios';
export const apiGETcall = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const apiPOSTcall = async (url,data) => {
  try {
    const response = await axios.post(url,data);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const apiDELETEcall = async (url) => {
  try {
    const response = await axios.delete(url);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};