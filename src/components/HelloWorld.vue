<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';
import { useUserStoreForSetup } from '@/store/user';

import { NButton } from 'naive-ui'

const userStore = useUserStore();
userStore.updateName('李四');

const userStoreForSetup = useUserStoreForSetup();
const { increment, updateName } = userStoreForSetup;
// storeToRefs() 为任何响应式属性创建 refs，仅使用 store 中的状态但不调用任何操作。
const { age, name } = storeToRefs(userStoreForSetup);
updateName('王五');

defineProps<{ msg: string }>();
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="box-styl">
    <h1>api模式</h1>
    <p class="section-box">
      {{ userStore.name }}的age: age = <b>{{ userStore.age }}</b>
    </p>
    <div class="section-box">
      <p>{{ userStore.name }}的age: userStore.increment()</p>
      <NButton @click="userStore.increment">点我</NButton>
    </div>
  </div>
  <div class="box-styl">
    <h1>Setup模式</h1>
    <p class="section-box">
      {{ name }}的age: age = <b>{{ age }}</b>
    </p>
    <div class="section-box">
      <p>{{ name }}的age: increment()</p>
      <NButton @click="increment">点我</NButton>
    </div>
  </div>
</template>

<style scoped>
.box-styl {
  margin: 10px;
}

.section-box {
  margin: 20px auto;
  width: 300px;
  background-color: #d7ffed;
  border: 1px solid #000;
}
</style>
