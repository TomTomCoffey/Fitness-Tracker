<script setup lang="ts">
 import { ref } from 'vue';
 import { useSession, login } from '@/model/session';


 const session = useSession();

 </script>


<template>
    <div>
        <div class="container">
        <div class="box">
            <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image"> <!-- This is a placeholder to fill layout -->
            <div class="message">
                <div class="message-header">
                    <p> {{session.user?.name}}</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    <p>Bench 225lbs</p>
                    <p>Squat 315lbs</p>
                    <p>Deadlift 405lbs</p>
                </div>
            </div>


        </div>

        </div>

        

   

    </div>
</template>



<style scoped>

.box{
    display: flex;
    background-color: #0c5e44;
    color: white;
    padding: 1rem;
    margin-bottom: 2rem;}

.box img{
    margin-right: 1rem;
    border-radius: 50%;
    width: 128px;
    height: 128px;
}
.message{
    margin: 0;
    padding: 0;
    background-color: white;
    padding: 1rem;
    margin-bottom: 2rem;
    border-color: black;
}
.container{
    margin-top: 2rem;
    margin-bottom: 2rem;

}
.message-header{
    background-color: #0c5e44;
    color: white;
    padding: 1rem;
    margin-bottom: 1rem;
    
}


</style>