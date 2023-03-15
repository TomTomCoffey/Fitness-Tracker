<script setup lang="ts">


import { ref } from 'vue';
import AddWorkout from '@/components/AddWorkout.vue';
import { useSession, addWorkout, useWorkout, addWorkout1 } from '@/model/session';
import Exercises from '@/views/Exercises.vue';



const session = useSession();
const user = ref(session.user);
const toggle = ref(false);
const workout = useWorkout();


function toggleWorkout() {
    toggle.value = !toggle.value;
    console.log(toggle);
}

function addWorkout2(workoutName: string, workoutWeight: number) {
    addWorkout1(workoutName, workoutWeight);
    console.log(workoutName, workoutWeight);
}

const workoutName = ref('');
const workoutWeight = ref(0);



</script>





<template>
    <div>
  
         <div class="model-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Add Workout</p>
              <button class="delete" @click="toggleWorkout"></button>
              <div v-if="toggle">
                <!----need to figure out how to close modal-->
                
            </div>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <label class="labelWorkout" >Workout</label>
                    <div class="control">
                    <div class="select">
                        <select type = "workout" required v-model="workoutName">
                        <option>Bench</option>
                        <option>Squat</option>
                        <option>Deadlift</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div class="field">
                    <label class="labelWeight">Weight (lbs)</label>
                    <div class="control">
                    <input type= "number" required v-model="workoutWeight">
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
              <button class="button is-success" @click="addWorkout2(workoutName, workoutWeight)">Add</button>
              <button class="button">Cancel</button>

            </footer>
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
.modal-background{
    background-color: #0c5e44 invert(100%);
    color: white;
    padding: 1rem;
    margin-right : 5rem;
    margin-left: 5rem;
    
}

</style>