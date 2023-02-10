const homePageCount = () => {
  const movieContainer = document.querySelector(".movie-section");
  const count = movieContainer.childElementCount;
  return count;
};

export default homePageCount;
