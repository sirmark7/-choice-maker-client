<template>
    <div class="modal-container">

        <div class="modal">
            <div class="nav">
                <h1>{{ heading }}</h1>
                <Close class="close-icon"/>
            </div>
            <div class="modal-content">
                <slot></slot>
            </div>
        </div>


    </div>
</template>

<script setup>
 import { Close } from '@vicons/ionicons5'
</script>

<style lang="css" scoped>
.modal-container{
     position: absolute;
     height: 100vh;
     width: 100vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.modal{
    width: 50%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    background: var(--primary-color);
    overflow-y: scroll;
    scroll-behavior: smooth;
}

.nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 2px solid var(--secondary-color);
    /* background: #000; */
    width: 100%;
    height: 40px;
}

.modal-container::after{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    content: "";
    background-color: rgba(1, 1, 1, 0.695);
}
.close-icon{
    height: 100%;
}
</style>