<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import aboutMsg from '@/components/AboutMessage.vue'
  import ProgressBar from '@/components/ProgressBar.vue'
  import StatBox from '@/components/StatBox.vue';

  </script>
<template>

<div class="container">
   <div class="columns">
      <div class="column">
        <div class="notification is-link is-light">
     <aboutMsg />
     <ProgressBar />
    </div>
      </div>
 
     <div class="column">
    Second column
         <StatBox
          title="Testing 1 2 3"
          value="0"
          color="success"
          icon="fas fa-dumbbell"
        />

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

 

</style>
