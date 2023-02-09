import getMovieData from "./getMovies.js";
import renderPopup from "./renderPopup";

const showContainer = document.querySelector(".movie-section");
const commentMainBtn = document.getElementsByClassName("comments-btn");

const renderHomePage = async () => {
  showContainer.innerHTML = "";
  const shows = await getMovieData();
  shows.forEach((item) => {
    showContainer.innerHTML += `
        <div class="show-${item.id} single-movie">
        <img src=${item.image.medium} alt="movie-image" class="image-pic" />
        <div class="desc">
          <p class="movie-title">${item.name}</p>
          <div class="likes">
            <i class="fa-sharp fa-regular fa-heart"></i>
            <p data-id = "${item.id}">5 likes</p>
          </div>
        </div>
        <button class="comments-btn" id=${item.id}>Comments</button>
      </div>
    `;
  });
  for (let i = 0; i < commentMainBtn.length; i += 1) {
    commentMainBtn[i].addEventListener("click", (e) => {
      e.preventDefault();
      showContainer.style.display = "none";
      renderPopup(e.target.id);
    });
  }
};

export default renderHomePage;
