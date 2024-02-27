import { defineStore } from 'pinia';
import axios from 'axios';
import Token from '../helpers/Token';

export const useDeposit = defineStore('deposit', {
    state: () => ({}),
    
    actions: {
        setDepositStore(value) {
            //console.log("lele");
            return axios.post('api/auth/deposit', {
                value: value,
            }).then(response => response.data)
        },
    },
})