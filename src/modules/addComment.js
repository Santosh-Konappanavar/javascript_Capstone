import getcomments from './getComments.js';
import displayComments from './displayComments.js';

const commentAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6jTH3jOos7OpnHxCg6lz/comments/';

export default (button, username, text, showId) => {
  button.addEventListener('click', async (event) => {
    event.preventDefault();
    showId = showId.toString();
    const name = username.value.trim();
    const comment = text.value.trim();
    if (name && comment) {
      await fetch(commentAPI, {
        method: 'POST',
        body: JSON.stringify({
          item_id: showId,
          username: name,
          comment,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    }
    username.value = '';
    text.value = '';

    const getcomment = await getcomments(showId);
    const usercomment = document.querySelector('.comments-list');
    displayComments(getcomment, usercomment);
  });
};