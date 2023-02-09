const popupContainer = document.querySelector(".popup-display");

const renderPopup = async (
  id,
  image,
  name,
  language,
  genres,
  rating,
  schedule
) => {
  popupContainer.innerHTML = "";

  popupContainer.innerHTML += `
        <div class="show-${id} movie-img-sect">
        <img src=${image.original} alt="" class="movie-img" />
        <div class="close-icon">X</div>
      </div>
      <h2 class="movie-popup-title">${name}</h2>
      <div class="movie-features">
        <p>Language: ${language}</p>
        <p>Genre: ${genres.join(",")}</p>
        <p>Rating: ${rating.average}</p>
        <p>Schedule: ${schedule.time} on ${schedule.days}s</p>
      </div>         
    `;
};

export default renderPopup;
