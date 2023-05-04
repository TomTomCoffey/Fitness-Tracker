<script setup lang="ts">

import type { User } from '@/model/session';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { getUser, createUser } from '@/model/session';
import {  addMessage, loginWithUser, useSession } from '@/model/session';
import router from '@/router';

   const session = useSession();





    const route = useRoute(); 
    const user = ref<User>({} as User);
   
    function save() {
        if(user.value.id) {
            console.log('update')
        } else {
            createUser(user.value).then((data) => {
                console.log(data);

                if(data === null || data === undefined){
                    console.log("user is null");
                    return;
                }
                else{
               
                addMessage('Congrats on being a new user!', 'success');
                addMessage('Please log in to continue', 'info');
                //loginWithUser(user.value)// <--- want to log in new users as they sign in but not working
                router.push('/login');
                }
            })
        }
    }

 

</script>




<template>
    <div class="box">


    <form class="admin-user-edit" @submit.prevent="save()">

        <h1 class="title" v-if="user.id">Edit User</h1>
        <h1 class="title" v-else>Add New User</h1>

        <div class="field">
            <label class="label">Name</label>
            <div class="control">
                <input class="input" type="text" placeholder="Title" v-model="user.name">
            </div>
            </div>

            <div class="field">
            <label class="label">Email</label>
            <div class="control">
                <input class="input" type="text" placeholder="Email" v-model="user.email">
            </div>
            </div>
            <div class="field">
            <label class="label">Password</label>
            <div class="control">
                <input class="input" type="password" placeholder="******" v-model="user.password">
            </div>
            </div>

            <div class="field">
            <label class="label">Photo (enter in your own url).</label>
            <div class="control">
                <input class="input" type="text" placeholder="Photo" v-model="user.photo">
            </div>
            </div>

            <div class="field is-grouped">
            <div class="control">
                <button class="button is-link">Submit</button>
            </div>
            <div class="control">
                <RouterLink to ="/home">
                <button class="button is-link is-light">Cancel</button>
               </RouterLink>
            </div>
            </div>
    </form>


    




    </div>
</template>



<style scoped>
    .admin-user-edit {
        margin: 5rem;
        max-width: 600px;
        margin: 0 auto;
        max-height: 100%;
        background-color: #f5f5f5;
    }
    .admin-user-edit .title {
        text-align: center;
        margin-top: 2rem;
    }
    .admin-user-edit .field {
        margin: 1rem;
    }
    .admin-user-edit .field .label {
        margin-bottom: 0.5rem;
    }
    .box{
        margin: 5rem;
        max-width: 600px;
        margin: 0 auto;
        max-height: 100%;
        background-color: #f5f5f5;
    }



</style>