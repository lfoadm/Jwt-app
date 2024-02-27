<script setup>
import { RouterLink } from 'vue-router';
import { useAuth } from '@/store/auth';
import { useRouter } from 'vue-router';
import { useForm, useField } from 'vee-validate';
import { ref } from "vue";
import * as yup from 'yup';
import messages from "@/utils/messages";
import Logo from '@/components/logo/Logo.vue';

const errorMessage = ref(null)
const router = useRouter()
const authStore = useAuth();

const schema = yup.object({
    email: yup.string().required().email().label('E-mail'),
    password: yup.string().required().label('Senha'),
});

const { handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: schema,
})

const submit = handleSubmit((values) => {
    errorMessage.value = null
    return authStore.login(values.email, values.password).then(() => {
        router.push({ name: 'dashboard' })
    }).catch((e) => {
        console.log("caiu no erro")
        errorMessage.value = messages[e.response.data.error]
    })
})

const { value: email } = useField('email');
const { value: password } = useField('password');

</script>

<template>
    <div class="authentication mt-9">
        <v-container fluid class="pa-3">
            <v-row class="h-100vh d-flex justify-center align-center">
                <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
                    <v-card rounded="md" elevation="10" class="px-sm-1 px-0 withbg mx-auto" max-width="500">
                        <v-card-item class="pa-sm-8">
                            <div class="d-flex justify-center py-2">
                                <Logo />
                            </div>

                            <v-alert
                                v-if="errorMessage"
                                type="error"
                                :text="errorMessage"
                                :icon="false"
                                class="mb-3"
                            />
                            
                            <div class="text-body-2 text-muted text-center mb-6">Acesso</div>

                            <form @submit="submit">
                                <v-row class="d-flex mb-3">
                                    <v-col cols="12">
                                        <v-label class="font-weight-bold mb-1">E-mail</v-label>
                                        <v-text-field
                                            v-model="email"
                                            variant="outlined"
                                            color="primary"
                                            :hide-details="!errors.email"
                                            :error-messages="errors.email"
                                        />
                                    </v-col>

                                    <v-col cols="12">
                                        <v-label class="font-weight-bold mb-1">Senha</v-label>
                                        <v-text-field
                                            v-model="password"
                                            variant="outlined"
                                            type="password"
                                            color="primary"
                                            :hide-details="!errors.password"
                                            :error-messages="errors.password"
                                        />
                                    </v-col>

                                    <v-col color="primary" cols="12" class="pt-0">
                                        <div class="d-flex flex-wrap align-center   ">
                                            <div class="ml-sm-auto">
                                                <!-- <RouterLink :to="{ name: 'ForgotPassword' }"
                                                    class="text-indigo-accent-2 text-decoration-none text-body-1 opacity-1 font-weight-medium">
                                                    Esqueceu a senha?</RouterLink> -->
                                            </div>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" class="pt-0">
                                        <v-btn type="submit" class="bg-primary text-amber-accent-1" size="large" block flat :loading="isSubmitting"
                                            :disabled="isSubmitting">Login</v-btn>
                                    </v-col>
                                </v-row>
                            </form>
                            <h6 class="text-h6 text-muted font-weight-medium d-flex justify-center align-center mt-3">
                                Novo aqui?
                                <RouterLink :to="{ name: 'signup' }"
                                    color="primary"
                                    class="text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2">
                                    <h4>Crie sua conta</h4>
                                </RouterLink>
                            </h6>
                        </v-card-item>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>