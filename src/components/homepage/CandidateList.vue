<template >
  <div class="candidates">

 
    <CandidateCard 
    v-for="(candidate, index) in candidates"
    :key="index"
    :candidate="candidate"
    />
  </div>
 
</template>
<script setup>

import { ref, onMounted, onBeforeUnmount } from 'vue';
import CandidateCard from './CandidateCard.vue'
  const windowWidth = ref(window.innerWidth);
    // Update windowWidth when the component is mounted
    onMounted(() => {
      updateWindowWidth();
      window.addEventListener('resize', updateWindowWidth);
    });
    // Remove the event listener when the component is unmounted
    onBeforeUnmount(() => {
      window.removeEventListener('resize', updateWindowWidth);
    });
    // Function to update windowWidth
    const updateWindowWidth = () => {
      windowWidth.value = window.innerWidth;
    };

 const {candidates}=defineProps(['candidates'])



</script>
<style lang="css">
    .candidates{
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      align-items: center;
      gap: 2rem;
       flex: 1;
        padding: 10px 20px;
        align-content: center;
        overflow-y: auto;
        scroll-behavior: smooth;
    }
    .slider{
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      align-items: center;
    }
    @media screen and (min-width:700px) {
  nav{
    max-width: 1080px;
    justify-content: space-between;
    padding: 1rem;
}
.candidates{
  width: 100%;
  grid-template-columns: 1fr 1fr;
}

  }
</style>