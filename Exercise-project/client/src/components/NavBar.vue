<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import LoginBadge from './LoginBadge.vue';
import { useSession } from '@/model/session';
import type NotifacationsVue from './Notify.vue';
    const isMenuActive = ref(false);
    function toggleMenu() {
        isMenuActive.value = !isMenuActive.value;
        console.log({ isMenuActive });
    }

    const session = useSession();
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

         
            <div class="span">
              <div class="icon">
                <i class="fas fa-home"></i>
              </div>
            </div>
         
             <RouterLink to="/" class="navbar-item">Home</RouterLink>

             <div class="span">
              <div class="icon">
                <i class="fas fa-user"></i>
              </div>
             </div>

             <RouterLink to="/about" class="navbar-item">About</RouterLink>

             <div class="span">
              <div class="icon">
                <i class="fas fa-dumbbell"></i>
              </div>
             </div>
          
             <RouterLink to="/Exercises" class="navbar-item"> Add Exercises</RouterLink>

              <div class="span">
                <div class="icon">
                  <i class="fas fa-chart-line"></i>
                </div>
              </div>
             
             <RouterLink to="/Statistics" class="navbar-item">Statistics</RouterLink>

              <div class="span">
                <div class="icon">
                  <i class="fas fa-users"></i>
                </div>
              </div>

          
             <RouterLink to="/FriendsActivity" class="navbar-item">Friends Activity</RouterLink>

              

      
              <div class="" v-if="session.user?.isAdmin">
                <div class="icon">
                  <i class="fas fa-user-shield"></i>
                  <span></span>
                </div>
                <RouterLink to="/Admin" class="navbar-item">Admin</RouterLink>
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
                    background-color: #def2f1;
                    margin-bottom: 0rem;
            }
            .navbar-item{
                font-size: 1rem;
                font-weight: 600;
                background-color : #def2f1 ;
            }
            .navbar-item:hover{
                background-color: #def2f1;
            }
            .navbar-item:active{
                background-color: #def2f1;
            }
            .navbar-item:focus{
                background-color: #def2f1;
            }
            .navbar-item:visited{
                background-color: #def2f1;
            }
            .navbar-item:link{
                background-color: #def2f1;
            }
            .navbar-link{
              background-color: #def2f1;
            }

            .icon{
              margin-right: 1rem;
              margin-left: 1rem;
              background-color: #def2f1;
              size: 200%;
            }
            .logo{
              margin-right: 1rem;
              margin-left: 1rem;
              background-color: #def2f1;
              size: 200%;
            }
            .navbar-burger{
              background-color: #def2f1;
            }
            .span{
              margin-top: 1rem;
              display: inline-block;
              background-color: #def2f1;
              margin-right: -1rem;
            }

           
          




</style>