
<script setup lang="ts">

import { ref } from 'vue';
import AddWorkoutForm from '@/components/AddWorkoutForm.vue';
import { useSession } from '@/model/session';
import AddCardioForm from '@/components/AddCardioForm.vue';
import NewWorkoutPost from '@/components/NewWorkoutPost.vue';
import NewRunPost from '@/components/NewRunPost.vue';

const isWorkoutActive = ref(false);
const session = useSession();
const user = ref(session.user);
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

                <div class="box">
                
                <NewWorkoutPost>
            
                </NewWorkoutPost>
                <NewRunPost/>

                
               
                </div>

                                  
            </div>

            </div>


        

        <div class="column is-quarter"></div>

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
.box{
    display: flex;
    flex-direction: column;
    background-color: transparent;
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



</style>