const getcomments = async (showId) => {
  showId = showId.toString();
  const comment = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6jTH3jOos7OpnHxCg6lz/comments?item_id=${showId}`);
  const result = comment.json();
  return result;
};
export default getcomments;