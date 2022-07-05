<script setup lang="ts">
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/vueUse">VueUse</router-link>
  </nav>
  <RouterView />
</template>

<style lang="scss">
@import './styles/variables';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: $theme-color;
  margin-top: 60px;
}

nav {
  padding: 30px;
}
</style>
