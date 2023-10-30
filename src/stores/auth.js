import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  // define store variable
  const isAuthenticated = ref(false)

  // define a function to change the variable
  function setIsAuthenticated(state) {
    isAuthenticated.value = state
  }

  return { isAuthenticated, setIsAuthenticated }
})
