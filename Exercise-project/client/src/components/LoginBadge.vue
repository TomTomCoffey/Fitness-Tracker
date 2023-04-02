<script setup lang="ts">
 import { login, loginThroughServer, useSession, } from '@/model/session';
 import SignUpBadge from './SignUpBadge.vue';


 const session = useSession();

 </script>

 <template>
             <div class="navbar-item" v-if="session.user">
                 Welcome, {{ session.user.name }}
                 (<a @click=" session.user = null">logout</a>)
             </div>

                
             <div class="navbar-item" v-else>
                   <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        <strong>Log in</strong>
                    </a>
                    <div class="navbar-dropdown">
                    <a class="button" @click="loginThroughServer(1)">
                        <strong>Tojjhhm</strong>
                    </a>
                    <a class="button" @click="loginThroughServer(2)">
                        <strong>Zoey</strong>
                    </a>
                    <a class="button" @click="loginThroughServer(3)">
                        <strong>Sally</strong>
                    </a>
                    </div>
             
                    </div> 
                
                 <SignUpBadge/>


             </div>




 </template>

 <style scoped>

.navbar-item{
        color: #0c5e44;
    }
    .navbar-link{
        color: #0c5e44;
    }
    .navbar-dropdown{
        background-color: #def2f1;
        color: white;
    }
    .button{
        background-color: #2b7a78;
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