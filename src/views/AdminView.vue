<template>
  <div class="container">
    
    <header>
        <h1>Choise Maker</h1>
        <div class="profile">
            <img src="/images/admin-avatar.jpeg" alt="admin avatar">
            <span>Admin First Name</span>
        </div>

    </header>

    <div class="main_side">
        <nav class="sidebar">

            <RouterLink class="side-nav " v-for="navItem in navItems" :key="navItem.name"   :to="navItem.link"  >
                    {{ navItem.name }}
                </RouterLink>
            
            <button class="log-out btn side-nav" @click="handleLogout">
                    Log Out
            </button>
        </nav>

        <div class="display" >
             <router-view />
        </div>
    </div>
  </div>
</template>

<script setup>
// import { defineComponent } from '@vue/composition-api';
import { useAuthStore } from '../stores/auth';
import Swal from 'sweetalert2';
import {useRouter} from 'vue-router'
const {logout}=useAuthStore()
const router =useRouter()


const navItems = [
    {link:'/admin',name:'Dashboard'},
    {link:'/admin/add-election', name:'Create Elections'},
    {link:'/admin/view-election', name:'View Elections'}
    ]

const handleLogout=async()=>{
    await logout()
    Swal.fire({
            title: 'Log Out  Success full',
            text:   `Good Bye`,
            icon: 'success',
        });
    router.push('/auth/login')
}
</script>

<style lang="css" scoped>
.container{
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100vh;
    background: #000;
    flex-direction: column
}

.container header{
background: #24904d;
width: 100%;
border-bottom: 2px solid #f1f1f1;
padding: 5px 10px;
display: flex;
justify-content: space-between;
align-items: center;
}

h1{
    color: var(--secondary-color);
   font-size: 1.5rem;
   
} 
.profile{
    display: flex;
    align-items: center;
    gap: 10px;
    color: #f1f1f1;
}

.profile img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}



.main_side{
    background: #924646;
    height: 100%;
    display: flex;
    width: 100%;
    justify-content: flex-start;
}


.sidebar{
    position: relative;
    background: #d2cdcd;
    height: 100%;
    min-width: 200px;
    border-right: 2px solid #f1f1f1;
    padding: 5px ;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding-top: 20px;
}
.sidebar.mini{
    width: fit-content;
}

.side-nav{
    background: #a98c8c;
    width: 100%;
    list-style: none;
    padding: 5px;
    border: 2px solid var(--secondary-color);
    border-radius: 5px;
    background: var(--primary-light); 
    cursor: pointer;
    font-weight: 400;
    font-size: 16px;
}
.side-nav:hover {
    background:var(--primary-color);
    color: var(--secondary-color);
}

.log-out{
    position: absolute;
    bottom: 20px;
    width: 95%;
}


.display{
    background: #802247;
    flex: 1;
}

</style>
