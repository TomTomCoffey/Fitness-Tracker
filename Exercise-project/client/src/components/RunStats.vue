<script setup lang="ts">
import { ref } from 'vue'
import { useSession } from '@/model/session';
import { averagePace, caloriesBurned} from '@/model/session';


const session = useSession();
const user= ref(session);



</script>

<template>
    <div>
        <div class="box has-text-success summary">
            <h2 class="title">Cardio Stats</h2>
            <div class="colums is-multiline">
                <div class="column is-half">
                    <h3 class="value">{{ session.user?.cardio[0].distance }}</h3>
                        Distance

                </div>
                <div class="column is-half">
                    <h3 class="value">{{ session.user?.cardio[0].duration }}</h3>
                        Duration

                </div>
                
                <div class="column is-half">
                    <h3 class="value">{{ averagePace }}</h3>
                        Ave Pace

                </div>

                <div class="column is-half">
                    <h3 class="value">{{ caloriesBurned }}</h3>
                        Calories Burned

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