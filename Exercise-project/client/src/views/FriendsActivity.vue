<script setup lang="ts">
 import { ref } from 'vue';
 import { useSession, users} from '@/model/session';
 import type { defineComponent } from 'vue';
 import PrBox from '@/components/PrBox.vue';
 

 

const session = useSession();
const userArray = ref(users);





</script>


<template>
    <div>
        <div class="column is-half"></div>
                
        <div class="column is-quarter">
        <div v-if="session.user">
            <h1 class="title is-1"> {{session.user.name}}'s Friends' Activity</h1>
            <div class="subtitle">See all your friends current personal records!</div>
            <PrBox/>
       
        </div>
       
     
        <div v-else>
            <h1 class="title is-1">Log In</h1>
            <h3>Please log in to see your friend's activity </h3>
        </div>
       
        <div class="column is-quarter"></div>
    </div>

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