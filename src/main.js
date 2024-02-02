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

const hasTokenStore = useAuth();
console.log(hasTokenStore.id());

app.use(vuetify)
app.use(router)
app.mount('#app')
