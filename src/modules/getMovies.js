const getMovieData = async () => {
  const response = await fetch("https://api.tvmaze.com/shows");
  const getMovie = await response.json();
  const selectedMovies = getMovie.slice(1, 7);
  //   console.log(selectedMovies);
  return selectedMovies;
};

export default getMovieData;
