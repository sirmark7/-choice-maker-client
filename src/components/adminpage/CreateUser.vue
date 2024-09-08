<template>
  <div class="create-user">
    <h1>Create User</h1>
    <form @submit.prevent="handleCreateUser">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="newUser.name" required />
      </div>
      <div class="form-group">
        <label for="personalId">Personal ID</label>
        <input type="text" id="personalId" v-model="newUser.personalId" maxlength="6" required />
      </div>
      <div class="form-group">
        <label for="role">Role</label>
        <select id="role" v-model="newUser.role" required>
          <option value="student">Student</option>
          <option value="staff">Staff</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="newUser.password" required />
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" v-model="newUser.confirmPassword" required />
      </div>
      <button type="submit">Create User</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {useUserStore} from '../../stores/user'
import {useLoaderStore} from '../../stores/loader'
import Swal from 'sweetalert2'
const {addUser}=useUserStore()
const {setIsLoading}=useLoaderStore()
const newUser=ref({})
    const handleCreateUser=async()=> {
      if(!newUser.value.name||!newUser.value.personalId||!newUser.value.role||!newUser.value.password||!newUser.value.confirmPassword){
        return  Swal.fire({
            title: 'Incorrect credentials',
            text:   `check and re-enter details`,
            icon: 'warning',
        });
      }
      if(newUser.value.password!==newUser.value.confirmPassword){
        return  Swal.fire({
            title: 'Incorrect credentials',
            text:   `Passwords do not match`,
            icon: 'warning',
        })
      }
      if(newUser.value.personalId.length!==6 ||newUser.value.password.length<8) {
        return  Swal.fire({
            title: 'Incorrect credentials',
            text:   `PersonalID must be 6 characters long and Pasword must be 8 characters long`,
            icon: 'warning',
        })
      }
      console.log(newUser.value);
      
      setIsLoading(true)
        const result =await addUser(newUser.value)
        if(result.success){
          setIsLoading(false)
      console.log('User Created:', result);
       Swal.fire({
            title: 'successful',
            text:   `User ${result?.data?.name}`,
            icon: 'success',
          
        });
        }else {
          setIsLoading(false)
        Swal.fire({
            title: 'Failed to create User',
            text:   ``,
            icon: 'warning',
          
        });
        console.error('creating failed', result);
      
      }
      newUser.value={}
    }
</script>

<style scoped>
.create-user {
  padding: 20px;
    width: 60%;
  margin: auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
