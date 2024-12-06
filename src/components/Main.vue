<template>
  <div class="intro-box">
    <div class="intro">
      allows you to effortlessly animate anything JS can touch. Delivering
      silky-smooth performance and unmatched support so you can focus on the fun
      stuff.
    </div>
  </div>
  <div class="container">
    <div class="container2">
      <div class="box2">box2</div>
      <div class="box3">box3</div>
      <div class="box4">box4</div>
      <div class="box5">box5</div>
    </div>
  </div>

  <div class="other">other</div>
</template>

<script setup lang="ts">
import { nextTick } from "vue";
import useMain from "../hooks/useMain";

const { initScroll } = useMain();

nextTick(() => {
  initScroll();
});
</script>
<style lang="scss" scoped>
.intro-box {
  width: 100%;
  height: 100vh;
  border-bottom: 1px solid rgba(228, 228, 228, 0.5);
  padding-top: 220px;
}
.intro {
  width: 70%;
  font-size: 80px;
  margin: 0 120px 0;
  color: #fffce1;
  text-align: justify;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}
.container {
  width: 400vw;
  height: 160vh;
  background-color: black;
  position: relative;
}
.container2 {
  width: 400vw;
  height: 100vh;
  display: flex;
}
.box2,
.box3,
.box4,
.box5,
.other {
  width: 100vw;
  height: 100vh;
  color: #fffce1;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: 80px;
  text-align: center;
  line-height: 1000px;
}

.startFixed {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
}
</style>
