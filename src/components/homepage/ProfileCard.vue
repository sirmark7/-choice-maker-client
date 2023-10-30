<template>
  <div class="container">
    <div class="profile-page">
      <button @click="$router.back()" class="candidate-nav"><img src="/images/arrow-right.svg" alt="back home">Back to Candidates</button>
    <img class="profile-img" :src="`/images/${profile?.img}`" :alt="profile?.name">
    <h1>{{$route.params.id}}</h1>
    <div class="profile-details">
      <div>
        <h3>Biography</h3>
        <p>{{ profile?.text }}</p>
        <h3>Policies</h3>
        <ul>
          <li v-for="(policy,i) in profile?.policies" :key="i" >{{ policy }}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
  </template>
  <script setup>

  import {ref, onBeforeMount,onMounted } from 'vue';
  import { candidateList } from '../../data/data';
  import { useRoute } from 'vue-router';
  const profile=ref()
  const route =useRoute()
  
  onMounted(()=>{
profile.value=candidateList.find((candidate)=>candidate.name==route.params.id)
  })


  
  </script>
  <style lang="css" scope>
  .container{
    display: flex;
    justify-content: center;
    align-items: start;
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
h3{
  text-decoration: underline;
}
  .profile-page::after{
    position: absolute;
    top: 0;
    left: 0;
    border-bottom-left-radius:30% ;
    border-bottom-right-radius: 30%;
    content: '';
    height: 30vh;
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
  cursor: pointer;

}
.candidate-nav:hover{
  color: rgb(60, 58, 58);
}
.profile-img{
  z-index: 10;
  border-radius: 100%;
  height: 200px;
  width: 200px;
}

.candidate-nav img{
  transform: scale(-1);
  object-fit: contain;
  height: 100%;
}

.profile-details{
  position: relative;
  display: flex;
}



</style>
  