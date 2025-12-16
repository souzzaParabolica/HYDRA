// Timeline principal
const tl = gsap.timeline({
  defaults: {
    ease: "power3.out",
    duration: 1,
  },
});

// HEADER
tl.from("header", {
  y: -40,
  opacity: 0,
});

// HERO TEXT
tl.from(
  ".heroSection h2",
  {
    y: 40,
    opacity: 0,
  },
  "-=0.5"
);

tl.from(
  ".heroSection p",
  {
    y: 30,
    opacity: 0,
  },
  "-=0.6"
);

// BOTÃO + SETA
tl.from(
  ".heroSection .seta",
  {
    y: 20,
    opacity: 0,
    stagger: 0.15,
  },
  "-=0.5"
);

// IMAGEM
tl.from(
  ".heroSection img",
  {
    scale: 0.9,
    opacity: 0,
  },
  "-=0.8"
);

gsap.from(".contactInfo", {
  opacity: 0,
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".contactInfo",
    start: "top 80%",
    markers: false,
  },
});

gsap.from(".firstP", {
  opacity: 0,
  y: 10,
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".firstP",
    start: "top 80%",
    end: "top 60%",
    scrub: 1.2,
    markers: false,
  },
});

gsap.from(".secondP", {
  opacity: 0,
  y: 10,
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".secondP",
    start: "top 70%",
    end: "top 50%",
    scrub: 1.2,
    markers: false,
  },
});

gsap.from(".thirdP", {
  opacity: 0,
  y: 10,
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".thirdP",
    start: "top 70%",
    end: "top 50%",
    scrub: 1.2,
    markers: false,
  },
});

gsap.from(".cards .card", {
  opacity: 0,
  y: 30,
  stagger: 0.5,
  duration: 1,
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".cards",
    start: "top 40%",
    markers: false,
  },
});

gsap.from(".usingHydra", {
  opacity: 0,
  y: 10,
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".usingHydra",
    start: "top 50%",
    markers: false,
  },
});

gsap.from(".banner, .bannerTitle, .bannerSubtitle, .arrowDown", {
  opacity: 0,
  y: 30,
  filter: "blur(10px)",
  stagger: 0.3,
  duration: 0.6,
  scrollTrigger: {
    trigger: ".usingHydra",
    start: "top 50%",
    markers: false,
  },
});

gsap.from(".servicos img", {
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: ".servicos",
    start: "top 80%",
    markers: false,
  },
});

gsap.from(".fourthP", {
  opacity: 0,
  y: 10,
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: ".fourthP",
    start: "top 70%",
    end: "top 50%",
    scrub: 1.2,
    markers: false,
  },
});

const tls = gsap.timeline({
  scrollTrigger: {
    trigger: ".fourthP",
    start: "top top", // quando o topo da seção encontrar o topo da viewport
    end: "+=2500", // duração do "pin" em pixels rolados (ajuste conforme precisar)
    scrub: 2, // animação suave
    pin: true, // fixa a seção na tela
    markers: false, // só pra debug, pode remover
  },
});

tls.from('.firstStep .circle', {
    y: 50,
    opacity: 0,
    filter: 'blur(10px)',
    duration: 1,
})

tls.from(".numberOne", {
  color: "#36334600",
},'+=0.3');

tls.from(".firstStepP", {
  y: 10,
  opacity: 0,
  filter: "blur(10px)",
  duration: 1,
},'+=0.3');

tls.from(".secondStep .circle", {
  y: 50,
  opacity: 0,
  duration: 1,
});

tls.from(".numberTwo", {
  color: "#36334600",
}, '+=0.3');

tls.from(".secondStepP", {
  y: 10,
  opacity: 0,
  filter: "blur(10px)",
  duration: 1,
}, '+=0.3');

tls.from(".thirdStep .circle", {
  y: 50,
  opacity: 0,
  duration: 1,
});

tls.from(".numberThree", {
  color: "#36334600",
}, '+=0.3');

tls.from(".thirdStepP", {
  y: 10,
  opacity: 0,
  filter: "blur(10px)",
  duration: 1,
}, '+=0.3');

tls.from(".fourthStep .circle", {
  y: 50,
  opacity: 0,
  duration: 1,
});

tls.from(".numberFour", {
  color: "#36334600",
}, '+=0.3');

tls.from(".fourthStepP", {
  y: 10,
  opacity: 0,
  filter: "blur(10px)",
  duration: 1,
}, '+=0.3');

