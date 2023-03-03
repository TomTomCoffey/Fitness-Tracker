<script setup lang= "ts">
import { RouterLink, RouterView } from 'vue-router';

const isMenuActive = false;

</script>

<template>

<nav class="navbar">
    <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="22" height="22" />
            
          </a>
          <div class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="isMenuActive = !isMenuActive" >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      
        <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
          <div class="navbar-start">
           

            <RouterLink to="/" class="navbar-item">Home</RouterLink>
            <RouterLink to="/about" class="navbar-item">About</RouterLink>
            <RouterLink to="/stats" class="navbar-item">Statistics</RouterLink>
            <RouterLink to="/exercises" class="navbar-item">Exercises</RouterLink>
            <RouterLink to="/login" class="navbar-item">Login</RouterLink>

             
         
              </div>
            </div>
       
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="field is-grouped">
                <p class="control">
                  <a class="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="https://bulma.io" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=https://bulma.io&amp;via=jgthms">
                    <span class="icon">
                      <i class="fab fa-twitter"></i>
                    </span>
                    <span>
                      Tweet
                    </span>
                  </a>
                </p>
                <p class="control">
                  <a class="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.9.3/bulma-0.9.3.zip">
                    <span class="icon">
                      <i class="fas fa-download"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </p>
              </div>
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