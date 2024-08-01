window.addEventListener("load", () => {
  // 일정 시간 후 클래스 추가 함수
  const applyClassAfterDelay = (element, className, delay) => {
    setTimeout(() => {
      element.classList.add(className);
    }, delay);
  };

  // 일정 시간 후 여러 요소에 클래스 추가 함수
  const handleElementClass = (elements, className, delay) => {
    setTimeout(() => {
      elements.forEach((el) => {
        el.classList.add(className);
      });
    }, delay);
  };

  // ScrollTrigger 설정 함수
  const setupScrollTrigger = (trigger, start, end, scrub, animations) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: trigger,
          start: start,
          end: end,
          scrub: scrub,
        },
      })
      .add(animations);
  };

  // 로딩 애니메이션
  let loading = document.querySelector(".loading");
  let rotate = document.querySelectorAll(".rotate");
  let opacity = document.querySelectorAll(".opacity");

  // 로딩 클래스 추가
  loading.classList.add("scene1");
  applyClassAfterDelay(loading, "scene2", 1000);
  setTimeout(() => {
    loading.classList.remove("scene1", "scene2");
    loading.classList.add("displayNone");
  }, 2000);
  handleElementClass(rotate, "on", 2000);
  handleElementClass(opacity, "on", 2000);

  gsap.registerPlugin(ScrollTrigger);

  // 비주얼 섹션 애니메이션
  setupScrollTrigger(".visual", "100% 100%", "100% 0%", 1, [
    gsap.to(".visual h1", { opacity: 0, duration: 1 }, 0), // h1 투명도 변화
    gsap.to(".visual h2", { opacity: 0, duration: 1 }, 1), // h2 투명도 변화
    gsap.to(".visual h2 span", { color: "#e36840", duration: 1 }, 0), // h2 span 색상 변화
    gsap.to(
      " .logoWrap .y",
      { x: 70, y: 350, rotate: 20, ease: "none", duration: 2 },
      0
    ),
    gsap.to(
      " .logoWrap .o",
      { x: -50, y: 250, rotate: -50, ease: "none", duration: 2 },
      0
    ),
    gsap.to(
      ".logoWrap .u",
      { x: 0, y: 400, rotate: -5, ease: "none", duration: 2 },
      0
    ),
    gsap.to(
      ".logoWrap .n",
      { x: 40, y: 200, rotate: -40, ease: "none", duration: 2 },
      0
    ),
    gsap.to(
      ".logoWrap .g",
      { x: -90, y: 450, rotate: 150, ease: "none", duration: 2 },
      0
    ),
  ]);

  // 메인텍스트 애니메이션
  gsap.utils.toArray(".titleBox *").forEach((el) => {
    setupScrollTrigger(
      el,
      "top bottom",
      "top bottom",
      1,
      gsap.fromTo(
        el,
        { overflow: "hidden", y: 150 },
        { overflow: "hidden", y: 0 },
        0
      )
    );
  });

  // 서브텍스트 애니메이션
  gsap.utils.toArray(".subText p").forEach((el) => {
    setupScrollTrigger(
      el,
      "top bottom",
      "top bottom",
      2,
      gsap.fromTo(
        el,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "none", duration: 1 },
        0
      )
    );
  });

  // con1 imgBox 애니메이션
  gsap.utils.toArray(".con1 .imgBox").forEach((el) => {
    setupScrollTrigger(
      el,
      "bottom bottom",
      "bottom top",
      2,
      gsap.fromTo(el, { rotate: "10deg" }, { rotate: "-10deg" })
    );
  });

  // con4 listBox 애니메이션
  gsap.utils.toArray(".con4 .listBox .box").forEach((el, idx) => {
    setupScrollTrigger(
      el,
      "0% 0%",
      "50% 0%",
      1,
      gsap.to(
        el,
        {
          y: idx * 20,
          scale: 0.9 + idx * 0.05,
          transform: "rotateX(-10deg)",
          transformOrigin: "top",
          filter: "brightness(0.7)",
        },
        0
      )
    );
  });

  // con3 listBox 애니메이션
  gsap.utils.toArray(".con3 .listBox li").forEach((el, idx) => {
    setupScrollTrigger(
      el,
      "top bottom",
      "50% bottom",
      1,
      gsap.fromTo(
        el,
        { opacity: 0, rotationY: "45deg" },
        {
          opacity: 1,
          rotationY: "0deg",
          ease: "none",
          delay: (idx % 3) * 1,
        },
        0
      )
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

  const throttle = (func, delay) => {
    let lastTime = 0;
    return function (...args) {
      const now = new Date().getTime();
      if (now - lastTime >= delay) {
        lastTime = now;
        func.apply(this, args);
      }
    };
  };

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

  con5.addEventListener("mouseenter", (e) => {
    console.log("con5 mouseenter");
    updateCursorStyle(1, "none", "#fff");
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
  });

  con5.addEventListener("mouseleave", () => {
    updateCursorStyle(0, "auto", "#e36840");
  });

  con5.addEventListener(
    "mousemove",
    throttle((e) => {
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

  li.forEach((el) => {
    el.addEventListener("click", () => {
      el.classList.toggle("on");
      updateCursorImage(el.classList.contains("on"));
    });
  });

  const listBoxMousemoveFunc = throttle((e) => {
    if (e.target && e.target.nodeName === "LI") {
      const index = Array.from(listBox.children).indexOf(e.target);
      updateCursorImage(e.target.classList.contains("on"));
      if (!e.target.classList.contains("on")) {
        gsap.to(imgWarp, { transform: `translateX(-${index * 500}px)` });
      }
    }
  }, 10);

  listBox.addEventListener("mousemove", (e) => listBoxMousemoveFunc(e));
  listBox.addEventListener("mouseleave", () => updateCursorImage(true));

  // footer 애니메이션
  setupScrollTrigger("footer", "top bottom", "top top", 1, [
    gsap.to(".logoWrap", { top: "20%", ease: "none", duration: 2 }, 0),
    gsap.to(
      ".logoWrap .y",
      { x: 100, y: 100, rotate: 20, ease: "none", duration: 2 },
      0
    ),
    gsap.to(
      ".logoWrap .o",
      { x: 80, y: 120, rotate: -50, ease: "none", duration: 2 },
      0
    ),
    gsap.to(
      ".logoWrap .u",
      { x: 10, y: 80, rotate: 70, ease: "none", duration: 2 },
      0
    ),
    gsap.to(
      ".logoWrap .n",
      { x: -30, y: 70, rotate: -30, ease: "none", duration: 2 },
      0
    ),
    gsap.to(
      ".logoWrap .g",
      { x: -80, y: 80, rotate: 100, ease: "none", duration: 2 },
      0
    ),
  ]);

  setupScrollTrigger("footer .btnBox", "top bottom", "bottom bottom", 1, [
    gsap.to(
      "footer .btnBox div:nth-of-type(1)",
      { rotate: "20deg", y: 6, x: -20, duration: 3 },
      0
    ),
    gsap.to(
      "footer .btnBox div:nth-of-type(2)",
      { rotate: "-25deg", y: -20, x: 8, duration: 3 },
      0
    ),
    gsap.to(
      "footer .btnBox div:nth-of-type(3)",
      { rotate: "-20deg", y: 30, x: -6, duration: 3 },
      0
    ),
    gsap.to(
      "footer .btnBox div:nth-of-type(4)",
      { rotate: "45deg", y: -25, x: -15, duration: 3 },
      0
    ),
  ]);
});
