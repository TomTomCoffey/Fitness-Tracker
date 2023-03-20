
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

</script>

<template>

  <NavBar />
  <div class="container-background">
 
  
  <div class="container">
    <RouterView />
  </div>

  <div class="container">
  <Footer />
  </div>

  </div>
 

</template>

<style scoped>

.container-background{
  
  background-image: url(https://img.freepik.com/premium-photo/sneakers-water-dumbbells-sport-fitness-healthy-lifestyle_645697-3320.jpg?size=626&ext=jpg&ga=GA1.2.1378731816.1679254592&semt=ais);
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;

}



</style>