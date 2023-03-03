<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';
    const isMenuActive = ref(false);
    function toggleMenu() {
        isMenuActive.value = !isMenuActive.value;
        console.log({ isMenuActive });
    }
</script>
<template>
    <nav class="navbar">
        <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="22" height="22" />
            
          </a>
          <div class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu" >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
          <div class="navbar-start">

             <RouterLink to="/" class="navbar-item">Home</RouterLink>
             <RouterLink to="/about" class="navbar-item">About</RouterLink>
             <RouterLink to="/Exercises" class="navbar-item">Exercises</RouterLink>
             <RouterLink to="/Statistics" class="navbar-item">Statistics</RouterLink>


             


             <div class="navbar-item has-dropdown is-hoverable">
             
             
            </div>
          </div>
      
          <div class="navbar-end">
            <LoginBadge />
        
          </div>
        </div>
    </div>
      </nav>
</template>

<style scoped>


.navbar{
                    background-color: #0c5e44;
                    margin-bottom: 3rem;
            }
            .navbar-item{
                font-size: 1rem;
                font-weight: 600;
            }
            .navbar-item:hover{
                background-color: #f0e9e9;
            }
            .navbar-item:active{
                background-color: #f0e9e9;
            }
            .navbar-item:focus{
                background-color: #f0e9e9;
            }
            .navbar-item:visited{
                background-color: #f0e9e9;
            }
            .navbar-item:link{
                background-color: #f0e9e9;
            }
            .navbar-link{
              background-color: #f0e9e9;
            }
           
          




</style>