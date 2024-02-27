import { defineStore } from "pinia";
import axios from "axios";

export const useMe = defineStore('me', {
    state: () => ({
        user: null
    }),
    
    actions: {
        async getMe() {
            this.user = await axios.post('/api/auth/me')
            .then(response => response.data.data );
            console.log(response.data.data)
        },
    }
})