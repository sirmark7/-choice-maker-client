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
// import { useUserStore } from '@/stores/user'
import Swal from 'sweetalert2'
const {setIsAuthenticated}=useAuthStore()
// const {setUser}=useUserStore()
const user = ref({})
const router = useRouter()


const details = {
  folio_number: 12345,
  password: 'password'
}
const handleLogin = async() => {
  if (
    details.folio_number !== user.value.folio_number &&
    details.password !== user.value.password
  ) {
    return Swal.fire({
            title: 'Incorrect credentials',
            text:   `check and re-enter details`,
            icon: 'warning',
          
        });
  }
  setIsAuthenticated(true)
  Swal.fire({
            title: 'Login Successful',
            text:   `Welcome `,
            icon: 'success',
          
        });
  router.push('/home')
  // const result = await login(user.value);
      // if (result.success) {
      //   setIsAuthenticated(true)
      //   setUser(result.data.user)
      //   Swal.fire({
      //       title: 'Login successful',
      //       text:   `Welcome ${result.user}`,
      //       icon: 'success',
          
      //   });
      //   router.push('/dashboard/')
      // } else {
      //   Swal.fire({
      //       title: 'Login Failed',
      //       text:   ``,
      //       icon: 'warning',
          
      //   });
      //   console.error('Login failed', result.message);
      // }
}

</script>
<style lang="" scope></style>
