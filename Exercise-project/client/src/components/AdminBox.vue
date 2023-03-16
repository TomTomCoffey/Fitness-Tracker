
<script setup lang="ts">
import { ref } from 'vue';
import { useSession, findUser, addFriend} from '@/model/session';
import { useWorkouts1 } from '@/model/workouts';




const session = useSession();
const user = ref(session.user);
const user2 = findUser(2);
const user3 = findUser(3);
const user1 = findUser(1);


function makeUserArray(){
    let userArray = [];
    userArray.push(user);
    userArray.push(user2);
    userArray.push(user3);
    
    
    return userArray;
}

 let userArray = makeUserArray();




</script>




<template>
    <div>
        <div class="container">
            <table class="table is-bordered is-striped is-narrow is-hoverable">
                <thead>
                    <tr>
                        <th class="title is-1"></th>
                        <th class="title is-1">Photo</th>
                        <th class="title is-1">ID</th>
                        <th class="title is-1">Name</th>
                        <th class="title is-1">Email</th>
                        <th class="title is-1">Admin</th>
                        <th class="title is-1">Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in userArray" :key="userArray.length">
                        <td class="title"></td>
                        <td class="title"><img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder image"></td>
                        <td class="title"> <h2>{{user1?.id}}</h2></td>
                        <td class="title">{{user1?.name}}</td>
                        <td class="title">{{user1?.email}}</td>
                        <td class="title">{{user1?.isAdmin}}</td>
                        <td class="title"><button class="button is-danger">Delete</button></td>
                    </tr>
                </tbody>
           

            </table>





        </div>






    </div>
</template>



<style scoped>

</style>