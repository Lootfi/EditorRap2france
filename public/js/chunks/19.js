(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/ArtistCreate.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/ArtistCreate.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cropperjs */ "./node_modules/cropperjs/dist/cropper.js");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cropperjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
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
  components: {
    Cropper: cropperjs__WEBPACK_IMPORTED_MODULE_1___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      name: "",
      avatar: "",
      isSending: false,
      imgURL: "",
      rotation: 0
    };
  },
  methods: {
    handleAccountSubmit: function handleAccountSubmit(e) {
      var _this = this;

      e.preventDefault();
      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this.isSending = true;

          var canvas = _this.$refs.clipper.clip();

          var ResultAvatar = canvas.toDataURL("image/jpeg", 1);

          _this.$http.post("/api/settings/artists/add-new-artist", {
            name: _this.name,
            avatar: ResultAvatar
          }, {
            headers: {
              Authorization: "Bearer ".concat(localStorage.getItem("jwt"))
            }
          }).then(function (response) {
            _this.isSending = false;

            _this.$vs.dialog({
              color: "primary",
              title: "",
              text: "Artiste crée ! "
            });

            _this.$router.push("/settings/artists");
          }).catch(function (error) {
            this.isSending = false;
            this.$vs.dialog({
              color: "danger",
              title: "",
              text: "Erreur lors de la création"
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/ArtistCreate.vue?vue&type=template&id=4784a1a6&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/ArtistCreate.vue?vue&type=template&id=4784a1a6& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
      _c("vs-card", [
        _c("div", { attrs: { slot: "header" }, slot: "header" }, [
          _c("h3", [_vm._v("\n        Créer Un Artist\n      ")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "vx-row" }, [
          _c(
            "div",
            { staticClass: "vx-col md:w-1/2 w-full" },
            [
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "alpha_spaces|required",
                    expression: "'alpha_spaces|required'"
                  }
                ],
                staticClass: "w-full mt-4",
                attrs: { label: "Nom", name: "name" },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("name"),
                      expression: "errors.has('name')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("name")))]
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticStyle: { "max-width": "100%" } }, [
          _c(
            "div",
            { staticClass: "my-4" },
            [
              _c(
                "clipper-upload",
                {
                  staticClass:
                    "inline-block p-2 my-2 bg-primary rounded text-white",
                  model: {
                    value: _vm.imgURL,
                    callback: function($$v) {
                      _vm.imgURL = $$v
                    },
                    expression: "imgURL"
                  }
                },
                [_vm._v("Importer La photo de l'éditeur")]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "flex", staticStyle: { "max-width": "100%" } },
                [
                  _c("clipper-basic", {
                    ref: "clipper",
                    staticClass: " flex-grow-3",
                    attrs: {
                      src: _vm.imgURL,
                      preview: "my-preview",
                      rotate: _vm.rotation
                    }
                  }),
                  _vm._v(" "),
                  _c("clipper-preview", {
                    staticClass: "flex-grow-2 ml-2 my-clipper",
                    attrs: { name: "my-preview" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.imgURL
                ? _c(
                    "div",
                    { staticClass: "centerx" },
                    [
                      _c("vs-input-number", {
                        attrs: {
                          min: "0",
                          max: "360",
                          step: "90",
                          label: "Rotation"
                        },
                        model: {
                          value: _vm.rotation,
                          callback: function($$v) {
                            _vm.rotation = $$v
                          },
                          expression: "rotation"
                        }
                      })
                    ],
                    1
                  )
                : _vm._e()
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "vx-row" }, [
        _c("div", { staticClass: "vx-col w-full" }, [
          _c(
            "div",
            { staticClass: "mt-8 flex flex-wrap items-center justify-end" },
            [
              _c(
                "vs-button",
                {
                  staticClass: "ml-auto mt-2",
                  attrs: { disabled: _vm.isSending },
                  on: { click: _vm.handleAccountSubmit }
                },
                [_vm._v("Save Changes")]
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/ArtistCreate.vue":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/ArtistCreate.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArtistCreate_vue_vue_type_template_id_4784a1a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArtistCreate.vue?vue&type=template&id=4784a1a6& */ "./resources/js/src/views/pages/Settings/Artists/ArtistCreate.vue?vue&type=template&id=4784a1a6&");
/* harmony import */ var _ArtistCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArtistCreate.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Settings/Artists/ArtistCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ArtistCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArtistCreate_vue_vue_type_template_id_4784a1a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ArtistCreate_vue_vue_type_template_id_4784a1a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Settings/Artists/ArtistCreate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/ArtistCreate.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/ArtistCreate.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ArtistCreate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/ArtistCreate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistCreate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/ArtistCreate.vue?vue&type=template&id=4784a1a6&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/ArtistCreate.vue?vue&type=template&id=4784a1a6& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistCreate_vue_vue_type_template_id_4784a1a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ArtistCreate.vue?vue&type=template&id=4784a1a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/ArtistCreate.vue?vue&type=template&id=4784a1a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistCreate_vue_vue_type_template_id_4784a1a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistCreate_vue_vue_type_template_id_4784a1a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);