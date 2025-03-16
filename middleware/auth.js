// middleware/auth.js
export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client) {
        if (to.path.startsWith('/dashboard') && localStorage.getItem('accessGranted') !== 'true') {
            return navigateTo('/login');
        }
    }
}); 