import { useAuth } from "../store/auth.js";

export const auth = (to, from, next) => {
    const authStore = useAuth();
    if(!authStore.hasToken()) {
        next({ name: 'login' })
    } else {
        next()
    }
}

export const redirectIfAuthenticated = (to, from, next) => {
    const authStore = useAuth();
    if(authStore.hasToken()) {
        next({ name: 'dashboard' })
    } else {
    next()
    }
}