<script setup lang="ts">
import router from "@/router";
import { useSession, loginWithServer, type User, loginWithUser,useLogin } from "../model/session";
import { defineProps, ref } from "vue";
import { useRouter } from "vue-router";



const session = useSession();
const email = ref('');
const password = ref('');
console.log(session.user);  /// <---at this point it is undefined 

const user1 = ref<User | null>(null);

function login() {
    
    loginWithServer(email.value, password.value).then((user) => {

        if(user === null || user === undefined){
            console.log("user is null");
            return;
        }
    else{
        // console.log(user);
        // console.log('=========')
        // user1.value = user;
        // console.log(user);
        // console.log("=========")
        // session.user = user as User;
        // console.log(session.user);
        // console.log("=========")
        // console.log(user1.value);
        // console.log("=========")
        // console.log(user);
    }

       
    });
}



function useLogin1(){
    useLogin(email.value, password.value);
    console.log(session.user);

      

        //router.push("/");
   
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
 }
 .subtitle{
     color: black;
     font-size: 1.5rem;
     font-weight: 300;
     line-height: 1.2;
     margin-bottom: 5rem;
     text-align: center;
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
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
 }



 </style>