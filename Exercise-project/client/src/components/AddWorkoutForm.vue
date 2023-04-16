<script setup lang="ts">


import { ref } from 'vue';
import { useSession, useWorkout, addWorkout1, findBestBench, findBestDeadlift, findBestSquat, increasePRs} from '@/model/session';




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

function checkForPr(workoutName: string, workoutWeight: number) {
    if (workoutName == "Bench") {
        if (workoutWeight > findBestBench()) {
            increasePRs();
        }
    }
    if (workoutName == "Squat") {
        if (workoutWeight > findBestSquat()) {
            increasePRs();
        }
    }
    if (workoutName == "Deadlift") {
        if (workoutWeight > findBestDeadlift()) {
            increasePRs();
        }
    }

    addWorkout2(workoutName, workoutWeight)

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
              <button class="delete" @click="$emit('close')"></button>
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
              <button class="button is-success" @click="checkForPr(workoutName, workoutWeight), $emit('close')">Add</button>
              <button class="button" @click="$emit('close')">Cancel</button>
              <!--need to make cancel buttons work-->

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