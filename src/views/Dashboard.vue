<script setup>
import { useMe } from "@/store/me";
const { user, can } = useMe();
import { useAuth } from '@/store/auth';
import { useRouter } from 'vue-router';

const router = useRouter()
const authStore = useAuth();

function logout() {
    authStore.logout();
    router.push({ name: 'login' });
}

</script>

<template>
    <VContainer class="w-20">
        Dashboard <br>
        <div class="pt-4 pb-4 px-5 text-center">
            <v-btn @click="logout" color="error" variant="outlined" block>
                <v-icon icon="mdi-logout" />Sair</v-btn>
        </div>

        
        <h1 color="primary">{{ user }}</h1>
        <pre>{{ user }}</pre>
        <hr class="my-10">
        <div class="bg-orange-lighten-3">{{ can }}</div>
        

    </VContainer>
</template>
