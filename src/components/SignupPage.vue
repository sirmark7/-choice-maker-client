<template>
  <form class="auth-form" @submit.prevent="handleSignup">
    <h3>SIGN UP</h3>
    <input type="text" placeholder="Folio Number" required v-model="user.folio_number" />
    <input type="password" placeholder="Password" required v-model="user.password" />
    <input
      type="password"
      placeholder="Confirm Password"
      required
      v-model="user.confirm_password"
    />
    <button class="btn">Sign up</button>
    <p>Already have an account? <router-link to="login">login</router-link></p>
  </form>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
const user = ref({})
const handleSignup = async () => {
  if(user.value.password !== user.value.confirm_password){
    return alert('password does not match')
  }
  console.log(user.value)
 alert('signup successful')

  router.push('/auth/login')
}
</script>
<style lang=""></style>
