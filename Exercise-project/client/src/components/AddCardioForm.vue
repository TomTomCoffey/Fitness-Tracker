<script setup lang="ts">
import { useSession, addCardio } from '@/model/session';



import { ref } from 'vue';

const isCardioActive = ref(false);
function toggleCardio() {
    isCardioActive.value = !isCardioActive.value;
    console.log(isCardioActive);
}

const session = useSession();

const cardioDistance = ref(0);
const cardioDuration = ref(0);

function addCardio1(cardioDistance: number, cardioDuration: number) {
    addCardio(cardioDuration, cardioDistance);
    console.log(cardioDistance, cardioDuration);
}



</script>





<template>
    <div>
      
         <div class="model-background"></div>
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">Add Run</p>
              <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <div class="field">
                    <label class="label">Distance (in miles)</label>
                    <div class="control">
                    <input type="number" required v-model="cardioDistance" >
                    </div>
                </div>
          
                <div class="field">
                    <label class="label">Duration (in mins)</label>
                    <div class="control">
                    <input type="number"  required v-model="cardioDuration">
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot">
              <button class="button is-success" @click="addCardio1(cardioDuration, cardioDistance)">Add</button>
              <button class="button">Cancel</button>
            </footer>
        </div>

        </div>

  
</template>



<style scoped>





</style>