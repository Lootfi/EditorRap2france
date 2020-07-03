(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Articles/ArticleEdit.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Articles/ArticleEdit.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/array/from */ "./node_modules/@babel/runtime/core-js/array/from.js");
/* harmony import */ var _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/core-js/is-iterable */ "./node_modules/@babel/runtime/core-js/is-iterable.js");
/* harmony import */ var _babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @editorjs/editorjs */ "./node_modules/@editorjs/editorjs/dist/editor.js");
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @editorjs/header */ "./node_modules/@editorjs/header/dist/bundle.js");
/* harmony import */ var _editorjs_header__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editorjs_header__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editorjs_embed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @editorjs/embed */ "./node_modules/@editorjs/embed/dist/bundle.js");
/* harmony import */ var _editorjs_embed__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editorjs_embed__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @editorjs/image */ "./node_modules/@editorjs/image/dist/bundle.js");
/* harmony import */ var _editorjs_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_editorjs_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editorjs_marker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @editorjs/marker */ "./node_modules/@editorjs/marker/dist/bundle.js");
/* harmony import */ var _editorjs_marker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_editorjs_marker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _editorjs_quote__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @editorjs/quote */ "./node_modules/@editorjs/quote/dist/bundle.js");
/* harmony import */ var _editorjs_quote__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_editorjs_quote__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _editorjs_underline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @editorjs/underline */ "./node_modules/@editorjs/underline/dist/bundle.js");
/* harmony import */ var _editorjs_underline__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_editorjs_underline__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @editorjs/list */ "./node_modules/@editorjs/list/dist/bundle.js");
/* harmony import */ var _editorjs_list__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_editorjs_list__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cropperjs */ "./node_modules/cropperjs/dist/cropper.js");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(cropperjs__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_14__);



