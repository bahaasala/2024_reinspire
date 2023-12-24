import Lenis from "@studio-freight/lenis";

const lenis = new Lenis({
  duration: 1.2, // Adjust the duration value as desired
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: "vertical",
  gestureOrientation: "vertical",
  smoothWheel: 0.1, // Adjust the smooth value for smoother scrolling
  wheelMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

const raf = (time) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("lenis", lenis);

  nuxtApp.$router.afterEach((to, from) => {
    if (to.path !== from.path) {
      lenis.scrollTo(".container", {
        offset: 0,
        duration: 0,
        easing: () => {},
        immediate: true,
      });
    }
  });
});
