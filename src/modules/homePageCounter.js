const homePageCount = () => {
  const movieContainer = document.querySelector(".movie-section");
  const count = movieContainer.childElementCount;
  console.log(count);
  return count;
};

export default homePageCount;
