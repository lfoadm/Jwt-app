import { loadFonts } from '@/plugins/webfontloader'
loadFonts()
import App from './App.vue'
import './axios'
import { createApp } from 'vue'
import vuetify from '@/plugins/vuetify';
import router from '@/router';
import pinia from '@/store';
import { useAuth } from '@/store/auth';

const app = createApp(App)
app.use(pinia)

const Tok = useAuth();
console.log('token é válido? Resposta: ', Tok.hasToken())

const hasTokenStore = useAuth();
console.log('idUser = ', hasTokenStore.id()); //imprime id do usuário autenticado


app.use(vuetify)
app.use(router)
app.mount('#app')
