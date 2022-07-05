<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/store/user';

const userStore = useUserStore();
userStore.updateName('李四');

defineProps<{ msg: string }>();

const count = ref(0);

</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ userStore.name }}</h2>
</template>

<style scoped>
</style>
