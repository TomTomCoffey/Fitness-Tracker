<script setup lang="ts">
import { ref } from 'vue';
import AddWorkout from '@/components/AddWorkout.vue';


</script>




<template>
    <div>
            
        <div class="box">
            <div class="field">
                <label class="label">Workout Type</label>
                <div class="control">
                    <div class="select">
                        <select>
                            <option>Bench</option>
                            <option>Squat</option>
                            <option>Deadlift</option>
                        </select>
                    </div>
                </div>     
            </div>
            <div class="field">
                <label class="label">Workout Date</label>
                <div class="control">
                    <input class="input" type="date" placeholder="Workout Date">
                </div>
            </div>
            <div class="field">
                <label class="label">Weight(lbs)</label>
                <div class="control">
                    <input class="input" type="number" placeholder="Weight">
                </div>
            <div class="field is-grouped">
                <div class="control">
                    <button class="button is-link">Submit</button>
                </div>
                <div class="control">
                    <button class="button is-link is-light">Cancel</button>
                </div>
            </div>

            </div>




        </div>
       





    </div>
</template>



<style scoped>

.box{
    background-color: #0c5e44 invert(100%);
    color: white;
    padding: 1rem;
    margin-right : 5rem;
    margin-left: 5rem;
    
}

</style>