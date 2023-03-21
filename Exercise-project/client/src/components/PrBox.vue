<script setup lang="ts">
 import { ref } from 'vue';
 import { useSession, users} from '@/model/session';
 import { useWorkouts1 } from '@/model/workouts';
 import { defineProps } from 'vue';





 const session = useSession();
 const workouts = useWorkouts1();
 const sessionWorkouts = ref(workouts);
 const user = ref(session.user);


 let items  = ref(users);


 </script>


<template>
    <div>
        
        <div v-for="(user, index) in items" :key="index">
            <div class="container">
                <div class="mediabox">
                    <figure class="image is-128x128">
                    <img src="../data/images/IMG_7634 Small.png">
                    </figure><!-- This is a placeholder to fill layout -->
                    <div class="message">
                        <div class="message-header">
                            <p> {{user?.name}}</p>
                         </div>
    
                         <div v-if="user">
                            <div class="message-body">
                                 <div v-for="workout in user.workouts">
                    <p>{{ workout.workout }} {{ workout.weight }}</p>
                                 </div>
                            </div>
                         </div>
                </div>
                </div>
            </div>
        </div>
         
      

    
            
 

 </div>
</template>



<style scoped>

.mediabox{
    display: flex;
    background-color:#def2f1 ;
    color: white;
    padding: 1rem;
    margin-bottom: 2rem;
    border-color: black;
    margin-right: 10rem;
    margin-left: 10rem;
    border-color: #3aafa9;

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
    background-color: transparent;
    padding: 1rem;
    margin-bottom: 2rem;
    border-color: black;
}
.container{
    margin-top: 5rem;
    margin-bottom: 5rem;
    background-color: transparent;
   

}
.message-header{
    background-color: #3aafa9;
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
.message-body{
  
    padding: 1rem;
    margin-bottom: 1rem;
    border-color: black;
}



</style>