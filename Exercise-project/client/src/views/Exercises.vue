
<script setup lang="ts">

import { ref } from 'vue';
import AddWorkoutForm from '@/components/AddWorkoutForm.vue';
import { useSession } from '@/model/session';
import AddCardioForm from '@/components/AddCardioForm.vue';
import NewWorkoutPost from '@/components/NewWorkoutPost.vue';
import NewRunPost from '@/components/NewRunPost.vue';

const isWorkoutActive = ref(false);
const session = useSession();

const isCadrioActive = ref(false);




function toggleCardio() {
    isCadrioActive.value = !isCadrioActive.value;
    console.log(isCadrioActive);
}
function toggleWorkout() {
    isWorkoutActive.value = !isWorkoutActive.value;
    console.log(isWorkoutActive);
}


</script>



<template>
    <div>
        <div class="container">

        <div class="column is-quarter"></div>
           
            <div class="column">

                <div class="button is larger is-fullwidth" @click="toggleCardio"> Add Cardio Run</div>
                <div v-if="isCadrioActive==true" class ="modal is-active">
                   <div class="modal-content">
                    <AddCardioForm
                    @close="isCadrioActive=false"
                    />
                   </div>
                </div>
                
               
                <div class="button is-large is-fullwidth" @click="toggleWorkout" > Add Workout</div>    
                <div v-if="isWorkoutActive==true" class="modal is-active">  
                    <div class="modal-content">  
                    <AddWorkoutForm
                    @close="isWorkoutActive=false"
                    />
                    </div>
                           
                </div>

                <div class="container1">
                    <div class="column1">
                  <h2>Workouts</h2>
                    <div v-for="w in session.user?.workouts.slice().reverse()" :key="w.workout">
                         <NewWorkoutPost :workout="w" @close="$emit('close')" />
                     </div>
                 </div>
                 <div class="column1">
                      <h2>Cardio Runs</h2>
                     <div v-for="r in session.user?.cardio.slice().reverse()" :key="r.distanceMiles">
                        <NewRunPost :cardio="r" @close="$emit('close')" />
                     </div>
                </div>
             </div>

               
                 

                                  
            </div>

            </div>

        </div>


        


  
</template>



<style scoped>

.button{
    background-color: #3AAfa9;
    color: white;
    padding: 1rem;
    margin: 1rem;
    border-radius: 5px;
    border: none;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    transition-duration: 0.4s;
    box-shadow: 0 4px #999;
}


.modal{
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
}
.column{
    display: flex;
    flex-direction: column;
    background-color: transparent;
}

.container1 {
  display: grid;
  grid-template-columns: 2fr 2fr;
 
}
.column1 {
  display: flex;
  flex-direction: column;
}





</style>