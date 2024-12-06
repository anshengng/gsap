import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function () {
  const initScroll = () => {
    gsap.registerPlugin(ScrollTrigger);
    const m1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".container2",
        scrub: true,
        pin: ".container2",
        start: "top top",
        end: "+=100%",
      },
      onComplete: () => {
        document.querySelector(".container2")?.classList.remove("startFixed");
        console.log("complete");
      },
      onReverseComplete: () => {
        // 当动画反向结束时（即从 start 到 end）
        document.querySelector(".container2")?.classList.remove("startFixed");
      },
      onStart: () => {
        document.querySelector(".container2")?.classList.add("startFixed"); //横向滚动时避免因页面上下滚动影响
        console.log("start");
      },
    });
    m1.fromTo(".container2", { x: 0 }, { x: "-300vw" });
  };

  return {
    initScroll,
  };
}
