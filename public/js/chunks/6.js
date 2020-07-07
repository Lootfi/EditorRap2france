(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ag-grid-vue */ "./node_modules/ag-grid-vue/main.js");
/* harmony import */ var ag_grid_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_vuexy_extraComponents_agGridStyleOverride_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sass/vuexy/extraComponents/agGridStyleOverride.scss */ "./resources/sass/vuexy/extraComponents/agGridStyleOverride.scss");
/* harmony import */ var _sass_vuexy_extraComponents_agGridStyleOverride_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_vuexy_extraComponents_agGridStyleOverride_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_settings_artist_management_moduleArtistManagement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/settings/artist-management/moduleArtistManagement.js */ "./resources/js/src/store/settings/artist-management/moduleArtistManagement.js");
/* harmony import */ var _cell_renderer_CellRendererLink_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cell-renderer/CellRendererLink.vue */ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererLink.vue");
/* harmony import */ var _cell_renderer_CellRendererStatus_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cell-renderer/CellRendererStatus.vue */ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue");
/* harmony import */ var _cell_renderer_CellRendererVerified_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cell-renderer/CellRendererVerified.vue */ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererVerified.vue");
/* harmony import */ var _cell_renderer_CellRendererActions_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cell-renderer/CellRendererActions.vue */ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererActions.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // Store Module

 // Cell Renderer





