
import { defineStore } from 'pinia'
import resource from '../services/resources'

export const useUserStore = defineStore('user', {
  // state value
  state: () => ({
    users: [],
    user:{}
  }),
  // getter functions
  getters: {
    getUsers(state) {
      return state.users
    },
    getUser(state) {
      return state.user
    }
  },
  // setter functions
  actions: {

    setUser(data){
      this.user =data
    },
    fetchUsersAction() {
      return new Promise((resolve, reject) => {
        new resource('todos')
          .list({})
          .then((res) => {
            resolve((this.users = res.data))
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    createUsersAction(userData) {
      return new Promise((resolve, reject) => {
        new resource('todos')
          .store(userData)
          .then((res) => {
            const createdUser = res.data
            this.users = [createdUser, ...this.users]
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    updateUsersAction(userData, id) {
      return new Promise((resolve, reject) => {
        new resource('todos')
          .update(userData, id)
          .then((res) => {
            const updatedUser = res.data
            this.users = this.users.map((user) => {
              if (user.id === id) {
                return updatedUser
              }
              return user
            })
            resolve(res)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    deleteUsersAction(id) {
      return new Promise((resolve, reject) => {
        new resource('todos')
          .destroy(id)
          .then((res) => {
            this.users = this.users.filter((user) => user.id !== id)
            resolve(res)
          })
          .catch((err) => reject(err))
      })
    },

    resetPasswordAction(resetData, id) {
      return new Promise((resolve, reject) => {
        new resource('reset')
          .update(resetData, id)
          .then((res) => {
            resolve(res)
          })
          .catch((err) => reject(err))
      })
    }
  }
})
