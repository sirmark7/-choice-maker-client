<template>
  <div class='home-page'>
   <NavigationBar :handleElectionType="handleElectionType" :isActive="isActive"/>
    <div class="dropdown">
      <label for="position">Select Candidate for {{ }}</label>
    </div>
    <CandidateList :candidates="candidates" :toggleModal="handleShowModal"/> 
  </div>
  <ModalCard v-show="showModal" heading="Candidate Profile" :candidate="candidateProfile" :toggleModal="handleShowModal"/>
</template >

<script setup>
import ModalCard from '../components/ModalCard.vue';
import CandidateList from '../components/homepage/CandidateList.vue';
import NavigationBar from '../components/homepage/NavigationBar.vue';
import { candidateList} from '../data/data';

// import Swal from 'sweetalert2'
import {ref,onMounted} from 'vue'
import Swal from 'sweetalert2'
const electionTypes =ref()
const election =ref(0)
const candidates =ref()
const isActive =ref({position:'',state:true})
const showModal=ref(false)
const candidateProfile=ref({})
const groupedCandidates=ref()

onMounted(()=>{

groupedCandidates.value = candidateList.reduce((result, candidate) => {
    // Check if the position key exists in the result object
    if (!result[candidate.position]) {
        // If it doesn't, create a new array for that position
        result[candidate.position] = [];
    }
    // Push the candidate into the array corresponding to its position
    result[candidate.position].push(candidate);
    electionTypes.value = Object.keys(result)
    return result;
}, {});
  console.log(Object.keys(groupedCandidates.value).length);
  console.log(electionTypes.value);
  candidates.value =groupedCandidates.value[electionTypes.value[election.value]]
  isActive.value['position'] =electionTypes.value[election.value]

})

 const filteredCandidates=()=> {
      // Filter candidates based on selected position
      console.log(electionTypes.value[election.value]);
      return election.value
        ? candidateList.filter(candidate => candidate.position === electionTypes.value[election.value])
        : candidateList;
    }

const handleElectionType =()=>{
  const  listLength = Object.keys(groupedCandidates.value).length
  if (election.value==(listLength-1)){
    // isActive.value['state']=false
    Swal.fire("No More Candidated",`Voting completed`, "info")
    return;
}
++election.value
candidates.value = filteredCandidates()  
}


const handleShowModal=(candidate)=>{
  candidateProfile.value=candidate
  showModal.value=!showModal.value
}

</script>
<style lang="css">
.home-page{
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  /* height: 100vh; */
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
  cursor: pointer;
}

label{
  font-size: 24px;
  font-weight: 600;
  color: var(--primary-color);
}
</style>
