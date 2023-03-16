<script setup lang="ts">
import { ref } from 'vue';
 import PrBox from '@/components/PrBox.vue';
 import {  useSession, findUser, login, getUser, addFriend } from '@/model/session';
 

const session = useSession();
const friends = ref(session);
const user = ref(session);

const user2 = getUser(2);
const user3 = getUser(3);
const user4 = getUser(4);

function makeUserArray(){
    let userArray = [];
    userArray.push(user);
    userArray.push(user2);
    userArray.push(user3);
    return userArray;
}

const userArray = makeUserArray();












</script>


<template>
    <div>
        <div class="column is-half"></div>
                
        <div class="column is-quarter">
        <div v-if="session.user">
            <h1 class="title is-1"> {{session.user.name}}'s Friend's Activity</h1>
       <div v-for="user in userArray" :key="userArray.length">
            <PrBox :user="user" />
        </div>
       
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