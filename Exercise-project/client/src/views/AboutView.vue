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
        <div class="notification">
     <aboutMsg />

        </div>
      </div>
      <div class="column">
        <div class="notification">
       
        </div>
      </div>
      <div class="column">
        <div class="notification">

 
    </div>
      </div>
 
     <div class="column">

     
        

     </div>
  </div>
</div>



  

   

</template>

<style>
  .message-header{
    background-color:#2b7a78  ;
    color: white;
    padding: 1rem;
  }
  .message{
    padding: 0;
    margin-bottom: 2rem;
    color: #def2f1
  }
  .notification{
    padding: 0;
    background-color: white;
  }
  .container{
    padding: 0;
    margin: 5;
    height: max-content/2;
    width: max-content/2;

  }

 

</style>
