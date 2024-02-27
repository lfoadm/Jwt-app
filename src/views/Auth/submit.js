import { errorMessage, authStore, router } from './Signup.vue';

export const submit = handleSubmit((values) => {
errorMessage.value = null;
return authStore.signup(values.first_name, values.last_name, values.email, values.password)
.then(() => { router.push({ name: 'dashboard' }); })
.catch((e) => {
console.log(e.response.data.message);
// errorMessage.value = messages[e.response.data.message]
});

});
