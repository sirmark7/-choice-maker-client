<template>
  <form class="auth-form" @submit.prevent="handleLogin">
    <h3>LOGIN</h3>
    <input type="text" placeholder="Folio Number" required v-model="user.folio_number" />
    <input type="password" placeholder="Password" required v-model="user.password" />
    <button class="btn" type="submit">Login</button>
    <p>Do not have an account? <router-link to="signup">sign up</router-link></p>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
const auth = useAuthStore()

const user = ref({})
const router = useRouter()
const details = {
  folio_number: 12345,
  password: 'password'
}
const handleLogin = () => {
  if (
    details.folio_number !== user.value.folio_number &&
    details.password !== user.value.password
  ) {
    return alert('incorrect credentials')
  }
  auth.setIsAuthenticated(true)

  router.push('/home')
}
</script>
<style lang="" scope></style>
