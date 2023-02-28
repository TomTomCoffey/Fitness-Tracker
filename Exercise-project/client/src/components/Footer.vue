<script setup lang= "ts">
import { RouterLink, RouterView } from 'vue-router';

const isMenuActive = false;

</script>

<template>

<footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="">Thomas Coffey</a>. Exercise Project
            <a href="">Suny New Paltz</a>
          
          </p>
        </div>
      </footer>

</template>

<style scoped>

.footer{
    background-color: #424f4e;
    color: blue;
    padding: 1rem;
    margin-top: 1rem;
    margin-bottom: -20%;
    display: center;
}
</style>

