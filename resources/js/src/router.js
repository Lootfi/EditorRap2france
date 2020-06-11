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
import Profile from './views/pages/User/Profile.vue'
import ProfileSetting from './views/pages/User/ProfileSettings/ProfileSetting.vue'

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
                }
            ,{  
                path: '/profile',
                name: 'profile',
                component: Profile,
                meta :{
                  requiresAuth :true,
                }
              },  
              {  
                path: '/profile-setting',
                name: 'profile-setting',
                component: ProfileSetting,
                meta :{
                  requiresAuth :true,
                }
              },
               {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('@/views/pages/Dashboard.vue'),
                meta :{
                  requiresAuth :true,
                }
              }
              ,
              {
                path: '/articles',
                name: 'articles',
                component: () => import('@/views/pages/Articles/ArticleIndex.vue'),
                meta :{
                  requiresAuth :true,
                }
              },
               {
                path: '/editors',
                name: 'editors',
                component: () => import('@/views/pages/Editors/EditorIndex.vue'),
                meta :{
                  requiresAuth :true,
                  requiresAdmin: true,
                }
              },
              {
                path: '/editors/:slug',
                name: 'editor',
                component: () => import('@/views/pages/Editors/Editor.vue'),
                meta :{
                  requiresAuth :true,
                  requiresAdmin: true,

                }
              }
              ,
              {
                path: '/editors/:slug/edit',
                name: 'editor-edit',
                component: () => import('@/views/pages/Editors/editor-edit/EditorEdit.vue'),
                meta :{
                  requiresAuth :true,
                  requiresAdmin: true,

                }
              },
              {
                path: '/create-editor',
                name: 'editor-create',
                component: () => import('@/views/pages/Editors/EditorCreate.vue'),
                meta :{
                  requiresAuth :true,
                  requiresAdmin: true,

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
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const LoggedInuser = localStorage.getItem('user')
  const loggedIn = localStorage.getItem('jwt');
  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {

    if(to.matched.some(record => record.meta.requiresAdmin) && LoggedInuser.role != "Admin" ){

        next('/dashboard')

    }else{

          next();


    }
  }
});

/*
   
  router.beforeEach((to, from, next) => {
   if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next('/login')
        } else {

            if(to.path == '/profile'){

                next('/profile')
            }

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
*/
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router
