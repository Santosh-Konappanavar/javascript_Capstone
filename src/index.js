import './index.css';
import renderMovies from './modules/moveiDataload.js';
import countItems from './modules/countItems.js';

const prepare = async () => {
  await renderMovies();
  countItems();
};

prepare();
