import './index.css';

const movieList = document.querySelector('#movie');
/* eslint-disable no-underscore-dangle */
function getMealList() {
  fetch('https://api.tvmaze.com/singlesearch/shows?q=girls&embed=episodes')
    .then((response) => response.json())
    .then((data) => {
      if (data._embedded.episodes) {
        data._embedded.episodes.forEach((movie) => {
          document.querySelector('.list-count').innerHTML = movieList.children.length;
          movieList.innerHTML += `
            <div class="movie-item-wrapper" data-id="${movie.id}">
              <div class="movie-item">
                <div class="movie-img">
                  <img src="${movie.image.medium}" alt="food">
                </div>
                <div class="movie-name">
                  <div class="likeholder">
                    <h3>${movie.name}</h3>
                    <h5>Like</h5>
                  </div>
                  <a href="#" class="recipe-btn">Comments</a>
                </div>
              </div>
            </div>
          `;
        });
      } else {
        movieList.innerHTML = 'Sorry we dont have your search';
      }
    });
}
document.addEventListener('DOMContentLoaded', () => {
  getMealList();
});