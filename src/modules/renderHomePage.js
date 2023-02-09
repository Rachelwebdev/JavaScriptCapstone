const showContainer = document.querySelector('.movie-section');

const renderHomePage = async (shows) => {
  showContainer.innerHTML = '';
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
};

export default renderHomePage;
