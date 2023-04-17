import { getMovies, getLikes, postLikes } from './getData.js';
import popupWin from './popWindow.js';

const object = [];
const commentPopup = document.querySelector('.comment-popup');

const buildDivElement = (ldMovies, show) => {
  if (!show) {
    return;
  }
  const moviesItem = document.createElement('div');
  moviesItem.classList.add('moviesItem');
  moviesItem.innerHTML = `
      <img class="image" src="${show.image && show.image.medium}" alt="${show.name}">
      <div class="likes-name">
          <p class="title">${show.name}</p>
          <i class="lni lni-heart" id="${show.id}"></i>
      </div>
      <p class="likes-count">${show.likes} Likes</p>`;
  const btn = document.createElement('button');
  btn.classList = 'comment-btn';
  btn.innerHTML = 'Comments';
  moviesItem.appendChild(btn);
  btn.addEventListener('click', () => {
    commentPopup.style.display = 'grid';
    popupWin(show);
  });
  ldMovies.appendChild(moviesItem);
};

const CreateMovieElement = async (loadMovie, show) => {
  const number = document.querySelector('.Number');
  loadMovie.innerHTML = '';
  const result = await getLikes();
  const likesData = result.data || [];
  const updatedMovies = show.map((movie) => {
    const like = likesData.find((like) => Number(like.item_id, 36) === movie.id);
    // eslint-disable-next-line no-unused-expressions
    like ? movie.likes = like.likes : movie.likes = 0;
    object.push(movie);
    return movie;
  });
  for (let i = 0; i < updatedMovies.length; i += 1) {
    buildDivElement(loadMovie, updatedMovies[i]);
  }
  number.textContent = `Show (${show.length})`;
};

const showMovies = async () => {
  const loadMovies = document.querySelector('.movie-wrapper');
  const result = await getMovies();
  if (result.success) {
    await CreateMovieElement(loadMovies, result.movieData);
  }
};

const parentElement = document.querySelector('.movie-wrapper');
parentElement.addEventListener('click', async (e) => {
  if (e.target.matches('.lni.lni-heart')) {
    const numberId = e.target.id;
    const result = await postLikes(numberId);
    if (result.success) {
      const resultLike = await getLikes();
      const newLikes = resultLike.data.find((newlikes) => newlikes.item_id === numberId);
      const newParent = e.target.parentElement.parentElement;
      const addLikes = newParent.querySelector('.likes-count');
      addLikes.classList.add('transition');
      addLikes.textContent = `${newLikes.likes} Likes`;
      setTimeout(() => {
        addLikes.classList.remove('transition');
      }, 100);
    }
  }
});

export default showMovies;
