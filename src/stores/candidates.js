
import { defineStore } from 'pinia'

export const useCandidates = defineStore('candidates', {
  // define store variable
  	state: () => ({
		candidates: null,
	}),

  // define a function to change the variable
  actions:
  {
	setCandidates(data){
		this.candidates=data
	},
},

getters:{
  getCandidates:(state) => state.candidates,
}
})
