import homePageCount from '../modules/homePageCounter.js';

describe('test for movie: ', () => {
  test('6 movies Added', () => {
    document.body.innerHTML = `
     <div class="movie-section">
         <li class="single-movie"></li>
        <li class="single-movie"></li>
        <li class="single-movie"></li>
        <li class="single-movie"></li>
        <li class="single-movie"></li>
    </div>
        `;
    const movies = homePageCount();
    expect(movies).toBe(5);
  });

  test('No Movies were added [0]', () => {
    document.body.innerHTML = '<div class="movie-section"></div>';

    const movies = homePageCount();
    expect(movies).toBe(0);
  });
});
