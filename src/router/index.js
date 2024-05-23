import { createRouter, createWebHistory } from 'vue-router'
import RegisterUser from '../components/RegisterUser.vue'
import LoginUser from '../components/LoginUser.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/register', name: 'Register', component: RegisterUser },

    { path: '/login', name: 'Login', component: LoginUser }
    // Adicione outras rotas aqui
  ]
})

export default router
