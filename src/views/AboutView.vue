
import CandidateList from '../components/homepage/CandidateList.vue';
<template>
    <div class="container">
        <NavigationBar  :show="false" :handleElectionType="()=>{}" :isActive="{position:''}"/>
            <div class="content">
                <h1>View Your Choises</h1>
                <CandidateList :candidates ='votedCandidates' :toggleModal='handleShowModal' :mode="false"/>
            </div>

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
    align-items: center;
    min-height: 100vh;
    /* background: #b75959; */
    width: 100%;
}
.content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    margin-top: 10vh;
    background: #000;
    width: 100%;
    height: 100%;
}
</style>
