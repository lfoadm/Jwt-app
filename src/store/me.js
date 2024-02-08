import { defineStore } from "pinia";
import axios from "axios";

export const useMe = defineStore('me', {
    state: () => ({
        user: null
    }),
    
    actions: {
        async getMe() {
            // console.log("caiu no getMe")
            this.user = await axios.post('/api/auth/me')
            console.log('caiu no mejs')
            .then(response => response.data.data );
            // .then(response => console.log(response) );
        },

        can(permission) {
            return this.user.permissions.includes(permission);
        },
    }
})