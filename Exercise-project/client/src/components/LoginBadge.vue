<script setup lang="ts">
 import { useSession, login1, useLogin } from '@/model/session';
 import SignUpBadge from './SignUpBadge.vue';
 import { getUser, type User } from '@/model/session';
 import { RouterLink, useRouter } from 'vue-router';




 const router = useRouter();

 const session = useSession();

 function logout(){

   
        session.user = null;
        router.push('/login');

 }





 </script>

 <template>
             <div class="navbar-item" v-if="session.user">
                 Welcome, {{ session.user.name }}
                 (<a @click="logout">logout</a>)
             </div>

                
             <div class="navbar-item" v-else>
               <div class="button">
                 <RouterLink to="/login">Login</RouterLink>
                </div>
             </div>
                
                
              

          




 </template>

 <style scoped>

.navbar-item{
        color: #0c5e44;
        background-color: #0c5e44;


    }
    .navbar-link{
        color: #0c5e44;
    }
    .navbar-dropdown{
        background-color: #def2f1;
        color: white;
    }
    .button{
        background-color: #dfe8e8;
        color: white;
        margin: 0.5rem;
        width: 80%;
    }
    .button:hover{
        background-color: #feffff;
        color: black;
        margin: 0.5rem;
    }

    

  

    

 </style>