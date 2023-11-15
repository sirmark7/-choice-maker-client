import { defineStore } from "pinia";
import service from "../services/request";


export const useAuthStore = defineStore("auth", {
	// state value
	state: () => ({
		user: null,
		token:null,
		isAuthenticated: false,
	}),
	

  actions: {
	setIsAuthenticated(mode){
		this.isAuthenticated=mode
	},
	async login(userData) {
      try {
        const response = await service.post('/users/login', userData);
		console.log(userData.password);
        const { token,data} = response.data;
        this.token = token;
        this.user = data.user;
		localStorage.setItem('token',this.token)
        localStorage.setItem('userInfo',JSON.stringify(this.user))
		
        return { success: true, data };
      } catch (error) {
        // console.error('Login error:', error);
        return { success: false, message: error };
      }
    },

    async signup(userData) {
      try {
        const response = await service.post('/users/signup', userData);

        const { status, data } = response.data;
        if(status=='success'){
        return { success: true, data};
        }
      } catch (error) {
        console.error('Signup error:', error);
        return { success: false, message: 'Registration failed' };
      }
    },

    logout() {
      this.token = null;
      this.user = null;
	  localStorage.clear()
	
    },
  },
  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
    getUser: (state) => state.user,
  },
});
