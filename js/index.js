document.addEventListener('DOMContentLoaded', async () => {
  window.scrollTo(0, 0);
  new WOW().init();

  const commentList = document.querySelector('.comment-list');

  const response = await fetch(
    'https://67bec437b2320ee050114166.mockapi.io/api/comments',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (response.ok) {
    const data = await response.json();

    data.forEach((comment) => {
      const li = createLi(comment.createdAt, comment.content);
      commentList.appendChild(li);
    });
  }

  window.handleRegister = async () => {
    const inputText = document.querySelector('#comment-writing');

    if (inputText.value != '') {
      const response = await fetch(
        'https://67bec437b2320ee050114166.mockapi.io/api/comments',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            content: inputText.value,
          }),
        }
      );

      if (response.ok) {
        alert('댓글이 등록되었습니다.');
        const li = createLi(Math.floor(Date.now() / 1000), inputText.value);
        commentList.appendChild(li);
        inputText.value = '';
      } else {
        alert('댓글 등록에 실패했습니다.');
      }
    }
  };
});
