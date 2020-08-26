/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    url: '/dashboard',
    name: "Dashboard",
    slug: "dashboard",
    icon: "HomeIcon",
    i18n: "Dashboard",
    admin: false,

  },
  {
    url : null,
    name: "Actualité",
    slug: "actualite",
    icon: "EditIcon",
    i18n: "Actualité",
    admin: false,
    submenu: [
      {
        url: '/articles',
        name: "Liste des articles",
        slug: "listearticles",
        i18n: "Articles",

      },
      {
        url: '/create-article',
        name: "Ajouter un article",
        slug: "ajouter-article",
        i18n: "Articles",
      },
    ]
  },
  {
   url : null,
   name: "Editeurs",
   slug: "users",
   icon: "UserIcon",
   i18n: "Editors",
   admin: true,

   submenu: [
      {
        url: '/editors',
        name: "Liste des editeurs",
        slug: "listeediteurs",
        i18n: "Editors",

      },
      {
        url: '/create-editor',
        name: "Ajouter un editeur",
        slug: "ajouter-editeur",
        i18n: "Editors",
      },
    ]

  },{
   url : null,
   name: "Paramètres",
   slug: "settings",
   icon: "SettingsIcon",
   i18n: "settings",
   admin: true,
   submenu: [

   {
        url: '/settings',
        name: "Paramètres generaux",
        slug: "paramteres-generaux",
        i18n: "Parametres",
      },
      {
        url: '/settings/artists',
        name: "Liste des artistes",
        slug: "listeartists",
        i18n: "Artistes",
      }
    ]

  }
]
