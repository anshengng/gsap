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
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 200px;
}
.main {
  width: 100%;
  min-height: 100vh;
}
</style>
