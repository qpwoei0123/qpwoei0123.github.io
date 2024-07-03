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
        scrub: 1, //  스크롤 속도에 따라 애니메이션 속도가 조절됨
      },
    })
    .to(".visual h1", { opacity: 0, duration: 1 }, 0) // 0초에 h1의 투명도를 0으로 변경
    .to(".visual h2", { opacity: 0, duration: 1 }, 1) // 1초에 h2의 투명도를 0으로 변경
    .to(".visual h2 span", { color: "#e36840", duration: 1 }, 0) // 1초에 h2의 span의 x값을 100으로 변경
    .to(
      " .logoWrap .y",
      { x: 70, y: 350, rotate: 20, ease: "none", duration: 2 },
      0
    )
    .to(
      " .logoWrap .o",
      { x: -50, y: 250, rotate: -50, ease: "none", duration: 2 },
      0
    )
    .to(
      ".logoWrap .u",
      { x: 0, y: 400, rotate: -5, ease: "none", duration: 2 },
      0
    )
    .to(
      ".logoWrap .n",
      { x: 40, y: 200, rotate: -40, ease: "none", duration: 2 },
      0
    )
    .to(
      ".logoWrap .g",
      {
        x: -90,
        y: 450,
        rotate: 150,
        ease: "none",
        duration: 2,
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
        duration: 2,
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

  // con5 섹션 시작
  const con5 = document.querySelector(".con5");
  const listBox = document.querySelector(".con5 .listBox");
  const imgBox = document.querySelector(".con5 .imgBox");
  const imgWarp = document.querySelector(".con5 .imgBox .imgWarp");
  const cursor = document.querySelector(".con5 .cursor");
  const cursorText = document.querySelector(".con5 .cursor i");
  const li = document.querySelectorAll(".con5 .listBox li");
  const bodyImage = document.querySelectorAll(".con5 .body img");

  function throttle(func, delay) {
    let lastTime = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastTime >= delay) {
        lastTime = now;
        func.apply(this, args);
      }
    };
  }

  bodyImage.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(cursor, {
        backgroundColor: "rgba(999,999, 999, .8)",
        scale: 3,
        duration: 0.3,
      });

      gsap.to(cursorText, { opacity: 1 });
      cursorText.classList.add("ri-external-link-line");
      cursorText.innerHTML = "";
      cursorText.style.color = "black";
      cursor.style.borderRadius = "1px";
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(cursor, {
        backgroundColor: "#e36840",
        scale: 1,
        duration: 0.3,
      });
      gsap.to(cursorText, { opacity: 0 });
      cursorText.classList.remove("ri-external-link-line");
      cursorText.innerHTML = "Click";
      cursorText.style.color = "white";
      cursor.style.borderRadius = "100%";
    });
  });

  // 커서 스타일 변경 함수
  const updateCursorStyle = (scale, cursorStyle, borderColor) => {
    document.body.style.cursor = cursorStyle;
    gsap.to(con5, {
      borderTop: `3px solid ${borderColor}`,
      borderBottom: `3px solid ${borderColor}`,
      duration: 0.3,
      ease: "power2.out",
    });
    gsap.to(cursor, { scale, duration: 0.3, ease: "power2.out" });
  };
  // con5 이벤트
  con5.addEventListener("mouseenter", (e) => {
    console.log("con5 mouseenter");
    updateCursorStyle(1, "none", "#fff");
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });
  con5.addEventListener("mouseleave", () => {
    console.log("con5 mouseleave");
    updateCursorStyle(0, "auto", "#e36840");
  });
  con5.addEventListener(
    "mousemove",
    throttle((e) => {
      console.log("con5 mousemove");
      const { pageX: x, pageY: y } = e;
      gsap.to([cursor, imgBox], {
        duration: 0.2,
        ease: "back.out(2)",
        stagger: 0.1,
        left: x,
        top: y,
      });
    }, 50)
  );

  // 커서 이미지와 관련된 함수
  const updateCursorImage = (isHidden) => {
    gsap.to(imgBox, {
      scale: isHidden ? 0 : 1,
      duration: 0.3,
      ease: "expo.out",
    });
    gsap.to(cursor, {
      backgroundColor: isHidden ? "#e36840" : "rgba(55, 55, 55, 0.5)",
      scale: isHidden ? 1 : 3,
      duration: 0.3,
    });
    gsap.to(cursorText, { opacity: isHidden ? 0 : 1 });
  };

  // li 클릭 이벤트
  li.forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("on");
      updateCursorImage(el.classList.contains("on"));
    });
  });

  const listBoxMousemoveFunc = throttle((e) => {
    console.log("listBox mousemove");
    if (e.target && e.target.nodeName === "LI") {
      const index = Array.from(listBox.children).indexOf(e.target);
      updateCursorImage(e.target.classList.contains("on"));
      if (!e.target.classList.contains("on")) {
        gsap.to(imgWarp, { transform: `translateX(-${index * 500}px)` });
      }
    }
  }, 100);
  // listBox 이벤트
  listBox.addEventListener("mousemove", (e) => listBoxMousemoveFunc(e));
  listBox.addEventListener("mouseleave", () => updateCursorImage(true));

  // footer 애니메이션
  gsap
    .timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
        end: "top top",
        scrub: 1,
      },
    })
    .to(".logoWrap", { top: "20%", ease: "none", duration: 2 }, 0)
    .to(
      ".logoWrap .y",
      { x: 100, y: 100, rotate: 20, ease: "none", duration: 2 },
      0
    )
    .to(
      ".logoWrap .o",
      { x: 80, y: 120, rotate: -50, ease: "none", duration: 2 },
      0
    )
    .to(
      ".logoWrap .u",
      { x: 10, y: 80, rotate: 70, ease: "none", duration: 2 },
      0
    )
    .to(
      ".logoWrap .n",
      { x: -30, y: 70, rotate: -30, ease: "none", duration: 2 },
      0
    )
    .to(
      ".logoWrap .g",
      {
        x: -80,
        y: 80,
        rotate: 100,
        ease: "none",
        duration: 2,
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
      { rotate: "-25deg", y: -20, x: 8, duration: 3 },
      0
    )
    .to(
      "footer .btnBox div:nth-of-type(3)",
      { rotate: "-20deg", y: 30, x: -6, duration: 3 },
      0
    )
    .to(
      "footer .btnBox div:nth-of-type(4)",
      { rotate: "45deg", y: -25, x: -15, duration: 3 },
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
