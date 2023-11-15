import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import LoginPage from '../components/LoginPage.vue'
import SignupPage from '../components/SignupPage.vue'
import AdminAuth from '../components/AdminAuth.vue'
import ProfileCard from '../components/homepage/ProfileCard.vue'
import { useAuthStore } from '../stores/auth'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: LoginPage
        },
        {
          path: 'signup',
          name: 'Signup',
          component: SignupPage
        },
        {
          path: 'admin',
          component: AdminAuth
        }
      ]
    },
    {
      path: '/home',
      name: 'Home',
      beforeEnter: (to, from, next) => {
        const auth = useAuthStore()
        const isAuthenticated = auth.isAuthenticated

        if (to.name == 'Home' && !isAuthenticated) next({ name: 'Login' })
        else next()
      },
      component: HomeView
    },

    {
      path: '/candidate/:id',
      name: 'candidate',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:ProfileCard
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]

 
})
 router.beforeEach((to, from, next) => {
  const {isAuthenticated}=useAuthStore()
  if (to.meta.requiresAuth && !isAuthenticated) {
    // Redirect to the login page or another page
    next('/login');
  } else {
    next();
  }
})

export default router
