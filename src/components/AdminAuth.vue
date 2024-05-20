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
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
// import { useUserStore } from '@/stores/user'
import Swal from 'sweetalert2'
const {setIsAuthenticated}=useAuthStore()
// const {setUser}=useUserStore()
const user = ref({})
const router = useRouter()


const details = {
  staff_number: 12345,
  password: 'password',
  role:'admin'
}
const handleLogin = async() => {
  if (
    details.staff_number !== user.value.staff_number &&
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
        
          router.push('/admin')
        }

</script>
<style lang="" scope></style>
