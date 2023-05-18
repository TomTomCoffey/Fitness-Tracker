<script setup lang="ts">

import { getUsers, setBestBench, setBestDeadlift, setBestSquat, type User } from '@/model/session';
import { ref } from 'vue';
import { useSession, useWorkout, addWorkout1, findBestBench, findBestDeadlift, findBestSquat, increasePRs, addMessage, updateUser} from '@/model/session';
import AutoComplete from 'primevue/Autocomplete';


const items = ref<User[]>([]);
getUsers().then((data) => {        ////This will get me the users from my database
  items.value = data.data;
});


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
            addMessage("You hit a new PR for Bench!", 'info');
            setBestBench(workoutWeight);
        }
    }
    if (workoutName == "Squat") {
        if (workoutWeight > findBestSquat()) {
            increasePRs();
            addMessage("You hit a new PR for Squat!", 'info');
            setBestSquat(workoutWeight);
        }
    }
    if (workoutName == "Deadlift") {
        if (workoutWeight > findBestDeadlift()) {
            increasePRs();
            addMessage("You hit a new PR for Deadlift!", 'info');
            setBestDeadlift(workoutWeight);
            
        }
    }

    addWorkout2(workoutName, workoutWeight);
    updateUser(session.user as User);
}




const workoutName = ref('');
const workoutWeight = ref(0);

const usersearch = ref('');   /// got my ref for user

const value = ref("");


async function search(event: [query : String])
{
    const query = event[0];
    const data = await getUsers();
    const users = data.data;
    const results = users.filter((user) => {
        return user.name.toLowerCase().startsWith(query.toLowerCase());
    });
    items.value = results;
    console.log(results);
}





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

                <div class="field">
                    <label for="" class="label">Enter a User you worked with:</label>
                    <div class="select ">
                        <div class="card flex justify-content-center">
                             <AutoComplete v-model="value" :suggestions="items" @complete="search" />
                        </div>
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