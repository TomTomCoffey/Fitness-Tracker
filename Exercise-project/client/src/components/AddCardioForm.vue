<script setup lang="ts">
import { useSession, addCardio } from '@/model/session';
import { ref } from 'vue';

const isCardioActive = ref(true);
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
              <button class="delete" @click="$emit('close')" aria-label="close"></button>
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
              <button class="button is-success" @click="addCardio1(cardioDuration, cardioDistance), $emit('close')">Add</button>
              <button class="button" @click="$emit('close')">Cancel</button>
            </footer>
        </div>
      

        </div>

  
</template>



<style scoped>

.modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
}





</style>