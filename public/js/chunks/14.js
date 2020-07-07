(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Articles/Article.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Articles/Article.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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
      articleData: null,
      article_not_found: false,
      article_raw: false,
      isDeleting: false,
      isPublished: false
    };
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$vs.loading({
      type: "corners",
      text: "Patientez s'il vous plait"
    });
    this.$http.get("/api/articles/".concat(this.$route.params.tag), {
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("jwt"))
      }
    }).then(function (response) {
      _this.$vs.loading.close();

      if (response.data == "Article not found") {
        _this.$router.push("/articles");
      }

      _this.articleData = response.data;

      if (_this.articleData.status == 1) {
        _this.isPublished = false;
      } else {
        _this.isPublished = true;
      }

      if (response.data.ContenuFormat.type == "raw") {
        _this.article_raw = true;
      } else {
        _this.articleData.ContenuFormat.contenu = _this.JsonFormatter(_this.articleData);
      }
    }).catch(function (error) {
      console.error(error);
    });
  },
  methods: {
    showActions: function showActions(articleData) {
      if ((this.activeUserInfo.user.role == "Admin" || this.activeUserInfo.user.email == articleData.Creator.email) && this.activeUserInfo.user.StatusName == "Activé") {
        return true;
      }

      return false;
    },
    isJsonArticle: function isJsonArticle(row) {
      if (row.ContenuFormat.type == "raw") {
        return false;
      }

      return true;
    },
    handleDelete: function handleDelete(e) {
      var _this2 = this;

      e.preventDefault();
      this.$http.get("/api/articles/".concat(this.$route.params.tag, "/delete"), {
        headers: {
          Authorization: "Bearer ".concat(localStorage.getItem("jwt"))
        }
      }).then(function (response) {
        _this2.$router.push("/articles");
      }).catch(function (error) {
        console.error(error);
      });
    },
    JsonFormatter: function JsonFormatter(Data) {
      var content = Data.ContenuFormat.contenu;
      var rawHtml = "";
      content.blocks.map(function (block) {
        if (block.type == "paragraph") {
          rawHtml = "".concat(rawHtml, "<div class=\"my-4\"><p>").concat(block.data.text, "</p></div>");
        }

        if (block.type == "list") {
          if (block.data.style == "ordered") {
            var listItems = "";
            block.data.items.map(function (item) {
              listItems = "".concat(listItems, "<li>").concat(item, "</li>");
            });
            rawHtml = "".concat(rawHtml, "<div class=\"m-4\"><ol style=\"list-style-type:decimal;\" >").concat(listItems, "</ol></div>");
          }

          if (block.data.style == "unordered") {
            var listItems = "";
            block.data.items.map(function (item) {
              listItems = "".concat(listItems, "<li>").concat(item, "</li>");
            });
            rawHtml = "".concat(rawHtml, "<div class=\"m-4\"><ul style=\"list-style-type:disc;\">").concat(listItems, "</ul></div>");
          }
        }

        if (block.type == "header") {
          rawHtml = "".concat(rawHtml, "<div class=\"my-4\"><h").concat(block.data.level, ">").concat(block.data.text, "</h").concat(block.data.level, "></div>");
        }

        if (block.type == "quote") {
          rawHtml = "".concat(rawHtml, "<div class=\"my-4\">\n                <blockquote class=\"relative p-4 text-xl italic border-l-4 bg-neutral-100 text-neutral-600 border-neutral-500 quote\">\n                       <div style=\"font-size: 5rem; right: 100%;\" class=\"mr-2 font-dank-mono text-neutral-500 absolute top-0 leading-none;\" aria-hidden=\"true\">\n                         &ldquo;\n                      </div>\n                              <p class=\"mb-4 text-3xl italic\">").concat(block.data.text, "</p>\n                              <cite class=\"flex items-center\">\n                              <div class=\"flex flex-col items-start\">\n                                <span class=\"mb-1 text-sm italic font-bold\">\n                                Said By \n                                  ").concat(block.data.caption, "\n                                </span>\n                              </div>\n                              </cite>\n                      </blockquote></div>");
        }

        if (block.type == "image") {
          if (block.data.file) {
            rawHtml = "".concat(rawHtml, "<div class=\"my-4 \"><img style=\"max-width:100%;\" src=\"").concat(block.data.file.url, "\" />\n              <p class=\"text-center mt-2 font-bold\">").concat(block.data.caption, "</p>\n              </div>");
          }

          if (block.data.url) {
            rawHtml = "".concat(rawHtml, "<div class=\"my-4 \"><img style=\"max-width:100%;\" src=\"").concat(block.data.url, "\" />\n              <p class=\"text-center mt-2 font-bold\">").concat(block.data.caption, "</p>\n              </div>");
          }
        }

        if (block.type == "embed") {
          if (block.data.service == "instagram") {
            var embedInstagram = "<iframe width=\"".concat(block.data.width, "\" height=\"").concat(block.data.height, "\" src=\"").concat(block.data.embed, "\" frameborder=\"0\"></iframe><p class=\"text-center mt-2 font-bold\">").concat(block.data.caption, "</p>");
            rawHtml = "".concat(rawHtml, "<div class=\"my-4 text-center\">").concat(embedInstagram, "</div>");
          }

          if (block.data.service == "youtube") {
            var embedYoutube = "<iframe width=\"".concat(block.data.width, "\" height=\"").concat(block.data.height, "\" src=\"").concat(block.data.embed, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe><p class=\"text-center font-bold\">").concat(block.data.caption, "</p>");
            rawHtml = "".concat(rawHtml, "<div class=\"my-4 mx-auto text-center\">").concat(embedYoutube, "</div>");
          }

          if (block.data.service == "twitter") {
            var embedTwitter = "<iframe border=0 frameborder=0 height=".concat(block.data.height, " width=").concat(block.data.width, "\n                    src=").concat(block.data.embed, "></iframe><p class=\"text-center mt-2 font-bold\">").concat(block.data.caption, "</p>");
            rawHtml = "".concat(rawHtml, "<div class=\"my-4 mx-auto text-center\">").concat(embedTwitter, "</div>");
          }
        }
      });
      return rawHtml;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Articles/Article.vue?vue&type=template&id=6fc383ce&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Articles/Article.vue?vue&type=template&id=6fc383ce& ***!
  \************************************************************************************************************************************************************************************************************************/
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
                        _vm._s(_vm.articleData.titre) +
                        "\n          "
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "flex items-center" }, [
                  _c(
                    "div",
                    { staticClass: "flex items-center " },
                    [
                      _c("vs-avatar", {
                        attrs: {
                          size: "large",
                          src:
                            "/images/admin/users/avatars/" +
                            _vm.articleData.Creator.Details.picture
                        },
                        on: {
                          click: function($event) {
                            return _vm.$router.push(
                              "/editors/" + _vm.articleData.Creator.slug
                            )
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "ml-2" }, [
                        _c(
                          "p",
                          {
                            staticClass: "font-bold text-teal-600",
                            on: {
                              click: function($event) {
                                return _vm.$router.push(
                                  "/editors/" + _vm.articleData.Creator.slug
                                )
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                  " +
                                _vm._s(_vm.articleData.Creator.Full_Name) +
                                "\n                "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            "Last updated on " +
                              _vm._s(_vm.articleData.updated_at)
                          )
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm.isPublished
                            ? _c("span", [_vm._v("Publié")])
                            : _c("span", [_vm._v("À Publier")]),
                          _vm._v(
                            " Le :" + _vm._s(_vm.articleData.dateactu) + " "
                          )
                        ])
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.showActions(_vm.articleData)
                    ? _c("div", [
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
                                    _vm.isJsonArticle(_vm.articleData)
                                      ? _c(
                                          "vs-dropdown-item",
                                          {
                                            on: {
                                              click: function($event) {
                                                return _vm.$router.push(
                                                  "/articles/" +
                                                    _vm.articleData.tag +
                                                    "/edit"
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                      Modifier"
                                            )
                                          ]
                                        )
                                      : _vm._e(),
                                    _vm._v(" "),
                                    _c(
                                      "vs-dropdown-item",
                                      {
                                        attrs: { divider: "" },
                                        on: { click: _vm.handleDelete }
                                      },
                                      [
                                        _vm._v(
                                          "\n                      Supprimer\n                    "
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
                    : _vm._e()
                ])
              ]),
              _vm._v(" "),
              _c("p", [
                _vm._v("Category : " + _vm._s(_vm.articleData.Category.nom))
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "flex items-center my-4" }, [
                _c("div", [_vm._v("Artists :")]),
                _vm._v(" "),
                _c(
                  "ul",
                  { staticClass: "users-liked user-list ml-3 sm:ml-6" },
                  _vm._l(_vm.articleData.Artists, function(artist, index) {
                    return _c(
                      "li",
                      { key: index },
                      [
                        _c(
                          "vx-tooltip",
                          { attrs: { text: artist.name, position: "bottom" } },
                          [
                            _c("vs-avatar", {
                              staticClass:
                                "border-2 border-white border-solid -m-1",
                              attrs: { src: artist.Avatar, size: "large" },
                              on: {
                                click: function($event) {
                                  return _vm.$router.push(
                                    "/artists/" + artist.slug
                                  )
                                }
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "todo-tags my-4 flex" },
                _vm._l(_vm.articleData.Hashtags, function(tag, index) {
                  return _c("vs-chip", { key: index }, [
                    _c("span", [_vm._v(_vm._s(tag.nom))])
                  ])
                }),
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "text-center  " }, [
                _vm.articleData.image
                  ? _c("img", {
                      staticClass: "max-w-full h-auto mx-auto",
                      attrs: {
                        src:
                          "/images/admin/articles/avatars/" +
                          _vm.articleData.image
                      }
                    })
                  : _vm._e()
              ]),
              _vm._v(" "),
              _c("vs-divider", [_vm._v(" L'article ")]),
              _vm._v(" "),
              _vm.article_raw
                ? _c("div", [
                    _c("div", {
                      domProps: {
                        innerHTML: _vm._s(_vm.articleData.ContenuFormat.contenu)
                      }
                    })
                  ])
                : _c("div", [
                    _c("div", {
                      domProps: {
                        innerHTML: _vm._s(_vm.articleData.ContenuFormat.contenu)
                      }
                    })
                  ])
            ],
            1
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

/***/ "./resources/js/src/views/pages/Articles/Article.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/pages/Articles/Article.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Article_vue_vue_type_template_id_6fc383ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Article.vue?vue&type=template&id=6fc383ce& */ "./resources/js/src/views/pages/Articles/Article.vue?vue&type=template&id=6fc383ce&");
/* harmony import */ var _Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Article.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Articles/Article.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Article_vue_vue_type_template_id_6fc383ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Article_vue_vue_type_template_id_6fc383ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Articles/Article.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Articles/Article.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Articles/Article.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Article.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Articles/Article.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Articles/Article.vue?vue&type=template&id=6fc383ce&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Articles/Article.vue?vue&type=template&id=6fc383ce& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_6fc383ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Article.vue?vue&type=template&id=6fc383ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Articles/Article.vue?vue&type=template&id=6fc383ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_6fc383ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Article_vue_vue_type_template_id_6fc383ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);