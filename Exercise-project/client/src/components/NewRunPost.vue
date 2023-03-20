
<script setup lang="ts">
import { ref } from 'vue';
import { useSession, newestCardio } from '@/model/session';

const session = useSession();

</script>



<template>
    <div>
        
        <div class="container">
        <div class="column is-half">
        <article class="media box">
                <figure class="media-left">
                    <p class="image is-128x128">
                        <img src="../data/images/IMG_7634 Small.png">
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">
                        <p>
                            <strong>{{ session.user?.name }}</strong> <small>@{{ session.user?.name }}</small> <small></small>
                            <br>
                             Nice Work! You added a new run, {{ newestCardio?.distanceMiles  }} miles in {{ newestCardio?.durationMins }} mins !!!
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

    </div>
    </div>

</template>


<style scoped>

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
.container{
    background-color: transparent;
}


</style>