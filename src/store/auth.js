import { defineStore } from 'pinia';
import axios from 'axios';
import Token from '../helpers/Token';
import AppStorage from '@/helpers/AppStorage';
import setAuthHeader from './setAuthHeader';

export const useAuth = defineStore('auth', {
    state: () => ({}),
    
    actions: {
        sanctum() {
            return axios.get('sanctum/csrf-cookie');
        },
        
        // Token.payload(response.data.access_token)
        login(email, password) {
            console.log("caiu no axios");
            return axios.post('api/auth/login', { email, password })
            .then(response => {
                this.responseAfterLogin(response)
            })
            .catch(error => console.log(error.response))
        },

        responseAfterLogin(response) {
            const access_token = response.data.access_token
            const username = response.data.user
            if(Token.isValid(access_token)) {
                AppStorage.store(username, access_token)
                setAuthHeader(access_token);
            }
        },

        hasToken() {
            const storedToken = AppStorage.getToken();
            if(storedToken) {
               return Token.isValid(storedToken) ? true : false
            }
            return false
            //console.log(storedToken);
        },

        LoggedIn() {
            return this.hasToken();
        },

        signup(firstName, lastName = '', email, password) {
            //console.log("lele");
            return axios.post('api/auth/signup', {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: password
            }).then(response => this.responseAfterLogin(response))
            
        },

        // verifyEmail(token) {
        //     return axios.post('api/verify-email', { 
        //         token
        //     })
        // },

        // forgotPassword(email) {
        //     return axios.post('api/forgot-password', {
        //         email
        //     })
        // },

        // resetPassword(token, password) {
        //     return axios.post('api/reset-password', {
        //         token, password
        //     })
        // },

        logout() {
            AppStorage.clear()
        },

        name() {
            if(this.LoggedIn()) {
                return AppStorage.getUser()
            }
        },

        id() {
            if(this.LoggedIn()) {
                const payload = Token.payload(AppStorage.getToken())
                return payload.sub
            }
        },
        
                
            // logout() {
            //     const meStore = useMe()
            //     return axios.post('api/logout').then(() => {
            //         meStore.user = null
            //     })
            // },
    },

    // getters: {
    //     isLoggedIn() {
    //         return this.LoggedIn();
    //     }
    // }
    
})