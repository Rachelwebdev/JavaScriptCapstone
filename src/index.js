import './style.css';

import renderHomePage from './modules/renderHomePage.js';
import getMovieData from './modules/getMovies.js';
import renderPopup from './modules/renderPopup.js';
import getLike from './modules/getLikeData.js';
import postLike from './modules/postLikeData.js';
import homePageCount from './modules/homePageCounter.js';

const showContainer = document.querySelector('.movie-section');
const popupContainer = document.querySelector('.popup-display');
const showCount = document.querySelector('.show-count');

const addEvents = () => {
  const heartIcon = document.querySelectorAll('.fa-heart');
  heartIcon.forEach((element) => {
    element.addEventListener('click', () => {
      postLike(element.dataset.id);
    });
  });
};

window.addEventListener('load', async () => {
  const shows = await getMovieData();
  renderHomePage(shows);
  addEvents();
  getLike();
  document.addEventListener('click', async (e) => {
    const button = e.target.closest('.comments-btn');
    const closeButton = e.target.closest('.close-icon');

    if (button) {
      const selectedShow = shows.filter(
        (it) => it.id.toString() === button.id.toString(),
      )[0];
      const {
        id, image, name, language, genres, rating, schedule,
      } = selectedShow;
      showContainer.style.display = 'none';
      popupContainer.style.display = 'block';
      renderPopup(id, image, name, language, genres, rating, schedule);
    }

    if (closeButton) {
      popupContainer.style.display = 'none';
      showContainer.style.display = 'grid';
      renderHomePage(shows);
      addEvents();
      getLike();
    }
  });

  const showContent = document.querySelectorAll('.single-movie');
  showCount.innerHTML = homePageCount(showContent);
});
