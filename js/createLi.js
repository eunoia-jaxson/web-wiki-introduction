function createLi(timestamp, content) {
  // <li> 요소 생성
  const li = document.createElement('li');

  // comment-item DIV
  const commentItem = document.createElement('div');
  commentItem.classList.add('comment-item');

  const commentHeader = document.createElement('div');
  commentHeader.classList.add('comment-header');

  // comment-author DIV
  const commentAuthor = document.createElement('div');
  commentAuthor.classList.add('comment-author');

  // img 요소
  const authorImg = document.createElement('img');
  authorImg.src = './images/comment-author-icon.png';
  authorImg.alt = '사용자 프로필 이미지';

  // span 요소 (작성자명)
  const authorSpan = document.createElement('span');
  authorSpan.textContent = '방문자';

  const commentDate = document.createElement('span');
  commentDate.classList.add('comment-date');
  commentDate.textContent = formatUnixTimestamp(timestamp);

  // comment-content DIV
  const commentContent = document.createElement('div');
  commentContent.classList.add('comment-content');
  commentContent.textContent = content;

  // 계층 구조 조립
  commentAuthor.appendChild(authorImg);
  commentAuthor.appendChild(authorSpan);

  commentHeader.appendChild(commentAuthor);
  commentHeader.appendChild(commentDate);

  commentItem.appendChild(commentHeader);
  commentItem.appendChild(commentContent);

  li.appendChild(commentItem);

  return li;
}
