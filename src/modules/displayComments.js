import countComments from './countcomments.js';

const displayComments = (getcomment, usercomment) => {
  usercomment.innerHTML = '';
  if (getcomment.length > 0) {
    getcomment.forEach((comment) => {
      const listlink = document.createElement('li');
      listlink.classList.add('commment-item');
      listlink.innerHTML = `${comment.creation_date} ${comment.username} : ${comment.comment}`;
      usercomment.appendChild(listlink);
    });
    const checkCount = document.querySelector('.total-comments');
    const commentCount = countComments(getcomment);
    checkCount.innerHTML = `(${commentCount})`;
  }
};

export default displayComments;