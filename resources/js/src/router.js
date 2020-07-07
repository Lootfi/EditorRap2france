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
      path: "",
      component: () => import("./layouts/main/Main.vue"),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: "/",
          redirect: { name: "dashboard" },
        },
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
          path: "/login",
          name: "page-login",
          component: () => import("@/views/pages/Auth/Login.vue"),
          meta: {
            guest: true,
          },
        },
      ],
    },
    // Redirect to 404 page, if no match found
    {
      path: "*",
      redirect: "/pages/error-404",
    },
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  axios
    .get("/api/auth/checkAuthToken", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })

    .then((response) => {})
    .catch((error) => {
      localStorage.clear();
    });
  const LoggedInuser = JSON.parse(localStorage.getItem("user"));
  const loggedIn = localStorage.getItem("jwt");

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    if (
     (to.matched.some((record) => record.meta.requiresAdmin) &&
      LoggedInuser.role != "Admin" ) || (to.matched.some((record) => record.meta.activated) && LoggedInuser.StatusName =="Suspendu")
    ) {
      next("/dashboard");
    } else {
      next();
    }
  }
});


router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;