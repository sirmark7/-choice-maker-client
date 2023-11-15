<template >
    <Swiper 
    class='candidates'
    :direction="'vertical'"
    :slidesPerView="2.2"
    :freeMode="true"
    :scrollbar="true"
    :mousewheel="true"
    :spaceBetween="10"
    :modules="modules"
    >
    <SwiperSlide
    v-for="(candidate,index) in candidates" 
    :key="index"
    >
        <CandidateCard 
        :img="candidate.img"
        :name="candidate.name"
        :text="candidate.text"
        />
    </SwiperSlide>
    </Swiper>
</template>
<script setup>
import { SwiperSlide, Swiper } from 'swiper/vue';
import {  FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/mousewheel'
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import CandidateCard from './CandidateCard.vue'
 const {candidates}=defineProps(['candidates'])
const modules =[FreeMode,Scrollbar,Mousewheel]


</script>
<style lang="css">
    .candidates{
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
    }
</style>