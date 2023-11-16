
import { defineStore } from 'pinia'

export const useElections = defineStore('elections', {
  // define store variable
  	state: () => ({
		election: null,
	}),

  // define a function to change the variable
  actions:
  {
	setElection(data){
		this.election=data
	},
},

getters:{
  getEletion:(state) => state.election,
}
})
