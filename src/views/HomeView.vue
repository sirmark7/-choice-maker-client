<template>
  <div class='home-page'>
   <NavigationBar :handleElectionType="handleElectionType" :isActive="isActive"/>
    <div class="dropdown">
      <select v-model="election" onchange="()=>handleInput(election)" >

        <option selected disabled value="">Please select one</option>
        <option class="select-option" 
        v-for="(type,index) in electionTypes[`${electionType}`]" 
        :key="index" :value="type.value" 
        >
        {{ type.name }}
      </option>
     
      </select>
    </div>
    <CandidateList :candidates="candidates"/>
  </div>
</template >

<script setup>
import CandidateList from '../components/homepage/CandidateList.vue';
import NavigationBar from '../components/homepage/NavigationBar.vue';
import { candidateList } from '../data/data';
import {useCandidates} from '../stores/candidates'
import { onBeforeMount } from 'vue';
import {ref} from 'vue'


const electionType =ref('general')
const {getCandidates,setCandidates}=useCandidates()
const candidates =ref()

onBeforeMount(async()=>{
await setCandidates(candidateList)
candidates.value=getCandidates
})
const isActive =ref(true)
const handleElectionType =()=>{
  console.log(electionType.value)

//   if(type === 'src'){
//     isActive.value = false
//   }else{isActive.value =true}
  
// }

// const handleInput=(result)=>{
// console.log(result);
// }
}

const electionTypes = {
  general:[
    {name:'Boys Prefect',value:'boys_prefect'},
    {name:'Girls Prefect',value:'girls_prefect'},
    {name:'Sports Prefect',value:'sports_prefect'},
    {name:'Library Prefect',value:'library_prefect'},
    {name:'Environmental Prefect',value:'environmental_prefect'},  
    {name:'Dinning Hall Prefect',value:'dinning_Hall_prefect'},
    {name:'Entertainment Prefect',value:'entertainment_prefect'},
    {name:'Disciplinary Prefect',value:'disciplinary_prefect'},
  ],

  src:[
    {name:'President', value:'President'},
    {name:'General Secretary',value:'General_secretary'},
    {name:'Financial Secretary',value:'Financial_secretary'},
    {name:'Organising Secretary',value:'Organising_secretary'},
    {name:'Women Commissioner',value:'Women_Commissioner'},
  ]
}
</script>
<style lang="css">
.home-page{
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

.dropdown{
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: center;
  padding: 20px ;
}
.dropdown select{
  padding: 10px;
  width: 100%;
  cursor: pointer;
}

.select-option{
  padding: 5px;
  height: 10px;
  border-radius:0px ;
}


</style>
