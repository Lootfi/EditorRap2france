(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      artist_data: null,
      artist_not_found: false,
      user_not_admin: true,
      isDeleting: false
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$http.get("/api/settings/artists/".concat(this.$route.params.slug), {
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("jwt"))
      }
    }).then(function (response) {
      if (response.data == "Artist not found") {
        _this.$router.push("/artists");
      }

      _this.artist_data = response.data;

      if (_this.user_data.role == "Admin") {
        _this.user_not_admin = false;
      }
    }).catch(function (error) {
      console.error(error);
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=style&index=0&id=b5f6425e&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=style&index=0&id=b5f6425e&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-view-item .item-name[data-v-b5f6425e], .list-view-item .item-description[data-v-b5f6425e] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.list-view-item .item-name[data-v-b5f6425e] {\n  -webkit-line-clamp: 2;\n}\n.list-view-item .item-description[data-v-b5f6425e] {\n  -webkit-line-clamp: 5;\n}\n.list-view-item .grid-view-img[data-v-b5f6425e] {\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  transition: 0.35s;\n}\n[dir] .list-view-item[data-v-b5f6425e]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.25);\n}\n.list-view-item:hover .grid-view-img[data-v-b5f6425e] {\n  opacity: 0.9;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=style&index=0&id=b5f6425e&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=style&index=0&id=b5f6425e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Artist.vue?vue&type=style&index=0&id=b5f6425e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=style&index=0&id=b5f6425e&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=template&id=b5f6425e&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=template&id=b5f6425e&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "knowledge-base-article" } }, [
    _c("div", [
      _c(
        "div",
        { staticClass: "vx-col w-full  mt-12 md:mt-0 " },
        [
          _c(
            "vx-card",
            [
              _c("div", { staticClass: "flex justify-between items-center" }, [
                _c(
                  "div",
                  [
                    _c("vs-avatar", {
                      attrs: {
                        size: "150px",
                        src:
                          "/images/admin/artists/avatars/" +
                          _vm.artist_data.image
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "article-title   mb-6 py-4" }, [
                  _c(
                    "h1",
                    {
                      staticClass: "text-5xl text-center my-2",
                      staticStyle: { "font-family": "times new roman" }
                    },
                    [
                      _vm._v(
                        "\n            " +
                          _vm._s(_vm.artist_data.name) +
                          "\n          "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "div",
                    { staticClass: "dropdown-button-container" },
                    [
                      _c(
                        "vs-dropdown",
                        [
                          _c("vs-button", {
                            staticClass: "btn-drop",
                            attrs: {
                              color: "rgba(0,0,0,0)",
                              type: "gradient",
                              icon: "more_horiz"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-menu",
                            [
                              _c(
                                "vs-dropdown-item",
                                {
                                  on: {
                                    click: function($event) {
                                      return _vm.$router.push(
                                        "/artists/" +
                                          _vm.artist_data.slug +
                                          "/edit"
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                      Modifier\n                    "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c("h1", { staticClass: "my-3" }, [
                _vm._v("Articles sur l'artiste")
              ]),
              _vm._v(" "),
              _vm._l(_vm.artist_data.articles, function(article) {
                return _c("div", [
                  _c(
                    "div",
                    { staticClass: "vx-row flex-start item-details no-gutter" },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "bg-white col-3 cursor-pointer",
                          staticStyle: { height: "200px" }
                        },
                        [
                          _c("img", {
                            staticClass: "p-4",
                            staticStyle: {
                              "max-width": "100%",
                              "max-height": "100%"
                            },
                            attrs: { src: article.Avatar }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "vx-col sm:w-1/2" }, [
                        _c(
                          "div",
                          { staticClass: "p-4 pt-6" },
                          [
                            _vm._t("item-meta", [
                              _c(
                                "h6",
                                {
                                  staticClass:
                                    "item-name font-semibold mb-1 hover:text-primary cursor-pointer",
                                  on: {
                                    click: function($event) {
                                      return _vm.$router.push(
                                        "/articles/" + article.tag
                                      )
                                    }
                                  }
                                },
                                [_vm._v(_vm._s(article.titre))]
                              ),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-sm mb-4" }, [
                                _vm._v("By "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "font-semibold cursor-pointer"
                                  },
                                  [_vm._v(_vm._s(article.Creator.Full_Name))]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "p",
                                { staticClass: "item-description text-sm" },
                                [_vm._v(_vm._s(article.contenutext))]
                              )
                            ])
                          ],
                          2
                        )
                      ])
                    ]
                  )
                ])
              })
            ],
            2
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/Artist.vue":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/Artist.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Artist_vue_vue_type_template_id_b5f6425e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Artist.vue?vue&type=template&id=b5f6425e&scoped=true& */ "./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=template&id=b5f6425e&scoped=true&");
/* harmony import */ var _Artist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Artist.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Artist_vue_vue_type_style_index_0_id_b5f6425e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Artist.vue?vue&type=style&index=0&id=b5f6425e&lang=scss&scoped=true& */ "./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=style&index=0&id=b5f6425e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Artist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Artist_vue_vue_type_template_id_b5f6425e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Artist_vue_vue_type_template_id_b5f6425e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b5f6425e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Settings/Artists/Artist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Artist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=style&index=0&id=b5f6425e&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=style&index=0&id=b5f6425e&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_style_index_0_id_b5f6425e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Artist.vue?vue&type=style&index=0&id=b5f6425e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=style&index=0&id=b5f6425e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_style_index_0_id_b5f6425e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_style_index_0_id_b5f6425e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_style_index_0_id_b5f6425e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_style_index_0_id_b5f6425e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_style_index_0_id_b5f6425e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=template&id=b5f6425e&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=template&id=b5f6425e&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_template_id_b5f6425e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Artist.vue?vue&type=template&id=b5f6425e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/Artist.vue?vue&type=template&id=b5f6425e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_template_id_b5f6425e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Artist_vue_vue_type_template_id_b5f6425e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);