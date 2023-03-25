import countItems from '../modules/countItems.js';

describe('countItems', () => {
  test('counts the number of items in the movie wrapper', () => {
    document.body.innerHTML = `
      <div class="movie-wrapper">
        <div>Movie 1</div>
        <div>Movie 2</div>
        <div>Movie 3</div>
      </div>
    `;

    // Call the function and expect it to return the correct value
    expect(countItems()).toBe(3);
  });
});