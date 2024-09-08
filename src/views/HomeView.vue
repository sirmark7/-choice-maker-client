<template>
  <div class='home-page'>
    <NavigationBar :show="true" :handleElectionType="handleElectionType" :isActive="isActive" :category="electionCategory"/>
      <span></span>
    <CandidateList :candidates="candidates" :toggleModal="handleShowModal" mode="voting" :handleNext="handleElectionType"/> 
  </div>
  <ModalCard v-show="showModal" heading="Candidate Profile" :candidate="candidateProfile" :toggleModal="handleShowModal"/>
 <LoaderModal v-show="loading"/>
</template >

<script setup>
import ModalCard from '../components/ModalCard.vue';
import CandidateList from '../components/homepage/CandidateList.vue';
import NavigationBar from '../components/homepage/NavigationBar.vue';
import {useCandidates} from '../stores/candidates'
import {useElections} from '../stores/elections'
import {useLoaderStore} from '../stores/loader'
import LoaderModal from '../components/LoaderModal.vue'
// import Swal from 'sweetalert2'
import {ref,onMounted} from 'vue'
import {useRouter} from 'vue-router'
import Swal from 'sweetalert2'
const {getAllCandidates,allCandidates}=useCandidates()
const {getAllElections,getEletions}=useElections()
const {isLoading}=useLoaderStore()
const router =useRouter()
const electionTypes =ref()
const electionCategory =ref()
const election =ref(0)
const candidates =ref()
const loading=ref(isLoading)
const isActive =ref({position:'',state:true})
const showModal=ref(false)
const candidateProfile=ref({})
const groupedCandidates=ref()

const filteredCandidates=async()=> {
      // Filter candidates based on selected position

      console.log(electionTypes.value[election.value]);
     
    }

onMounted(async()=>{
await getAllCandidates()
.then((res)=>{
  console.log(res.data);
  
  groupedCandidates.value=res.data.reduce((result, candidate) => {
    // Get the category name
    const categoryName = candidate?.position?.category?.name;
  console.log(categoryName);
  
    // If the category doesn't exist in the result, create an empty array for it
    if (!result[categoryName]) {
      result[categoryName] = [];
    }

    // Add the candidate to the array for the category
    result[categoryName].push(candidate);
    return result;
  }, {});
  console.log(groupedCandidates.value);
  electionTypes.value = Object.keys(groupedCandidates.value)
  isActive.value['position'] =groupedCandidates.value[electionTypes.value[election.value]][0].position.name
  electionCategory.value = groupedCandidates.value[electionTypes.value[election.value]][0].position.category.name
}  )

.then(()=>(null))

}
)

 

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
  event.stopPropagation()
  candidateProfile.value=candidate
  showModal.value=!showModal.value
}

</script>
<style lang="css" scoped>
.home-page{
  display: flex;
  justify-content:flex-start;
  flex-direction: column;
  align-items: center;
  padding-top: 30vh;
  height: 100vh;
}
.home-page>span{
  display: block;
  background: #000;
  width: 100%;
}

</style>
