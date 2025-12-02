import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import UsersList from '../views/users/ListUsers.vue'
import UsersCreate from '../views/users/CreateUser.vue'
import UsersEdit from '../views/users/EditUser.vue'
import { useAuthStore } from '../stores/auth'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  /*{ path: '/usuarios', component: UsersList, meta: { requiresAuth: true } },
  { path: '/usuarios/crear', component: UsersCreate, meta: { requiresAuth: true } },
  { path: '/usuarios/:id/editar', component: UsersEdit, meta: { requiresAuth: true } },*/
  // fallback: cualquier ruta no encontrada redirige a home
  { path: '/:pathMatch(.*)*', redirect: '/home' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isLogged) return '/'
})

export default router
