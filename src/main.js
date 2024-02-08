import { loadFonts } from '@/plugins/webfontloader'
loadFonts()
import App from './App.vue'
import './axios'
import { createApp } from 'vue'
import vuetify from '@/plugins/vuetify';
import router from '@/router';
import pinia from '@/store';
import { useAuth } from '@/store/auth';
import { useAuthUserStore } from '@/store/AuthUserStore';
import setAuthHeader from './store/setAuthHeader'
// import AppStorage from '@/helpers/AppStorage';



const app = createApp(App)
app.use(pinia)


if(localStorage.token) {
    setAuthHeader(localStorage.token);
} else {
    setAuthHeader(false);
};

const authUserStore = useAuthUserStore();
authUserStore.getAuthUser();

// const Tok = AppStorage;
// console.log(Tok.getToken())


const hasTokenStore = useAuth();
console.log('idUser = ', hasTokenStore.id()); //imprime id do usuário autenticado


app.use(vuetify)
app.use(router)
app.mount('#app')
