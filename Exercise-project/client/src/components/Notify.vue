<script setup lang="ts">
    import { ref } from 'vue';
    import { useSession, deleteMessage } from '@/model/session';

    const session = useSession();

    const isActive = ref(false);
</script>

<template>
    <div class="notifications">
        <button class="button" @click="isActive = !isActive">
            <span class="icon">
                <i class="fas fa-bell fa-lg " :class="{'fa-beat-fade' : session.isLoading}"></i>
            </span>
        </button>
        <div class="notification-list" v-show="isActive">
            <div v-for="msg, i in session.messages" :class="`notification is-light is-${msg.type}`">
                <button class="delete" @click="deleteMessage(i)"></button>
                {{ msg.msg }}
            </div>
        </div>
    </div>
</template>


<style scoped>
    .notifications {
        position: relative;
    }
    .notification-list {
        position: absolute;
        margin-top: 5px;
        width: 300px;
        background-color: white;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 100;
        min-height: 300px;
        max-height: calc(100vh - 100px);
        overflow-y: auto;

    }
    .notification-list .notification {
        margin: 5px;
    }

    .button {
        margin-top: 5px;
        background-color: transparent;
        border: none;
        color: #333;
    }

    .button:hover {
        background-color: transparent;
        border: none;
        color: #f30808;
    }
    .button.active{
        background-color: transparent;
        border: none;
        color: #f30808;
    }

</style>