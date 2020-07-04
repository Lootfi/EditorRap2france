(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/ArtistEdit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/ArtistEdit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cropperjs */ "./node_modules/cropperjs/dist/cropper.js");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cropperjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      name: "",
      avatar: "",
      artistData: null,
      isSending: false,
      imgURL: "",
      rotation: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$vs.loading({
      type: "corners",
      text: "Patientez s'il vous plait"
    });
    this.$http.get("/api/settings/artists/".concat(this.$route.params.slug), {
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("jwt"))
      }
    }).then(function (response) {
      if (response.data == "Artist not found") {
        _this.$router.push("/settings/artists");
      }

      _this.$vs.loading.close();

      _this.artistData = response.data;
      _this.name = _this.artistData.name;
    }).catch(function (error) {
      console.error(error);
    });
  },
  methods: {
    handleSave: function handleSave(e) {
      var _this2 = this;

      e.preventDefault();
      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this2.isSending = true;

          var canvas = _this2.$refs.clipper.clip();

          var ResultAvatar = canvas.toDataURL("image/jpeg", 1);

          _this2.$http.post("/api/settings/artists/".concat(_this2.$route.params.slug, "/edit"), {
            name: _this2.name,
            avatar: ResultAvatar
          }, {
            headers: {
              Authorization: "Bearer ".concat(localStorage.getItem("jwt"))
            }
          }).then(function (response) {
            _this2.isSending = false;

            _this2.$router.push("/artists/".concat(response.data.slug));
          }).catch(function (error) {
            this.isSending = false;
            this.$vs.dialog({
              color: "danger",
              title: "",
              text: "Erreur lors de la modification"
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/ArtistEdit.vue?vue&type=template&id=5061d77b&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/ArtistEdit.vue?vue&type=template&id=5061d77b& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "my-4" },
    [
      _c("vs-input", {
        directives: [
          {
            name: "validate",
            rawName: "v-validate",
            value: "required",
            expression: "'required'"
          }
        ],
        staticClass: "w-full my-4",
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
      ),
      _vm._v(" "),
      _c("div", [
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
                  on: { click: _vm.handleSave }
                },
                [_vm._v("Sauvegarder l'artiste")]
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

/***/ "./resources/js/src/views/pages/Settings/Artists/ArtistEdit.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/ArtistEdit.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArtistEdit_vue_vue_type_template_id_5061d77b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArtistEdit.vue?vue&type=template&id=5061d77b& */ "./resources/js/src/views/pages/Settings/Artists/ArtistEdit.vue?vue&type=template&id=5061d77b&");
/* harmony import */ var _ArtistEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArtistEdit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Settings/Artists/ArtistEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ArtistEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArtistEdit_vue_vue_type_template_id_5061d77b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ArtistEdit_vue_vue_type_template_id_5061d77b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Settings/Artists/ArtistEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/ArtistEdit.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/ArtistEdit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ArtistEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/ArtistEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/ArtistEdit.vue?vue&type=template&id=5061d77b&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/ArtistEdit.vue?vue&type=template&id=5061d77b& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistEdit_vue_vue_type_template_id_5061d77b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ArtistEdit.vue?vue&type=template&id=5061d77b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/ArtistEdit.vue?vue&type=template&id=5061d77b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistEdit_vue_vue_type_template_id_5061d77b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistEdit_vue_vue_type_template_id_5061d77b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);