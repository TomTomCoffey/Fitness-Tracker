<script setup lang="ts">
 import { ref } from 'vue';
 import { useSession} from '@/model/session';
 import PrBox from '@/components/PrBox.vue';
 

const session = useSession();


</script>


<template>
    <div>
        
       
        <div v-if="session.user">
            <h1 class="title is-1"> {{session.user.name}}'s Friends' Activity</h1>
            <div class="subtitle">See all your friends current personal records!</div>
    

                <PrBox />
        </div>
       
     
        <div v-else>
            <h1 class="title is-1">Log In</h1>
            <h3>Please log in to see your friend's activity </h3>
        </div>
       
      
    </div>
  

 

</template>

<style scoped>

.column{
    display: flex;
    padding: 0;
    margin: 10rem;
    margin-bottom: 0em;

}
.title{
    color: white;
    text-align: center;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    display: flex;
    position: relative;
}
.subtitle{
    display: flex;
    color: white;
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    position: relative;
}




</style>