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
        <div class="container">
        <div class="column is-half"></div>
                
        <div class="column is-quarter">
        <div v-if="session.user">
            <h1 class="title is-1"> {{session.user.name}}'s Friends' Activity</h1>
            <div class="subtitle">See all your friends current personal records!</div>
    

                <PrBox />
           
           
       
        </div>
       
     
        <div v-else>
            <h1 class="title is-1">Log In</h1>
            <h3>Please log in to see your friend's activity </h3>
        </div>
       
        <div class="column is-quarter"></div>
    </div>

    </div>
</div>

</template>

<style scoped>

.column{
    display: center;
    padding: 0;
    margin: 10rem;
    margin-bottom: 0em;

}
.title{
    color: white;
    text-align: center;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
}
.subtitle{
    color: white;
    text-align: center;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
}

.container{
    display: center;
    padding: 0;
    margin: 5;
    background-color: transparent;
    color: #2b7a78;
    margin-right: 5%;
    margin-left: 5%;
    margin-bottom: -1rem;
    padding: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    margin-top: 2rem;
    margin-bottom: 2rem;
}
</style>