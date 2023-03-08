<script setup lang="ts">
import { ref } from 'vue';
 import PrBox from '@/components/PrBox.vue';

</script>


<template>
    <div>
        <div class="column is-half"></div>
                
        <div class="column is-quarter">
        <PrBox/> <!-- This is a placeholder to fill layout -->
        <PrBox/> <!-- This is a placeholder to fill layout -->
        <PrBox/> <!-- This is a placeholder to fill layout -->
        <PrBox/> <!-- This is a placeholder to fill layout -->
        </div>
        <div class="column is-quarter"></div>
    </div>
</template>



<style scoped>

.column{
    display: center;
    padding: 0;
    margin: 10rem;
    margin-bottom: 5rem;

}

</style>