import { projects, footerLinks } from "./data.js";

// HTML 요소를 생성하는 함수
const createElement = (tag, className, textContent) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
};

// 프로젝트의 헤더를 생성하는 함수
const createHeader = ({ title, created }) => {
  const header = createElement("div", "header");
  header.appendChild(createElement("h3", null, title));
  header.appendChild(createElement("p", null, created));
  return header;
};

// 프로젝트의 본문을 생성하는 함수
const createBody = ({ title, desc, link }) => {
  const body = createElement("div", "body");

  const bodyImage = createElement("img");
  bodyImage.src = `./images/gif/${title}.gif`;
  bodyImage.addEventListener("click", () => {
    window.open(link, "_blank");
  });

  const descriptionBox = createElement("div");
  descriptionBox.appendChild(createElement("h3", null, title));
  descriptionBox.appendChild(createElement("p", null, desc));

  body.appendChild(bodyImage);
  body.appendChild(descriptionBox);
  return body;
};

// 프로젝트 요소를 생성하는 함수
const createProjectElement = (project) => {
  const li = createElement("li");
  li.appendChild(createHeader(project));
  li.appendChild(createBody(project));
  return li;
};

// 커서 이미지를 생성하는 함수
const createCursorImage = (title) => {
  const cursorImg = createElement("img");
  cursorImg.src = `./images/${title}.png`;
  return cursorImg;
};

// 프로젝트를 렌더링하는 함수
const renderProjects = (projects, projectList, imgWarp) => {
  Object.values(projects).forEach((project) => {
    projectList.appendChild(createProjectElement(project));
    imgWarp.appendChild(createCursorImage(project.title));
  });
};

// 푸터 아이콘을 생성하는 함수
const createFooterIcon = ({ icon, link }) => {
  const i = createElement("i", icon);
  i.addEventListener("click", () => window.open(link, "_blank"));
  const div = createElement("div");
  div.appendChild(i);
  return div;
};

// 푸터 링크를 렌더링하는 함수
const renderFooterLinks = (footerLinks, footerIconBox) => {
  Object.values(footerLinks).forEach((link) =>
    footerIconBox.appendChild(createFooterIcon(link))
  );
};

// DOM 요소 선택
const imgWarp = document.querySelector(".con5 .imgBox .imgWarp");
const projectList = document.getElementById("project-preview-list");
const footerIconBox = document.querySelector("footer .btnBox");

// 프로젝트와 푸터 링크 렌더링
renderProjects(projects, projectList, imgWarp);
renderFooterLinks(footerLinks, footerIconBox);
