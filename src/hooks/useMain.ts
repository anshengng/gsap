import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function () {
  gsap.registerPlugin(ScrollTrigger);

  const initScroll = () => {
    const m1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".box2",
        start: "top top",
        end: "bottom 70%",
        scrub: true,
      },
      onComplete: () => {
        console.log("complete");
      },
      onStart: () => {
        console.log("start");
      },
    });
    m1.to(".box2", { x: "-100vw", duration: 10 });
    m1.to(".box3", { x: "-100vw", duration: 10 },"<");
    document.addEventListener(".container", function (e) {
        e.preventDefault();
      });
  };

  return {
    initScroll,
  };
}
