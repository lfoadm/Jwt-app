<script setup>
import { useMe } from "@/store/me";
import { useBalance } from "@/store/balance";
import { useRouter } from 'vue-router';
import { useAuthUserStore } from "@/store/AuthUserStore";


const router = useRouter()
const { user, can } = useMe();
const useAuthStore = useAuthUserStore()

// const { balance } = useBalance()
const useAuthAmountStore = useBalance()

    
//console.log(useAuthAmountStore.balance.amount);

</script>

<template>
    <VContainer class="w-20">
        <h1>Saldo do usuário:</h1> <h3>{{ useAuthStore.user.first_name }} {{ useAuthStore.user.last_name }}</h3>
        <hr class="my-10">
        
  
  <v-card
    max-width="400"
    class=""
  >
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#1Ff087"
            theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  Saldo atual
                </v-card-title>

                <v-card-subtitle></v-card-subtitle>

                <v-card-actions>
                  <v-btn
                    :to="{ name: 'deposit' }"
                    color="indigo"
                    class="ms-2"
                    variant="outlined"
                    size="small"
                  >
                    DEPOSITAR
                  </v-btn>
                  <v-btn
                  :to="{ name: 'withdraw' }"
                    color="red"
                    class="ms-2"
                    variant="outlined"
                    size="small"
                  >
                    SACAR
                  </v-btn>
                </v-card-actions>
              </div>

              <div class="ma-3">
                <h2>R$ {{ useAuthAmountStore.balance.amount }}</h2>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

    </VContainer>
</template>
