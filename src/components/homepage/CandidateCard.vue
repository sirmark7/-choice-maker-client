<template >
    <div class='card-container'>
        <div class="profile">
            <img :src="image" :alt="props.name">
            <div class="profile-text">
                <h3>{{ props.name }}</h3>
                <p>{{ props.text }}</p>
            </div>
        </div>
        <div class="btns">
            <button class=' btn btn-info' @click="$router.push(`/candidate/${props.name}`)" >View Profile</button>
            <button class = ' btn btn-action' >Vote</button>
        </div>
    </div>
</template>
<script setup>
const props =defineProps(['name','position','text','img'])
const image ='/images/'+props.img
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

</style>