<script setup lang="ts">
import { ref } from 'vue';
import { useSession } from '@/model/session';
import type AddWorkoutForm from './AddWorkoutForm.vue';

const session = useSession();
const user = ref(session.user);









</script>


<template>
    <div>


        <div class="column is-quarter"></div>
           
            <div class="column">

                <div class="button is larger is-fullwidth"> Add Cardio Run</div>
                
                <div class="button is-large is-fullwidth" > Add Workout</div>    
               
                    
                    
             </div>



                

            </div>

             
        

        <div class="column is-quarter"></div>



           
    
</template>



<style scoped>

.button{
    background-color: #0c5e44;
    color: white;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
    border: none;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    transition-duration: 0.4s;
    box-shadow: 0 4px #999;
}

</style>