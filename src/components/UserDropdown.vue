<script setup>
import { useAuth } from '../store/auth';
import { useRouter } from 'vue-router';
import { useMe } from '../store/me';
import { useAuthUserStore } from '@/store/AuthUserStore';

const authUserStore = useAuthUserStore();

const { user } = useMe();
const router = useRouter()
const authStore = useAuth();

function logout() {
    authStore.logout();
    router.push({ name: 'login' });
}
                
                
                
const notifications = [{
    title: "Message from A",
    icon: "mdi-email",
    color: "blue",
},
{
    title: "Message from B",
    icon: "mdi-email",
    color: "green",
},
{
    title: "Message from C",
    icon: "mdi-email",
    color: "red",
},
{
    title: "Message from D",
    icon: "mdi-email",
    color: "yellow",
},
{
    title: "Message from E",
    icon: "mdi-email",
    color: "purple",
},
{
    title: "Message from F",
    icon: "mdi-email",
    color: "orange",
},
];
</script>
<template>
    <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn class="profileBtn custom-hover-primary" variant="text" v-bind="props" icon>
                <v-avatar variant="tonal" size="35">
                    <!-- <img :src="authUserStore.user.avatar ? authUserStore.user.avatar : 'photos/default.png'" height="35" alt="user" /> -->
                </v-avatar>
            </v-btn>
        </template>
        <v-sheet rounded="md" width="200" elevation="10" class="mt-2">
            <v-list class="py-0" lines="one" density="compact">
                <v-list-item value="item1" to="/perfil" color="primary">
                    <template v-slot:prepend>
                        <v-icon icon="mdi-account-outline" color="primary" />
                    </template>
                    <v-list-item-title class="pl-4 text-body-1">Perfil</v-list-item-title>
                </v-list-item>
                <v-list-item value="item2" color="primary">
                    <template v-slot:prepend>
                        <v-icon icon="mdi-cogs" color="primary" />
                    </template>
                    <v-list-item-title class="pl-4 text-body-1">Configurar</v-list-item-title>
                </v-list-item>
            </v-list>
            <div class="pt-4 pb-4 px-5 text-center">
                <v-btn @click="logout" color="error" variant="outlined" block>
                    <v-icon icon="mdi-logout" />Sair</v-btn>
            </div>
        </v-sheet>
    </v-menu>

    <!-- <v-menu>
        <template v-slot:activator="{ props }">
            <v-btn icon class="mr-2" v-bind="props">
                <v-badge content="8" color="red-darken-2" size="x-small">
                    <v-icon icon="mdi-bell" color="blue-darken-4"></v-icon>
                </v-badge>
            </v-btn>
        </template>
        <v-sheet rounded="sd" width="200" elevation="10" class="mt-2">
            <v-list>
                <v-list-item v-for="(item, index) in notifications" :key="index" :value="index">
                    <v-list-item-title>
                        <v-icon :color="item.color" :icon="item.icon"></v-icon>
                        {{ item.title }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-sheet>
    </v-menu> -->
</template>

