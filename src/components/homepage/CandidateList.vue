<template >
    <div class='candidates'>
        <CandidateCard 
        v-for="(candidate,index) in candidates" 
        :key="index"
        :img="candidate.img"
        :name="candidate.name"
        :text="candidate.text"
        />
    </div>
</template>
<script setup>
import CandidateCard from './CandidateCard.vue'
import { candidateList } from '../../data/data';
import {useCandidates} from '../../stores/candidates'
import { onMounted,onBeforeMount } from 'vue';
// const activeCandidates = list.filter((item)=>item.position == position)
// const {position} =defineProps(['position'])
const {candidates,setCandidates}=useCandidates()
onBeforeMount(() => {
    setCandidates(candidateList)
})


</script>
<style lang="css">
    .candidates{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        max-height: 80vh;
        overflow-y: scroll;
        gap: 2rem;
        padding: 50px 0;
    }
</style>