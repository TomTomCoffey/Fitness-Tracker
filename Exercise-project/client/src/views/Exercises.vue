
<script setup lang="ts">

import { ref } from 'vue';
import AddWorkout from '@/components/AddWorkout.vue';
import AddWorkoutForm from '@/components/AddWorkoutForm.vue';
import { useSession } from '@/model/session';
import AddCardioForm from '@/components/AddCardioForm.vue';

const isWorkoutActive = ref(false);
const session = useSession();
const user = ref(session.user);
const isCadrioActive = ref(false);

function toggleCardio() {
    isCadrioActive.value = !isCadrioActive.value;
    console.log(isCadrioActive);
}
function toggleWorkout() {
    isWorkoutActive.value = !isWorkoutActive.value;
    console.log(isWorkoutActive);
}


</script>



<template>
    <div>


        <div class="column is-quarter"></div>
           
            <div class="column">

                <div class="button is larger is-fullwidth" @click="toggleCardio"> Add Cardio Run</div>
                <div v-if="isCadrioActive==true">
                    <AddCardioForm/>
                </div>
               
                <div class="button is-large is-fullwidth" @click="toggleWorkout" > Add Workout</div>    
                <div v-if="isWorkoutActive==true">
                    <AddWorkoutForm/>
                    
                </div>

                                  
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