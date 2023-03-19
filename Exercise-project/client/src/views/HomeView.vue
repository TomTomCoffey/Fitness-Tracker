<script setup lang="ts">
import StatBox from '@/components/StatBox.vue'
import runStats from '@/components/RunStats.vue'
import { totalDistance, useSession, totalDuration, totalWeight } from '@/model/session';
import AboutMessage from '@/components/AboutMessage.vue';


const session = useSession();





</script>

<template>


 
<div v-if="session.user">
   <div class="container">
      <div class="columns">
         <div class="column">
            <div class="notification is-link is-light">
               <div class="title"> This Week</div>
               <StatBox />
               <runStats />
            </div>
         </div>
         <div class="column">
            <div class="notification is-link is-light">
               <div class="title"> All Time</div>
               <StatBox >
                  <template #totalWeight> <!-- this is the slot -->
                     {{ totalWeight }}
                  </template>
                  <template #totalLifts>
                     {{ session.user.workouts.length }} <!-- this is the slot -->
                  </template>
               </StatBox>
            
               <runStats >
                  <template #totalDistance>   <!-- this is the slot -->
                     {{ totalDistance }}
                  </template>
                  <template #totalDuration> <!-- this is the slot -->
                     {{ totalDuration }}
                  </template>
               </runStats>

            </div>
         </div>
      </div>
   </div>
</div>
   <div v-else>
      <AboutMessage/>
   </div>


    


  
</template>

<style scoped>
   .container{
      padding: 0;
      margin: 5;
   }
   .title{
      padding: 0;
      margin: 0;
      color: #0c5e44;
   }
  

</style>
