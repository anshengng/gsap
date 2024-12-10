<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Main from "./components/Main.vue";
</script>

<template>
  <div class="title">
    <HelloWorld />
  </div>
  <div class="main">
    <Main></Main>
  </div>
</template>

<style scoped>
.title {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 200px;
  border-bottom: 1px solid rgba(228, 228, 228, 0.5);
}
@media screen and (max-width: 768px) {
  .title {
    padding: 20px; /* 手机尺寸时设置 padding 为 0 */
  }
}
.main {
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
}
</style>
