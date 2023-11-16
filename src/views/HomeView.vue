<template>
  <div class='home-page'>
   <NavigationBar :handleElectionType="handleElectionType" :isActive="isActive"/>
    <div class="dropdown">
      <label for="position">Select Position to see Candidates</label>
      <select id="position" v-model="election" name="position" :onChange="handleInput" >
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
import { candidateList,electionTypes } from '../data/data';

import {ref,computed} from 'vue'

const electionType =ref('general')
const election =ref()
const candidates =ref()
const isActive =ref(true)
const handleElectionType =(type)=>{

  if(type === 'src'){
    isActive.value = false
    electionType.value='src'
  }else{
    isActive.value =true
    electionType.value='general'
    }
  
}
 const filteredCandidates=()=> {
      // Filter candidates based on selected position
      return election.value
        ? candidateList.filter(candidate => candidate.position === election.value)
        : candidateList;
    }

computed( candidates.value=filteredCandidates())



const handleInput=async()=>{
  console.log();
 candidates.value=filteredCandidates()
}


</script>
<style lang="css">
.home-page{
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}

.dropdown{
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
