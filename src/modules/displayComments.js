import countComments from './getCommentLength.js';

const displayComments = (getcommentsData, usercomment) => {
  usercomment.innerHTML = '';
  if (getcommentsData.length > 0) {
    getcommentsData.forEach((comment) => {
      const listlink = document.createElement('li');
      listlink.classList.add('commment-item');
      listlink.innerHTML = `${comment.creation_date} ${comment.username} : ${comment.comment}`;
      usercomment.appendChild(listlink);
    });
    const checkCount = document.querySelector('.comment-count');
    const commentCount = countComments(getcommentsData);
    checkCount.innerHTML = `(${commentCount})`;
  }
};

export default displayComments;