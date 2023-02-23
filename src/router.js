import { createRouter, createWebHistory } from 'vue-router'

import { useAuth } from '@/composables/useAuth'
const { isAuthenticated } = useAuth()

import MainPage from '@/components/MainPage.vue'
import loginPage from '@/components/loginPage.vue'
import settingsPage from '@/components/settingsPage.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
    { path: '/', name: 'Home', component: MainPage },
    { path: '/login', name: 'login', component: loginPage },
    { path: '/settings', name: 'Settings', component: SettingsPage, meta: { requiresAuth: true } },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, _, next) => {
    if (to.meta.requiresAuth && !isAuthenticated.value) next({ name: 'Login', query: { redirect: to.fullPath } })
    else next()
})

export default router