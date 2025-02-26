document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const aside = document.querySelector('aside');
  const main = document.querySelector('main');

  const setStyle = () => {
    if (window.innerWidth < 768) {
      header.style.position = 'initial';
      aside.style.position = 'initial';
      main.style.marginLeft = '0';
      main.style.marginRight = '0';
      header.style.height = `${document.body.offsetHeight}px`;
      aside.style.height = `${document.body.offsetHeight}px`;
    } else {
      header.style.position = 'fixed';
      aside.style.position = 'fixed';
      main.style.marginLeft = '235px';
      main.style.marginRight = '350px';
    }
  };

  // 화면 너비가 768px 미만일 때 화면 너비 변경 이벤트 발생 시
  window.addEventListener('resize', () => {
    setStyle();
  });

  setStyle();
});
