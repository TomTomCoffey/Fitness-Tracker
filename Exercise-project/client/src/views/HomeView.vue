<script setup lang="ts">

import StatBox from '@/components/StatBox.vue'
import runStats from '@/components/RunStats.vue'
</script>

<template>

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
               <StatBox />
               <runStats />
            </div>
         </div>
      </div>
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
