// This GSAP code creates a staggering animation on the cards
gsap.from(".gsap-stagger1", {
  scrollTrigger: ".gsap-stagger1",
  scale: 0,
  stagger: { amount: 0.5, from: "center" },
  duration: 2,
  ease: "expo.out",
});
