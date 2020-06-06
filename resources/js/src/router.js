/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: '/',
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [
        {
    // =============================================================================
    // MAIN LAYOUT ROUTES
    // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
              {
            path: '/',
            redirect: {name : 'dashboard'}
                },   

         {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('@/views/pages/Dashboard.vue'),
                meta :{
                  requiresAuth :true,
                }
              }
            ],
        },{
            path: '',
            component: () => import('@/layouts/full-page/FullPage.vue'),
            children: [
              {
                path: '/login',
                name: 'page-login',
                component: () => import('@/views/pages/Auth/Login.vue'),
                meta :{
                  guest: true,
                }
              }
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        },
    ],
})

   
  router.beforeEach((to, from, next) => {
   if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next('/login')
        } else {
            let role = localStorage.getItem('role')
               if(role == "Admin"){
                 if( to.path == '/login'){
                   next('/dashboard')
                 }
                }
                else{
              next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
                }
            
        }
    }
  if(to.matched.some(record => record.meta.guest)) {

        if(localStorage.getItem('jwt') == null ){
            next()
        }
        else{
            next('/dashboard')
            }
    } else {
        next()
    }
    
})

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
