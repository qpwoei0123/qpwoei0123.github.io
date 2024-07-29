import { projects, footerLinks } from "./data.js";

import "./scrollControl.js";
import "./gsap.js";

import "./styles.css";

/**
 * HTML 요소를 생성하는 함수
 *
 * @param {string} tag - 생성할 HTML 태그 이름.
 * @param {string} [className] - 요소에 추가할 클래스 이름.
 * @param {string} [textContent] - 요소에 설정할 텍스트 내용.
 * @returns {HTMLElement} 생성된 HTML 요소.
 */
const createElement = (tag, className, textContent) => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (textContent) element.textContent = textContent;
  return element;
};

/**
 * 프로젝트의 헤더를 생성하는 함수
 *
 * @param {Object} project - 프로젝트 객체.
 * @param {string} project.title - 프로젝트 제목.
 * @param {string} project.created - 프로젝트 생성 날짜.
 * @returns {HTMLElement} 생성된 헤더 요소.
 */
const createHeader = ({ title, created }) => {
  const header = createElement("div", "header");
  header.appendChild(createElement("h3", null, title));
  header.appendChild(createElement("p", null, created));
  return header;
};

/**
 * 프로젝트의 본문을 생성하는 함수
 *
 * @param {Object} project - 프로젝트 객체.
 * @param {string} project.title - 프로젝트 제목.
 * @param {string} project.desc - 프로젝트 설명.
 * @param {string} project.link - 프로젝트 링크.
 * @returns {HTMLElement} 생성된 본문 요소.
 */
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

/**
 * 프로젝트 요소를 생성하는 함수
 *
 * @param {Object} project - 프로젝트 객체.
 * @returns {HTMLElement} 생성된 프로젝트 요소.
 */
const createProjectElement = (project) => {
  const li = createElement("li");
  li.appendChild(createHeader(project));
  li.appendChild(createBody(project));
  return li;
};

/**
 * 커서 이미지를 생성하는 함수
 *
 * @param {string} title - 이미지 파일 이름(확장자 제외).
 * @returns {HTMLElement} 생성된 이미지 요소.
 */
const createCursorImage = (title) => {
  const cursorImg = createElement("img");
  cursorImg.src = `./images/${title}.png`;
  return cursorImg;
};

/**
 * 프로젝트를 렌더링하는 함수
 *
 * @param {Object[]} projects - 프로젝트 객체 배열.
 * @param {HTMLElement} projectList - 프로젝트 리스트 요소.
 * @param {HTMLElement} imgWarp - 커서 이미지 래퍼 요소.
 */
const renderProjects = (projects, projectList, imgWarp) => {
  Object.values(projects).forEach((project) => {
    projectList.appendChild(createProjectElement(project));
    imgWarp.appendChild(createCursorImage(project.title));
  });
};

/**
 * 푸터 아이콘을 생성하는 함수
 *
 * @param {Object} link - 링크 객체.
 * @param {string} link.icon - 아이콘 클래스 이름.
 * @param {string} link.link - 링크 URL.
 * @returns {HTMLElement} 생성된 아이콘 요소.
 */
const createFooterIcon = ({ icon, link }) => {
  const i = createElement("i", icon);
  i.addEventListener("click", () => window.open(link, "_blank"));
  const div = createElement("div");
  div.appendChild(i);
  return div;
};

/**
 * 푸터 링크를 렌더링하는 함수
 *
 * @param {Object[]} footerLinks - 푸터 링크 객체 배열.
 * @param {HTMLElement} footerIconBox - 푸터 아이콘 박스 요소.
 */
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
