

<script setup lang="ts">

import { ref } from 'vue';
import AddWorkout from '@/components/AddWorkout.vue';
import AddWorkoutForm from '@/components/AddWorkoutForm.vue';


</script>



<template>
    <div>


        <div class="column is-quarter"></div>
           
            <div class="column">
                 <AddWorkout/>

                 <AddWorkoutForm/>
             </div>


        

        <div class="column is-quarter"></div>

    </div>
</template>



<style scoped>

</style>