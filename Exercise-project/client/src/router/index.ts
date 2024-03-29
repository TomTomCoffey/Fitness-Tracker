
 import { createRouter, createWebHistory, type NavigationGuardNext, type RouteLocationNormalized } from 'vue-router'
 import HomeView from '../views/HomeView.vue'
 import LoginVue from '@/views/Login.vue'
 import ExercisesVue from '@/views/Exercises.vue'
 import Statistics from '@/views/Statistics.vue'
 import FriendsActivity from '@/views/FriendsActivity.vue'
 import AdminView from '@/views/AdminView.vue'
 import SignUpView from '@/views/SignUpView.vue'

 import { useSession } from '@/model/session'

 const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
  
     { path: '/', name: 'home', component: HomeView },
    { path: '/exercises', name: 'exercises', component: ExercisesVue, beforeEnter: secureRoute},
     //{ path: '/products', name: 'products', component: ProductsVue, beforeEnter: secureRoute }, Use as template for new views with login
     { path: '/login', name: 'login', component: LoginVue },
      { path: '/admin', name: 'admin', component: AdminView, beforeEnter: secureRoute },
      { path: '/statistics', name: 'statistics', component: Statistics, beforeEnter: secureRoute },
      { path: '/friendsActivity', name: 'friendsActivity', component: FriendsActivity, beforeEnter: secureRoute },
      { path: '/signup', name: 'signup', component: SignUpView},
      
     {
       path: '/about',
       name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
 })

 export default router

 function secureRoute (to : RouteLocationNormalized, from : RouteLocationNormalized, next : NavigationGuardNext ) {
     const session = useSession();
     if (session.user) {
         next()
     } else { 
         next('/login')
     }
 }