function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (_babel_runtime_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _babel_runtime_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    "v-select": vue_select__WEBPACK_IMPORTED_MODULE_12___default.a,
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_13___default.a
  },
  data: function data() {
    return {
      editor: null,
      title: "",
      avatar: "",
      text: "",
      articleData: null,
      article_not_found: false,
      article_raw: false,
      category: null,
      hashtags: null,
      artists: null,
      isDeleting: false,
      isSending: false,
      objectUrl: null,
      previewCropped: null,
      cropper: null,
      Scheduled: false,
      Featured: false,
      selectedFile: null,
      selected: null,
      options: [],
      formattedJsonContent: null,
      hashtagOptions: [],
      artistOptions: [],
      publishTime: null,
      configdateTimePickerPublish: {
        enableTime: true,
        dateFormat: 'Y-m-d H:i:s',
        minDate: "today",
        minTime: Date.now(),
        enableSeconds: true
      },
      featuredRange: null,
      configdateTimePickerfeatured: {
        mode: "range",
        enableTime: true,
        dateFormat: 'Y-m-d H:i:s',
        minDate: "today",
        minTime: Date.now(),
        enableSeconds: true
      },
      debouncedUpdatePreview: lodash_debounce__WEBPACK_IMPORTED_MODULE_11___default()(this.updatePreview, 257)
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
    this.$http.get("/api/settings/categories", {
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("jwt"))
      }
    }).then(function (response) {
      response.data.map(function (category) {
        _this.options = _toConsumableArray(_this.options).concat([{
          label: category.nom,
          value: category.id
        }]);
      });
    }).catch(function (error) {
      console.error(error);
    });
    this.$http.get("/api/settings/hashtags", {
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("jwt"))
      }
    }).then(function (response) {
      response.data.map(function (hashtag) {
        _this.hashtagOptions = _toConsumableArray(_this.hashtagOptions).concat([{
          label: hashtag.nom,
          value: hashtag.id
        }]);
      });
    }).catch(function (error) {
      console.error(error);
    });
    this.$http.get("/api/settings/artists", {
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("jwt"))
      }
    }).then(function (response) {
      response.data.map(function (artist) {
        _this.artistOptions = _toConsumableArray(_this.artistOptions).concat([{
          label: artist.name,
          value: artist.id
        }]);
      });
    }).catch(function (error) {
      console.error(error);
    });
    this.$http.get("/api/articles/".concat(this.$route.params.tag), {
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("jwt"))
      }
    }).then(function (response) {
      if (response.data == "Article not found" || response.data.Creator.email != _this.activeUserInfo.user.email) {
        _this.$router.push("/articles");
      }

      _this.$vs.loading.close();

      _this.articleData = response.data;

      if (response.data.ContenuFormat.type == "raw") {
        _this.article_raw = true;

        _this.$router.push("/articles/".concat(_this.$route.params.tag));
      } else {
        _this.title = _this.articleData.titre;

        if (_this.articleData.status == 1) {
          _this.publishTime = _this.articleData.dateactu;
          _this.Scheduled = true;
        }

        if (_this.articleData.IsFeatured) {
          _this.featuredRange = "".concat(_this.articleData.IsFeatured['date_start'], " to ").concat(_this.articleData.IsFeatured['date_end']);
          console.log(_this.Featured);
          _this.Featured = true;
        }

        _this.options.map(function (option) {
          if (option.value === _this.articleData.Category.id) {
            _this.category = {
              label: option.label,
              value: option.value
            };
          }
        });

        _this.articleData.Hashtags.map(function (hashtag) {
          if (!_this.hashtags) {
            _this.hashtags = [{
              label: hashtag.nom,
              value: hashtag.id
            }];
          } else {
            _this.hashtags = _toConsumableArray(_this.hashtags).concat([{
              label: hashtag.nom,
              value: hashtag.id
            }]);
          }
        });

        _this.articleData.Artists.map(function (artist) {
          if (!_this.artists) {
            _this.artists = [{
              label: artist.name,
              value: artist.id
            }];
          } else {
            _this.artists = _toConsumableArray(_this.artists).concat([{
              label: artist.name,
              value: artist.id
            }]);
          }
        });

        _this.editor = new _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_2___default.a({
          data: _this.articleData.ContenuFormat.contenu,
          tools: {
            Marker: {
              class: _editorjs_marker__WEBPACK_IMPORTED_MODULE_6___default.a,
              shortcut: "CMD+SHIFT+M"
            },
            list: {
              class: _editorjs_list__WEBPACK_IMPORTED_MODULE_9___default.a,
              inlineToolbar: true
            },
            underline: _editorjs_underline__WEBPACK_IMPORTED_MODULE_8___default.a,
            header: {
              class: _editorjs_header__WEBPACK_IMPORTED_MODULE_3___default.a,
              shortcut: "CMD+SHIFT+H",
              inlineToolbar: ["link"]
            },
            embed: {
              class: _editorjs_embed__WEBPACK_IMPORTED_MODULE_4___default.a,
              inlineToolbar: false
            },
            quote: {
              class: _editorjs_quote__WEBPACK_IMPORTED_MODULE_7___default.a,
              inlineToolbar: true
            },
            image: {
              class: _editorjs_image__WEBPACK_IMPORTED_MODULE_5___default.a,
              config: {
                endpoints: {
                  byFile: "/api/articles/uploadImageByFile",
                  // Your backend file uploader endpoint
                  byUrl: "" // Your endpoint that provides uploading by Url

                },
                field: "avatar",
                additionalRequestHeaders: {
                  Authorization: "Bearer ".concat(localStorage.getItem("jwt"))
                }
              }
            }
          }
        });
      }
    }).catch(function (error) {
      console.error(error);
    });
  },
  methods: {
    resetCropper: function resetCropper() {
      this.cropper.reset();
    },
    rotateLeft: function rotateLeft() {
      console.log(this.cropper);
      this.cropper.rotate(-90);
    },
    rotateRight: function rotateRight() {
      this.cropper.rotate(90);
    },
    setupCropper: function setupCropper(selectedFile) {
      if (this.cropper) {
        this.cropper.destroy();
      }

      if (this.objectUrl) {
        window.URL.revokeObjectURL(this.objectUrl);
      }

      if (!selectedFile) {
        this.cropper = null;
        this.objectUrl = null;
        this.previewCropped = null;
        return;
      }

      this.objectUrl = window.URL.createObjectURL(selectedFile);
      this.$nextTick(this.setupCropperInstance);
    },
    setupCropperInstance: function setupCropperInstance() {
      this.cropper = new cropperjs__WEBPACK_IMPORTED_MODULE_10___default.a(this.$refs.source, {
        aspectRatio: 1,
        crop: this.debouncedUpdatePreview
      });
    },
    updatePreview: function updatePreview(event) {
      var canvas = this.cropper.getCroppedCanvas();
      this.previewCropped = canvas.toDataURL("image/png");
      this.avatar = this.previewCropped;
    },
    JsonFormatter: function JsonFormatter(Data) {
      var _this2 = this;

      var content = Data;
      var rawHtml = "";
      content.blocks.map(function (block) {
        if (block.type == "paragraph") {
          rawHtml = "".concat(rawHtml, "<div class=\"my-4\"><p>").concat(block.data.text, "</p></div>");
          _this2.text = "".concat(_this2.text, " ").concat(block.data.text);
        }

        if (block.type == "list") {
          if (block.data.style == "ordered") {
            var listItems = "";
            block.data.items.map(function (item) {
              listItems = "".concat(listItems, "<li>").concat(item, "</li>");
            });
            rawHtml = "".concat(rawHtml, "<div class=\"m-4\"><ol style=\"list-style-type:decimal;\" >").concat(listItems, "</ol></div>");
            console.log(rawHtml);
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
            var embedInstagram = "<iframe src=\"".concat(block.data.embed, "\" width=\"").concat(block.data.width, "\" height=\"").concat(block.data.height, "\" frameborder=\"0\"></iframe><p class=\"text-center mt-2 font-bold\">").concat(block.data.caption, "</p>");
            rawHtml = "".concat(rawHtml, "<div class=\"my-4 text-center\">").concat(embedInstagram, "</div>");
          }

          if (block.data.service == "youtube") {
            var embedYoutube = "<iframe src=\"".concat(block.data.embed, "\" width=\"").concat(block.data.width, "\" height=\"").concat(block.data.height, "\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe><p class=\"text-center font-bold\">").concat(block.data.caption, "</p>");
            rawHtml = "".concat(rawHtml, "<div class=\"my-4 mx-auto text-center\">").concat(embedYoutube, "</div>");
          }

          if (block.data.service == "twitter") {
            var embedTwitter = "<iframe border=0 frameborder=0 width=\"".concat(block.data.width, "\" height=\"").concat(block.data.height, "\"\n                    src=").concat(block.data.embed, "></iframe><p class=\"text-center mt-2 font-bold\">").concat(block.data.caption, "</p>");
            rawHtml = "".concat(rawHtml, "<div class=\"my-4 mx-auto text-center\">").concat(embedTwitter, "</div>");
          }
        }
      });
      return rawHtml;
    },
    handleSave: function handleSave(e) {
      var _this3 = this;

      e.preventDefault();
      this.$validator.validateAll().then(function (result) {
        if (result) {
          _this3.isSending = true;

          _this3.editor.save().then(function (outputData) {
            _this3.$http.post("/api/articles/".concat(_this3.$route.params.tag, "/edit"), {
              data: outputData,
              title: _this3.title,
              avatar: _this3.avatar,
              category: _this3.category.value,
              hashtags: _this3.hashtags,
              formattedJsonContent: _this3.JsonFormatter(outputData),
              artists: _this3.artists,
              text: _this3.text,
              dateactu: _this3.publishTime,
              featured: _this3.featuredRange
            }, {
              headers: {
                Authorization: "Bearer ".concat(localStorage.getItem("jwt"))
              }
            }).then(function (response) {
              _this3.isSending = false;

              _this3.$router.push("/articles/".concat(_this3.$route.params.tag));
            }).catch(function (error) {
              this.isSending = false;
              this.$vs.dialog({
                color: "danger",
                title: "",
                text: "Erreur lors de la modification"
              });
            });
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Articles/ArticleEdit.vue?vue&type=template&id=7daa52c3&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Articles/ArticleEdit.vue?vue&type=template&id=7daa52c3& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
        attrs: { label: "Titre", name: "title" },
        model: {
          value: _vm.title,
          callback: function($$v) {
            _vm.title = $$v
          },
          expression: "title"
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
              value: _vm.errors.has("title"),
              expression: "errors.has('title')"
            }
          ],
          staticClass: "text-danger text-sm"
        },
        [_vm._v(_vm._s(_vm.errors.first("title")))]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "bg-white py-4", attrs: { id: "editorjs" } }),
      _vm._v(" "),
      _c("div", [
        _c(
          "div",
          { staticStyle: { "max-width": "100%" } },
          [
            _c(
              "v-card-text",
              [
                _c("v-file-input", {
                  staticClass: "my-4",
                  attrs: {
                    accept: "image/png, image/jpeg",
                    placeholder: "Modifier l'image principale de l'article ",
                    "show-size": 1024
                  },
                  on: { change: _vm.setupCropper },
                  model: {
                    value: _vm.selectedFile,
                    callback: function($$v) {
                      _vm.selectedFile = $$v
                    },
                    expression: "selectedFile"
                  }
                }),
                _vm._v(" "),
                _vm.objectUrl
                  ? _c(
                      "div",
                      { staticClass: "flex flex-wrap justify-around" },
                      [
                        _c("div", { staticClass: " text-center" }, [
                          _c("div", { staticClass: "inline-block" }, [
                            _c("img", {
                              ref: "source",
                              staticClass: "block max-w-full",
                              staticStyle: { "max-height": "299px" },
                              attrs: { src: _vm.objectUrl }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "d-flex justify-center" },
                            [
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "icon", small: "small" },
                                  on: { click: _vm.resetCropper }
                                },
                                [
                                  _c("v-icon", { attrs: { small: "small" } }, [
                                    _vm._v("mdi-aspect-ratio")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "mx-2" }),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "icon", small: "small" },
                                  on: { click: _vm.rotateLeft }
                                },
                                [
                                  _c("v-icon", { attrs: { small: "small" } }, [
                                    _vm._v("mdi-rotate-left")
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  attrs: { icon: "icon", small: "small" },
                                  on: { click: _vm.rotateRight }
                                },
                                [
                                  _c("v-icon", { attrs: { small: "small" } }, [
                                    _vm._v("mdi-rotate-right")
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: " text-center" }, [
                          _c("div", { staticClass: "inline-block " }, [
                            _c("img", {
                              staticClass: "block max-w-full",
                              staticStyle: { "max-height": "299px" },
                              attrs: { src: _vm.previewCropped }
                            })
                          ])
                        ])
                      ]
                    )
                  : _vm._e()
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-4" },
        [
          _c("label", { staticClass: "vs-input--label" }, [
            _vm._v("Categorie")
          ]),
          _vm._v(" "),
          _c("v-select", {
            attrs: { options: _vm.options },
            model: {
              value: _vm.category,
              callback: function($$v) {
                _vm.category = $$v
              },
              expression: "category"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-4" },
        [
          _c("label", { staticClass: "vs-input--label" }, [_vm._v("Hashtags")]),
          _vm._v(" "),
          _c("v-select", {
            attrs: {
              multiple: "",
              taggable: "",
              "push-tags": "",
              dir: _vm.$vs.rtl ? "rtl" : "ltr",
              options: _vm.hashtagOptions
            },
            model: {
              value: _vm.hashtags,
              callback: function($$v) {
                _vm.hashtags = $$v
              },
              expression: "hashtags"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-4" },
        [
          _c("label", { staticClass: "vs-input--label" }, [_vm._v("Artists")]),
          _vm._v(" "),
          _c("v-select", {
            attrs: {
              multiple: "",
              dir: _vm.$vs.rtl ? "rtl" : "ltr",
              options: _vm.artistOptions
            },
            model: {
              value: _vm.artists,
              callback: function($$v) {
                _vm.artists = $$v
              },
              expression: "artists"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-collapse",
        [
          _c("vs-collapse-item", [
            _c("div", { attrs: { slot: "header" }, slot: "header" }, [
              _vm._v("\n    Réglages avancés \n  ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center " }, [
              _c(
                "div",
                { staticClass: "col-md-4" },
                [
                  _c("label", { staticClass: "vs-input--label" }, [
                    _vm._v("Programmer La publication")
                  ]),
                  _vm._v(" "),
                  _c("vs-switch", {
                    model: {
                      value: _vm.Scheduled,
                      callback: function($$v) {
                        _vm.Scheduled = $$v
                      },
                      expression: "Scheduled"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "ml-5 col-md-6" },
                [
                  _c("label", { staticClass: "vs-input--label" }, [
                    _vm._v("Date de publication")
                  ]),
                  _vm._v(" "),
                  _c("flat-pickr", {
                    staticClass: "block w-full",
                    attrs: {
                      disabled: !_vm.Scheduled,
                      config: _vm.configdateTimePickerPublish,
                      placeholder: "Date de publication"
                    },
                    model: {
                      value: _vm.publishTime,
                      callback: function($$v) {
                        _vm.publishTime = $$v
                      },
                      expression: "publishTime"
                    }
                  })
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "flex items-center " }, [
              _c(
                "div",
                { staticClass: "col-md-4" },
                [
                  _c("label", { staticClass: "vs-input--label" }, [
                    _vm._v("Publication à la une ")
                  ]),
                  _vm._v(" "),
                  _c("vs-switch", {
                    model: {
                      value: _vm.Featured,
                      callback: function($$v) {
                        _vm.Featured = $$v
                      },
                      expression: "Featured"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "ml-5 col-md-6" },
                [
                  _c("label", { staticClass: "vs-input--label" }, [
                    _vm._v("Date de la promotion")
                  ]),
                  _vm._v(" "),
                  _c("flat-pickr", {
                    staticClass: "block w-full",
                    attrs: {
                      disabled: !_vm.Featured,
                      config: _vm.configdateTimePickerfeatured,
                      placeholder: "Date de promotion"
                    },
                    model: {
                      value: _vm.featuredRange,
                      callback: function($$v) {
                        _vm.featuredRange = $$v
                      },
                      expression: "featuredRange"
                    }
                  })
                ],
                1
              )
            ])
          ])
        ],
        1
      ),
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
                  attrs: { disable: _vm.isSending },
                  on: { click: _vm.handleSave }
                },
                [_vm._v("Save Article")]
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

/***/ "./resources/js/src/views/pages/Articles/ArticleEdit.vue":
/*!***************************************************************!*\
  !*** ./resources/js/src/views/pages/Articles/ArticleEdit.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleEdit_vue_vue_type_template_id_7daa52c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArticleEdit.vue?vue&type=template&id=7daa52c3& */ "./resources/js/src/views/pages/Articles/ArticleEdit.vue?vue&type=template&id=7daa52c3&");
/* harmony import */ var _ArticleEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArticleEdit.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Articles/ArticleEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ArticleEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArticleEdit_vue_vue_type_template_id_7daa52c3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ArticleEdit_vue_vue_type_template_id_7daa52c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Articles/ArticleEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Articles/ArticleEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Articles/ArticleEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ArticleEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Articles/ArticleEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Articles/ArticleEdit.vue?vue&type=template&id=7daa52c3&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Articles/ArticleEdit.vue?vue&type=template&id=7daa52c3& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleEdit_vue_vue_type_template_id_7daa52c3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ArticleEdit.vue?vue&type=template&id=7daa52c3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Articles/ArticleEdit.vue?vue&type=template&id=7daa52c3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleEdit_vue_vue_type_template_id_7daa52c3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleEdit_vue_vue_type_template_id_7daa52c3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);