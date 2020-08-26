/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from "vue";
import Router from "vue-router";
import Profile from "./views/pages/User/Profile.vue";
import ProfileSetting from "./views/pages/User/ProfileSettings/ProfileSetting.vue";
import axios from "./axios.js";

Vue.use(Router);


const router = new Router({
  mode: "history",
  base: "/",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  
  routes: [
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: "/route",
      component: () => import("./layouts/main/Main.vue"),
      children: [
        // =============================================================================
        // Theme Routes
        // ============================================================================
        {
          path: "/profile",
          name: "profile",
          component: Profile,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "/profile-setting",
          name: "profile-setting",
          component: ProfileSetting,
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("@/views/pages/Dashboard.vue"),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "/my-articles",
          name: "my-articles",
          component: () =>
            import("@/views/pages/User/Articles/ArticleIndex.vue"),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "/articles",
          name: "articles",
          component: () => import("@/views/pages/Articles/ArticleIndex.vue"),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "/articles/:tag",
          name: "article",
          component: () => import("@/views/pages/Articles/Article.vue"),
          meta: {
            requiresAuth: true,
          },
        },
        {
          path: "/articles/:tag/edit",
          name: "article-edit",
          component: () => import("@/views/pages/Articles/ArticleEdit.vue"),
          meta: {
            requiresAuth: true,
            activated : true
          },
        },
        {
          path: "/create-article",
          name: "article-create",
          component: () => import("@/views/pages/Articles/ArticleCreate.vue"),
          meta: {
            requiresAuth: true,
            activated : true

          },
        },
        {
          path: "/editors",
          name: "editors",
          component: () => import("@/views/pages/Editors/EditorIndex.vue"),
          meta: {
            requiresAuth: true,
            requiresAdmin: true,
          },
        },
        {
          path: "/editors/:slug",
          name: "editor",
          component: () => import("@/views/pages/Editors/Editor.vue"),
          meta: {
            requiresAuth: true,
            requiresAdmin: true,
          },
        },
        {
          path: "/editors/:slug/edit",
          name: "editor-edit",
          component: () =>
            import("@/views/pages/Editors/editor-edit/EditorEdit.vue"),
          meta: {
            requiresAuth: true,
            requiresAdmin: true,
          },
        },
        {
          path: "/create-editor",
          name: "editor-create",
          component: () => import("@/views/pages/Editors/EditorCreate.vue"),
          meta: {
            requiresAuth: true,
            requiresAdmin: true,
          },
        },
         {
          path: "/settings",
          name: "artists",
          component: () =>
            import("@/views/pages/Settings/Index.vue"),
          meta: {
            requiresAuth: true,
            requiresAdmin: true,
          },
        },
        {
          path: "/settings/artists",
          name: "artists",
          component: () =>
            import("@/views/pages/Settings/Artists/ArtistIndex.vue"),
          meta: {
            requiresAuth: true,
            requiresAdmin: true,
          },
        },
        {
          path: "/settings/create-artist",
          name: "artists-create",
          component: () =>
            import("@/views/pages/Settings/Artists/ArtistCreate.vue"),
          meta: {
            requiresAuth: true,
            requiresAdmin: true,
          },
        },
        {
          path: "/artists/:slug",
          name: "artist",
          component: () =>
            import("@/views/pages/Settings/Artists/Artist.vue"),
          meta: {
            requiresAuth: true,
            requiresAdmin: true,
          },
        },
        {
          path: "/artists/:slug/edit",
          name: "artist-edit",
          component: () =>
            import("@/views/pages/Settings/Artists/ArtistEdit.vue"),
          meta: {
            requiresAuth: true,
            requiresAdmin: true,
          },
        }
      ],
    },
    {
      path: "",
      component: () => import("@/layouts/full-page/FullPage.vue"),
      children: [
        {
          path: "/",
          name: "page-login",
          component: () => import("@/views/pages/Auth/Login.vue"),
          meta: {
            guest: true,
          },
        },
      ],
    },
    {
      path: "*",
      redirect: "/dashboard",
    },
  ],
});

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (localStorage.getItem('jwt') == null) {
            next({
                name: 'page-login',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = JSON.parse(localStorage.getItem('user'))
            if(to.matched.some(record => record.meta.requiresAdmin) ) {
                if(user.role == "Admin"){
                    next()
                }
                else{
                 
                    next("/dashboard")
        
                  }
                
            }else {

              if(to.matched.some((record) => record.meta.activated) && user.StatusName =="Suspendu"){
              
                next("/dashboard")
            }
              else{

                  next()
                }
            }
}
    } else if(to.matched.some(record => record.meta.guest)) {
        if(localStorage.getItem('jwt') == null){
            next()
        }
        else{
            next("/dashboard")
        }
    }else {
        next() 
    }
})


router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;