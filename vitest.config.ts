import { defineConfig } from 'vitest/config'
export default defineConfig({
  // https://cn.vitest.dev/config/
  test: {
    environment:"jsdom"
  }
})
