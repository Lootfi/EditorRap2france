(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{103:function(t,a,s){var e=s(355);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(14)(e,i);e.locals&&(t.exports=e.locals)},354:function(t,a,s){"use strict";var e=s(103);s.n(e).a},355:function(t,a,s){(t.exports=s(13)(!1)).push([t.i,"#avatar-col {\n  width: 10rem;\n}\n#page-user-view table td {\n  vertical-align: top;\n  min-width: 140px;\n  word-break: break-all;\n}\n[dir] #page-user-view table td {\n  padding-bottom: 0.8rem;\n}\n@media screen and (max-width: 370px) {\n#page-user-view table:not(.permissions-table) td {\n    display: block;\n}\n}\n@media screen and (min-width: 1201px) and (max-width: 1211px), only screen and (min-width: 636px) and (max-width: 991px) {\n#account-info-col-1 {\n    width: calc(100% - 12rem) !important;\n}\n}",""])},431:function(t,a,s){"use strict";s.r(a);var e={data:function(){return{user_data:null,user_not_found:!1,user_not_admin:!0,isDeleting:!1}},mounted:function(){var t=this;this.$http.get("/api/users/".concat(this.$route.params.slug),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(a){"User not found"==a.data&&t.$router.push("/editors"),t.user_data=a.data,"Admin"==t.user_data.role&&(t.user_not_admin=!1)})).catch((function(t){console.error(t)}))},methods:{handleDelete:function(t){t.preventDefault(),this.isDeleting=!0,this.$http.get("/api/users/".concat(this.$route.params.slug,"/delete"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("jwt"))}}).then((function(t){$router.push("/editors")})).catch((function(t){this.$vs.dialog({color:"danger",title:"",text:"L'utilisateur n'a été pas supprimé!"}),this.isDeleting=!1}))}}},i=(s(354),s(3)),r=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"page-user-view"}},[s("vs-alert",{attrs:{color:"danger",title:"User Not Found",active:t.user_not_found},on:{"update:active":function(a){t.user_not_found=a}}},[s("span",[t._v("User record with id: "+t._s(t.$route.params.slug)+" not found. ")]),t._v(" "),s("span",[s("span",[t._v("Check ")]),s("router-link",{staticClass:"text-inherit underline",attrs:{to:{name:"page-user-list"}}},[t._v("All Users")])],1)]),t._v(" "),t.user_data?s("div",{attrs:{id:"user-data"}},[s("vx-card",{staticClass:"mb-base",attrs:{title:"Informations d'editeur"}},[s("div",{staticClass:"vx-row items-center"},[s("div",{staticClass:"vx-col"},[s("div",{staticClass:"img-container mb-4"},[s("img",{staticClass:"rounded full-width",attrs:{src:t.user_data.Avatar}})])]),t._v(" "),s("div",{staticClass:"vx-col flex-1 ",attrs:{id:"account-info-col-1"}},[s("table",[s("tr",[s("td",{staticClass:"font-semibold "},[t._v("Nom d'utilisateur:")]),t._v(" "),s("td",[t._v(t._s(t.user_data.username))])]),t._v(" "),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Nom:")]),t._v(" "),s("td",[t._v(t._s(t.user_data.Full_Name))])]),t._v(" "),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Email:")]),t._v(" "),s("td",[t._v(t._s(t.user_data.email))])])])]),t._v(" "),s("div",{staticClass:"vx-col flex-1",attrs:{id:"account-info-col-2"}},[s("table",[s("tr",[s("td",{staticClass:"font-semibold"},[t._v("État:")]),t._v(" "),s("td",[t._v(t._s(t.user_data.StatusName))])]),t._v(" "),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Role:")]),t._v(" "),s("td",[t._v(t._s(t.user_data.role))])])])]),t._v(" "),s("div",{staticClass:"vx-col w-full flex",attrs:{id:"account-manage-buttons"}},[s("vs-button",{staticClass:"mr-4",attrs:{"icon-pack":"feather",icon:"icon-edit",to:{name:"editor-edit",params:{userId:t.user_data.slug}}}},[t._v("Edit")]),t._v(" "),t.user_not_admin?s("vs-button",{attrs:{type:"border",color:"danger","icon-pack":"feather",icon:"icon-trash",disable:t.isDeleting},on:{click:t.handleDelete}},[t._v("Delete")]):t._e()],1)])]),t._v(" "),s("div",{staticClass:"vx-row"},[s("div",{staticClass:"vx-col lg:w-1/2 w-full"},[s("vx-card",{staticClass:"mb-base",attrs:{title:"Information"}},[s("table",[s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Mobile")]),t._v(" "),s("td",[t._v(t._s(t.user_data.Details.mobile))])]),t._v(" "),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Adresse")]),t._v(" "),s("td",[t._v(t._s(t.user_data.Details.adresse))])]),t._v(" "),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Ville")]),t._v(" "),s("td",[t._v(t._s(t.user_data.Details.country))])]),t._v(" "),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Sexe")]),t._v(" "),s("td",[t._v(t._s(t.user_data.Details.gender))])])])])],1),t._v(" "),s("div",{staticClass:"vx-col lg:w-1/2 w-full"},[s("vx-card",{staticClass:"mb-base",attrs:{title:"Réseaux Sociaux"}},[s("table",[s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Twitter")]),t._v(" "),s("td",[t._v(t._s(t.user_data.Details.twitter))])]),t._v(" "),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Facebook")]),t._v(" "),s("td",[t._v(t._s(t.user_data.Details.facebook))])]),t._v(" "),s("tr",[s("td",{staticClass:"font-semibold"},[t._v("Instagram")]),t._v(" "),s("td",[t._v(t._s(t.user_data.Details.instagram))])])])])],1)])],1):t._e()],1)}),[],!1,null,null,null);a.default=r.exports}}]);
//# sourceMappingURL=11.js.map