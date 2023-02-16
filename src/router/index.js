import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from '../components/GuestLayout.vue';

import Home from '../views/Home.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByName from '../views/MealsByName.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/home',
    //   name: 'home',
   
    //   component: () => import('../views/Home.vue')
    // },
    {
      path: "/",
      component: DefaultLayout,
      children : [
        {
          path: "/",
          name: "home",
          component: Home,
        },
    
        {
          path: "/by-name/:name?",
          name: "byName",
          component: MealsByName,
        },

        {
          path: "/ingredients",
          name: "ingredients",
          component: Ingredients,
        },
    
        {
          path: "/by-ingredient/:ingredient",
          name: "byIngredient",
          component: MealsByIngredient,
        },
    
        {
          path: "/by-letter/:letter?",
          name: "byLetter",
          component: MealsByLetter,
        },
        {
          path: "/meal/:id",
          name: 'mealDetails',
          component: MealDetails
        }
      ]
    },
    {
      path: "/guest",
      component: GuestLayout,

    }

  ]
})

export default router
