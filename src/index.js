import "./style.css";

import renderHomePage from "./modules/renderHomePage.js";
import getMovieData from "./modules/getMovies";
import renderPopup from "./modules/renderPopup";
// import getLike from "./modules/getLikeData.js";

const showContainer = document.querySelector(".movie-section");
const popupContainer = document.querySelector(".popup-display");

window.addEventListener("load", async () => {
  const shows = await getMovieData();
  renderHomePage(shows);
  document.addEventListener("click", async (e) => {
    const button = e.target.closest(".comments-btn");
    const closeButton = e.target.closest(".close-icon");

    if (button) {
      const selectedShow = shows.filter(
        (it) => it.id.toString() === button.id.toString()
      )[0];
      const { id, image, name, language, genres, rating, schedule } =
        selectedShow;
      showContainer.style.display = "none";
      popupContainer.style.display = "block";
      renderPopup(id, image, name, language, genres, rating, schedule);
    }

    if (closeButton) {
      popupContainer.style.display = "none";
      showContainer.style.display = "grid";
      renderHomePage(shows);
    }
  });

  // getLike();
});
