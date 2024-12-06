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
  border-bottom: 1px solid rgba(228, 228, 228, 0.5);;
}
.main {
  width: 100%;
  overflow-x: scroll;
  min-height: 100vh;
}
</style>
