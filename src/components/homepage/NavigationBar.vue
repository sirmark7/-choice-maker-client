<template>
    <header>
        <nav>
           
                <RouterLink to="/home" >
                Choise Maker
                </RouterLink>

                <button class="log-out btn" @click="handleLogout">
                    Log Out
                </button>
           
        </nav>
           <div class="election-nav">
             <h1 class='btn' title="position" :class='{active: isActive}' >{{ isActive.position }}</h1>
            <button class='btn' title=" switch SRC Elections" :class='{active: !isActive}' @click="handleElectionType">Next</button>
           </div>
    </header>
</template>
<script setup>
import { useAuthStore } from '../../stores/auth';
import {useRouter} from 'vue-router'
import Swal from 'sweetalert2';
const router =useRouter()
const {logout}=useAuthStore()

const {handleElectionType, isActive,} =defineProps(['handleElectionType','isActive'])
const handleLogout=async()=>{
    await logout()
    Swal.fire({
            title: 'Log Out  Success full',
            text:   `Good Bye`,
            icon: 'success',
        });
    router.push('/auth/login')
}
console.log(isActive);
</script>
<style lang="css">
header{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 10px;
    /* background: #000; */
}
nav{
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    gap: 50px;
    padding: 10px;
    border-radius: 15px 15px 0px 0px;
    background: var(--primary-color);
    border-bottom: 2px solid var(--secondary-color);
}
nav>a{
    color: var(--secondary-color);
}
.log-out{
    /* background: none;
    border: none; */
} 
.election-nav{
    max-width: 500px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    gap: 50px;
    padding: 10px;
    background: var(--primary-color);
}

.btn{
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    background: var(--primary-color);
    
}
.btn.active{
    background: var(--secondary-color);
    color: var(--primary-color);
   
}

@media screen and (min-width:700px) {
  nav{
    /* max-width: 1080px; */
    justify-content: space-between;
    padding: 1rem;
}
  }
</style>