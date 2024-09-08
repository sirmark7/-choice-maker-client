<template>
  <div class="view-user">
    <h1>Users</h1>
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Personal ID</th>
          <th>Role</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td><img :src="user.logo" alt="user image"></td>
          <td>{{ user.name }}</td>
          <td>{{ user.personalId }}</td>
          <td>{{ user.role }}</td>
          <td>
            <TrashBin class="icon" :onclick="()=>handleDeleteUser(user.id)" />
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import {useUserStore} from '../../stores/user'
import {useLoaderStore} from '../../stores/loader'
import {TrashBin} from '@vicons/ionicons5';
import Swal from 'sweetalert2'
const {getUsers,deleteUser}=useUserStore()
const {setIsLoading}=useLoaderStore()
const users=ref(getUsers)
    const handleDeleteUser=async(info)=> {
      if(!info){
        return  Swal.fire({
            title: 'Incorrect credentials',
            text:   `check and re-enter details`,
            icon: 'warning',
        });
      }     
      setIsLoading(true)
        const result =await deleteUser(info)
        if(result.success){
          setIsLoading(false)
      console.log('User Deleted:', result);
       Swal.fire({
            title: 'successful',
            text:   `User ${result?.data?.name}`,
            icon: 'success',
          
        });
        users.value=users.value.filter((user)=>user.id!==info)
        }else {
          setIsLoading(false)
        Swal.fire({
            title: 'Failed to delete User',
            text:   ``,
            icon: 'warning',
          
        });
        console.error('deleting failed', result);
      
      }
    }
</script>

<style scoped>
.view-user {
  padding: 20px;
    width: 100%;
  margin: auto;
}
h1{
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1.5rem;
  flex: 1;
}
tr,td,th{
  display: flex;
  justify-content: start ;
  width: 100%;
}
td{
border: 1px solid rgb(126, 130, 126);
padding:0 5px;
justify-content: center
}
th{
  justify-content: center;
font-weight: bold;
}
td:last-child{
  justify-content: center
}
.icon {
  cursor: pointer;
  color:red;
  width: 20px;
}

</style>
