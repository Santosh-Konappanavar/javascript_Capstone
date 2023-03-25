const getcomments = async (showId) => {
  showId = showId.toString();
  const comment = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DnTrjJoNQD9V1kXZAGcs/comments?item_id=${showId}`);
  const result = comment.json();
  return result;
};
export default getcomments;