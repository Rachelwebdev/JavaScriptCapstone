import getMovieData from "./getMovies.js";
import renderHomePage from "./renderHomePage.js";

const popupContainer = document.querySelector(".popup-display");
const closePopup = document.getElementsByClassName(".close-icon");

const renderPopup = async (e) => {
  popupContainer.innerHTML = "";
  const shows = await getMovieData();
  shows.forEach((item) => {
    popupContainer.innerHTML += `
        <div class="show-${item.id} movie-img-sect">
        <img src=${item.image.original} alt="" class="movie-img" />
        <div class="close-icon">X</div>
      </div>
      <h2 class="movie-popup-title">${item.name}</h2>
      <div class="movie-features">
        <p>Language: ${item.language}</p>
        <p>Genre: ${item.genres[0]}</p>
        <p>Rating: ${item.rating.average}</p>
        <p>Schedule: ${item.schedule.time} on ${item.schedule.days}s</p>
      </div>         
    `;
  });

  for (let i = 0; i < closePopup.length; i += 1) {
    closePopup[i].addEventListener("click", (e) => {
      e.preventDefault();
      popupContainer.style.display = "none";
      renderHomePage();
    });
  }
};

export default renderPopup;
