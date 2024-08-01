// 3초 뒤에 스크롤 가능
window.addEventListener("load", () => {
  setTimeout(() => {
    document.documentElement.style.overflowY = "scroll";
  }, 3000);
});

// 새로고침 시 스크롤 위치 초기화
window.onbeforeunload = (e) => {
  window.scrollTo(0, 0);
  document.documentElement.style.overflowY = "hidden";
};
