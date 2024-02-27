import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBalance = defineStore('balance', () => {
    const balance = ref({
        amount: '',
    });
    
    const getAmountUser = async () => {
        await axios.post('/api/auth/amount')
        .then((response) => {
            balance.value = response.data;
            });
    };

    return { balance, getAmountUser };
});