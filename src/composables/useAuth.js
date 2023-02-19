import { ref } from 'vue'
import router from '@/router'

const dbUsers = [
    {
        username: 'admin',
        password: 'admin',
        name: 'Admin',
        role: 'admin',
        email: 'admin@cool-company,com',
    },
    {
        username: 'user',
        password: 'user',
        name: 'User',
        role: 'user',
        email: 'user@cool-company,com',
    },
]

const isAuthenticated = ref(false)
const user = ref({})

export const useAuth = () => {
    const login = (username, password) => {
        const dbUser = dbUsers.find((u) => u.username === username && u.password === password)
        if (dbUser) {
            const { name, role, email, username } = dbUser
            isAuthenticated.value = true
            user.value = { name, role, email, username }
            return true
        }
        return false
    }

    const logout = () => {
        isAuthenticated.value = false
        user.value = {}
        router.push({ name: 'Home' })
    }
    return { isAuthenticated, user, login, logout }
}
