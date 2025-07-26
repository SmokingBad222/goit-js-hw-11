import axios from "axios";

const API_KEY = "51425733-ebfe71f47e07541f439d053d0";
const BASE_URL = "https://pixabay.com/api/";

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
  };

  try {
    const response = await axios.get(BASE_URL, { params });

    return response.data.hits;

  } catch (error) {
    console.error("Помилка під час запиту зображень:", error.message);
    throw error;
  }
}