/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AgGridVue: ag_grid_vue__WEBPACK_IMPORTED_MODULE_0__["AgGridVue"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a,
    // Cell Renderer
    CellRendererLink: _cell_renderer_CellRendererLink_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    CellRendererStatus: _cell_renderer_CellRendererStatus_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    CellRendererVerified: _cell_renderer_CellRendererVerified_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    CellRendererActions: _cell_renderer_CellRendererActions_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      statusFilter: {
        label: "All",
        value: "all"
      },
      statusOptions: [{
        label: "All",
        value: "all"
      }, {
        label: "Activé",
        value: "Activé"
      }, {
        label: "Suspendu",
        value: "Suspendu"
      }],
      searchQuery: "",
      // AgGrid
      gridApi: null,
      gridOptions: {},
      defaultColDef: {
        sortable: true,
        resizable: true,
        suppressMenu: true
      },
      columnDefs: [{
        headerName: "Avatar",
        field: "image",
        filter: true,
        width: 100,
        cellRendererFramework: "CellRendererLink"
      }, {
        headerName: "Name",
        field: "name",
        filter: true,
        width: 400
      }, {
        headerName: "Status",
        field: "StatusName",
        filter: true,
        width: 150,
        cellRendererFramework: "CellRendererStatus"
      }],
      // Cell Renderer Components
      components: {
        CellRendererLink: _cell_renderer_CellRendererLink_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        CellRendererStatus: _cell_renderer_CellRendererStatus_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
        CellRendererVerified: _cell_renderer_CellRendererVerified_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
        CellRendererActions: _cell_renderer_CellRendererActions_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
      }
    };
  },
  watch: {
    statusFilter: function statusFilter(obj) {
      this.setColumnFilter("status", obj.value);
    }
  },
  computed: {
    usersData: function usersData() {
      return this.$store.state.artistManagement.artists;
    },
    paginationPageSize: function paginationPageSize() {
      if (this.gridApi) return this.gridApi.paginationGetPageSize();else return 10;
    },
    totalPages: function totalPages() {
      if (this.gridApi) return this.gridApi.paginationGetTotalPages();else return 0;
    },
    currentPage: {
      get: function get() {
        if (this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1;else return 1;
      },
      set: function set(val) {
        this.gridApi.paginationGoToPage(val - 1);
      }
    }
  },
  methods: {
    setColumnFilter: function setColumnFilter(column, val) {
      var filter = this.gridApi.getFilterInstance(column);
      var modelObj = null;

      if (val !== "all") {
        modelObj = {
          type: "equals",
          filter: val
        };
      }

      filter.setModel(modelObj);
      this.gridApi.onFilterChanged();
    },
    resetColFilters: function resetColFilters() {
      // Reset Grid Filter
      this.gridApi.setFilterModel(null);
      this.gridApi.onFilterChanged(); // Reset Filter Options

      this.statusFilter = {
        label: "All",
        value: "all"
      };
      this.$refs.filterCard.removeRefreshAnimation();
    },
    updateSearchQuery: function updateSearchQuery(val) {
      this.gridApi.setQuickFilter(val);
    }
  },
  mounted: function mounted() {
    this.gridApi = this.gridOptions.api;
    /* =================================================================
      NOTE:
      Header is not aligned properly in RTL version of agGrid table.
      However, we given fix to this issue. If you want more robust solution please contact them at gitHub
    ================================================================= */

    if (this.$vs.rtl) {
      var header = this.$refs.agGridTable.$el.querySelector(".ag-header-container");
      header.style.left = "-".concat(String(Number(header.style.transform.slice(11, -3)) + 9), "px");
    }
  },
  created: function created() {
    if (!_store_settings_artist_management_moduleArtistManagement_js__WEBPACK_IMPORTED_MODULE_3__["default"].isRegistered) {
      this.$store.registerModule("artistManagement", _store_settings_artist_management_moduleArtistManagement_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
      _store_settings_artist_management_moduleArtistManagement_js__WEBPACK_IMPORTED_MODULE_3__["default"].isRegistered = true;
    }

    this.$store.dispatch("artistManagement/fetchArtists").catch(function (err) {
      console.error(err);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererActions.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererActions.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CellRendererActions",
  methods: {
    editRecord: function editRecord() {
      this.$router.push("/apps/user/user-edit/".concat(268)).catch(function () {});
      /*
              Below line will be for actual product
              Currently it's commented due to demo purpose - Above url is for demo purpose
               this.$router.push("/apps/user/user-edit/" + this.params.data.id).catch(() => {})
            */
    },
    confirmDeleteRecord: function confirmDeleteRecord() {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm Delete",
        text: "You are about to delete \"".concat(this.params.data.username, "\""),
        accept: this.deleteRecord,
        acceptText: "Delete"
      });
    },
    deleteRecord: function deleteRecord() {
      /* Below two lines are just for demo purpose */
      this.showDeleteSuccess();
      /* UnComment below lines for enabling true flow if deleting user */
      // this.$store.dispatch("userManagement/removeRecord", this.params.data.id)
      //   .then(()   => { this.showDeleteSuccess() })
      //   .catch(err => { console.error(err)       })
    },
    showDeleteSuccess: function showDeleteSuccess() {
      this.$vs.notify({
        color: "success",
        title: "User Deleted",
        text: "The selected user was successfully deleted"
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererLink.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererLink.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CellRendererLink",
  computed: {
    username: function username() {
      return this.params.data.username;
    },
    photoUrl: function photoUrl() {
      return this.params.data.Avatar;
    },
    url: function url() {
      return "/artists/".concat(this.params.data.slug); // Below line will be for actual product
      // Currently it's commented due to demo purpose - Above url is for demo purpose
      // return "/apps/user/user-view/" + this.params.data.id
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CellRendererStatus",
  computed: {
    chipColor: function chipColor() {
      return function (value) {
        if (value === "Activé") return "success";else if (value === "Suspendu") return "danger";else return "primary";
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererVerified.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererVerified.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "CellRendererVerified",
  computed: {
    textColor: function textColor() {
      return this.params.value ? "text-primary" : "text-grey";
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#page-user-list .user-list-filters .vs__actions {\n  position: absolute;\n  top: 50%;\n}[dir] #page-user-list .user-list-filters .vs__actions {\n  transform: translateY(-58%);\n}[dir=ltr] #page-user-list .user-list-filters .vs__actions {\n  right: 0;\n}[dir=rtl] #page-user-list .user-list-filters .vs__actions {\n  left: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ag-grid-cell-chip.vs-chip-success {\n  color: rgba(var(--vs-success), 1) !important;\n  font-weight: 500;\n}[dir] .ag-grid-cell-chip.vs-chip-success {\n  background: rgba(var(--vs-success), 0.15);\n}\n.ag-grid-cell-chip.vs-chip-warning {\n  color: rgba(var(--vs-warning), 1) !important;\n  font-weight: 500;\n}\n[dir] .ag-grid-cell-chip.vs-chip-warning {\n  background: rgba(var(--vs-warning), 0.15);\n}\n.ag-grid-cell-chip.vs-chip-danger {\n  color: rgba(var(--vs-danger), 1) !important;\n  font-weight: 500;\n}\n[dir] .ag-grid-cell-chip.vs-chip-danger {\n  background: rgba(var(--vs-danger), 0.15);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ArtistIndex.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=template&id=04de5c9e&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=template&id=04de5c9e& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "page-user-list" } }, [
    _c(
      "div",
      { staticClass: "vx-card p-6" },
      [
        _c("h1", { staticClass: "pb-4" }, [_vm._v("Liste des artistes")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "flex flex-wrap items-center" },
          [
            _c(
              "div",
              { staticClass: "flex-grow" },
              [
                _c(
                  "vs-dropdown",
                  {
                    staticClass: "cursor-pointer",
                    attrs: { "vs-trigger-click": "" }
                  },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
                      },
                      [
                        _c("span", { staticClass: "mr-2" }, [
                          _vm._v(
                            _vm._s(
                              _vm.currentPage * _vm.paginationPageSize -
                                (_vm.paginationPageSize - 1)
                            ) +
                              "\n              -\n              " +
                              _vm._s(
                                _vm.usersData.length -
                                  _vm.currentPage * _vm.paginationPageSize >
                                  0
                                  ? _vm.currentPage * _vm.paginationPageSize
                                  : _vm.usersData.length
                              ) +
                              "\n              de " +
                              _vm._s(_vm.usersData.length)
                          )
                        ]),
                        _vm._v(" "),
                        _c("feather-icon", {
                          attrs: {
                            icon: "ChevronDownIcon",
                            svgClasses: "h-4 w-4"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown-menu",
                      [
                        _c(
                          "vs-dropdown-item",
                          {
                            on: {
                              click: function($event) {
                                return _vm.gridApi.paginationSetPageSize(10)
                              }
                            }
                          },
                          [_c("span", [_vm._v("10")])]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-item",
                          {
                            on: {
                              click: function($event) {
                                return _vm.gridApi.paginationSetPageSize(20)
                              }
                            }
                          },
                          [_c("span", [_vm._v("20")])]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-item",
                          {
                            on: {
                              click: function($event) {
                                return _vm.gridApi.paginationSetPageSize(25)
                              }
                            }
                          },
                          [_c("span", [_vm._v("25")])]
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-dropdown-item",
                          {
                            on: {
                              click: function($event) {
                                return _vm.gridApi.paginationSetPageSize(30)
                              }
                            }
                          },
                          [_c("span", [_vm._v("30")])]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "p-3 mr-4 rounded-lg cursor-pointer flex items-center text-lg font-medium text-base text-primary border border-solid border-primary",
                staticStyle: { flex: "0 0 auto" },
                on: {
                  click: function($event) {
                    return _vm.$router.push("/settings/create-artist")
                  }
                }
              },
              [
                _c("feather-icon", {
                  attrs: { icon: "PlusIcon", svgClasses: "h-4 w-4" }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "ml-2 text-base text-primary" }, [
                  _vm._v("Ajouter un artiste")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("vs-input", {
              staticClass:
                "sm:mr-4 mr-0 sm:w-auto w-full sm:order-normal order-3 sm:mt-0 mt-4",
              attrs: { placeholder: "Rechercher..." },
              on: { input: _vm.updateSearchQuery },
              model: {
                value: _vm.searchQuery,
                callback: function($$v) {
                  _vm.searchQuery = $$v
                },
                expression: "searchQuery"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("ag-grid-vue", {
          ref: "agGridTable",
          staticClass: "ag-theme-material w-100 my-4 ag-grid-table",
          attrs: {
            components: _vm.components,
            gridOptions: _vm.gridOptions,
            columnDefs: _vm.columnDefs,
            defaultColDef: _vm.defaultColDef,
            rowData: _vm.usersData,
            rowSelection: "multiple",
            colResizeDefault: "shift",
            animateRows: true,
            floatingFilter: true,
            pagination: true,
            paginationPageSize: _vm.paginationPageSize,
            suppressPaginationPanel: true,
            enableRtl: _vm.$vs.rtl
          }
        }),
        _vm._v(" "),
        _c("vs-pagination", {
          attrs: { total: _vm.totalPages, max: 7 },
          model: {
            value: _vm.currentPage,
            callback: function($$v) {
              _vm.currentPage = $$v
            },
            expression: "currentPage"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererActions.vue?vue&type=template&id=1d5a659d&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererActions.vue?vue&type=template&id=1d5a659d& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
    { style: { direction: _vm.$vs.rtl ? "rtl" : "ltr" } },
    [
      _c("feather-icon", {
        attrs: {
          icon: "Edit3Icon",
          svgClasses: "h-5 w-5 mr-4 hover:text-primary cursor-pointer"
        },
        on: { click: _vm.editRecord }
      }),
      _vm._v(" "),
      _c("feather-icon", {
        attrs: {
          icon: "Trash2Icon",
          svgClasses: "h-5 w-5 hover:text-danger cursor-pointer"
        },
        on: { click: _vm.confirmDeleteRecord }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererLink.vue?vue&type=template&id=149bb20a&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererLink.vue?vue&type=template&id=149bb20a& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "flex items-center" },
    [
      _c("vs-avatar", {
        staticClass: "flex-shrink-0 mr-2",
        attrs: { src: _vm.photoUrl, size: "30px" },
        on: {
          click: function($event) {
            return _vm.$router.push(_vm.url)
          }
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=template&id=77f0d802&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=template&id=77f0d802& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    "vs-chip",
    {
      staticClass: "ag-grid-cell-chip",
      attrs: { color: _vm.chipColor(_vm.params.value) }
    },
    [_c("span", [_vm._v(_vm._s(_vm.params.value))])]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererVerified.vue?vue&type=template&id=a773e450&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererVerified.vue?vue&type=template&id=a773e450& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("feather-icon", {
    attrs: {
      icon: "CircleIcon",
      svgClasses: ["fill-current h-4 w-4", _vm.textColor]
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/store/settings/artist-management/moduleArtistManagement.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/store/settings/artist-management/moduleArtistManagement.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleArtistManagementState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleArtistManagementState.js */ "./resources/js/src/store/settings/artist-management/moduleArtistManagementState.js");
/* harmony import */ var _moduleArtistManagementMutations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleArtistManagementMutations.js */ "./resources/js/src/store/settings/artist-management/moduleArtistManagementMutations.js");
/* harmony import */ var _moduleArtistManagementActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleArtistManagementActions.js */ "./resources/js/src/store/settings/artist-management/moduleArtistManagementActions.js");
/* harmony import */ var _moduleArtistManagementGetters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleArtistManagementGetters.js */ "./resources/js/src/store/settings/artist-management/moduleArtistManagementGetters.js");
/*=========================================================================================
  File Name: moduleArtistManagement.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/




/* harmony default export */ __webpack_exports__["default"] = ({
  isRegistered: false,
  namespaced: true,
  state: _moduleArtistManagementState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleArtistManagementMutations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _moduleArtistManagementActions_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getters: _moduleArtistManagementGetters_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/js/src/store/settings/artist-management/moduleArtistManagementActions.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/store/settings/artist-management/moduleArtistManagementActions.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/core-js/promise */ "./node_modules/@babel/runtime/core-js/promise.js");
/* harmony import */ var _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/axios.js */ "./resources/js/src/axios.js");


/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

/* harmony default export */ __webpack_exports__["default"] = ({
  // addItem({ commit }, item) {
  //   return new Promise((resolve, reject) => {
  //     axios.post("/api/data-list/products/", {item: item})
  //       .then((response) => {
  //         commit('ADD_ITEM', Object.assign(item, {id: response.data.id}))
  //         resolve(response)
  //       })
  //       .catch((error) => { reject(error) })
  //   })
  // },
  fetchArtists: function fetchArtists(_ref) {
    var commit = _ref.commit;
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].get('/api/settings/artists', {
        headers: {
          'Authorization': "Bearer ".concat(localStorage.getItem('jwt'))
        }
      }).then(function (response) {
        commit('SET_ARTISTS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchArtist: function fetchArtist(context, artistSlug) {
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/settings/artists/".concat(artistSlug)).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  removeRecord: function removeRecord(_ref2, artistSlug) {
    var commit = _ref2.commit;
    return new _babel_runtime_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].delete("/api/settings/artists/".concat(artistSlug)).then(function (response) {
        commit('REMOVE_RECORD', artistSlug);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  }
});

/***/ }),

/***/ "./resources/js/src/store/settings/artist-management/moduleArtistManagementGetters.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/store/settings/artist-management/moduleArtistManagementGetters.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./resources/js/src/store/settings/artist-management/moduleArtistManagementMutations.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/store/settings/artist-management/moduleArtistManagementMutations.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  SET_ARTISTS: function SET_ARTISTS(state, artists) {
    state.artists = artists;
  },
  REMOVE_RECORD: function REMOVE_RECORD(state, itemId) {
    var ArtistIndex = state.artists.findIndex(function (u) {
      return u.slug === itemId;
    });
    state.artists.splice(ArtistIndex, 1);
  }
});

/***/ }),

/***/ "./resources/js/src/store/settings/artist-management/moduleArtistManagementState.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/store/settings/artist-management/moduleArtistManagementState.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleCalendarState.js
  Description: Calendar Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  artists: []
});

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArtistIndex_vue_vue_type_template_id_04de5c9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ArtistIndex.vue?vue&type=template&id=04de5c9e& */ "./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=template&id=04de5c9e&");
/* harmony import */ var _ArtistIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArtistIndex.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ArtistIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArtistIndex.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ArtistIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArtistIndex_vue_vue_type_template_id_04de5c9e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ArtistIndex_vue_vue_type_template_id_04de5c9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ArtistIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ArtistIndex.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=template&id=04de5c9e&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=template&id=04de5c9e& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistIndex_vue_vue_type_template_id_04de5c9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ArtistIndex.vue?vue&type=template&id=04de5c9e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/ArtistIndex.vue?vue&type=template&id=04de5c9e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistIndex_vue_vue_type_template_id_04de5c9e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ArtistIndex_vue_vue_type_template_id_04de5c9e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererActions.vue":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererActions.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CellRendererActions_vue_vue_type_template_id_1d5a659d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellRendererActions.vue?vue&type=template&id=1d5a659d& */ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererActions.vue?vue&type=template&id=1d5a659d&");
/* harmony import */ var _CellRendererActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellRendererActions.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CellRendererActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CellRendererActions_vue_vue_type_template_id_1d5a659d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CellRendererActions_vue_vue_type_template_id_1d5a659d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererActions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererActions.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererActions.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererActions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererActions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererActions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererActions.vue?vue&type=template&id=1d5a659d&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererActions.vue?vue&type=template&id=1d5a659d& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererActions_vue_vue_type_template_id_1d5a659d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererActions.vue?vue&type=template&id=1d5a659d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererActions.vue?vue&type=template&id=1d5a659d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererActions_vue_vue_type_template_id_1d5a659d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererActions_vue_vue_type_template_id_1d5a659d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererLink.vue":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererLink.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CellRendererLink_vue_vue_type_template_id_149bb20a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellRendererLink.vue?vue&type=template&id=149bb20a& */ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererLink.vue?vue&type=template&id=149bb20a&");
/* harmony import */ var _CellRendererLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellRendererLink.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CellRendererLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CellRendererLink_vue_vue_type_template_id_149bb20a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CellRendererLink_vue_vue_type_template_id_149bb20a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererLink.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererLink.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererLink.vue?vue&type=template&id=149bb20a&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererLink.vue?vue&type=template&id=149bb20a& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererLink_vue_vue_type_template_id_149bb20a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererLink.vue?vue&type=template&id=149bb20a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererLink.vue?vue&type=template&id=149bb20a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererLink_vue_vue_type_template_id_149bb20a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererLink_vue_vue_type_template_id_149bb20a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CellRendererStatus_vue_vue_type_template_id_77f0d802___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellRendererStatus.vue?vue&type=template&id=77f0d802& */ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=template&id=77f0d802&");
/* harmony import */ var _CellRendererStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellRendererStatus.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CellRendererStatus_vue_vue_type_style_index_0_lang_scss_scpoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true& */ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CellRendererStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CellRendererStatus_vue_vue_type_template_id_77f0d802___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CellRendererStatus_vue_vue_type_template_id_77f0d802___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true& ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_style_index_0_lang_scss_scpoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/lib??ref--8-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=style&index=0&lang=scss&scpoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_style_index_0_lang_scss_scpoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_style_index_0_lang_scss_scpoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_style_index_0_lang_scss_scpoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_style_index_0_lang_scss_scpoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_style_index_0_lang_scss_scpoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=template&id=77f0d802&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=template&id=77f0d802& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_template_id_77f0d802___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererStatus.vue?vue&type=template&id=77f0d802& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererStatus.vue?vue&type=template&id=77f0d802&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_template_id_77f0d802___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererStatus_vue_vue_type_template_id_77f0d802___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererVerified.vue":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererVerified.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CellRendererVerified_vue_vue_type_template_id_a773e450___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CellRendererVerified.vue?vue&type=template&id=a773e450& */ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererVerified.vue?vue&type=template&id=a773e450&");
/* harmony import */ var _CellRendererVerified_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CellRendererVerified.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererVerified.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CellRendererVerified_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CellRendererVerified_vue_vue_type_template_id_a773e450___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CellRendererVerified_vue_vue_type_template_id_a773e450___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererVerified.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererVerified.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererVerified.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererVerified_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererVerified.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererVerified.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererVerified_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererVerified.vue?vue&type=template&id=a773e450&":
/*!*****************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererVerified.vue?vue&type=template&id=a773e450& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererVerified_vue_vue_type_template_id_a773e450___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CellRendererVerified.vue?vue&type=template&id=a773e450& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/pages/Settings/Artists/cell-renderer/CellRendererVerified.vue?vue&type=template&id=a773e450&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererVerified_vue_vue_type_template_id_a773e450___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CellRendererVerified_vue_vue_type_template_id_a773e450___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);