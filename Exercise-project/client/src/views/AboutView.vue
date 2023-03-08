<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import aboutMsg from '@/components/AboutMessage.vue'
  import ProgressBar from '@/components/ProgressBar.vue'
  import StatBox from '@/components/StatBox.vue';
  import PrBox from '@/components/PrBox.vue';

  </script>
<template>

<div class="container">
   <div class="columns">
      <div class="column">
        <div class="notification">
     <aboutMsg />
     <ProgressBar />
    </div>
      </div>
 
     <div class="column">

      <StatBox /> <!-- This is a placeholder to fill layout -->

   <!-- This is a placeholder to fill layout -->

       
        

     </div>
  </div>
</div>



  

   

</template>

<style>
  .message-header{
    background-color: #0c5e44;
    color: white;
    padding: 1rem;
  }
  .message{
    padding: 0;
    margin-bottom: 2rem;
  }
  .notification{
    padding: 0;
    background-color: white;
  }
  .container{
    padding: 0;
    margin: 5;

  }

 

</style>
