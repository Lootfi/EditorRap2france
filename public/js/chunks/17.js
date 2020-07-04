(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Editors/Editor.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Editors/Editor.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      user_data: null,
      user_not_found: false,
      user_not_admin: true,
      isDeleting: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$http.get("/api/users/".concat(this.$route.params.slug), {
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("jwt"))
      }
    }).then(function (response) {
      if (response.data == "User not found") {
        _this.$router.push("/editors");
      }

      _this.user_data = response.data;

      if (_this.user_data.role == "Admin") {
        _this.user_not_admin = false;
      }
    }).catch(function (error) {
      console.error(error);
    });
  },
  methods: {
    handleDelete: function handleDelete(e) {
      e.preventDefault();
      this.isDeleting = true;
      this.$http.get("/api/users/".concat(this.$route.params.slug, "/delete"), {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem("jwt"))
        }
      }).then(function (response) {
        $router.push("/editors");
      }).catch(function (error) {
        this.$vs.dialog({
          color: "danger",
          title: "",
          text: "L'utilisateur n'a été pas supprimé!"
        });
        this.isDeleting = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Editors/Editor.vue?vue&type=template&id=2810f46b&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Editors/Editor.vue?vue&type=template&id=2810f46b& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-user-view" } },
    [
      _c(
        "vs-alert",
        {
          attrs: {
            color: "danger",
            title: "User Not Found",
            active: _vm.user_not_found
          },
          on: {
            "update:active": function($event) {
              _vm.user_not_found = $event
            }
          }
        },
        [
          _c("span", [
            _vm._v(
              "User record with id: " +
                _vm._s(_vm.$route.params.slug) +
                " not found. "
            )
          ]),
          _vm._v(" "),
          _c(
            "span",
            [
              _c("span", [_vm._v("Check ")]),
              _c(
                "router-link",
                {
                  staticClass: "text-inherit underline",
                  attrs: { to: { name: "page-user-list" } }
                },
                [_vm._v("All Users")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm.user_data
        ? _c(
            "div",
            { attrs: { id: "user-data" } },
            [
              _c(
                "vx-card",
                {
                  staticClass: "mb-base",
                  attrs: { title: "Account Information" }
                },
                [
                  _c("div", { staticClass: "vx-row items-center" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col", attrs: { id: "avatar-col" } },
                      [
                        _c("div", { staticClass: "img-container mb-4" }, [
                          _c("img", {
                            staticClass: "rounded max-w-xs",
                            attrs: { src: _vm.user_data.Avatar }
                          })
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "vx-col flex-1 ",
                        attrs: { id: "account-info-col-1" }
                      },
                      [
                        _c("table", [
                          _c("tr", [
                            _c("td", { staticClass: "font-semibold " }, [
                              _vm._v("Username:")
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.user_data.username))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "font-semibold" }, [
                              _vm._v("Name:")
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.user_data.Full_Name))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "font-semibold" }, [
                              _vm._v("Email:")
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.user_data.email))])
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "vx-col flex-1",
                        attrs: { id: "account-info-col-2" }
                      },
                      [
                        _c("table", [
                          _c("tr", [
                            _c("td", { staticClass: "font-semibold" }, [
                              _vm._v("Status:")
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.user_data.StatusName))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "font-semibold" }, [
                              _vm._v("Role:")
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.user_data.role))])
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "vx-col w-full flex",
                        attrs: { id: "account-manage-buttons" }
                      },
                      [
                        _c(
                          "vs-button",
                          {
                            staticClass: "mr-4",
                            attrs: {
                              "icon-pack": "feather",
                              icon: "icon-edit",
                              to: {
                                name: "editor-edit",
                                params: { userId: _vm.user_data.slug }
                              }
                            }
                          },
                          [_vm._v("Edit")]
                        ),
                        _vm._v(" "),
                        _vm.user_not_admin
                          ? _c(
                              "vs-button",
                              {
                                attrs: {
                                  type: "border",
                                  color: "danger",
                                  "icon-pack": "feather",
                                  icon: "icon-trash",
                                  disable: _vm.isDeleting
                                },
                                on: { click: _vm.handleDelete }
                              },
                              [_vm._v("Delete")]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ])
                ]
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Editors/Editor.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/pages/Editors/Editor.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editor_vue_vue_type_template_id_2810f46b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=2810f46b& */ "./resources/js/src/views/pages/Editors/Editor.vue?vue&type=template&id=2810f46b&");
/* harmony import */ var _Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Editors/Editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Editor_vue_vue_type_template_id_2810f46b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Editor_vue_vue_type_template_id_2810f46b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Editors/Editor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Editors/Editor.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Editors/Editor.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Editor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Editors/Editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Editors/Editor.vue?vue&type=template&id=2810f46b&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Editors/Editor.vue?vue&type=template&id=2810f46b& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_2810f46b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Editor.vue?vue&type=template&id=2810f46b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Editors/Editor.vue?vue&type=template&id=2810f46b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_2810f46b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_2810f46b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);