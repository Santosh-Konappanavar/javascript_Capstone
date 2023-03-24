import './index.css';

const commentFunctionality = require('./modules/comm-Functionality');

const movieList = document.querySelector('#movie');
const movieclosebtn = document.querySelector('.movie-close-btn');
const showDetailsContent = document.querySelector('.show-details-content');

function getMealList() {
  const moviewrapper = document.querySelector('.movie-wrapper');
  fetch('https://api.tvmaze.com/shows')
    .then((response) => response.json())
    .then((shows) => {
      if (shows) {
        shows.forEach((show, index) => {
          moviewrapper.id = index;
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
      }
    });
}

function movieShow(show) {
  console.log(show);
  const html = `
        <div class="movie-show-img">
          <img src="${show.image.medium}" alt="${show.name}">
        </div>
        <h2 class="movie-title">${show.name}</h2>
        <p class="show-category">Language: ${show.language}</p>
        <p class="show-category">Type: ${show.type}</p>
        <p class="summary">${show.summary}</p>
        <div class="comment-holder">
          <h3>Add Comment (<span class="comment-count"></span>)</h3>
          <ul class="comment-list">
           
          </ul>
        </div>
        <form class="comment-form" data-item-id="start1">
          <input type="text" placeholder="Your Name" id="name">
          <textarea name="comments" id="comment" cols="30" rows="10" placeholder="Your comments"></textarea>
          <button class="submit-btn" type="submit">Submit</button>
          <p class="save-msg"></p>
        </form>
      `;
  showDetailsContent.innerHTML = html;
  showDetailsContent.parentElement.classList.add('showmovie');
}

function getmovieshow(e) {
  e.preventDefault();
  if (e.target.classList.contains('comment-btn')) {
    const movieItem = e.target.parentElement.parentElement.parentElement;
    fetch(`https://api.tvmaze.com/shows/${movieItem.dataset.id}`)
      .then((response) => response.json())
      .then((data) => movieShow(data))
      .catch((error) => console.log(error));
  }
}

movieclosebtn.addEventListener('click', () => {
  showDetailsContent.parentElement.classList.remove('showmovie');
});

commentFunctionality();

document.addEventListener('DOMContentLoaded', () => {
  getMealList();
});

movieList.addEventListener('click', getmovieshow);