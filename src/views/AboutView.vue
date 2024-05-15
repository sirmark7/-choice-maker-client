
<template>
    <div class="container">
        <NavigationBar  :show="false" :handleElectionType="()=>{}" :isActive="{position:'View Your Choises',state:true}"/>
       <h1 class="space">View Your Choises</h1>
       
        <CandidateList :candidates ='votedCandidates' :toggleModal='handleShowModal' :mode="false"/>
    </div>
    <ModalCard v-show="showModal" heading="Candidate Profile" :candidate="candidateProfile" :toggleModal="handleShowModal"/>
</template>

<script setup>
import {onMounted,ref} from 'vue'
import NavigationBar from '../components/homepage/NavigationBar.vue';
import CandidateList from '../components/homepage/CandidateList.vue'
import ModalCard from '../components/ModalCard.vue';
const votedCandidates =ref()
const showModal=ref(false)
const candidateProfile=ref({})
onMounted(()=>{
  votedCandidates.value =JSON.parse(localStorage.getItem('votes'))
  console.log(votedCandidates.value);
})

const handleShowModal=(candidate)=>{
  candidateProfile.value=candidate
  showModal.value=!showModal.value
}

</script>
<style lang="css" scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    /* min-height: 100vh; */
    /* background: #d7c6c67d; */
    padding-top: 100px;
    width: 100%; 
}

.space{
    font-size: 2.5rem;
    position: fixed;
    top: 0;
    z-index: 999;
    color: var(--secondary-color);
}

</style>
