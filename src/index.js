import './index.css';

const movieList = document.querySelector('#movie');

function getMealList() {
  fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((shows) => {
      if (shows) {
        shows.forEach((show) => {
          document.querySelector('.list-count').innerHTML = movieList.children.length;
          movieList.innerHTML += `
            <div class="movie-item-wrapper" data-id="${show.id}">
              <div class="movie-item">
                <div class="movie-img">
                  <img src="${show.image.medium}" alt="food">
                </div>
                <div class="movie-name">
                  <div class="likeholder">
                    <h3>${show.name}</h3>
                    <h5>Like</h5>
                  </div>
                  <a href="#" class="comment-btn">Comments</a>
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