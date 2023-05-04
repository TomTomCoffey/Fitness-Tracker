
<script setup lang="ts">
import { ref } from 'vue';
// import { useSession, users} from '@/model/session';
import { addMessage, getUsers, useSession, type User } from '@/model/session';
import { deleteUser } from '@/model/session';


const session = useSession();


let num = ref(0);



const items = ref<User[]>([]);
 getUsers().then((data) => {
     items.value = data.data;
 });

 console.log(items.value);


function deleteUsers(user : User){

if(user === null || user === undefined){
    console.log("user is null");
    return;
}
else{
    deleteUser(user);
    addMessage("User Deleted", "warning");
    //location.reload();
}
 

}


/////This code will be updated to delete users from the database
////Also this code wont be based off a static array of users


</script>




<template>
    <div>
        <div class="container">
            <table class="table is-bordered is-striped is-narrow is-hoverable">
                <thead>
                    <tr>
                        <th class="title is-5"></th>
                        <th class="title is-5">Photo</th>
                        <th class="title is-5">ID</th>
                        <th class="title is-5">Name</th>
                        <th class="title is-5">Email</th>
                        <th class="title is-5">Admin</th>
                        <th class="title is-5">Delete</th>
                        
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(user, index) in items" :key="index">
                        <td class="title is-5"></td>
                        <td class="title is-5">
                            <figure class="image">
                                <img :src="user?.photo" alt="User Photo" class="img">
                            </figure>
                        </td>
                        <td class="title is-5">{{user?.id}}</td>
                        <td class="title is-5">{{user?.name}}</td>
                        <td class="title is-5">{{user?.email}}</td>
                        <td class="title is-5">{{user?.isAdmin}}</td>
                        <td class="title is-5"><button class="button is-danger" @click="deleteUsers(user)" >Delete</button></td>
                    </tr>
                </tbody>
            </table>

            





        </div>






    </div>
</template>



<style scoped>

.table{

    width: 100%;
    text-align: left;
    margin: 0 auto;
    padding: 0 20px;

}
.container{
    width: 100%;
    text-align: left;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;

}
.title{
    text-align: center;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    size: small;
   
   
}
.th{
    border: 1px solid #ccc;
    padding: 10px;
    background-color: #ccc;
    font-weight: bold;
    text-align: center;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    size: small;
}
.td{
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    size: small;
}


.image{
    width: 50%;
    height: 50%;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
    size: small;
}




</style>