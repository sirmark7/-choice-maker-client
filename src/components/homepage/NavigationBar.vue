<template>
    <header>
        <nav>
            <button class='btn' title="switch General Elections" :class='{active: isActive}' @click="()=>handleElectionType('general')" >General Elections</button>
            <button class='btn' title=" switch SRC Elections" :class='{active: !isActive}' @click="()=>handleElectionType('src')">SRC Elections</button>
        </nav>
    </header>
</template>
<script setup>

const {handleElectionType, isActive} =defineProps(['handleElectionType','isActive'])

</script>
<style lang="css">
header{
    width: 100%;
    display: flex;
    justify-content: center;
}
nav{
    max-width: 500px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    gap: 50px;
    padding: 10px;
    background: var(--primary-color);
}

.btn{
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
}
.btn.active{
    background: var(--primary-color);
    color: var((--secondary-color));
}
</style>