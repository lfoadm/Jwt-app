<script setup>
import { ref } from 'vue';
import { useMe } from "@/store/me";
import { useDeposit } from '@/store/deposit';
import { useBalance } from "@/store/balance";
import { useRouter } from 'vue-router';
import { useAuthUserStore } from "@/store/AuthUserStore";
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';
import messages from "@/utils/messages";

const router = useRouter()
const depositStore = useDeposit();
const { user, can } = useMe();
const useAuthStore = useAuthUserStore()
const useAuthAmountStore = useBalance()
const errorMessage = ref(null)


const schema = yup.object({
  value: yup.number().label('Amount'),
});

const { handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: schema,
})
//console.log(useAuthAmountStore.balance.amount);

// const submit = handleSubmit((values) => {
//     errorMessage.value = null
//     return depositStore
//     .setDepositStore(values.value)
//     .then((response) => {
//       console.log(response);
//       router.push({ name: 'dashboard' 
//     }) })
//     .catch((error) => {
//         console.log("caiu no erro do deposito")
//         console.log(error.message);
//         // errorMessage.value = messages[error.response.data.error]
//     })

// })

const { value: value } = useField('value');

</script>

<template>
  <VContainer class="w-20">
    <v-alert v-if="errorMessage" type="error" :text="errorMessage" :icon="false" class="mb-3" />
    <h1>Depositar dinheiro - Seu saldo atual é: <strong class="text-blue">R$ {{ useAuthAmountStore.balance.amount
    }}</strong></h1>
    <hr class="my-10">
    <v-card max-width="800" class="">
      <v-container>
        
        <form @submit="submit">
          <v-row class="d-flex mb-3">
            <v-row dense>
              <v-col cols="12" class="mt-4">
                <v-text-field label="Informe o valor do depósito..." variant="outlined" prepend-icon="mdi-account-cash"
                  id="body" required class="mx-10" v-model="value">
                </v-text-field>
              </v-col>
            </v-row>
            <v-col cols="12">
              <v-btn type="submit" class="text-white" color="green" size="large" block flat :loading="isSubmitting"
                :disabled="isSubmitting">Depositar</v-btn>
            </v-col>
          </v-row>
        </form>

      </v-container>
    </v-card>

  </VContainer>
</template>
