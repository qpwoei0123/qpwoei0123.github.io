window.onload = function () {
  // loading 애니메이션
  let loading = document.querySelector(".loading");
  let rotate = document.querySelectorAll(".rotate");
  let opacity = document.querySelectorAll(".opacity");

  loading.classList.add("scene1");
  setTimeout(() => {
    loading.classList.add("scene2");
  }, 1000);
  setTimeout(() => {
    loading.classList.remove("scene1", "scene2");
    loading.classList.add("displayNone");
  }, 2000);
  setTimeout(() => {
    rotate.forEach((el) => {
      el.classList.add("on");
    });
  }, 2000);
  setTimeout(() => {
    opacity.forEach((el) => {
      el.classList.add("on");
    });
  }, 2000);

  gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 사용 준비

  // 비주얼 섹션 애니메이션
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".visual",
        start: "100% 100%", // trigger와 viewport의 어느 지점에서 시작할지
        end: "100% 0%", // trigger와 viewport의 어느 지점에서 끝낼지
        scrub: 3, //  스크롤 속도에 따라 애니메이션 속도가 조절됨
      },
    })
    .to(".visual h1", { opacity: 0, duration: 1 }, 0) // 0초에 h1의 투명도를 0으로 변경
    .to(".visual h2", { opacity: 0, duration: 1 }, 1) // 1초에 h2의 투명도를 0으로 변경
    .to(".visual h2 span", { color: "#e36840", duration: 1 }, 0) // 1초에 h2의 span의 x값을 100으로 변경
    .to(
      " .logoWrap .y",
      { x: 70, y: 350, rotate: 20, ease: "none", duration: 3 },
      0
    )
    .to(
      " .logoWrap .o",
      { x: -50, y: 250, rotate: -50, ease: "none", duration: 3 },
      0
    )
    .to(
      ".logoWrap .u",
      { x: 0, y: 400, rotate: -5, ease: "none", duration: 3 },
      0
    )
    .to(
      ".logoWrap .n",
      { x: 40, y: 200, rotate: -40, ease: "none", duration: 3 },
      0
    )
    .to(
      ".logoWrap .g",
      {
        x: -90,
        y: 450,
        rotate: 150,
        ease: "none",
        duration: 3,
      },
      0
    )
    .to(
      ".logoWrap .star",
      {
        x: -50,
        y: 200,
        rotate: -350,
        ease: "none",
        duration: 3,
      },
      0
    );

  // 메인텍스트 애니메이션
  gsap.utils.toArray(".titleBox *").forEach((el) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top bottom",
          scrub: 1,
        },
      })
      .fromTo(
        el,
        { overflow: "hidden", y: 150 },
        { overflow: "hidden", y: 0 },
        0
      );
  });

  // 서브텍스트 애니메이션
  gsap.utils.toArray(".subText p").forEach((el) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top bottom",
          scrub: 2,
        },
      })
      .fromTo(
        el,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "none", duration: 1 },
        0
      );
  });

  // con1 imgBox
  gsap.utils.toArray(".con1 .imgBox").forEach((el) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "bottom bottom",
          end: "bottom top",
          scrub: 2,
        },
      })
      .fromTo(el, { rotate: "10deg" }, { rotate: "-10deg" });
  });
  // con4 listBox 스크롤 애니메이션
  gsap.utils.toArray(".con4 .listBox .box").forEach((el, idx) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "0% 0%",
          end: "50% 0%",
          scrub: 1,
        },
      })
      .to(
        el,
        {
          y: idx * 20,
          scale: 0.9 + idx * 0.05,
          transform: "rotateX(-10deg)",
          transformOrigin: "top",
          filter: "brightness(0.7)",
        },
        0
      );
  });

  // con3 listBox 스크롤 애니메이션
  gsap.utils.toArray(".con3 .listBox li").forEach((el, idx) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "50% bottom",
          scrub: 1,
        },
      })
      .fromTo(
        el,
        { opacity: 0, rotationY: "45deg" },
        {
          opacity: 1,
          rotationY: "0deg",
          ease: "none",
          delay: (idx % 3) * 1,
        },
        0
      );
  });
  // con5 listBox li 호버 이미지 애니메이션
  let listBox = document.querySelectorAll(".con5 .listBox li");
  let imgBox = document.querySelector(".con5 .imgBox");
  let img = document.querySelector(".con5 .imgBox img");
  let imgText = document.querySelector(".con5 .imgBox p");
  let progressBar = document.querySelector(".con5 .progressBar");

  function addLongPressEvent(element, callback, duration = 1000) {
    let timer;

    element.addEventListener("mousedown", function () {
      timer = setTimeout(callback, duration);
      progressBar.style.width = "100%";
    });

    element.addEventListener("mouseup", function () {
      clearTimeout(timer);
      progressBar.style.width = "0%";
    });

    element.addEventListener("mouseleave", function () {
      clearTimeout(timer);
      progressBar.style.width = "0%";
    });
  }

  for (let i = 0; i < listBox.length; i++) {
    addLongPressEvent(listBox[i], () => {
      const url = listBox[i].getAttribute("data-link");
      if (url) {
        window.open(url, "_blank");
      } else {
        alert("URL이 설정되지 않았습니다.");
      }
    });

    listBox[i].addEventListener("mouseover", () => {
      document.body.style.cursor = "none";
      const customValue = listBox[i].getAttribute("data-title");
      const customDesc = listBox[i].getAttribute("data-desc");
      imgText.textContent = customDesc;
      img.src = `images/${customValue}.png`;
      gsap.set(imgBox, { scale: 0, opacity: 0, duration: 0.5 }),
        gsap.to(imgBox, { scale: 1, opacity: 1, duration: 0.5 });
    });
    listBox[i].addEventListener("mousemove", (e) => {
      let x = e.pageX;
      let y = e.pageY;
      imgBox.style.left = x + "px";
      imgBox.style.top = y + "px";
    });
    listBox[i].addEventListener("mouseout", () => {
      document.body.style.cursor = "auto";
      gsap.to(imgBox, { scale: 0, opacity: 0, duration: 0.5 });
    });
  }

  // con5 textAni 애니메이션
  let textAniList = document.querySelectorAll(".con5 .textAni li");
  let textAni = gsap.timeline({ repeat: -1 });
  for (let i = 0; i < textAniList.length; i++) {
    textAni.to(textAniList[i], 2, {
      opacity: 1,
      repeat: 1,
      yoyo: true,
      ease: "power4.out",
      delay: 0,
      x: 0,
    });
  }

  // footer 애니메이션
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
        end: "top top",
        scrub: 3,
      },
    })
    .to(".logoWrap", { top: "20%", ease: "none", duration: 3 }, 0)
    .to(
      ".logoWrap .y",
      { x: 100, y: 100, rotate: 20, ease: "none", duration: 3 },
      0
    )
    .to(
      ".logoWrap .o",
      { x: 80, y: 120, rotate: -50, ease: "none", duration: 3 },
      0
    )
    .to(
      ".logoWrap .u",
      { x: 10, y: 80, rotate: 70, ease: "none", duration: 3 },
      0
    )
    .to(
      ".logoWrap .n",
      { x: -30, y: 70, rotate: -30, ease: "none", duration: 3 },
      0
    )
    .to(
      ".logoWrap .g",
      {
        x: -80,
        y: 80,
        rotate: 100,
        ease: "none",
        duration: 3,
      },
      0
    );

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "footer .btnBox",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
    })
    .to(
      "footer .btnBox div:nth-of-type(1)",
      {
        rotate: "20deg",
        y: 6,
        x: -20,
        duration: 3,
      },
      0
    )
    .to(
      "footer .btnBox div:nth-of-type(2)",
      { rotate: "-10deg", y: -20, x: 8, duration: 3 },
      0
    )
    .to(
      "footer .btnBox div:nth-of-type(3)",
      { rotate: "-16deg", y: 30, x: -6, duration: 3 },
      0
    )
    .to(
      "footer .btnBox div:nth-of-type(4)",
      { rotate: "33deg", y: 15, x: 3, duration: 3 },
      0
    );

  // 페이지 로드 시에 바로 스크롤바를 숨깁니다.
  document.body.classList.add("hide-scrollbar");

  // 2.5초 후에 스크롤바를 다시 보여줍니다.
  setTimeout(function () {
    document.body.classList.remove("hide-scrollbar");
  }, 3000);
  // 페이지 이동 시 스크롤바를 맨 위로 이동시킵니다.
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
};
