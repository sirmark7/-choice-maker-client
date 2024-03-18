<template>
  <div class='home-page'>
    <NavigationBar :show="true" :handleElectionType="handleElectionType" :isActive="isActive"/>
      <span></span>
    <CandidateList :candidates="candidates" :toggleModal="handleShowModal" mode="voting"/> 
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
import {useRouter} from 'vue-router'
import Swal from 'sweetalert2'
const router =useRouter()
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
  // console.log(Object.keys(groupedCandidates.value).length);
  // console.log(electionTypes.value);
  candidates.value =groupedCandidates.value[electionTypes.value[election.value]]
  isActive.value['position'] =electionTypes.value[election.value]

})

 const filteredCandidates=async()=> {
      // Filter candidates based on selected position
      console.log(electionTypes.value[election.value]);
      isActive.value['position'] =electionTypes.value[election.value]
      if(election.value){
        candidates.value=[]
        const type = electionTypes.value[election.value]
        const result=candidateList.filter(candidate=>candidate.position == type)
        console.log(result,'first');
        candidates.value = result
        console.log(candidates.value,'test');
        return 
      }
      else{
        candidates.value=[]
        candidates.value = candidateList
        return 
      }
    }

const handleElectionType =()=>{
  const  listLength = Object.keys(groupedCandidates.value).length
  if (election.value==(listLength-1)){
    isActive.value['state']=false

    Swal.fire({
    title: "Submit Votes!",
    text:`All votes will be submitted for counting`,
    showCancelButton: true,
    confirmButtonColor: '#008000',
    cancelButtonColor: 'red',
    cancelButtonText: "No, cancel it!",
    confirmButtonText: 'Yes, I am sure!'
    }).then( (result)=>{
    if(result.isConfirmed){
      //set voting status
      localStorage.setItem('votesStatus',JSON.stringify(true))
      // get all votes from localstorage
        const votes =JSON.parse(localStorage.getItem('votes'))
        console.log(votes);
        router.push('/about')
        Swal.fire("Vote Confirmed",`Vote Counted`, "success",)

    }
    }
    )
    return;
}
++election.value
filteredCandidates() 
}


const handleShowModal=(candidate)=>{
  candidateProfile.value=candidate
  showModal.value=!showModal.value
}

</script>
<style lang="css" scoped>
.home-page{
  display: flex;
  justify-content:flex-start;
  flex-direction: column;
  align-items: start;
  padding-top: 30vh;
  height: 100vh;
}
.home-page>span{
  display: block;
  background: #000;
  width: 100%;
}

</style>
