webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/about/about.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
        styles: [__webpack_require__("../../../../../src/app/about/about.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AdminComponent);

//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partners_partners_component__ = __webpack_require__("../../../../../src/app/partners/partners.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__installation_installation_component__ = __webpack_require__("../../../../../src/app/installation/installation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__calculator_calculator_component__ = __webpack_require__("../../../../../src/app/calculator/calculator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_10_app_admin_admin_component__["a" /* AdminComponent */]
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_5__products_products_component__["a" /* ProductsComponent */]
    },
    {
        path: 'portfolio',
        component: __WEBPACK_IMPORTED_MODULE_4__portfolio_portfolio_component__["a" /* PortfolioComponent */]
    },
    {
        path: 'contacts',
        component: __WEBPACK_IMPORTED_MODULE_7__contacts_contacts_component__["a" /* ContactsComponent */]
    },
    {
        path: 'partners',
        component: __WEBPACK_IMPORTED_MODULE_3__partners_partners_component__["a" /* PartnersComponent */]
    },
    {
        path: 'installation',
        component: __WEBPACK_IMPORTED_MODULE_8__installation_installation_component__["a" /* InstallationComponent */]
    },
    {
        path: 'calculator',
        component: __WEBPACK_IMPORTED_MODULE_9__calculator_calculator_component__["a" /* CalculatorComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_6__about_about_component__["a" /* AboutComponent */]
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<div style=\"margin-left: 350px; position: relative; min-height: 100vh\">\n    <router-outlet></router-outlet>\n    <div style=\"height: 150px\"></div>\n    <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partners_partners_component__ = __webpack_require__("../../../../../src/app/partners/partners.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contacts_contacts_component__ = __webpack_require__("../../../../../src/app/contacts/contacts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__installation_installation_component__ = __webpack_require__("../../../../../src/app/installation/installation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__calculator_calculator_component__ = __webpack_require__("../../../../../src/app/calculator/calculator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/shared/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__micro_http_service__ = __webpack_require__("../../../../../src/app/micro-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_products_products_component_service__ = __webpack_require__("../../../../../src/app/products/products.component.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__generics_icons_icons_component__ = __webpack_require__("../../../../../src/app/generics/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__generics_counter_directive__ = __webpack_require__("../../../../../src/app/generics/counter.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__home_recent_projects_recent_projects_component__ = __webpack_require__("../../../../../src/app/home/recent-projects/recent-projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_home_products_home_products_component__ = __webpack_require__("../../../../../src/app/home/home-products/home-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_home_clients_home_clients_component__ = __webpack_require__("../../../../../src/app/home/home-clients/home-clients.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__partners_partners_component__["a" /* PartnersComponent */],
            __WEBPACK_IMPORTED_MODULE_6__portfolio_portfolio_component__["a" /* PortfolioComponent */],
            __WEBPACK_IMPORTED_MODULE_7__products_products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_9__contacts_contacts_component__["a" /* ContactsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__installation_installation_component__["a" /* InstallationComponent */],
            __WEBPACK_IMPORTED_MODULE_11__calculator_calculator_component__["a" /* CalculatorComponent */],
            __WEBPACK_IMPORTED_MODULE_12__shared_navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_13__admin_admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_17__shared_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_18__generics_icons_icons_component__["a" /* IconsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__generics_counter_directive__["a" /* CounterDirective */],
            __WEBPACK_IMPORTED_MODULE_20__home_recent_projects_recent_projects_component__["a" /* RecentProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_21__home_home_products_home_products_component__["a" /* HomeProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_22__home_home_clients_home_clients_component__["a" /* HomeClientsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_16__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__micro_http_service__["a" /* MicroHttpService */],
            __WEBPACK_IMPORTED_MODULE_15_app_products_products_component_service__["a" /* ProductsComponentService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/calculator/calculator.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/calculator/calculator.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/calculator/calculator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculatorComponent = (function () {
    function CalculatorComponent() {
    }
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    return CalculatorComponent;
}());
CalculatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-calculator',
        template: __webpack_require__("../../../../../src/app/calculator/calculator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/calculator/calculator.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CalculatorComponent);

//# sourceMappingURL=calculator.component.js.map

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contacts/contacts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactsComponent = (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-contacts',
        template: __webpack_require__("../../../../../src/app/contacts/contacts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contacts/contacts.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContactsComponent);

//# sourceMappingURL=contacts.component.js.map

/***/ }),

/***/ "../../../../../src/app/generics/counter.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CounterDirective = (function () {
    function CounterDirective(el) {
        this.el = el;
        this.counter = 0;
    }
    CounterDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.countDown = setInterval(function () {
            _this.el.nativeElement.innerText = _this.counter;
            _this.counter = _this.counter + 1;
            if (_this.counter === _this.maxNumber) {
                _this.el.nativeElement.innerText = _this.counter + "+";
                clearInterval(_this.countDown);
            }
        }, this.time * 1000 / this.maxNumber);
    };
    return CounterDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('bbdCounter'),
    __metadata("design:type", Object)
], CounterDirective.prototype, "bbdCounter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('maxNumber'),
    __metadata("design:type", Number)
], CounterDirective.prototype, "maxNumber", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])('time'),
    __metadata("design:type", Number)
], CounterDirective.prototype, "time", void 0);
CounterDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[bbdCounter]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object])
], CounterDirective);

var _a;
//# sourceMappingURL=counter.directive.js.map

/***/ }),

/***/ "../../../../../src/app/generics/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "<svg\n    class=\"icons\"\n    version=\"1.1\"\n    xmlns=\"http://www.w3.org/2000/svg\" \n    xmlns:xlink=\"http://www.w3.org/1999/xlink\" \n    x=\"0px\" \n    y=\"0px\"\n>\n    <symbol id=\"phone-icon\" viewBox=\"0 0 68.6 32.5\" style=\"fill: currentColor\">\n        <g>\n            <path d=\"M59.1,32.5H20.8c-1,0-1.9-0.4-2.5-1.1c-0.5-0.7-0.8-1.7-0.5-2.6l5.2-25.3C23.3,1.6,25.2,0,27.1,0h38.3\n        \t\tc1,0,1.9,0.4,2.5,1.1c0.6,0.7,0.8,1.6,0.6,2.6L63.4,29C62.9,30.9,61,32.5,59.1,32.5L59.1,32.5z M27.1,1.5c-1.3,0-2.6,1-2.8,2.3\n        \t\tL19.1,29c-0.1,0.5-0.1,1,0.3,1.4c0.3,0.4,0.7,0.6,1.3,0.6h38.3c1.3,0,2.5-1.1,2.8-2.3l0,0l5.2-25.3c0.1-0.5,0-1.1-0.3-1.4\n        \t\tc-0.3-0.4-0.8-0.5-1.3-0.5H27.1z\" />\n            <path d=\"M42.7,20c-1.1,0-2.2-0.4-2.9-1.3L25.1,3.4c-0.3-0.3-0.3-0.8,0-1c0.3-0.3,0.8-0.3,1.1,0l14.5,15.4\n        \t\tc0.9,0.9,2.5,1.1,3.5,0.3L65.6,2.3c0.3-0.2,0.8-0.2,1,0.1c0.2,0.4,0.2,0.8-0.2,1.1L45.1,19.2C44.4,19.7,43.5,20,42.7,20L42.7,20z\"\n            />\n            <path d=\"M17.8,5.5H8.1c-0.4,0-0.7-0.4-0.7-0.7C7.4,4.4,7.7,4,8.1,4h9.7c0.4,0,0.7,0.4,0.7,0.8\n        \t\tC18.5,5.2,18.2,5.5,17.8,5.5L17.8,5.5z\" />\n            <path d=\"M15.8,15.4H0.7C0.4,15.4,0,15,0,14.6c0-0.4,0.4-0.7,0.7-0.7h15.1c0.4,0,0.7,0.4,0.7,0.7\n        \t\tC16.6,15,16.3,15.4,15.8,15.4L15.8,15.4z\" />\n            <path d=\"M13.4,24.2H6c-0.4,0-0.7-0.4-0.7-0.7c0-0.4,0.4-0.8,0.7-0.8h7.4c0.4,0,0.7,0.4,0.7,0.8\n        \t\tC14.1,23.8,13.8,24.2,13.4,24.2L13.4,24.2z\" />\n        </g>\n    </symbol>\n</svg>"

