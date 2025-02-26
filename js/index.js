document.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
  new WOW().init();

  const textArea = document.querySelector('#comment-writing');

  window.handleCancel = () => {
    if (
      textArea.value != '' &&
      window.confirm('댓글 작성을 취소하시겠습니까?')
    ) {
      textArea.value = '';
    }
  };

  window.handleRegister = () => {
    if (textArea.value != '' && window.confirm('댓글을 등록하시겠습니까?')) {
      textArea.value = '';
    }
  };
});
