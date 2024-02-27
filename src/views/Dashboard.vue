<script setup>
import { useRouter } from 'vue-router';
import { useAuthUserStore } from "@/store/AuthUserStore";

const router = useRouter()

const useAuthStore = useAuthUserStore()
//console.log(useAuthStore.user.first_name);

</script>

<template>
    <VContainer class="w-20">
        Dashboard <br>
        <pre>{{ useAuthStore.user }}</pre>
        <hr class="my-10">
        <div class="bg-orange-lighten-1">Usuário: {{ JSON.stringify(useAuthStore.user.created_at) }}</div>
    </VContainer>
</template>