/***/ }),

/***/ "../../../../../src/app/generics/icons/icons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".generic-button {\n  font-family: 'Catamaran', sans-serif; }\n\n.generic-button {\n  border: none; }\n\n.generic-button {\n  border-radius: 5px; }\n\n.generic-button {\n  padding-right: 20px; }\n\n.generic-button {\n  padding-left: 20px; }\n\n.generic-button {\n  outline: none; }\n\n.generic-button {\n  cursor: pointer; }\n\n.generic-button--yellow {\n  color: #292929; }\n\n.generic-button--yellow {\n  background-color: #FFC818; }\n\n.generic-button--yellow:hover {\n  background-color: #e4ae00; }\n\n.icons {\n  display: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/generics/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconsComponent = (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    return IconsComponent;
}());
IconsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-icons',
        template: __webpack_require__("../../../../../src/app/generics/icons/icons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/generics/icons/icons.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], IconsComponent);

//# sourceMappingURL=icons.component.js.map

/***/ }),

/***/ "../../../../../src/app/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENVIRONMENT; });
/* USE THIS CONFIG FOR TEST MODE AND MOCK DATA */
var ENVIRONMENT = 'test-mock-data';
/* USE THIS CONFIG FOR TEST MODE AND REAL DATA */
// export const ENVIRONMENT: string = 'test-real-data';
/* USE THIS CONFIG FOR PROD MODE */
// export const ENVIRONMENT: string = 'prod'; 
//# sourceMappingURL=globals.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-clients/home-clients.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"home-clients\">\n    <img routerLink=\"/partners\" src=\"http://livedemo00.template-help.com/wt_58940/images/home-8-170x75.png\" class=\"home-clients__logo\">\n    <img routerLink=\"/partners\" src=\"http://static.livedemo00.template-help.com/wt_58940/images/home-7-170x75.png\" class=\"home-clients__logo\">\n    <img routerLink=\"/partners\" src=\"http://livedemo00.template-help.com/wt_58940/images/home-9-170x75.png\" class=\"home-clients__logo\">\n    <img routerLink=\"/partners\" src=\"http://livedemo00.template-help.com/wt_58940/images/home-10-170x75.png\" class=\"home-clients__logo\">\n    <img routerLink=\"/partners\" src=\"http://livedemo00.template-help.com/wt_58940/images/home-11-170x75.png\" class=\"home-clients__logo\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home-clients/home-clients.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".generic-button {\n  font-family: 'Catamaran', sans-serif; }\n\n.generic-button {\n  border: none; }\n\n.generic-button {\n  border-radius: 5px; }\n\n.generic-button {\n  padding-right: 20px; }\n\n.generic-button {\n  padding-left: 20px; }\n\n.generic-button, .home-clients__logo {\n  outline: none; }\n\n.generic-button, .home-clients__logo {\n  cursor: pointer; }\n\n.generic-button--yellow {\n  color: #292929; }\n\n.generic-button--yellow {\n  background-color: #FFC818; }\n\n.generic-button--yellow:hover {\n  background-color: #e4ae00; }\n\n.home-clients {\n  height: 200px; }\n\n.home-clients {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.home-clients {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.home-clients {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -ms-grid-row-align: center;\n  align-items: center; }\n\n.home-clients__logo {\n  transition: opacity 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;\n  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, -webkit-transform 0.3s ease-in-out; }\n\n.home-clients__logo:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1); }\n  .home-clients__logo:hover {\n    opacity: 0.7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home-clients/home-clients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeClientsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeClientsComponent = (function () {
    function HomeClientsComponent() {
    }
    HomeClientsComponent.prototype.ngOnInit = function () {
    };
    return HomeClientsComponent;
}());
HomeClientsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-home-clients',
        template: __webpack_require__("../../../../../src/app/home/home-clients/home-clients.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home-clients/home-clients.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeClientsComponent);

//# sourceMappingURL=home-clients.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home-products/home-products.component.html":
/***/ (function(module, exports) {

module.exports = "<div \n    class=\"home-products\"\n    (mouseover)=\"stopAnimation()\" \n    (mouseleave)=\"startAnimation()\"\n>\n    <div class=\"home-products__header\">\n        OUR PRODUCTS\n    </div>\n    <hr class=\"home-products__hr\">\n    <div \n        *ngIf=\"currentProduct === 'sandwichPanel'\"\n        class=\"home-products__product-info-container\"\n    >\n        <div class=\"home-products__product-information\">\n            <h1 class=\"home-products__product-name\">SANDWICH-PANELS</h1>\n            <p class=\"home-products__product-description\">\n                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi perspiciatis, similique veniam sint non dolores at iste animi, iure architecto. Nemo, in. Temporibus, inventore nemo. Ipsam deleniti harum placeat.\n            </p>\n            <div class=\"home-products__buttons\">\n                <button \n                    class=\"home-products__button home-products__button--primary\"\n                    routerLink=\"/calculator\"\n                >\n                    CALCULATE AND ORDER NOW\n                </button>\n                <button \n                    class=\"home-products__button home-products__button--secondary\"\n                    routerLink=\"/products\"\n                >\n                    More info\n                </button>\n            </div>\n        </div>\n        <div>\n            <img\n                class=\"home-products__product-image home-products__product-image--sandwich-panel\"\n                src=\"/assets/sandwich-panel.png\"\n            >\n        </div>\n    </div>\n    <div \n        *ngIf=\"currentProduct === 'thermalIsolation'\"\n        class=\"home-products__product-info-container\"\n    >\n        <div class=\"home-products__product-information\">\n            <h1 class=\"home-products__product-name\">THERMAL ISOLATION</h1>\n            <p class=\"home-products__product-description\">\n                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi perspiciatis, similique veniam sint non dolores at iste animi, iure architecto. Nemo, in. Temporibus, inventore nemo. Ipsam deleniti harum placeat.\n            </p>\n            <div class=\"home-products__buttons\">\n                <button \n                    class=\"home-products__button home-products__button--primary\"\n                    routerLink=\"/calculator\"\n                >\n                    CALCULATE AND ORDER NOW\n                </button>\n                <button \n                    class=\"home-products__button home-products__button--secondary\"\n                    routerLink=\"/products\"\n                >\n                    More info\n                </button>\n            </div>\n        </div>\n        <div>\n            <img\n                class=\"home-products__product-image home-products__product-image--thermo-isolation\"\n                src=\"https://images.ua.prom.st/655705941_w0_h0_penoplast.png\"\n            >\n        </div>\n    </div>\n    <div\n        *ngIf=\"currentProduct === 'profiles'\"\n        class=\"home-products__product-info-container\"\n    >\n        <div class=\"home-products__product-information\">\n            <h1 class=\"home-products__product-name\">ALUMINIUM PROFILES</h1>\n            <p class=\"home-products__product-description\">\n                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum eligendi perspiciatis, similique veniam sint non dolores at iste animi, iure architecto. Nemo, in. Temporibus, inventore nemo. Ipsam deleniti harum placeat.\n            </p>\n            <div class=\"home-products__buttons\">\n                <button \n                    class=\"home-products__button home-products__button--primary\"\n                    routerLink=\"/calculator\"\n                >\n                    CALCULATE AND ORDER NOW\n                </button>\n                <button \n                    class=\"home-products__button home-products__button--secondary\"\n                    routerLink=\"/products\"\n                >\n                    More info\n                </button>\n            </div>\n        </div>\n        <div>\n            <img\n                class=\"home-products__product-image home-products__product-image--profiles\"\n                src=\"/assets/profiles.png\"\n            >\n        </div>\n    </div>\n    <div class=\"home-products__slider\">\n        <div\n            *ngFor=\"let item of productIds; let i = index\"\n            [id]=\"item\" \n            (click)=\"changeProduct(i)\"\n            class=\"home-products__slider-item\"\n            [ngClass]=\"{'home-products__slider-item--active' : currentProduct === item}\"\n            >\n        </div>\n    </div>\n    <div \n        (click)=\"changeProduct(currentIndex - 1)\"\n        class=\"home-products__arrow home-products__arrow--left\"\n    >\n        <i class=\"home-products__arrow-icon home-products__arrow-icon--left\"></i>\n    </div>\n    <div \n        (click)=\"changeProduct(currentIndex + 1)\"\n        class=\"home-products__arrow home-products__arrow--right\"\n    >\n        <i class=\"home-products__arrow-icon home-products__arrow-icon--right\"></i>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home-products/home-products.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".generic-button {\n  font-family: 'Catamaran', sans-serif; }\n\n.generic-button, .home-products__button {\n  border: none; }\n\n.generic-button, .home-products__button {\n  border-radius: 5px; }\n\n.generic-button {\n  padding-right: 20px; }\n\n.generic-button {\n  padding-left: 20px; }\n\n.generic-button, .home-products__button {\n  outline: none; }\n\n.generic-button, .home-products__button, .home-products__slider-item, .home-products__arrow {\n  cursor: pointer; }\n\n.generic-button--yellow {\n  color: #292929; }\n\n.generic-button--yellow {\n  background-color: #FFC818; }\n\n.generic-button--yellow:hover {\n  background-color: #e4ae00; }\n\n.home-products {\n  height: 600px; }\n\n.home-products {\n  padding: 50px; }\n\n.home-products, .home-products__button {\n  box-sizing: border-box; }\n\n.home-products {\n  background: linear-gradient(45deg, #fff9f9 0%, #eaeeef 100%); }\n\n.home-products {\n  position: relative; }\n\n.home-products__header {\n  font-size: 27px; }\n\n.home-products__header, .home-products__product-name {\n  font-family: 'Play', sans-serif; }\n\n.home-products__header, .home-products__product-name, .home-products__product-description, .home-products__button {\n  color: #1f445a; }\n\n.home-products__header, .home-products__button {\n  font-weight: 600; }\n\n.home-products__hr {\n  width: 121px; }\n\n.home-products__hr {\n  margin: 10px 0 40px 0; }\n\n.home-products__hr {\n  border: 2px solid #1f445a; }\n\n.home-products__product-info-container, .home-products__slider, .home-products__arrow {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.home-products__product-info-container {\n  padding-left: 10%; }\n\n.home-products__product-information {\n  -ms-flex-preferred-size: 50%;\n  flex-basis: 50%; }\n\n.home-products__product-information {\n  padding-top: 100px; }\n\n.home-products__product-name {\n  font-size: 32px; }\n\n.home-products__product-name {\n  margin: 0 0 20px 0; }\n\n.home-products__product-description {\n  font-family: 'Cantarell', sans-serif; }\n\n.home-products__product-description {\n  font-size: 22px; }\n\n.home-products__product-description {\n  margin: 0; }\n\n.home-products__product-image--sandwich-panel, .home-products__product-image--thermo-isolation, .home-products__product-image--profiles, .home-products__slider, .home-products__arrow {\n  position: absolute; }\n\n.home-products__product-image--sandwich-panel {\n  top: 25px; }\n\n.home-products__product-image--sandwich-panel, .home-products__product-image--profiles {\n  height: 85%; }\n\n.home-products__product-image--sandwich-panel {\n  right: 180px; }\n\n.home-products__product-image--thermo-isolation {\n  height: 57%; }\n\n.home-products__product-image--thermo-isolation {\n  right: 71px; }\n\n.home-products__product-image--thermo-isolation {\n  bottom: 110px; }\n\n.home-products__product-image--thermo-isolation {\n  -webkit-transform: rotate(-18deg);\n          transform: rotate(-18deg); }\n\n.home-products__product-image--profiles {\n  top: 40px; }\n\n.home-products__product-image--profiles {\n  right: 150px; }\n\n.home-products__buttons {\n  margin-top: 40px; }\n\n.home-products__button {\n  height: 50px; }\n\n.home-products__button {\n  padding: 0 30px; }\n\n.home-products__button {\n  font-size: 16px; }\n\n.home-products__button {\n  font-family: 'Quicksand', sans-serif; }\n\n.home-products__button {\n  transition: all 0.2s linear; }\n\n.home-products__button:first-child {\n  margin-right: 20px; }\n\n.home-products__button--primary {\n  background-color: #ffcc35; }\n\n.home-products__button--secondary {\n  background-color: transparent; }\n\n.home-products__button--secondary, .home-products__slider-item {\n  border: 1px solid #1f445a; }\n\n.home-products__button:hover, .home-products__slider-item--active {\n  background-color: #1f445a; }\n\n.home-products__button:hover {\n  color: white; }\n\n.home-products__slider, .home-products__arrow {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.home-products__slider, .home-products__arrow {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -ms-grid-row-align: center;\n  align-items: center; }\n\n.home-products__slider {\n  bottom: 15px; }\n\n.home-products__slider {\n  left: 50%; }\n\n.home-products__slider-item {\n  border-radius: 50%; }\n\n.home-products__slider-item {\n  width: 10px; }\n\n.home-products__slider-item {\n  height: 10px; }\n\n.home-products__slider-item {\n  margin: 0 15px; }\n\n.home-products__arrow {\n  width: 60px; }\n\n.home-products__arrow {\n  height: 100%; }\n\n.home-products__arrow {\n  top: 0; }\n\n.home-products__arrow {\n  transition: background-color 0.2s ease-in-out; }\n\n.home-products__arrow:hover {\n  background-color: rgba(255, 255, 255, 0.3); }\n\n.home-products__arrow--left {\n  left: 0; }\n\n.home-products__arrow--right {\n  right: 0; }\n\n.home-products__arrow-icon {\n  border: solid #8094a0; }\n\n.home-products__arrow-icon {\n  border-width: 0 3px 3px 0; }\n\n.home-products__arrow-icon {\n  display: inline-block; }\n\n.home-products__arrow-icon {\n  padding: 10px; }\n\n.home-products__arrow-icon--left {\n  -webkit-transform: rotate(135deg);\n          transform: rotate(135deg); }\n\n.home-products__arrow-icon--right {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home-products/home-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeProductsComponent = (function () {
    function HomeProductsComponent() {
        this.productIds = ['sandwichPanel', 'thermalIsolation', 'profiles'];
        this.currentProduct = 'sandwichPanel';
        this.currentIndex = 0;
    }
    HomeProductsComponent.prototype.ngOnInit = function () {
        this.startAnimation();
    };
    HomeProductsComponent.prototype.startAnimation = function () {
        var _this = this;
        this.sliderAnimation = setInterval(function () {
            if (_this.currentIndex === _this.productIds.length - 1) {
                _this.currentIndex = 0;
            }
            else {
                _this.currentIndex++;
            }
            _this.currentProduct = _this.productIds[_this.currentIndex];
        }, 5000);
    };
    HomeProductsComponent.prototype.stopAnimation = function () {
        clearInterval(this.sliderAnimation);
    };
    HomeProductsComponent.prototype.changeProduct = function (index) {
        if (index > this.productIds.length - 1) {
            this.currentIndex = 0;
        }
        else if (index < 0) {
            this.currentIndex = this.productIds.length - 1;
        }
        else {
            this.currentIndex = index;
        }
        this.currentProduct = this.productIds[this.currentIndex];
    };
    return HomeProductsComponent;
}());
HomeProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-home-products',
        template: __webpack_require__("../../../../../src/app/home/home-products/home-products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home-products/home-products.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeProductsComponent);

//# sourceMappingURL=home-products.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"main\">\n    <div class=\"main__overlay\">\n        <div class=\"main__contacts\">\n            <a class=\"main__contacts-item\">\n                <img src=\"/assets/phone.png\" alt=\"\">\n                <span>+374 284 22401</span>\n            </a>\n            <a class=\"main__contacts-item\">\n                <img src=\"/assets/phone.png\" alt=\"\">\n                <span>+374 94 022 401</span>\n            </a>\n            <a class=\"main__contacts-item\" routerLink=\"/contacts\">\n                <img src=\"/assets/email.png\" alt=\"\">\n                <span>write us</span>\n            </a>\n        </div>\n        <div class=\"main__logo-container\">\n            <img \n                src=\"/assets/logo.png\"\n                class=\"main__logo\"\n            > \n            <span class=\"main__slogan\">\n                We are producing best sandwich-panels in the region\n            </span>\n            <div class=\"main__buttons\">\n                <button \n                    class=\"main__button main__button--primary\"\n                    routerLink=\"/products\"\n                >\n                    VIEW ALL PRODUCTS\n                </button>\n                <button \n                    class=\"main__button main__button--secondary\"\n                    routerLink=\"/about\"\n                >\n                    Learn more\n                </button>\n            </div>\n        </div>\n        <div class=\"main__stats\">\n            <div class=\"main__stats-description\">\n                <span class=\"main__stats-title\">Who We Are</span>\n                <hr class=\"main__stats-hr\">\n                <span class=\"main__stats-copy\">\n                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo hic aperiam excepturi repellendus quam tempore\n                </span>\n            </div>\n            <div class=\"main__stats-separator\">\n\n            </div>\n            <div class=\"main__stats-icons\">\n                <div class=\"main__stats-item\" routerLink=\"/about\">\n                    <div class=\"main__stats-icon\">\n                        <div class=\"main__stats-icon--top\">\n                            <div class=\"main__stats-icon--left\"></div>\n                            <div class=\"main__stats-icon--right\"></div>\n                        </div>\n                        <span \n                            class=\"main__stats-number\"\n                            [bbdCounter]=\"\"\n                            [maxNumber]=\"10\"\n                            [time]=\"2\" \n                        >\n                        </span>\n                        <div class=\"main__stats-icon--bottom\">\n                            <div class=\"main__stats-icon--left\"></div>\n                            <div class=\"main__stats-icon--right\"></div>\n                        </div>\n                    </div>\n                    <div class=\"main__stats-name\">years</div>\n                </div>\n                <div class=\"main__stats-item\" routerLink=\"/portfolio\">\n                    <div class=\"main__stats-icon\">\n                        <div class=\"main__stats-icon--top\">\n                            <div class=\"main__stats-icon--left\"></div>\n                            <div class=\"main__stats-icon--right\"></div>\n                        </div>\n                        <span \n                            class=\"main__stats-number\"\n                            [bbdCounter]=\"\"\n                            [maxNumber]=\"100\"\n                            [time]=\"2\" \n                        >\n                        </span>\n                        <div class=\"main__stats-icon--bottom\">\n                            <div class=\"main__stats-icon--left\"></div>\n                            <div class=\"main__stats-icon--right\"></div>\n                        </div>\n                    </div>\n                    <div class=\"main__stats-name\">projects</div>\n                </div>\n                <div class=\"main__stats-item\" routerLink=\"/partners\">\n                    <div class=\"main__stats-icon\">\n                        <div class=\"main__stats-icon--top\">\n                            <div class=\"main__stats-icon--left\"></div>\n                            <div class=\"main__stats-icon--right\"></div>\n                        </div>\n                        <span \n                            class=\"main__stats-number\"\n                            [bbdCounter]=\"\"\n                            [maxNumber]=\"50\"\n                            [time]=\"2\" \n                        >\n                        </span>\n                        <div class=\"main__stats-icon--bottom\">\n                            <div class=\"main__stats-icon--left\"></div>\n                            <div class=\"main__stats-icon--right\"></div>\n                        </div>\n                    </div>\n                    <div class=\"main__stats-name\">partners</div>\n                </div>\n                <div class=\"main__stats-item\" routerLink=\"/products\">\n                    <div class=\"main__stats-icon\">\n                        <div class=\"main__stats-icon--top\">\n                            <div class=\"main__stats-icon--left\"></div>\n                            <div class=\"main__stats-icon--right\"></div>\n                        </div>\n                        <span \n                            class=\"main__stats-number\"\n                            [bbdCounter]=\"\"\n                            [maxNumber]=\"40\"\n                            [time]=\"2\" \n                        >\n                        </span>\n                        <div class=\"main__stats-icon--bottom\">\n                            <div class=\"main__stats-icon--left\"></div>\n                            <div class=\"main__stats-icon--right\"></div>\n                        </div>\n                    </div>\n                    <div class=\"main__stats-name\">products</div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<section class=\"section section--projects\">\n    <app-recent-projects></app-recent-projects>\n</section>\n<section class=\"section section--products\">\n    <app-home-products></app-home-products>\n</section>\n<section class=\"section section--partners\">\n    <app-home-clients></app-home-clients>\n</section>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".generic-button {\n  font-family: 'Catamaran', sans-serif; }\n\n.generic-button, .main__button {\n  border: none; }\n\n.generic-button, .main__button {\n  border-radius: 5px; }\n\n.generic-button {\n  padding-right: 20px; }\n\n.generic-button {\n  padding-left: 20px; }\n\n.generic-button, .main__button, .main__stats-item {\n  outline: none; }\n\n.generic-button, .main__contacts-item, .main__button, .main__stats-item {\n  cursor: pointer; }\n\n.generic-button--yellow {\n  color: #292929; }\n\n.generic-button--yellow {\n  background-color: #FFC818; }\n\n.generic-button--yellow:hover {\n  background-color: #e4ae00; }\n\n.main {\n  background-image: url(https://images.unsplash.com/photo-1433840496881-cbd845929862?auto=format&fit=crop&w=1350&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D); }\n  .main {\n    height: 100vh; }\n  .main {\n    background-size: cover; }\n  .main {\n    background-attachment: fixed; }\n  .main {\n    position: relative; }\n  .main__overlay {\n    background-color: rgba(161, 167, 147, 0.5); }\n  .main__overlay, .main__stats-icon--left, .main__stats-icon--right {\n    height: 100%; }\n  .main__overlay, .main__stats, .main__stats-icon--top, .main__stats-icon--bottom {\n    width: 100%; }\n  .main__contacts, .main__contacts-item, .main__logo-container, .main__buttons, .main__stats, .main__stats-icons, .main__stats-icon, .main__stats-icon--top, .main__stats-icon--bottom {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .main__contacts {\n    padding: 20px; }\n  .main__contacts {\n    -webkit-box-pack: end;\n    -ms-flex-pack: end;\n    justify-content: flex-end; }\n  .main__contacts-item {\n    padding: 10px 40px; }\n  .main__contacts-item {\n    border: 1px solid rgba(234, 234, 234, 0.3); }\n  .main__contacts-item {\n    border-radius: 11px; }\n  .main__contacts-item, .main__logo-container, .main__stats, .main__stats-icon {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    -ms-grid-row-align: center;\n    align-items: center; }\n  .main__contacts-item {\n    color: #eaeaea; }\n  .main__contacts-item, .main__button:first-child {\n    margin-right: 20px; }\n  .main__contacts-item {\n    text-decoration: none; }\n  .main__contacts-item {\n    transition: -webkit-transform 0.4s;\n    transition: transform 0.4s;\n    transition: transform 0.4s, -webkit-transform 0.4s; }\n  .main__contacts-item > img {\n    height: 20px; }\n  .main__contacts-item > img {\n    margin-right: 10px; }\n  .main__contacts-item:hover {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n  .main__logo-container, .main__stats-icon {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column; }\n  .main__logo-container {\n    margin-top: 12vh; }\n  .main__logo {\n    height: 215px; }\n  .main__slogan, .main__stats-copy {\n    font-family: 'Cantarell', sans-serif; }\n  .main__slogan {\n    font-size: 25px; }\n  .main__slogan {\n    color: #2e3232; }\n  .main__slogan, .main__stats-name {\n    margin-top: 20px; }\n  .main__slogan, .main__button, .main__stats-title, .main__stats-number, .main__stats-name {\n    font-weight: 600; }\n  .main__buttons {\n    margin-top: 25px; }\n  .main__button {\n    height: 50px; }\n  .main__button {\n    padding: 0 30px; }\n  .main__button {\n    font-size: 19px; }\n  .main__button {\n    font-family: 'Quicksand', sans-serif; }\n  .main__button, .main__stats-description, .main__stats-number, .main__stats-name {\n    color: #1f445a; }\n  .main__button, .main__stats-icon--left, .main__stats-icon--right {\n    box-sizing: border-box; }\n  .main__button {\n    transition: all 0.2s linear; }\n  .main__button--primary {\n    background-color: #fcd12a; }\n  .main__button--secondary {\n    background-color: transparent; }\n  .main__button--secondary {\n    border: 1px solid #1f445a; }\n  .main__button:hover {\n    background-color: #1f445a; }\n  .main__button:hover {\n    color: white; }\n  .main__stats {\n    height: 200px; }\n  .main__stats {\n    background-color: rgba(255, 255, 255, 0.3); }\n  .main__stats {\n    position: absolute; }\n  .main__stats {\n    bottom: 0; }\n  .main__stats {\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center; }\n  .main__stats-separator {\n    background-color: rgba(31, 68, 90, 0.2); }\n  .main__stats-separator {\n    width: 2px; }\n  .main__stats-separator {\n    height: 78%; }\n  .main__stats-separator, .main__stats-item {\n    margin: 0 40px; }\n  .main__stats-description {\n    -ms-flex-preferred-size: 30%;\n    flex-basis: 30%; }\n  .main__stats-title, .main__stats-number {\n    font-family: 'Play', sans-serif; }\n  .main__stats-title {\n    font-size: 27px; }\n  .main__stats-hr {\n    width: 121px; }\n  .main__stats-hr {\n    margin: 10px 0; }\n  .main__stats-hr {\n    border: 2px solid #1f445a; }\n  .main__stats-icon {\n    height: 80px; }\n  .main__stats-icon {\n    width: 80px; }\n  .main__stats-icon, .main__stats-icon--top, .main__stats-icon--bottom {\n    -webkit-box-pack: justify;\n    -ms-flex-pack: justify;\n    justify-content: space-between; }\n  .main__stats-icon--top, .main__stats-icon--bottom {\n    height: 33%; }\n  .main__stats-icon--left {\n    border-left: 3px solid #1f445a; }\n  .main__stats-icon--right {\n    border-right: 3px solid #1f445a; }\n  .main__stats-icon--top .main__stats-icon--left,\n  .main__stats-icon--top .main__stats-icon--right {\n    border-top: 3px solid #1f445a; }\n  .main__stats-icon--bottom .main__stats-icon--left,\n  .main__stats-icon--bottom .main__stats-icon--right {\n    border-bottom: 3px solid #1f445a; }\n  .main__stats-icon--left, .main__stats-icon--right {\n    width: 33%; }\n  .main__stats-number {\n    font-size: 30px; }\n  .main__stats-name {\n    font-family: 'Assistant', sans-serif; }\n  .main__stats-name {\n    font-size: 22px; }\n  .main__stats-name {\n    text-align: center; }\n  .main__stats-item {\n    transition: -webkit-transform 0.2s;\n    transition: transform 0.2s;\n    transition: transform 0.2s, -webkit-transform 0.2s; }\n  .main__stats-item:hover {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/recent-projects/recent-projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"projects\">\n    <div class=\"projects__header\">\n        RECENT PROJECTS\n    </div>\n    <hr class=\"projects__hr\">\n    <div class=\"projects__container\">\n        <div class=\"projects__list\">\n            <div \n                id=\"jermukGroup\" \n                (click)=\"setActive('jermukGroup')\" \n                class=\"projects__item\"\n                [ngClass]=\"{'projects__item--active' : activeProject === 'jermukGroup'}\"\n            >\n                <span class=\"projects__item-title\">\n                    Jermuk Group\n                </span>\n                <span class=\"projects__item-description\">\n                    A factory for Jermuk Group in Jermuk\n                </span>\n            </div>\n            <div \n                id=\"pepsiGroup\"\n                (click)=\"setActive('pepsiGroup')\" \n                class=\"projects__item\"\n                [ngClass]=\"{'projects__item--active' : activeProject === 'pepsiGroup'}\"\n            >\n                <span class=\"projects__item-title\">\n                    Pepsi Group\n                </span>\n                <span class=\"projects__item-description\">\n                    A factory for Pepsi Group in Yerevan\n                </span>\n            </div>\n            <div \n                id=\"baseMetals\"\n                (click)=\"setActive('baseMetals')\" \n                class=\"projects__item\"\n                [ngClass]=\"{'projects__item--active' : activeProject === 'baseMetals'}\"\n            >\n                <span class=\"projects__item-title\">\n                    Base Metals\n                </span>\n                <span class=\"projects__item-description\">\n                    A warehouse for Base Metals in Goris\n                </span>\n            </div>\n            <div \n                class=\"projects__item\"\n                routerLink=\"/portfolio\"\n            >\n                VIEW ALL\n            </div>\n        </div>\n        <div class=\"projects__item-image\">\n            <img\n                *ngIf=\"activeProject === 'baseMetals'\" \n                src=\"https://i2.wp.com/www.info-360.com/wp-content/uploads/2017/04/10-marla-house-250-sq-yds-house-modern-house-design-architecture-urban-factory-4.jpg?fit=960%2C540\"\n            >\n            <img \n                *ngIf=\"activeProject === 'jermukGroup'\"\n                src=\"http://www.moneyfactoryinvesting.com/wp-content/uploads/2016/07/LillieCawthorn-WebsiteBanner4-optimized.jpg\"\n            >\n            <img\n                *ngIf=\"activeProject === 'pepsiGroup'\" \n                src=\"http://www.abc.net.au/news/image/4754534-3x2-940x627.jpg\"\n            >\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/recent-projects/recent-projects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".generic-button {\n  font-family: 'Catamaran', sans-serif; }\n\n.generic-button, .projects__item:last-child {\n  border: none; }\n\n.generic-button {\n  border-radius: 5px; }\n\n.generic-button {\n  padding-right: 20px; }\n\n.generic-button {\n  padding-left: 20px; }\n\n.generic-button, .projects__item {\n  outline: none; }\n\n.generic-button, .projects__item {\n  cursor: pointer; }\n\n.generic-button--yellow {\n  color: #292929; }\n\n.generic-button--yellow {\n  background-color: #FFC818; }\n\n.generic-button--yellow:hover {\n  background-color: #e4ae00; }\n\n.projects {\n  height: 600px; }\n\n.projects {\n  padding: 50px; }\n\n.projects, .projects__item {\n  box-sizing: border-box; }\n\n.projects__header {\n  font-size: 27px; }\n\n.projects__header {\n  font-family: 'Play', sans-serif; }\n\n.projects__header, .projects__item {\n  color: #1f445a; }\n\n.projects__header {\n  font-weight: 600; }\n\n.projects__hr {\n  width: 121px; }\n\n.projects__hr {\n  margin: 10px 0 40px 0; }\n\n.projects__hr {\n  border: 2px solid #1f445a; }\n\n.projects__container, .projects__item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.projects__list {\n  width: 30%; }\n\n.projects__item {\n  height: 100px; }\n\n.projects__item {\n  border-bottom: 1px solid #e3e6e6; }\n\n.projects__item {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n.projects__item {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.projects__item {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -ms-grid-row-align: center;\n  align-items: center; }\n\n.projects__item {\n  font-family: 'Quicksand', sans-serif; }\n\n.projects__item {\n  transition: background-color 0.5s ease-in-out; }\n\n.projects__item--active, .projects__item:hover {\n  background-color: #ffcc35; }\n\n.projects__item--active, .projects__item-image {\n  box-shadow: 5px 4px 9px 0px rgba(0, 0, 0, 0.75); }\n\n.projects__item--active {\n  border-bottom: none; }\n\n.projects__item:hover:not(.projects__item--active) {\n  opacity: 0.7; }\n\n.projects__item-description {\n  font-size: 14px; }\n\n.projects__item-description {\n  margin-top: 8px; }\n\n.projects__item-description {\n  font-family: 'Cantarell', sans-serif; }\n\n.projects__item-image {\n  width: 70%; }\n\n.projects__item-image {\n  max-height: 400px; }\n\n.projects__item-image img {\n  width: 100%; }\n\n.projects__item-image img {\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/recent-projects/recent-projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecentProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecentProjectsComponent = (function () {
    function RecentProjectsComponent() {
        this.activeProject = 'jermukGroup';
    }
    RecentProjectsComponent.prototype.ngOnInit = function () {
    };
    RecentProjectsComponent.prototype.setActive = function (id) {
        this.activeProject = id;
    };
    return RecentProjectsComponent;
}());
RecentProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-recent-projects',
        template: __webpack_require__("../../../../../src/app/home/recent-projects/recent-projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/recent-projects/recent-projects.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], RecentProjectsComponent);

//# sourceMappingURL=recent-projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/installation/installation.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/installation/installation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/installation/installation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstallationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InstallationComponent = (function () {
    function InstallationComponent() {
    }
    InstallationComponent.prototype.ngOnInit = function () {
    };
    return InstallationComponent;
}());
InstallationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-installation',
        template: __webpack_require__("../../../../../src/app/installation/installation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/installation/installation.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], InstallationComponent);

//# sourceMappingURL=installation.component.js.map

/***/ }),

