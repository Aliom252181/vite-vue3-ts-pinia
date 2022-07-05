import { ref } from 'vue';
import { defineStore } from "pinia";

//api模式
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

//setup模式
export const useUserStoreForSetup = defineStore('userForSetup', () => {
  const name = ref('Aliom');
  const age = ref(18);

  function increment() {
    age.value++;
  }

  function updateName(changeName: string) {
    name.value = changeName;
  }

  return { name, age, increment, updateName };
});