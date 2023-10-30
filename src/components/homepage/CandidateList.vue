<template >
    <div class='candidates'>
        <CandidateCard 
        v-for="(candidate,index) in list" 
        :key="index"
        :img="candidate.img"
        :name="candidate.name"
        :text="candidate.text"
        />
    </div>
</template>
<script setup>
import CandidateCard from './CandidateCard.vue'
// const activeCandidates = list.filter((item)=>item.position == position)
// const {position} =defineProps(['position'])
const list=[
    {name:'Mark',
    position:'president',
    img:'avatar-m.png',
    text:'orem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nam? Natus soluta quaerat suscipit'
},
    {name:'Joyce',
    position:'girls_prefect',
    img:'avatar-f.jpg',
    text:'orem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nam? Natus soluta quaerat suscipit'
},
    {name:'Ato',
    position:'boys_prefect',
    img:'avatar-m.png',
    text:'orem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nam? Natus soluta quaerat suscipit'
},
    {name:'Collins',
    position:'president',
    img:'avatar-m.png',
    text:'orem ipsum dolor sit amet consectetur adipisicing elit. Commodi, nam? Natus soluta quaerat suscipit'
},
]
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