<script setup lang="ts">
import { ref } from 'vue';
import { useSession, newestWorkout, newestCardio} from '@/model/session';
import NewRunPost from './NewRunPost.vue';
import { defineProps } from 'vue';


const props = defineProps({
  workout: {
    type: Object,
    required: true
  }
});




const session = useSession();




</script>




<template>
  
        <div class="column is-half">
    <article class="media box">
      <figure class="media-left">
        <p class="image">
          <img :src="session.user?.photo" alt="User Photo" class="img">                  
        </p>
      </figure>
      <figure class="media-left">
       

      </figure>
       
      <div class="media-content">
        <div class="content">
          <p>
            <strong>{{ session.user?.name }}</strong> <small>@{{ session.user?.name }}</small> <small></small>
            <br>
            Nice Work! You added a new lift, {{ props.workout.workout }} for {{ props.workout.weight }} lbs!!!
          </p>
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
</template>



<style scoped>

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

.mediabox{
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
    max-width: 100px;
    height: auto;
    border-radius: 50%;
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
    max-width: 800px;
    padding: 1rem;
  

}


</style>