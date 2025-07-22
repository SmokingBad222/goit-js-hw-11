const API_KEY = "51425733-ebfe71f47e07541f439d053d0";
const BASE_URL = "https://pixabay.com/api/";

export function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
  });

  return fetch(`${BASE_URL}?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
}