<script setup lang="ts">

import { useSession, loginWithServer, type User, loginWithUser,useLogin } from "../model/session";
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";


const router = useRouter();
const session = useSession();
const email = ref('');
const password = ref('');
console.log(session.user);  /// <---at this point it is undefined 

const user1 = ref<User | null>(null);

function login() {
    
    loginWithServer(email.value, password.value).then((user) => {

        if(user.name === null || user === undefined){
            console.log("user is null");
            return;
        }
    else{
      
        router.push("/");
    }

       
    });
}




     
    

 </script>

 <template>
     <div class="box">

        
        <div class="form">

            <h1 class="title">Login</h1>
            <h2 class="subtitle">Please enter your credentials</h2>
    
            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" v-model="email">
                </div>
            </div>
    
            <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" v-model="password">
                </div>
            </div>
    
            <div class="field">
                <div class="control">
                    <button class="button is-link" @click="login">Login</button>
                </div>
            </div>

        </div>

     </div>
 </template>


 <style scoped>

 .title{
     color: black;
     font-size: 3rem;
     font-weight: 300;
     line-height: 1.2;
     margin-bottom: 1rem;
     text-align: center;
     display: block;
 }
 .subtitle{
     color: black;
     font-size: 1.5rem;
     font-weight: 300;
     line-height: 1.2;
     margin-bottom: 5rem;
     text-align: center;
        display: block;
 }

 .form{
        margin: 0 auto;
        width: 50%;
        padding: 5rem;
        background-color: white;
        border-radius: 10px;
 }

 .box{
        background-color: transparent;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
 }

 @media (max-width: 600px) {
  .form {
    width: 90%;
    padding: 2rem;
    
   
  }
}



 </style>