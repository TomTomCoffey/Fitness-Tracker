<script setup lang="ts">
import AdminBox from '@/components/AdminBox.vue';
import { useSession } from '@/model/session';

const session  = useSession();

</script>


<template>
    <div class="column is half"></div>
    <div>
        <div v-if="session.user?.isAdmin">
        <div class="container">
        <AdminBox  />
        </div>
        </div>
        <div v-else>
            <h1 class="title">You are not an admin</h1>
        </div>
       
    </div>
</template>



<style scoped>

.container{
    display: center;
    padding: 0;
    margin: 5;
    background-color: #def2f1;
    color: #2b7a78;
    margin-right: 5%;
    margin-left: 5%;
    margin-bottom: -1rem;
    padding: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.title{
    text-align: center;
    color: white;
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 1rem;
}

</style>