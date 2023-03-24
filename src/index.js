import './index.css';
import showMovies from './modules/moveiDataload.js';
import countItems from './modules/countItems.js';

const prepare = async () => {
  await showMovies();
  countItems();
};

prepare();
