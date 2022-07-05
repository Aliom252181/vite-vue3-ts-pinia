<template>
  <h1>测试 vueUse 的鼠标坐标</h1>
  <h3>Mouse: {{ x }} x {{ y }}</h3>
  <h4>isDark:{{ isDark }}</h4>
  <h4>localStorage:{{ store }}</h4>
</template>

<script lang="ts">
// https://vueuse.org/
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core';

export default {
  setup() {
    // tracks mouse position
    const { x, y } = useMouse()

    // is user prefers dark theme
    const isDark = usePreferredDark()

    // persist state in localStorage
    const store = useLocalStorage(
      'my-storage',
      {
        name: 'Apple',
        color: 'red',
      },
    )

    return { x, y, isDark, store }
  }
};

</script>