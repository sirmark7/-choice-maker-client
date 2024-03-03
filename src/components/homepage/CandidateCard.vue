<template >
    <div class='card-container'>
        <div class="profile">
            <img :src="image" :alt="candidate.name">
            <p class="">Aspiring {{ position }}</p>
            <div class="profile-text">
                <h3>{{ candidate.name }}</h3>
                <p> {{ candidate.motto }}</p>
            </div>
        </div>
        <div class="btns">
            <!-- <button class=' btn btn-info' @click="$router.push(`/candidate/${candidate.name}`)" >View Profile</button> -->
            <button class=' btn btn-info' @click="handleShowProfile" >View Profile</button>
            <button class = ' btn btn-action' @click="handleVote(candidate.name)" >Vote</button>
        </div>
      
    </div>
</template>
<script setup>
import Swal from 'sweetalert2'
const {candidate} =defineProps(['candidate'])
const position=candidate.position.replace(/_/g," ")
const image ='/images/'+candidate.img

const handleVote=(aspirant)=>{
    Swal.fire({
    title: "Confirm Vote!",
    text:`Are you sure you want to vote for ${aspirant} ?`,
    type: "question",
    showCancelButton: true,
    confirmButtonColor: '#008000',
    cancelButtonColor: 'red',
    cancelButtonText: "No, cancel it!",
    confirmButtonText: 'Yes, I am sure!',
    closeOnConfirm: false,
    closeOnCancel: false
    }).then( (result)=>{
    if(result.isConfirmed){
        Swal.fire("Vote Confirmed",`Vote Counted`, "sucess",)
    }
    }
    )
}

const handleShowProfile=()=>{
    Swal.getHtmlContainer({
         html:"<ProfileCard/>",
    })
    // Swal.fire({
    // title: "Profile and Policies",
    // html:"<ProfileCard/>",
    // type: "info",
    // confirmButtonColor: '#008000',
    // confirmButtonText: 'close',
    // }, Swal.getHtmlContainer()
    // )
}
</script>
<style lang="css">
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
}

    .btns,.profile{
        display: flex;
        justify-content: space-evenly;
        padding: 5px;
    }

    .profile{
        justify-content: space-between;
        /* background: #000; */
        gap: 2rem;
    }

    .profile img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }

    .profile >p {
    text-transform: capitalize;
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