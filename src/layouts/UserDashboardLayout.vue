<script setup>
  import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="layout">
    <div class="sidebar"></div>
    <div class="rightContent">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>
