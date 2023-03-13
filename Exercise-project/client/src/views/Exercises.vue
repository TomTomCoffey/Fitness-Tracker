

<script setup lang="ts">

import { ref } from 'vue';
import AddWorkout from '@/components/AddWorkout.vue';
import AddWorkoutForm from '@/components/AddWorkoutForm.vue';

const clickButton = false;


</script>



<template>
    <div>


        <div class="column is-quarter"></div>
           
            <div class="column">
                <div class="button is-large is-fullwidth" @click=" clickButton = !clickButton" > Add Workout</div>    
                <div v-if="clickButton == true">
                    <AddWorkoutForm/>
                 
                    
                </div>
            </div>


        

        <div class="column is-quarter"></div>

    </div>
</template>



<style scoped>

</style>