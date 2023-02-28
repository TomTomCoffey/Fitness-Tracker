
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Body from '@/components/Body.vue'

</script>

<template>
  <NavBar />

  <Body />




  
  <div class="container">
    <RouterView />
  </div>
  
  <RouterView />

  <Footer />
</template>

<style scoped>

</style>