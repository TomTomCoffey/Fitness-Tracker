<script setup lang="ts">
import { ref } from 'vue';
import { useSession } from '@/model/session';
import type AddWorkoutForm from './AddWorkoutForm.vue';

const session = useSession();
const user = ref(session.user);
const clickButton = false;







</script>


<template>
    <div>


        <div class="column is-quarter"></div>
           
            <div class="column">

                <div class="button is larger is-fullwidth"> Add Cardio Run</div>
                
                <div class="button is-large is-fullwidth" @click=" clickButton = !clickButton" > Add Workout</div>    
                <div v-if="clickButton">
                    <AddWorkoutForm/>
                    
                    
             </div>



                

            </div>

             
        

        <div class="column is-quarter"></div>



           
    </div>
</template>



<style scoped>

</style>