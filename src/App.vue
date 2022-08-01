<script setup lang="ts">
import { NConfigProvider,dateZhCN,zhCN } from 'naive-ui'

</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/vueTsx">VueTSX</router-link> |
      <router-link to="/vueUse">VueUse</router-link>
    </nav>
    <RouterView />
  </n-config-provider>
</template>

<style lang="scss">
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
