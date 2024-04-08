import axios from "axios";

// http://www.omdbapi.com/?i=tt3896198&apikey=32ffc322&t
// http://www.omdbapi.com/?apikey=32ffc322&

const url = "https://www.omdbapi.com/?apikey=32ffc322&t=";

export const fetchFromAPI = async (str) => {
  try {
    const response = await axios.get(url + str);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};
