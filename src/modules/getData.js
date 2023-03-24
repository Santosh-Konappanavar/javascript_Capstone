/* eslint-disable max-len */
const movies = [77, 66, 72, 4, 55, 6, 93, 8, 22, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 41, 42, 37, 38, 39, 40];
const baseUrl = 'https://api.tvmaze.com';
const showsUrl = '/shows/';
const aPiLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
// const API_KEY = '6jTH3jOos7OpnHxCg6lz';
const API_KEY = 'DnTrjJoNQD9V1kXZAGcs';
const addLike = `/apps/${API_KEY}/likes/`;

const getData = async (url = '') => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
  });
  return response.json();
};

const getlikesCount = async (url = '') => {
  const response = await fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

const hitlikesApi = async (url = '', id) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    Accept: 'text/plain',
    body: JSON.stringify({ item_id: id }),
  });
  return response.text();
};

const getMovies = async () => {
  try {
    const movielist = [];
    for (let z = 0; z < movies.length; z += 1) {
      const moviesId = baseUrl + showsUrl + movies[z];
      const promise = getData(moviesId);
      movielist.push(promise);
    }
    const movieData = await Promise.all(movielist);
    return { success: true, movieData };
  } catch (error) {
    return { success: false, error };
  }
};

const getLikes = async () => {
  try {
    const postLikeLink = aPiLink + addLike;
    const data = await getlikesCount(postLikeLink);
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};

const postLikes = async (id) => {
  try {
    const postLikeLink = aPiLink + addLike;
    const data = await hitlikesApi(postLikeLink, id);
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};

export { getMovies, getLikes, postLikes };