/***/ "../../../../../src/app/micro-http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MicroHttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MicroHttpService = (function () {
    function MicroHttpService(http) {
        this.http = http;
    }
    MicroHttpService.prototype.get = function (url, options) {
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return error; });
    };
    MicroHttpService.prototype.post = function (url, body, options) {
        return this.http.post(url, body, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return error; });
    };
    return MicroHttpService;
}());
MicroHttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MicroHttpService);

var _a;
//# sourceMappingURL=micro-http.service.js.map

/***/ }),

/***/ "../../../../../src/app/partners/partners.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/partners/partners.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partners/partners.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartnersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PartnersComponent = (function () {
    function PartnersComponent() {
    }
    PartnersComponent.prototype.ngOnInit = function () {
    };
    return PartnersComponent;
}());
PartnersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-partners',
        template: __webpack_require__("../../../../../src/app/partners/partners.component.html"),
        styles: [__webpack_require__("../../../../../src/app/partners/partners.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PartnersComponent);

//# sourceMappingURL=partners.component.js.map

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    return PortfolioComponent;
}());
PortfolioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-portfolio',
        template: __webpack_require__("../../../../../src/app/portfolio/portfolio.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portfolio/portfolio.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PortfolioComponent);

//# sourceMappingURL=portfolio.component.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/products/products.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__micro_http_service__ = __webpack_require__("../../../../../src/app/micro-http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsComponentService = (function () {
    function ProductsComponentService(http) {
        this.http = http;
        this.url = '/api/products';
    }
    ProductsComponentService.prototype.getProducts = function (query) {
        if (query === void 0) { query = null; }
        switch (__WEBPACK_IMPORTED_MODULE_3__globals__["a" /* ENVIRONMENT */]) {
            case 'test-mock-data':
                return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].of([{ name: 'Product', id: '1' }]);
            default:
                return this.http.get(this.url, query)
                    .map(function (products) { return products; });
        }
    };
    return ProductsComponentService;
}());
ProductsComponentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__micro_http_service__["a" /* MicroHttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__micro_http_service__["a" /* MicroHttpService */]) === "function" && _a || Object])
], ProductsComponentService);

