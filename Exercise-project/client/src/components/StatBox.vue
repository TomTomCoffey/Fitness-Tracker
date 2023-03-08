
<script setup lang="ts">
    import { useWorkouts } from '@/model/workouts';

    const workouts = useWorkouts();

</script>


<template>
        <div class="box has-text-success summary">
            <h2 class="title is-4">Lifting Stats</h2>
            <div class="columns">
                <div class="column">
                    <div class="box has-text-success">
                        <h3 class="title is-5">Total PR's</h3>
                        <p class="subtitle is-3">0</p>
                    </div>
                </div>
                <div class="column">
                    <div class="box has-text-success">
                        <h3 class="title is-5">Total Lifts</h3>
                        <p class="subtitle is-3">0</p>
                    </div>
                </div>
                <div class="column">
                    <div class="box has-text-success">
                        <h3 class="title is-5">Total Weight Lifted</h3>
                        <p class="subtitle is-3">0</p>
                    </div>
                </div>
            </div>
         </div>
       


</template>



<style scoped>

.summary{
    background-color: #0c5e44;
    color: white;
    padding: 1rem;
    
}



</style>