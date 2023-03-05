<script setup lang="ts">

import StatBox from '@/components/StatBox.vue'
import runStats from '@/components/RunStats.vue'
</script>

<template>

   <div class="container">
      <div class="columns">
         <div class="column">
            <div class="notification is-link is-light">
               <StatBox />
               <runStats />
            </div>
         </div>
         <div class="column">
            <div class="notification is-link is-light">
               <StatBox />
               <runStats />
            </div>
         </div>
      </div>
   </div>


  
</template>
