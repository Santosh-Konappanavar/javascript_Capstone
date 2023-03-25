/* eslint-disable import/no-unresolved */
import countComments from '../modules/getCommentLength.js';

describe('comment Number', () => {
  test('Test the number of comments', () => {
    const commentsOne = [{ comment: 'Nice movie', creation_date: '2021-01-14', username: 'Ahmed' }, { comment: 'Boring', creation_date: '2022-08-12', username: 'Santosh' },
      { comment: 'Interesting movie', creation_date: '2023-11-01', username: 'Hafsa' }, { comment: 'Lovely', creation_date: '2021-11-01', username: 'Salma' }];
    expect(countComments(commentsOne)).toBe(4);
  });
  test('Test if there are no comments', () => {
    const CommentsTwo = [];
    expect(countComments(CommentsTwo)).toBe(0);
  });
});