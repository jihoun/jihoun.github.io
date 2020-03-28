function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pigs-pigs-module"], {
  /***/
  "./src/app/pigs/detail/pig-detail.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pigs/detail/pig-detail.component.ts ***!
    \*****************************************************/

  /*! exports provided: PigDetailComponent */

  /***/
  function srcAppPigsDetailPigDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PigDetailComponent", function () {
      return PigDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PigDetailComponent = /*#__PURE__*/function () {
      function PigDetailComponent() {
        _classCallCheck(this, PigDetailComponent);
      }

      _createClass(PigDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PigDetailComponent;
    }();

    PigDetailComponent.ɵfac = function PigDetailComponent_Factory(t) {
      return new (t || PigDetailComponent)();
    };

    PigDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PigDetailComponent,
      selectors: [["app-pig-detail"]],
      decls: 2,
      vars: 0,
      template: function PigDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pig-detail works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpZ3MvZGV0YWlsL3BpZy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PigDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pig-detail',
          templateUrl: './pig-detail.component.html',
          styleUrls: ['./pig-detail.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pigs/list/pig-list.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/pigs/list/pig-list.component.ts ***!
    \*************************************************/

  /*! exports provided: PigListComponent */

  /***/
  function srcAppPigsListPigListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PigListComponent", function () {
      return PigListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PigListComponent = /*#__PURE__*/function () {
      function PigListComponent() {
        _classCallCheck(this, PigListComponent);
      }

      _createClass(PigListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PigListComponent;
    }();

    PigListComponent.ɵfac = function PigListComponent_Factory(t) {
      return new (t || PigListComponent)();
    };

    PigListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PigListComponent,
      selectors: [["app-pig-list"]],
      decls: 2,
      vars: 0,
      template: function PigListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pig-list works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpZ3MvbGlzdC9waWctbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PigListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pig-list',
          templateUrl: './pig-list.component.html',
          styleUrls: ['./pig-list.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pigs/pigs.component.ts":
  /*!****************************************!*\
    !*** ./src/app/pigs/pigs.component.ts ***!
    \****************************************/

  /*! exports provided: PigsComponent */

  /***/
  function srcAppPigsPigsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PigsComponent", function () {
      return PigsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PigsComponent = function PigsComponent() {
      _classCallCheck(this, PigsComponent);
    };

    PigsComponent.ɵfac = function PigsComponent_Factory(t) {
      return new (t || PigsComponent)();
    };

    PigsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PigsComponent,
      selectors: [["app-pigs"]],
      decls: 3,
      vars: 0,
      template: function PigsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pigs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpZ3MvcGlncy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PigsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pigs',
          templateUrl: './pigs.component.html',
          styleUrls: ['./pigs.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pigs/pigs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/pigs/pigs.module.ts ***!
    \*************************************/

  /*! exports provided: PigsModule */

  /***/
  function srcAppPigsPigsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PigsModule", function () {
      return PigsModule;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _detail_pig_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detail/pig-detail.component */
    "./src/app/pigs/detail/pig-detail.component.ts");
    /* harmony import */


    var _list_pig_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./list/pig-list.component */
    "./src/app/pigs/list/pig-list.component.ts");
    /* harmony import */


    var _pigs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pigs.component */
    "./src/app/pigs/pigs.component.ts");

    var routes = [{
      path: '',
      component: _pigs_component__WEBPACK_IMPORTED_MODULE_5__["PigsComponent"],
      children: [{
        path: 'list',
        component: _list_pig_list_component__WEBPACK_IMPORTED_MODULE_4__["PigListComponent"]
      }, {
        path: 'detail/:id',
        component: _detail_pig_detail_component__WEBPACK_IMPORTED_MODULE_3__["PigDetailComponent"]
      }, {
        path: '',
        pathMatch: 'full',
        redirectTo: '/list'
      }]
    }];

    var PigsModule = function PigsModule() {
      _classCallCheck(this, PigsModule);
    };

    PigsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: PigsModule
    });
    PigsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function PigsModule_Factory(t) {
        return new (t || PigsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PigsModule, {
        declarations: [_detail_pig_detail_component__WEBPACK_IMPORTED_MODULE_3__["PigDetailComponent"], _list_pig_list_component__WEBPACK_IMPORTED_MODULE_4__["PigListComponent"], _pigs_component__WEBPACK_IMPORTED_MODULE_5__["PigsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PigsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_detail_pig_detail_component__WEBPACK_IMPORTED_MODULE_3__["PigDetailComponent"], _list_pig_list_component__WEBPACK_IMPORTED_MODULE_4__["PigListComponent"], _pigs_component__WEBPACK_IMPORTED_MODULE_5__["PigsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pigs-pigs-module-es5.js.map