window.addEventListener('load', revealAnimation)
const pucks = document.querySelectorAll('span[id^="puck"]')

function revealAnimation(){
    const puck = 3;
    const TimeLine = gsap.timeline({
        defaults: {
            duration: 1,
            autoAlpha: 0,
            ease: "power4.out"
        }
    });
TimeLine
    .from('.header-logo ', { y: -20})
    .from('.header-menu li', { y: -20, stagger: 0.08 }) 
    .from('.top-title', { y: 20}, "-=0.5") 
    .from(`.top-title span:nth-of-type(${puck})`,{x: 80})
}

pucks.forEach((puck) => {
    ScrollTrigger.create({
      trigger: puck,
      start: "center bottom",
      end: "center top",
      onEnter:() =>{
        gsap.from(puck, {
            x: 90
        })
      }
    })
  })

gsap.from(".mypic", {
    scrollTrigger: {
      trigger: ".mypic",
      start: "center bottom",
      end: "center top",
    },
    duration: 1.2,
    y: 20, // 少し左に移動させる
    opacity: 0,
    ease: "power2.out",
    // 複数要素を扱うプロパティ
    stagger: {
      from: "start", //左側から
      amount: 0.8 // 0.8秒おきに
    }
  });

  gsap.from(".aboutme-text", {
    scrollTrigger: {
      trigger: ".aboutme-text",
      start: "center bottom",
      end: "center top",
    },
    duration: 1.2,
    y: 20, // 少し左に移動させる
    opacity: 0,
    ease: "power2.out",
    // 複数要素を扱うプロパティ
    stagger: {
      from: "start", //左側から
      amount: 0.8 // 0.8秒おきに
    }
  });


gsap.from(".history-headline", {
    scrollTrigger: {
      trigger: ".history-headline",
      start: "center bottom",
      end: "center top",
    },
    duration: 1.2,
    y: 20, // 少し左に移動させる
    opacity: 0,
    ease: "power2.out",
    // 複数要素を扱うプロパティ
    stagger: {
      from: "start", //左側から
      amount: 0.8 // 0.8秒おきに
    }
  });

gsap.from(".history-text p", {
    scrollTrigger: {
      trigger: ".history-text",
      start: "center bottom",
      end: "center top",
    },
    duration: 1.2,
    x: 70, // 少し左に移動させる
    opacity: 0,
    ease: "power2.out",
    // 複数要素を扱うプロパティ
    stagger: {
      from: "start", //左側から
      amount: 0.8 // 0.8秒おきに
    }
  });

  gsap.from(".github-info", {
    scrollTrigger: {
      trigger: ".github-info",
      start: "center bottom",
      end: "center top",
    },
    duration: 1.2,
    y: 20, // 少し左に移動させる
    opacity: 0,
    ease: "power2.out",
    // 複数要素を扱うプロパティ
    stagger: {
      from: "start", //左側から
      amount: 0.8 // 0.8秒おきに
    }
  });

  gsap.from(".allworks li", {
    scrollTrigger: {
      trigger: ".allworks",
      start: "center bottom",
      end: "center top",
    },
    duration: 1.2,
    y: 20, // 少し左に移動させる
    opacity: 0,
    ease: "power2.out",
    // 複数要素を扱うプロパティ
    stagger: {
      from: "start", //左側から
      amount: 0.5 // 0.8秒おきに
    }
  });

  gsap.from(".contact-info-wrapper li", {
    scrollTrigger: {
      trigger: ".contact-icon",
      start: "center bottom",
      end: "center top",
    },
    duration: 1.2,
    y: 20, // 少し左に移動させる
    opacity: 0,
    ease: "power2.out",
    // 複数要素を扱うプロパティ
    stagger: {
      from: "start", //左側から
      amount: 0.8 // 0.8秒おきに
    }
  });