<script setup lang="ts">
 import { ref } from 'vue';
 import { useSession, login } from '@/model/session';
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
                    <a class="button" @click="login(1)">
                        <strong>Tom</strong>
                    </a>
                    <a class="button" @click="login(2)">
                        <strong>Zoey</strong>
                    </a>
                    <a class="button" @click="login(3)">
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
        background-color: #0c5e44;
        color: white;
    }
    .button{
        background-color: #0c5e44;
        color: white;
        margin: 0.5rem;
    }
    .button:hover{
        background-color: #0c5e44;
        color: white;
        margin: 0.5rem;
    }
    


    

 </style>