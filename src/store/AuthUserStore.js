import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import AppStorage from '@/helpers/AppStorage';

export const useAuthUserStore = defineStore('AuthUserStore', () => {
    const user = ref({
        first_name: '',
        last_name: '',
        email: '',
        // avatar: '',
        created_at: '',
    });
    
    const getAuthUser = async () => {
        await axios.post('/api/auth/me')
        .then((response) => {
            user.value = response.data;
            });
    };

    return { user, getAuthUser };
});