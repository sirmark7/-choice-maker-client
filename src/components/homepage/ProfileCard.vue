<template>
  <div class="container">
    <div class="profile-page">
      <button @click="$router.back()" class="candidate-nav"><ReturnDownBack class="back-icon"/>Back</button>
    <img class="profile-img" :src="`/images/${profile?.img}`" :alt="profile?.name">
    <h1>{{$route.params.id}}</h1>
    <div class="profile-details">
      <span>
        <h2>Biography</h2>
        <p>{{ profile?.biography }}</p>
      </span>
      <span>
        <h3>Policies</h3>
        <ul class="policies">
          <li v-for="(policy,i) in profile?.policies" :key="i" >{{ policy }}</li>
        </ul>
      </span>
      </div>
 
  </div>
</div>
  </template>
  <script setup>

  import {ref,onMounted } from 'vue';
  import { candidateList } from '../../data/data';
  import { useRoute } from 'vue-router';
  import { ReturnDownBack } from '@vicons/ionicons5'
  const profile=ref()
  const route =useRoute()

  
  onMounted(()=>{
profile.value=candidateList.find((candidate)=>candidate.name==route.params.id)
  })

  
  </script>
  <style lang="css" scoped>
  h1{
    font-size: 20px;
  }
  .container{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .profile-page{
    max-width: 500px;
    height: 100vh;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    position: relative;
    gap: 12px;
  }
h2, h3{
  text-decoration: underline;
  font-size: 18px;
  width: 100%;
  text-align: left;

}
  .profile-page::after{
    position: absolute;
    top: 0;
    left: 0;
    border-bottom-left-radius:30% ;
    border-bottom-right-radius: 30%;
    content: '';
    height: 20vh;
    width: 100%;
    background: #22a148;
  }
.candidate-nav{
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  height: 50px;
  background: none;
  border: none;
  font-size: 20px;
  font-weight: 500;
  z-index: 10;
  width: 100%;
  cursor: pointer;
   font-size: 12px;

}
.candidate-nav:hover{
  color: rgb(60, 58, 58);
}
.profile-img{
  z-index: 10;
  border-radius: 100%;
  height: 100px;
  width: 100px;
}

.back-icon {
  height: 20px;
  font-weight: 800;
}

.profile-details{
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2rem;
}

.policies{
  overflow-y: scroll;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
  gap: 20px;
}

</style>
  