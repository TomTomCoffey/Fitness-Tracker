<script setup lang="ts">
    props: ['msg']
    
</script>

<template>

<article class="message">
              <div class="message-header">
                <p>Your exersise progress!</p>
                <button class="delete" aria-label="delete"></button>
              </div>
              <div class="message-body">
               <p> Track your progress and fill the bar to meet your goals! </p>
                <progress class="progress is-success" value="60" max="100">60%</progress>
              </div>
            </article>
</template>


<style scoped>

</style>