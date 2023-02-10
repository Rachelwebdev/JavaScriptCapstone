import homePageCount from '../modules/homePageCounter.js';

// const home = document.createElement("ul");
// home.classList.add("movie-section");
// for (let i = 1; i < 7; i += 1) {
//   const div = document.createElement("div");
//   home.appendChild(div);
// }

// describe([home, "(6)"])(
//   "check number of shows in a page: ",
//   (mainPage, expected) => {
//     document.body.innerHTML = `<span class="show-count"></span>`;
//     document.body.appendChild(mainPage);
//     const count = document.body.querySelector(".show-count");
//     homePageCount(count);
//     test(`test with ${mainPage.childElementCount} number of items in the page:`, () => {
//       expect(count.innerHTML).toBe(expected);
//     });
//   }
// );

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
