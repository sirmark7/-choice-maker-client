import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCandidates = defineStore('candidates', () => {
  // define store variable
  const candidates = ref()

  // define a function to change the variable
  function setCandidates(state) {
    candidates.value = state
  }

  return { candidates, setCandidates }
})
