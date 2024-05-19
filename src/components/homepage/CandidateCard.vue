<template >
    <div class='card-container'>
        <div class="profile">
            <img :src="image" :alt="candidate.name">
            <p class=""> <span style="font-weight: bold;">Position</span> <br> {{candidate.position.replace(/_/g," ") }}</p>
                <span v-if="!mode" class="votes">{{candidate.votes }} votes</span>
            <div class="profile-text">
                <h3>{{ candidate.name }}</h3>
                <p> {{ candidate.motto }}</p>

            </div>

            
        </div>
        <div class="btns">
            <!-- <button class=' btn btn-info' @click="$router.push(`/candidate/${candidate.name}`)" >View Profile</button> -->
            <button class=' btn btn-info' @click="handleShowProfile(candidate)" >View Profile</button>
            <button v-if="mode" class = ' btn btn-action' @click="handleVote(candidate)" >Vote</button>
        </div>
      
    </div>
</template>
<script setup>
import Swal from 'sweetalert2'
import Helpers from '../../services/helpers'
const {candidate,toggleModal,mode} =defineProps(['candidate','toggleModal','mode'])
const image ='/images/'+candidate.img

const handleVote=(aspirant)=>{
    Swal.fire({
    title: "Confirm Vote!",
    text:`Are you sure you want to vote for ${aspirant.name} ?`,
    showCancelButton: true,
    confirmButtonColor: '#008000',
    cancelButtonColor: 'red',
    cancelButtonText: "No, cancel it!",
    confirmButtonText: 'Yes, I am sure!'
    }).then( (result)=>{
    if(result.isConfirmed){
        aspirant['voted']=true
        console.log(aspirant);

        Helpers.storeData(aspirant)
        Swal.fire("Vote Confirmed",`Vote Counted`, "success",)
    }
    }
    )
}

const handleShowProfile=(candidate)=>{
    toggleModal(candidate)
}
console.log(candidate);

</script>
<style lang="css" scoped>
.card-container{
    background-color: var(--primary-color);
    color: var(--secondary-color);
    max-width: 500px;
    border-radius: 15px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    box-shadow: 2px 2px 4px 2px #8f8d8d, -2px -2px 2px #f1f1f1;
}

    .btns{
        display: flex;
        justify-content: space-evenly;
        padding: 5px;
    }

    .profile{
        position: relative;
        display: grid;
        grid-template-columns:100px 1fr ;
        justify-content: flex-start;
        grid-template-rows: 50px;
        gap: 2rem;
        z-index: 1;
    }

    .profile img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .profile >p {
    text-transform: capitalize;
    column-span: all;
    width: fit-content;
    }
     .profile-text{
        grid-row: 2;
        grid-column: 2;
    }

    .profile-text>h3{
        text-align: left;
    }

    .votes{
        position: absolute;
        right: 10px;
        top: 10px;
    }
    .btns button{
        width:100px ;
        background: var(--primary-color);
        border: none;
        padding: 10px 5px ;
        cursor: pointer;
        border-radius: 10px;
        color: var(--secondary-color);
        font-weight:500;
        border: 2px solid var(--secondary-color);
    }
    .btns button:hover{
        background: var(--secondary-color);
        color: var(--primary-color);
        transition: all .5s ease-in-out;
    }
    .btns{
        gap: 10px;
    }
   
     @media screen and (min-width:700px) {
        
       }

</style>