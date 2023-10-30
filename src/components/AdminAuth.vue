<template>
  <form class="auth-form" @submit.prevent="handleLogin">
    <h3>LOGIN</h3>
    <input type="text" placeholder="Staff Number" required v-model="user.staff_number" />
    <input type="password" placeholder="Password" required v-model="user.password" />
    <button class="btn" type="submit">Login</button>
    <p>Do not have an account? <router-link to="#">contact your admin</router-link></p>
  </form>
</template>
<script setup>
import { ref } from 'vue'

const user = ref({})

const handleLogin = () => {
  console.log(user.value)
}
</script>
<style lang="" scope></style>
