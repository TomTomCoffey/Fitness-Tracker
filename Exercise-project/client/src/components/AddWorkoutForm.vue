<script setup lang="ts">
import { ref } from 'vue';
import AddWorkout from '@/components/AddWorkout.vue';
import { useSession } from '@/model/session';



const session = useSession();
const user = ref(session.user);
const Sessionworkout = ref();



</script>





<template>
    <div>
       <div class="modal is-active">
         <div class="model-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Add Workout</p>
              <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <label class="label">Workout</label>
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
                    <label class="label">Weight (lbs)</label>
                    <div class="control">
                    <input class="input" type="text" placeholder="Workout Name">
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
              <button class="button is-success">Save changes</button>
              <button class="button">Cancel</button>
            </footer>
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