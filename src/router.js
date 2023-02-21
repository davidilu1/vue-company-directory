import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth.js'

const { isAuthenticated } = useAuth()

import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/loginPage.vue'
import SettingsPage from '@/components/settingsPage.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
    { path: '/', name: 'Home', component: MainPage },
    { path: '/login', name: 'Login', component: LoginPage },
    { path: '/settings', name: 'Settings', component: SettingsPage, meta: { requiresAuth: true } },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to) => {
    if (to.meta.requiresAuth && !isAuthenticated.value) {
        return { name: 'Login', query: { redirect: to.fullPath } }
    }
})

export default router