var _a;
//# sourceMappingURL=products.component.service.js.map

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_products_products_component_service__ = __webpack_require__("../../../../../src/app/products/products.component.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = (function () {
    function ProductsComponent(productsService) {
        this.productsService = productsService;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ProductsComponent.prototype.getData = function () {
        var _this = this;
        this.productsService.getProducts().subscribe(function (data) { return _this.products = data; });
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/products/products.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_products_products_component_service__["a" /* ProductsComponentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_products_products_component_service__["a" /* ProductsComponentService */]) === "function" && _a || Object])
], ProductsComponent);

var _a;
//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"footer__container\">\n        <div class=\"footer__logo\">\n            <a routerLink=\"/home\">\n                <img src=\"/assets/logo.png\" alt=\"\">\n            </a>\n        </div>\n        <div class=\"footer__copyright\">\n            <a href=\"http://www.augmentar.am\" target=\"_blank\">\n                ./ on time by AugmentAr CJSC\n            </a>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".generic-button {\n  font-family: 'Catamaran', sans-serif; }\n\n.generic-button {\n  border: none; }\n\n.generic-button {\n  border-radius: 5px; }\n\n.generic-button {\n  padding-right: 20px; }\n\n.generic-button {\n  padding-left: 20px; }\n\n.generic-button {\n  outline: none; }\n\n.generic-button, .footer__copyright a {\n  cursor: pointer; }\n\n.generic-button--yellow {\n  color: #292929; }\n\n.generic-button--yellow {\n  background-color: #FFC818; }\n\n.generic-button--yellow:hover {\n  background-color: #e4ae00; }\n\n.footer {\n  background-color: #476678; }\n\n.footer {\n  height: 150px; }\n\n.footer {\n  position: absolute; }\n\n.footer, .footer__container {\n  width: 100%; }\n\n.footer {\n  bottom: 0; }\n\n.footer__container {\n  height: 100%; }\n\n.footer__container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.footer__container {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n.footer__container {\n  -webkit-box-pack: justify;\n  -ms-flex-pack: justify;\n  justify-content: space-between; }\n\n.footer__copyright, .footer__logo {\n  text-align: center; }\n\n.footer__copyright {\n  font-family: 'Assistant', sans-serif; }\n\n.footer__copyright {\n  padding-bottom: 15px; }\n\n.footer__copyright a {\n  color: #b3c0c7; }\n\n.footer__copyright a {\n  text-decoration: none; }\n\n.footer__logo {\n  padding-top: 15px; }\n\n.footer__logo img {\n  height: 85px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navigation\">\n    <div class=\"navigation__logo\">\n        <!-- <img src=\"logo1.png\"> -->\n    </div>\n    <ul class=\"navigation__list\">\n        <li\n            routerLink=\"/home\" \n            class=\"navigation__item\"\n            routerLinkActive=\"navigation__item--active\"\n        >\n            HOME PAGE\n        </li>\n        <li \n            routerLink=\"/about\" \n            class=\"navigation__item\"\n            routerLinkActive=\"navigation__item--active\"\n        >\n            ABOUT US\n        </li>\n        <li \n            routerLink=\"/products\" \n            class=\"navigation__item\"\n            routerLinkActive=\"navigation__item--active\"\n        >\n            PRODUCTS\n            <div class=\"submenu\">\n                \n                <div class=\"submenu__item\">\n                    <div class=\"submenu__item-icon-container\">\n                        <img src=\"assets/wall.svg\" class=\"submenu__item-icon\">\n                    </div>\n                    <div class=\"submenu__item-name\">Sandwich Panels</div>\n                </div>\n                <div class=\"submenu__item\">\n                    <div class=\"submenu__item-icon-container\">\n                        <img src=\"/assets/pro.svg\" class=\"submenu__item-icon\">\n                    </div>\n                    <div class=\"submenu__item-name\">Profiles</div>\n                </div>\n                <div class=\"submenu__item\">\n                    <div class=\"submenu__item-icon-container\">\n                        <img src=\"/assets/thermal.svg\" class=\"submenu__item-icon\">\n                    </div>\n                    <div class=\"submenu__item-name\">Thermal Isolation</div>\n                </div>\n                <div class=\"submenu__item\">\n                    <div class=\"submenu__item-icon-container\">\n                        <img src=\"/assets/assembling.svg\" class=\"submenu__item-icon\">\n                    </div>\n                    <div class=\"submenu__item-name\">Assembling Parts</div>\n                </div>\n                <div class=\"submenu__item\">\n                    <div class=\"submenu__item-icon-container\">\n                        <img src=\"/assets/metal.svg\" class=\"submenu__item-icon\">\n                    </div>\n                    <div class=\"submenu__item-name\">Metal Constructions</div>\n                </div>\n                <div class=\"submenu__item\">\n                    <div class=\"submenu__item-icon-container\">\n                        <img src=\"/assets/aluminum.svg\" class=\"submenu__item-icon\">\n                    </div>\n                    <div class=\"submenu__item-name\">Aluminium Sheets & Rods</div>\n                </div>\n                <div class=\"submenu__calculator\">\n                    <!-- <div class=\"submenu__calculator-icon-container\">\n                        <img class=\"submenu__calculator-icon\" src=\"/assets/calculator.svg\" alt=\"\">\n                    </div> -->\n                    <button class=\"submenu__calculator-button\">\n                        CALCULATE NOW\n                    </button>\n                    <div class=\"submenu__calculator-text\">\n                        Use our calculator to find out what you need\n                    </div>\n                </div>\n            </div>\n        </li>\n        <li \n            routerLink=\"/portfolio\"\n            class=\"navigation__item\"\n            routerLinkActive=\"navigation__item--active\"\n        >\n            PORTFOLIO\n        </li>\n        <li \n            routerLink=\"/partners\" \n            class=\"navigation__item\"\n            routerLinkActive=\"navigation__item--active\"\n        >\n            PARTNERS\n        </li>\n        <li \n            routerLink=\"/installation\" \n            class=\"navigation__item\"\n            routerLinkActive=\"navigation__item--active\"\n        >\n            INSTALLATION\n        </li>\n        <li  \n            routerLink=\"/contacts\" \n            class=\"navigation__item\"\n            routerLinkActive=\"navigation__item--active\"\n        >\n            CONTACTS\n        </li>\n    </ul>\n    <!-- <div class=\"navigation__addresses\">\n        <span class=\"address__line\">Goris, Syunik, RA</span>\n        <span class=\"address__line\">Tatevatsi 78</span>\n        <span class=\"address__line\">\n            <a class=\"address__link\" href=\"tel:+37428422222\">+374 284 22222</a>\n        </span>\n    </div> -->\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".generic-button {\n  font-family: 'Catamaran', sans-serif; }\n\n.generic-button, .submenu__calculator-button {\n  border: none; }\n\n.generic-button, .submenu__calculator-button {\n  border-radius: 5px; }\n\n.generic-button {\n  padding-right: 20px; }\n\n.generic-button {\n  padding-left: 20px; }\n\n.generic-button, .navigation__item, .submenu__calculator-button {\n  outline: none; }\n\n.generic-button, .navigation__item, .submenu__item, .submenu__calculator-button {\n  cursor: pointer; }\n\n.generic-button--yellow {\n  color: #292929; }\n\n.generic-button--yellow {\n  background-color: #FFC818; }\n\n.generic-button--yellow:hover {\n  background-color: #e4ae00; }\n\n.navigation {\n  background-color: #1f445a; }\n\n.navigation, .submenu {\n  height: 100vh; }\n\n.navigation, .submenu {\n  width: 350px; }\n\n.navigation, .submenu {\n  position: fixed; }\n\n.navigation, .navigation__list, .navigation__item, .submenu, .submenu__item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.navigation, .navigation__list, .submenu {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -ms-flex-direction: column;\n  flex-direction: column; }\n\n.navigation, .navigation__list, .submenu {\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n\n.navigation {\n  z-index: 200; }\n\n.navigation__list {\n  padding: 0; }\n\n.navigation__list {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 50%;\n          flex: 0 0 50%; }\n\n.navigation__list, .navigation__item {\n  margin: 0; }\n\n.navigation__item {\n  border-top: 1px solid #bcc7d82b; }\n\n.navigation__item {\n  list-style: none; }\n\n.navigation__item {\n  text-align: right; }\n\n.navigation__item {\n  padding: 18px 22px 18px 0; }\n\n.navigation__item {\n  -webkit-box-pack: end;\n  -ms-flex-pack: end;\n  justify-content: flex-end; }\n\n.navigation__item, .submenu__item {\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n  -ms-flex-align: center;\n  -ms-grid-row-align: center;\n  align-items: center; }\n\n.navigation__item {\n  position: relative; }\n\n.navigation__item {\n  color: #bcc7d8; }\n\n.navigation__item {\n  font-size: 18px; }\n\n.navigation__item--active {\n  color: #EBC137; }\n\n.navigation__item:hover .submenu {\n  visibility: visible; }\n\n.navigation__item:hover .submenu {\n  opacity: 1; }\n\n.navigation__item:last-child {\n  border-bottom: 1px solid #bcc7d82b; }\n\n.navigation__item:after {\n  content: ''; }\n  .navigation__item:after, .submenu__calculator {\n    position: absolute; }\n  .navigation__item:after, .submenu {\n    top: 0; }\n  .navigation__item:after {\n    right: 100%; }\n  .navigation__item:after {\n    width: 100%; }\n  .navigation__item:after, .submenu__item-icon, .submenu__calculator-icon {\n    height: 100%; }\n  .navigation__item:after, .submenu, .submenu__calculator-button {\n    box-sizing: border-box; }\n  .navigation__item:after {\n    background-color: #808086; }\n  .navigation__item:after {\n    opacity: 0.1; }\n  .navigation__item:after {\n    transition: -webkit-transform 300ms ease-in 100ms;\n    transition: transform 300ms ease-in 100ms;\n    transition: transform 300ms ease-in 100ms, -webkit-transform 300ms ease-in 100ms; }\n\n.navigation__item:hover:after {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%); }\n\n.submenu {\n  background-color: rgba(31, 68, 90, 0.9); }\n\n.submenu {\n  visibility: hidden; }\n\n.submenu {\n  opacity: 0; }\n\n.submenu {\n  left: 350px; }\n\n.submenu {\n  z-index: 100; }\n\n.submenu {\n  cursor: default; }\n\n.submenu {\n  transition: all 1s ease-in-out; }\n\n.submenu__item {\n  transition: all 0.6s linear; }\n\n.submenu__item {\n  padding: 15px 30px; }\n\n.submenu__item:hover {\n  background-color: #4b7086; }\n\n.submenu__item-icon-container {\n  height: 20px; }\n\n.submenu__item-icon {\n  width: auto; }\n\n.submenu__item-name, .submenu__calculator {\n  text-align: center; }\n\n.submenu__item-name {\n  font-size: 22px; }\n\n.submenu__item-name, .submenu__calculator-text {\n  color: #a6b5be; }\n\n.submenu__item-name {\n  margin-left: 15px; }\n\n.submenu__calculator {\n  bottom: 20px; }\n\n.submenu__calculator-icon-container {\n  height: 60px; }\n\n.submenu__calculator-text {\n  margin-top: 15px; }\n\n.submenu__calculator-text {\n  margin-bottom: 15px; }\n\n.submenu__calculator-button {\n  height: 50px; }\n\n.submenu__calculator-button {\n  padding: 0 30px; }\n\n.submenu__calculator-button {\n  font-size: 19px; }\n\n.submenu__calculator-button {\n  font-family: 'Quicksand', sans-serif; }\n\n.submenu__calculator-button {\n  color: #1f445a; }\n\n.submenu__calculator-button {\n  transition: all 0.2s linear; }\n\n.submenu__calculator-button {\n  font-weight: 600; }\n\n.submenu__calculator-button {\n  background-color: #dbbb3f; }\n\n.submenu__calculator-button:hover {\n  background-color: #fcd12a; }\n\nhtml, body {\n  margin: 0;\n  padding: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.test = function (event) {
        console.log(event);
        event.stopPropagation();
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/shared/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/navigation/navigation.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map