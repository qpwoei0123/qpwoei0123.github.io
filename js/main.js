const projects = {
  TodoList: {
    title: "TodoList",
    desc: "처음으로 만든 TodoList",
    link: "https://qpwoei0123.github.io/todolist/",
    created: "2022",
  },
  WhoIsElon: {
    title: "WhoIsElon",
    desc: "일론머스크는 누구인가?",
    link: "",
    created: "2022",
  },
  VoiceLabeling: {
    title: "VoiceLabeling",
    desc: "더존비즈온 산학협력 프로젝트",
    link: "",
    created: "2022",
  },
  AgoraBoard: {
    title: "AgoraBoard",
    desc: "질문과 답변을 주고받는 AgoraBoard",
    link: "",
    created: "2023",
  },
  CloneSOF: {
    title: "CloneSOF",
    desc: "첫 팀 프로젝트 StackOverFlow Clone",
    link: "",
    created: "2023",
  },
  CozyState: {
    title: "CozyState",
    desc: "멍때리기 좋은 미디어 서비스 CozyState",
    link: "",
    created: "2023",
  },
  SnapWeather: {
    title: "SnapWeather",
    desc: "나의 동네 날씨를 한눈에 보여주는 SnapWeather",
    link: "",
    created: "2023",
  },
  Magnet: {
    title: "Magnet",
    desc: "멘토멘티 매칭 서비스 Magnet",
    link: "",
    created: "2024",
  },
  BurgerQueen: {
    title: "BurgerQueen",
    desc: "버거킹 컨셉의 반응형 헤더",
    link: "",
    created: "2024",
  },
  HelloThreeJs: {
    title: "HelloThreeJs",
    desc: "three.js 학습용 프로젝트, 멋진 소화기는 덤",
    link: "",
    created: "2024",
  },
  ResatTimer: {
    title: "ResatTimer",
    desc: "Resat챌린지 타이머구현",
    link: "",
    created: "2024",
  },
  ResatTodoList: {
    title: "ResatTodoList",
    desc: "Resat챌린지 TodoList구현",
    link: "",
    created: "2024",
  },
  ResatCalendar: {
    title: "ResatCalendar",
    desc: "Resat챌린지 캘린더 구현",
    link: "",
    created: "2024",
  },
  ResatCarousel: {
    title: "ResatCarousel",
    desc: "쓰로틀을 이용한 안정적인 Carousel 구현",
    link: "",
    created: "2024",
  },
  CloneMiniintern: {
    title: "CloneMiniintern",
    desc: "미니인턴 페이지 하루만에 클론하기",
    link: "",
    created: "2024",
  },
  MyPortfolio: {
    title: "MyPortfolio",
    desc: "프론트엔드라면.. 포트폴리오는 필수!",
    link: "",
    created: "2024",
  },
};

const projectList = document.getElementById("project-preview-list");

Object.keys(projects).forEach((key) => {
  const project = projects[key];
  const li = document.createElement("li");
  li.setAttribute("data-title", project.title);
  li.setAttribute("data-link", project.link);
  li.setAttribute("data-desc", project.desc);

  const h3 = document.createElement("h3");
  h3.textContent = project.title;

  const pYear = document.createElement("p");
  pYear.textContent = project.created;

  li.appendChild(h3);
  li.appendChild(pYear);
  projectList.appendChild(li);
});
