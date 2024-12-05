<template>
  <div class="container">
    <div class="box-A">
      <div class="a">A</div>
      <div class="mask"></div>
    </div>
    <div class="logo2-2">
      <img class="logo-img2" src="/src/assets/logo1.png" alt="" />
    </div>
    <div class="box-N">
      <div class="logo2">
        <img class="logo-img" src="/src/assets/logo1.png" alt="" />
      </div>
      <div class="n">n</div>
    </div>
    <div class="box-I">
      <div class="i">i</div>
    </div>
    <div class="logo3">
      <img class="logo-img3" src="/src/assets/logo3.png" alt="" />
    </div>
    <div class="box-M">
      <div class="m">m</div>
    </div>
    <div class="box-A-2">
      <div class="a-2">a</div>
    </div>
    <div class="box-T">
      <div class="t-1">1</div>
      <div class="t">t</div>
    </div>
    <div class="box-E">
      <div class="e-00">00</div>
      <div class="e">e</div>
    </div>
  </div>
  <div class="container-line2">
    <div class="box-A2">
      <div class="a2">a</div>
      <div class="a2-2">a</div>
    </div>
    <div class="box-N2">
      <div class="n2">n</div>
      <div class="n2-2">n</div>
    </div>
    <div class="box-Y2">
      <div class="y2">y</div>
    </div>
    <div class="box-T2">
      <svg
        class="t2-svg"
        viewBox="0 0 120 259"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true">
        <path
          id="bolt-path"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M101.08 11C102.439 11 103.402 12.3264 102.982 13.6187L78.6746 88.3335C78.2542 89.6259 79.2175 90.9522 80.5765 90.9522H108.983C110.634 90.9522 111.574 92.8401 110.579 94.1577L10.2304 227L39.4408 125.708C39.8095 124.429 38.8499 123.154 37.5191 123.154H7.82733C6.44727 123.154 5.48193 121.789 5.94147 120.488L44.1353 12.334C44.4176 11.5346 45.1733 11 46.0211 11H101.08Z"
          stroke="#0AE448"
          stroke-width="4"
          style="stroke-dashoffset: 0; stroke-dasharray: none"></path>
        <mask
          id="mask0_1413_68143"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          :y="svgMaskY"
          width="134"
          height="227">
          <rect
            id="bolt-rect"
            width="134"
            height="227"
            fill="#D9D9D9"
            data-svg-origin="67 227"
            transform="matrix(1,0,0,1,0,0)"
            style="
              transform-origin: 0px 0px;
              translate: none;
              rotate: none;
              scale: none;
            "></rect>
        </mask>
        <g mask="url(#mask0_1413_68143)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M102.08 10C103.439 10 104.402 11.3264 103.982 12.6187L79.6746 87.3335C79.2542 88.6259 80.2175 89.9522 81.5765 89.9522H109.983C111.634 89.9522 112.574 91.8401 111.579 93.1577L11.2304 226L40.4408 124.708C40.8095 123.429 39.8499 122.154 38.5191 122.154H8.82733C7.44727 122.154 6.48193 120.789 6.94147 119.488L45.1353 11.334C45.4176 10.5346 46.1733 10 47.0211 10H102.08Z"
            fill="#0AE448"></path>
        </g>
      </svg>
      <div class="t2">t</div>
    </div>
    <div class="box-H2">
      <div class="h2">h</div>
    </div>
    <div class="box-I2">
      <div class="i2">i</div>
    </div>
    <div class="box-N3">
      <div class="n3">n</div>
    </div>
    <div class="box-G2">
      <div class="g2">g</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from "vue";
import useHome from "../hooks/useHome";
const { initAN, initIM, initTE, initAny, svgMaskY } = useHome();
const initLine1 = () => {
  initAN();
  initIM();
  initTE();
};
const initLine2 = () => {
  initAny();
};
nextTick(() => {
  initLine1();
  initLine2();
});
//a2不同行的a,a-2同行第二个a
</script>

<style lang="scss" scoped>
.container,
.container-line2 {
  width: 100%;
  height: 220px;
  display: flex;
  margin-top: 100px;
  position: relative;
}
.container-line2 {
  justify-content: flex-end;
  margin-top: 0;
  padding-right: 100px;
  .box-A2,
  .box-N2,
  .box-Y2,
  .box-T2,
  .box-H2,
  .box-I2,
  .box-N3,
  .box-G2 {
    width: 100px;
    height: 220px;
    text-align: center;
    position: relative;
    overflow: visible;
    .a2,
    .a2-2,
    .n2,
    .n2-2,
    .y2,
    .t2,
    .h2,
    .i2,
    .n3,
    .g2 {
      font-size: 180px;
      color: #fffce1;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    }
  }
  .box-A2,
  .box-N2 {
    height: 190px;
    overflow: hidden;
  }
  .box-Y2 {
    width: 80px;
  }
  .box-T2 {
    width: 76px;
    height: 190px;
    padding-top: 40px;
    overflow: hidden;
  }
  .box-I2 {
    width: 60px;
  }
  .box-N3,
  .box-H2 {
    overflow: hidden;
  }
}
.container {
  .box-A,
  .box-N,
  .box-I,
  .box-M,
  .box-A-2,
  .box-T,
  .box-E {
    width: 140px;
    height: 220px;
    text-align: center;
    position: relative;
    overflow: visible;
    .a,
    .n,
    .i,
    .m,
    .a-2,
    .t,
    .t-1,
    .e,
    .e-00 {
      font-size: 180px;
      color: #fffce1;
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    }

    .mask {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      background: black;
      z-index: 1;
      overflow: visible;
    }
  }
  .box-N {
    width: 110px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding-top: 40px;
  }
  .box-A {
    width: 100px;
  }
  .box-I {
    overflow: hidden;
    width: 50px;
  }
  .box-A-2 {
    overflow: hidden;
    width: 90px;
  }
  .box-M {
    overflow: hidden;
    width: 150px;
  }
  .box-T {
    overflow: hidden;
    width: 70px;
  }
  .box-E {
    overflow: hidden;
    width: 220px;
    text-align: left;
    padding-left: 6px;
  }
  .logo2 {
    width: 110px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 20px;
  }
  .logo2-2 {
    position: absolute;
    left: -120px;
  }
  .logo3 {
    position: absolute;
    left: -120px;
  }
  .logo-img2 {
    transition: 0s;
  }
}
</style>
