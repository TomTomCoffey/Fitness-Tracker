<script setup lang="ts">
    import { useSession, loginWithServer } from "../model/session";
    import { defineProps, ref } from "vue";
    import { useRouter } from "vue-router";
const session = useSession();

const email = ref('');
const password = ref('');

function login() {
    loginWithServer(email.value, password.value);
    console.log({ email, password });
}

 </script>

 <template>
     <div>

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
 </template>


 <style scoped>

 .title{
     color: white;
     font-size: 3rem;
     font-weight: 300;
     line-height: 1.2;
     margin-bottom: 1rem;
     text-align: center;
 }
 .subtitle{
     color: white;
     font-size: 1.5rem;
     font-weight: 300;
     line-height: 1.2;
     margin-bottom: 5rem;
     text-align: center;
 }

 </style>