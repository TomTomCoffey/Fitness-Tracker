
<script setup lang="ts">

import { ref } from 'vue';
import { totalWeight, useSession } from '@/model/session';

const session = useSession();
const user = ref(session.user);



 




</script>


<template>
        <div class="box has-text-success summary">
            <h2 class="title is-4">Lifting Stats</h2>
            <div class="columns">
                <div class="column">
                    <div class="box has-text-success">
                        <h3 class="title is-5">Total PR's </h3>
                        <p class="subtitle is-3">{{ session.user?.prs }}</p>
                    </div>
                </div>
                <div class="column">
                    <div class="box has-text-success">
                        <h3 class="title is-5">Total Lifts</h3>
                        <p class="subtitle is-3">{{ session.user?.workouts.length }}</p>
                    </div>
                </div>
                <div class="column">
                    <div class="box has-text-success">
                        <h3 class="title is-5">Total Weight Lifted</h3>
                        <p class="subtitle is-3">
                          {{ totalWeight }}
                        </p>
                    </div>
                </div>
            </div>
         </div>


</template>



<style scoped>

.summary{
    background-color: transparent;
    color: white;
    padding: 1rem;
    
}
.box{
    height: 100%;
    background-color: transparent;
}



</style>