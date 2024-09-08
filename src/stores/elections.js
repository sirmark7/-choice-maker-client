
import { defineStore } from 'pinia'
import service from '../services/request';

export const useElections = defineStore('elections', {
  // define store variable
  	state: () => ({
		elections: null,
	}),

  // define a function to change the variable
  actions:
  {
	setElection(data){
		this.elections=data
	},
		async getAllElections() {
      try {
        const response = await service.get('/elections');

        const { message,data} = response.data;

        this.setElection(data)
		console.log(message,data);
		
        return { success: true, data };
      } catch (error) {
        // console.error('Login error:', error);
        return { success: false, message: error };
      }
    },
    	async addElection(body) {
      try {
        const response = await service.post('/elections',body);

        const { message,data} = response.data;

        this.setElection([...this.elections,data])
		
        return { success: true, data,message };
      } catch (error) {
        // console.error('Login error:', error);
        return { success: false, message: error };
      }
    },
    async deleteElection(id) {
      try {
        const response = await service.delete(`/elections/${id}`);

        const { message,data} = response.data;
        const list =this.elections.filter((item) => item._id !== data.id);
        this.setElection(list)
            return { success: true, data,message };

    }catch (error) {
        // console.error('Login error:', error);
        return { success: false, message: error };
      }
    },
},

getters:{
  getEletions:(state) => state.elections,
  getEletionsCount:(state) => state.elections?.length?state.elections?.length:0
}
})
