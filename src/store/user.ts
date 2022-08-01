import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: 'Aliom',
      age: 18
    }
  },
  actions: {
    updateName(name: string) {
      this.name = name;
    },
    increment() {
      this.age++;
    }
  }
});