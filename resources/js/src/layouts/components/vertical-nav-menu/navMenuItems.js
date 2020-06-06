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
    url: null,
    name: "Dashboard",
    slug: "dashboard",
    icon: "HomeIcon",
    i18n: "Dashboard",

  },
  {
    url : null,
    name: "Actualité",
    slug: "actualite",
    icon: "EditIcon",
    i18n: "Actualité",
    submenu: [
      {
        url: null,
        name: "Liste des articles",
        slug: "listearticles",
        i18n: "Articles",
      },
      {
        url: null,
        name: "Ajouter un article",
        slug: "ajouter-article",
        i18n: "Articles",
      },
    ]

  }
]
