
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { useSession } from '@/model/session';

const session = useSession();





</script>



<template>

    <div v-if="!session.user">
       
        <RouterLink to="/signup"  button class="button is-info"> Sign up</RouterLink>
      
    </div>
</template>



<style scoped>

.button{
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
}

</style>