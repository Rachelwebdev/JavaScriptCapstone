const homePageCount = () => {
  const movieContainer = document.querySelector(".movie-section");
  const count = movieContainer.childNodes.length;
  console.log(count);
  return count;
};

export default homePageCount;
