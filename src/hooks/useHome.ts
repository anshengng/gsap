import { gsap } from "gsap";
import { ref } from "vue";

export default function () {
  const t1 = gsap.timeline();
  const t2 = gsap.timeline();
  const t3 = gsap.timeline();
  const t4 = gsap.timeline(); //第一行结束

  const l1 = gsap.timeline(); //第二行开始

  const initAN = () => {
    t1.to(".a", {
      duration: 0,
      rotateX: 180,
    })
      .set(".a", {
        transformOrigin: "50% 100%",
      })
      .to(".a", { duration: 0, y: -120, ease: "power1.out" })
      .to(".a", { duration: 0.2, y: -100, ease: "power1.out" })
      .to(".mask", {
        duration: 0,
        opacity: 0,
      })
      .to(".a", {
        duration: 0.6,
        y: 0,
        rotateX: 0,
      });
    //N
    t2.fromTo(
      ".logo-img",
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.3, delay: 0.8 },
      "<"
    )
      .to(".logo-img", { scale: 0.8, duration: 0.2 })
      .fromTo(
        ".logo-img",
        {
          scale: 1,
        },
        {
          scale: 0.9,
          y: -90,
          opacity: 0,
          duration: 0.3,
        }
      );
    const innerT2 = gsap.timeline();
    innerT2
      .fromTo(
        ".logo-img2",
        {
          rotate: 0,
        },
        {
          rotate: 90,
          duration: 0.3,
        },
        "-=2.3"
      )
      .repeat(-1);
    t2.to(
      ".n",
      {
        y: -162,
        duration: 0.6,
      },
      "<"
    )
      .add(innerT2)
      .to(".n", {
        //翻转
      })
      .fromTo(
        ".logo-img2",
        {
          x: -220,
        },
        {
          x: 220,
          y: -40,
          rotate: 360,
          scale: 0.8,
          duration: 0.6,
        },
        "-=2.6"
      );
    innerT2.delay(1);
  };
  const initIM = () => {
    t3.fromTo(
      ".i",
      {
        y: -200,
      },
      {
        y: 0,
        duration: 1,
        delay: 1.5,
      }
    )
      .fromTo(
        ".logo-img3",
        { rotate: 0, x: 410, y: 50 },
        { rotate: 360, duration: 1, repeat: -1, immediateRender: false },
        "-=1.8"
      )
      .fromTo(".logo-img3", { scale: 0 }, { scale: 1, duration: 1 }, "<")
      .fromTo(".m", { x: -300 }, { x: 0, duration: 0.4 })
      .fromTo(".logo-img3", { x: 410 }, { x: 520, duration: 0.4 }, "<")
      .fromTo(".a-2", { y: 200 }, { y: 0, duration: 0.5, delay: 1 })
      .fromTo(
        ".logo-img3",
        { y: 0 },
        { y: 200, opacity: 0, duration: 0.5 },
        "<"
      );
  };
  const initTE = () => {
    t4.fromTo(".t-1", { y: 200 }, { y: 0, duration: 0.6, delay: 3.5 }).fromTo(
      ".e-00",
      { y: 200 },
      { y: 0, duration: 0.6 },
      "<"
    );
    t4.fromTo(".t", { y: 0 }, { y: -220, duration: 0.6 }, "+=0.2").fromTo(
      ".e",
      { y: 0 },
      { y: -220, duration: 0.6 },
      "<"
    );
    t4.to(".t-1", { y: -200, duration: 0.3 }, "<").to(
      ".e-00",
      { y: -200, duration: 0.3, delay: 0.1 },
      "<"
    );
  };
  const customLinearEase = "cubic-bezier(0,0,1,1)";
  const svgMaskY = ref(240);

  const initAny = () => {
    const innerA = gsap.timeline();
    const innerN = gsap.timeline();
    innerA
      .fromTo(
        ".a2",
        { y: -400 },
        { y: -200, duration: 0, ease: customLinearEase }
      )
      .fromTo(
        ".a2-2",
        { y: 0 },
        { y: -238, duration: 0.7, ease: customLinearEase },
        "<"
      )
      .to(".a2", { y: 60, duration: 0.5, ease: customLinearEase })
      .to(".a2-2", { y: 0, duration: 0.5, ease: customLinearEase }, "<")
      .to(".a2", { y: -200, duration: 0.8, ease: customLinearEase })
      .to(".a2-2", { y: -218, duration: 0.8, ease: customLinearEase }, "<");

    innerN
      .fromTo(
        ".n2",
        { y: -400 },
        { y: -200, duration: 0, ease: customLinearEase }
      )
      .fromTo(
        ".n2-2",
        { y: 0 },
        { y: -238, duration: 0.7, ease: customLinearEase }
      )
      .to(".n2", { y: 60, duration: 0.5, ease: customLinearEase })
      .to(".n2-2", { y: 0, duration: 0.5, ease: customLinearEase }, "<")
      .to(".n2", { y: -200, duration: 1, ease: customLinearEase })
      .to(".n2-2", { y: -218, duration: 1, ease: customLinearEase }, "<");
    innerA.delay(3);
    innerN.delay(3.2);
    innerN.play();
    innerA.play();
    const innerI2 = gsap.timeline();
    innerI2
      .fromTo(
        ".i2",
        {
          rotationX: 0,
        },
        {
          rotationX: 720,
          duration: 1,
          delay: 3,
        }
      )
      .repeat(-1);
    l1.fromTo(
      ".y2",
      { scale: 0, rotateY: 0 },
      { scale: 1, rotateY: 360, duration: 1, delay: 3 }
    )
      .fromTo(".t2-svg", { scale: 0 }, { scale: 1, duration: 0.3 }, "<")
      .fromTo(
        ".h2",
        {
          y: -200,
        },
        {
          y: 0,
          duration: 0.6,
        }
      )
      .fromTo(
        ".i2",
        {
          rotationX: 0,
          opacity: 0,
        },
        {
          rotationX: 720,
          opacity: 1,
          duration: 1,
        }
      )
      .fromTo(".n3", { x: -200 }, { x: 0, duration: 0.6 }, "<")
      .fromTo(".g2", { opacity: 0 }, { opacity: 1 }, "<")
      .fromTo(".g2", { rotate: -90 }, { rotate: 20, duration: 0.3 }, "<")
      .fromTo(".g2", { rotate: 20 }, { rotate: -20, duration: 0.4 }, ">")
      .fromTo(".g2", { rotate: -20 }, { rotate: 5, duration: 0.5 }, ">")
      .fromTo(".g2", { rotate: 5 }, { rotate: 0, duration: 0.3 }, ">")
      .add(innerI2);

    l1.to(
      {},
      {
        duration: 1,
        onUpdate: function () {
          if (svgMaskY.value > 0) {
            svgMaskY.value -= 4;
          }
        },
        onComplete: function () {
          l1.to(".t2-svg", { scale: 0.7, duration: 0.3 })
            .to(
              ".t2-svg",
              {
                scale: 0.5,
                duration: 0.3,
              },
              "+=0.2"
            )
            .to(".t2-svg", {
              scale: 0,
              duration: 0,
            })
            .fromTo(
              ".t2",
              { y: -208, scale: 0 },
              { y: -208, scale: 1, duration: 0.3 },
              ">"
            );
        },
      },
      "-=6"
    );
  };
  return {
    initAN,
    initIM,
    initTE,
    initAny,
    svgMaskY,
  };
}
