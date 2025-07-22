import { getImagesByQuery } from "./js/pixabay-api.js";
import { createGallery, clearGallery, showLoader, hideLoader } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");
const searchInput = form.querySelector("input[name='search-text']");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();

  if (!query) {
    iziToast.error({ title: "Error", message: "Please enter a search query!", position: "topRight" });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: "No Results",
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight"
        });
        return;
      }
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: "Error",
        message: "An error occurred while fetching images. Please try again later.",
        position: "topRight"
      });
    })
    .finally(() => {
      hideLoader();
    });
});
