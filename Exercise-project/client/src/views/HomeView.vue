<script setup lang="ts">

import StatBox from '@/components/StatBox.vue'
import runStats from '@/components/RunStats.vue'
</script>

<template>

   <StatBox /> <!-- This will be today's lifting stats-->
   <runStats /> <!-- This will be today's running stats-->
   <StatBox /> <!-- This will be all time lifting stats-->
   <runStats /> <!-- This will be all time running stats-->


  
</template>
