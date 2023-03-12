<script setup lang="ts">
 import { ref } from 'vue';
 import { useSession, login } from '@/model/session';
 
 import { useWorkouts1 } from '@/model/workouts';




 const session = useSession();
 const workouts = useWorkouts1();
 const sessionWorkouts = ref(workouts);
 

 </script>


<template>
    <div>
        
        <div v-if="session.user">   
        <!---<div v-for="session,user in sessions">-->
            <div class="container">
                <div class="box">
                    <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image"> <!-- This is a placeholder to fill layout -->
                    <div class="message">
                        <div class="message-header">
                            <p> {{session.user?.name}}</p>
                         </div>
    
                         <div v-if="session.user">
                            <div class="message-body">
                                 <div v-for="workout in session.user.workouts">
                    <p>{{ workout.workout }} {{ workout.weight }}</p>
                                 </div>
                            </div>
                         </div>
                </div>
                </div>
            </div>
         </div>
      

    
            <div v-else>
                <h2>You are not logged in.</h2>
                <p>You need to be logged to access this.</p>
                <p>Click in the top right corner to log in </p>
               
            </div>
 

 </div>
</template>



<style scoped>

.box{
    display: flex;
    background-color: rgb(108, 105, 105);
    color: white;
    padding: 1rem;
    margin-bottom: 2rem;
    border-color: black;
    margin-right: 5rem;
    margin-left: 5rem;

}

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
    margin-top: 5rem;
    margin-bottom: 5rem;
    background-color: #0c5e44;
   

}
.message-header{
    background-color: #0c5e44;
    color: white;
    padding: 1rem;
    margin-bottom: 1rem;
    
}
p{
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
    display: flex;
}



</style>