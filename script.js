gsap.registerPlugin(ScrollTrigger);

// Header parallax animation
const headerParallax = new gsap.timeline();
headerParallax
  .to(".man", {
    y: -200,
    duration: 3,
  })
  .to(
    ".plants",
    {
      y: -100,
      duration: 3,
    },
    "-=3"
  )
  .to(
    ".bg",
    {
      y: 50,
      duration: 3,
    },
    "-=3"
  )
  .to(
    ".explore",
    {
      y: 70,
      duration: 2,
    },
    "-=3"
  )
  .to(
    ".content",
    {
      top: "0%",
      duration: 3,
    },
    "-=3"
  );

const galleryAnimation = gsap.timeline();
galleryAnimation.from(".gallery__item", { y: 0, duration: 3, opacity: 0 }, 2);

ScrollTrigger.create({ animation: headerParallax, scrub: 1 });
ScrollTrigger.create({
  animation: galleryAnimation,
  scrub: 1,
  trigger: ".header",
  start: "bottom bottom",
  end: "40% top",
});
