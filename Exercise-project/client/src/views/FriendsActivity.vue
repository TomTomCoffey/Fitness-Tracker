<script setup lang="ts">
import { ref } from 'vue';
 import PrBox from '@/components/PrBox.vue';

</script>


<template>
    <div>
        <div class="column is-quarter"></div>
                
        <div class="column is-half">
        <PrBox/> <!-- This is a placeholder to fill layout -->
        </div>
        <div class="column is-quarter"></div>
    </div>
</template>



<style scoped>

.column{
    display: center;
    padding: 0;
    margin: 0;
}

</style>