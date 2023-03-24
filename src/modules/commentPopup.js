import addComment from './addComment.js';
import displayComments from './displayComments.js';
import getcomments from './getComments.js';

const commentPopup = document.querySelector('.comment-popup');

const popupWin = async (show) => {
  const closeSign = document.createElement('span');
  closeSign.innerHTML = 'X';
  closeSign.classList = 'close-comment';
  commentPopup.appendChild(closeSign);
  commentPopup.innerHTML += `
<img src="${show.image.medium}" class="popup-img">
<h3 class="show-name">${show.name}</h3>
<table>
  <tr>
    <td>
      <b>Language:</b> ${show.language}
    </td>
    <td>
      <b>Type:</b> ${show.type}
    </td>
  </tr>
</table>
<P class="summary">${show.summary}</p>
<h3 class="comment-holder">
    Comments <span class="comment-count">(0)</span>
    </h3>
    <ul class="comments-list">

    </ul>
    <h2 class="form-title">Add a comment</h2>
    <form class="comment-form">
      <input id="name" type="text" name="username" placeholder="Your name" required>
      <textarea id="textarea" placeholder="Your insights" name="comment" required minlength="1"></textarea>
      <button class="submit-btn" type="submit">Submit</button>
    </form>`;
  /* eslint-disable no-use-before-define */
  const getcomments = await getcomments(show.id);
  const usercomment = document.querySelector('.comments-list');
  displayComments(getcomments, usercomment);

  const comBtn = document.querySelector('.submit-btn');
  const name = document.querySelector('#name');
  const text = document.querySelector('#textarea');
  addComment(comBtn, name, text, show.id);
};
commentPopup.addEventListener('click', (event) => {
  if (event.target.closest('.close-comment')) {
    commentPopup.style.display = 'none';
    commentPopup.innerHTML = '';
  }
});
getcomments();
export default popupWin;