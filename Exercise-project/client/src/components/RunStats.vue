<script setup lang="ts">
import { ref, type ComputedRef } from 'vue'
import { totalDistance, totalDuration, useSession } from '@/model/session';
import { averagePace, caloriesBurned,feetPerMinute } from '@/model/session';
import HomeView from '@/views/HomeView.vue';


const session = useSession();
const user= ref(session);









</script>

<template>
    <div>
        <div class="box has-text-info summary">
            <h2 class="title">Cardio Stats</h2>
            <div class="colums is-multiline">
                <div class="column is-half">
                    <h3 class="value1">{{ totalDistance }}</h3> 
                        Distance

                </div>
                <div class="column is-half">
                    <h3 class="value2">{{ totalDuration }}</h3>
                        Duration

                </div>
                
                <div class="column is-half">
                    <h3 class="value3">{{ feetPerMinute }}</h3>
                        Ave Pace(ft/min)

                </div>

                <div class="column is-half">
                    <h3 class="value4">{{ caloriesBurned }}</h3>
                        Calories Burned

                </div>
            </div>
        </div>

    </div>
</template>



<style scoped>

.box has-text-success summary{
    background-color: white;
    color: #3aae9f;
    padding: 1rem;

    
}

.summary{
    background-color: white;
    color: #3aae9f;
    padding: 1rem;

    
}
.title{
    font-size: 2rem;
    font-weight: 700;
    color: #3aae9f;
    padding: 0;
    margin: 0;
}
.value1{
    font-size: 2rem;
    font-weight: 700;
    color: #3aae9f;
    padding: 0;
    margin: 0;
}
.value2{
    font-size: 2rem;
    font-weight: 700;
    color: #3aae9f;
    padding: 0;
    margin: 0;
}
.value3{
    font-size: 2rem;
    font-weight: 700;
    color: #3aae9f;
    padding: 0;
    margin: 0;
}
.value4{
    font-size: 2rem;
    font-weight: 700;
    color: #3aae9f;
    padding: 0;
    margin: 0;
}
.h2{
    font-size: 2rem;
    font-weight: 700;
    color: #3aae9f;
    padding: 0;
    margin: 0;
}



</style>