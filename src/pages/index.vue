<script setup lang="ts">
import style from '@/styles/index.module.scss';
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from '@/components/HelloWorld.vue';
import API from '@/api';

const requestRes = async () => {
  let result = await API.login('zhangsan', '123456');
};
</script>

<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <div :class="style.style">module.scss</div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>
