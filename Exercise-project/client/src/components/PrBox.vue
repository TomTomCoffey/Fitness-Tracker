<script setup lang="ts">
 import { ref } from 'vue';
 import { useSession} from '@/model/session';
 import { useWorkouts1 } from '@/model/workouts';
 import { getUsers, type User } from '@/model/session';





const items = ref<User[]>([]);
 getUsers().then((data) => {
     items.value = data.data;
 });





 const session = useSession();
 const workouts = useWorkouts1();
 const sessionWorkouts = ref(workouts);
 const user = ref(session.user);






 </script>


<template>
    <div>
        <div v-for="(user, index) in items" :key="index">


            <div class="column is-half">

      <div class="box">
    <article class="media box">
      <figure class="media-left">
        <p class="image">
          <img :src="user?.photo" alt="User Photo" class="img">                   
        </p>
      </figure>
      <figure class="media-left">


        <h2><strong>Best Lifts!</strong></h2>
       

      </figure>
       
      <div class="box">
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ user?.name }}</strong> <small>@{{ user?.name }}</small> <small></small>
            <br>
            
                                 <div v-for="workout in user.workouts">
                    <p> Current PR for: {{ workout.workout }} {{ workout.weight }}lbs</p>
                                 </div>
                    <p> </p>
                          
          </p>
        </div>
      </div>
        <nav class="level is-mobile">
          <div class="level-left">
            <a class="level-item" aria-label="reply">
              <span class="icon is-small">
                <i class="fas fa-reply" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="retweet">
              <span class="icon is-small">
                <i class="fas fa-retweet" aria-hidden="true"></i>
              </span>
            </a>
            <a class="level-item" aria-label="like">
              <span class="icon is-small">
                <i class="fas fa-heart" aria-hidden="true"></i>
              </span>
            </a>
          </div>
        </nav>
      </div>
    </article>
      </div>
  </div>
</div>
 </div>
</template>



<style scoped>


.title{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
    padding: 1rem;
  
}




.column{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 800px;
    padding: 1rem;
  
}


.image{
    width: 100%;
    max-width: 150px;
    height: auto;
    border-radius: 0%;
    margin: 0 auto;
    padding: 1rem;
    
}
.media{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    padding: 1rem;
    height: 100%;
    max-height: 400px;
    max-width: 400px;
    padding: 1rem;
    border-radius: 0%;
    background-color: #f5f5f5;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);

    
   
  

}
.p{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 3600%;
    max-width: 200px;
    padding: 1rem;

}

.box
{
  margin: 1 rem;
  border: #f5f5f5;
  max-width: fit-content;
  max-height: fit-content;
}


</style>