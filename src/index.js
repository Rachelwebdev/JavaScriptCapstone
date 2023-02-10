import "./style.css";

import renderHomePage from "./modules/renderHomePage.js";
import getMovieData from "./modules/getMovies.js";
import renderPopup from "./modules/renderPopup.js";
import getLike from "./modules/getLikeData.js";
import postLike from "./modules/postLikeData.js";
import displayLike from "./modules/displayLikes";

const showContainer = document.querySelector(".movie-section");
const popupContainer = document.querySelector(".popup-display");
const heartIcon = document.getElementsByClassName("fa-heart");
console.log(heartIcon);

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

  getLike();
});

for (let i = 0; i < heartIcon.length; i++) {
  heartIcon[i].addEventListener("click", () => {
    console.log("clicked");
    displayLike(likes);
  });
}
