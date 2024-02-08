<script setup>
import { useMe } from "@/store/me";
import { useRouter } from 'vue-router';
import { useAuthUserStore } from "@/store/AuthUserStore";

const router = useRouter()
const { user, can } = useMe();
const useAuthStore = useAuthUserStore()

</script>

<template>
    <VContainer class="w-20">
        Dashboard <br>
    
        
        <h1 color="primary">{{ user }}</h1>
        <pre>{{ useAuthStore.user }}</pre>
        <hr class="my-10">
        <div class="bg-orange-lighten-3">{{ can }}</div>
        
    </VContainer>
</template>
