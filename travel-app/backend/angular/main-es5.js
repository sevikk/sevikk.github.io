(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>An Error Occurred!</h1>\n<div mat-dialog-content>\n  <p class=\"mat-body-1\">{{ data?.message }}</p>\n</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Okay</button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span>\n    <a routerLink=\"/\">My App</a>\n  </span>\n  <span class=\"spacer\"></span>\n  <div *ngIf=\"userIsAuthenticated\" class=\"user\">\n    <div class=\"user-block\">\n      <button mat-button [matMenuTriggerFor]=\"beforeMenu\">\n          <img [src]=\"user.image\" alt=\"\">\n          {{user?.name}}\n      </button>\n    </div>\n    <mat-menu #beforeMenu=\"matMenu\" xPosition=\"before\">\n      <li mat-menu-item routerLink=\"/create\" routerLinkActive=\"mat-accent\">\n        New post\n      </li>\n      <li mat-menu-item routerLink=\"/profile\" routerLinkActive=\"mat-accent\">\n        Edit profile\n      </li>\n      <!-- <li mat-menu-item routerLink=\"/forgot\" routerLinkActive=\"mat-accent\">\n        Reset password\n      </li> -->\n      <li mat-menu-item (click)=\"onLogout()\">\n        Logout\n      </li>\n    </mat-menu>\n  </div>\n  <ul *ngIf=\"!userIsAuthenticated\">\n    <li >\n      <a mat-button routerLink=\"/auth/login\" routerLinkActive=\"mat-accent\">Login</a>\n    </li>\n    <li>\n      <a mat-button routerLink=\"/auth/signup\" routerLinkActive=\"mat-accent\">Signup</a>\n    </li>\n  </ul>\n</mat-toolbar>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/post-create/post-create.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/post-create/post-create.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form [formGroup]=\"form\" (submit)=\"onSavePost()\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input matInput type=\"text\" formControlName=\"title\" placeholder=\"Post Title\">\n      <mat-error *ngIf=\"form.get('title').invalid\">Please enter a post title.</mat-error>\n    </mat-form-field>\n    <div>\n      <button mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">Pick Image</button>\n      <input type=\"file\" #filePicker (change)=\"onImagePicked($event)\">\n    </div>\n    <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\n    </div>\n    <mat-form-field>\n      <textarea matInput rows=\"4\" formControlName=\"content\" placeholder=\"Post Content\"></textarea>\n      <mat-error *ngIf=\"form.get('content').invalid\">Please enter a post title.</mat-error>\n    </mat-form-field>\n    <button mat-raised-button color=\"accent\" type=\"submit\">Save Post</button>\n  </form>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/posts/post-list/post-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/posts/post-list/post-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n<mat-accordion multi=\"true\" *ngIf=\"posts.length > 0 && !isLoading\">\n  <mat-expansion-panel *ngFor=\"let post of posts\">\n    <mat-expansion-panel-header>\n      {{ post.title }}\n    </mat-expansion-panel-header>\n    <div class=\"post-image\">\n      <img [src]=\"post.imagePath\" [alt]=\"post.title\">\n    </div>\n    <p>{{ post.content }}</p>\n    <mat-action-row *ngIf=\"userIsAuthenticated && userId === post.creator\">\n      <a mat-button color=\"primary\" [routerLink]=\"['/edit', post.id]\">EDIT</a>\n      <button mat-button color=\"warn\" (click)=\"onDelete(post.id)\">DELETE</button>\n    </mat-action-row>\n    <p *ngIf=\"post.creatorEmail\">create by: {{post.creatorEmail}}</p>\n  </mat-expansion-panel>\n</mat-accordion>\n<mat-paginator [length]=\"totalPosts\" [pageSize]=\"postsPerPage\" [pageSizeOptions]=\"pageSizeOptions\" (page)=\"onChangedPage($event)\"\n  *ngIf=\"posts.length > 0\"></mat-paginator>\n<p class=\"info-text mat-body-1\" *ngIf=\"posts.length <= 0 && !isLoading\">No posts added yet!</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/change-password/change-password.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/change-password/change-password.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <span>Change password</span>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form *ngIf=\"!isLoading\"\n        (submit)=\"cheangePassword()\" \n        [formGroup]=\"changePasswordForm\" \n        class=\"changePasswordForm\">\n    <mat-form-field>\n      <input matInput \n             name=\"email\" \n             formControlName=\"password\"\n             type=\"password\" \n             placeholder=\"New password\">\n      <mat-error *ngIf=\"changePasswordForm.controls.password.invalid\">Please enter a valid password.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input type=\"password\" \n             name=\"password\" \n             formControlName=\"repeatPassword\"\n             matInput \n             placeholder=\"Repeat password\">\n      <mat-error *ngIf=\"changePasswordForm.controls.repeatPassword.invalid\">Please enter a valid password.</mat-error>\n    </mat-form-field>\n    <span *ngIf=\"changePasswordForm.errors || changePasswordForm.errors?.mismatch\"\n          class=\"form-errors\">\n      Password doesn't match\n    </span>\n    <button *ngIf=\"!isLoading\"\n            mat-raised-button\n            [disabled]=\"changePasswordForm.invalid\" \n            color=\"accent\" \n            type=\"submit\" \n            >Submit</button>\n  </form>\n  \n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/edit-profile/edit-profile.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/edit-profile/edit-profile.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <span>Edit profile</span>\r\n    <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\r\n    <form (submit)=\"saveUserData()\" [formGroup]=\"userForm\" *ngIf=\"!isLoading\">\r\n        <mat-form-field>\r\n            <input matInput \r\n                    name=\"nickname\" \r\n                    type=\"email\"\r\n                    placeholder=\"Your name\" \r\n                    formControlName=\"name\">\r\n        </mat-form-field>\r\n        <div class=\"change-image\">\r\n                <button mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">Pick Image</button>\r\n                <input type=\"file\" #filePicker (change)=\"onImagePicked($event)\" accept=\"image/*\">\r\n        </div>\r\n        <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview\" >\r\n                <img (click)=\"filePicker.click()\" [src]=\"imagePreview\" [alt]=\"userForm.value.title\">\r\n        </div>\r\n        <mat-form-field>\r\n        <input matInput \r\n                name=\"email\"\r\n                type=\"email\" \r\n                placeholder=\"E-Mail\" \r\n                formControlName=\"email\" \r\n                email>\r\n        <mat-error *ngIf=\"userForm.controls.email.invalid\">Please enter a valid email.</mat-error>\r\n        </mat-form-field>\r\n        \r\n        <!-- <mat-form-field>\r\n        <input type=\"password\" \r\n                name=\"password\"\r\n                matInput \r\n                placeholder=\"Password\"\r\n                formControlName=\"password\">\r\n        <mat-error *ngIf=\"userForm.controls.password.invalid\">Please enter a valid password.</mat-error>\r\n        </mat-form-field> -->\r\n        <button *ngIf=\"!isLoading\" \r\n                mat-raised-button \r\n                color=\"accent\" \r\n                type=\"submit\" \r\n                [disabled]=\"userForm.invalid\">\r\n                    Update profile\r\n            </button>\r\n    </form>\r\n    </mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user/forgot-password/forgot-password.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user/forgot-password/forgot-password.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <span *ngIf=\"!isLoading && !this.responseMessage\">Restore password</span>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form *ngIf=\"!isLoading && !this.responseMessage\"\n        (submit)=\"sendEmailForRestorePass()\" \n        [formGroup]=\"forgotForm\" \n        class=\"changePasswordForm\">\n    <mat-form-field>\n      <input matInput \n             name=\"email\"\n             type=\"email\"\n             formControlName=\"email\"\n             placeholder=\"Enter your email address\">\n      <mat-error *ngIf=\"forgotForm.controls.email.invalid\">Please enter a valid email.</mat-error>\n    </mat-form-field>\n    <button mat-raised-button\n            [disabled]=\"forgotForm.invalid\" \n            color=\"accent\" \n            type=\"submit\" \n            >Send</button>\n  </form>\n  <p *ngIf=\"responseMessage\">{{ responseMessage }}</p>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]
            ]
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _user_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/edit-profile/edit-profile.component */ "./src/app/user/edit-profile/edit-profile.component.ts");
/* harmony import */ var _user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/change-password/change-password.component */ "./src/app/user/change-password/change-password.component.ts");
/* harmony import */ var _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");









var routes = [
    { path: "", component: _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_3__["PostListComponent"] },
    { path: "create", component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: "edit/:postId", component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_4__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: "auth", loadChildren: "./auth/auth.module#AuthModule" },
    { path: "profile", component: _user_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: "forgot", component: _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgotPasswordComponent"] },
    { path: "reset-password/:id", component: _user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_7__["ChangePasswordComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main {\r\n  width: 80%;\r\n  margin: 1rem auto;\r\n}\r\n\r\nmat-card {\r\n  margin-top: 10px;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.autoAuthUser();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _posts_posts_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./posts/posts.module */ "./src/app/posts/posts.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_app_states__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store/app.states */ "./src/app/store/app.states.ts");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user/edit-profile/edit-profile.component */ "./src/app/user/edit-profile/edit-profile.component.ts");
/* harmony import */ var _user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/change-password/change-password.component */ "./src/app/user/change-password/change-password.component.ts");
/* harmony import */ var _store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/effects/auth.effects */ "./src/app/store/effects/auth.effects.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user/forgot-password/forgot-password.component */ "./src/app/user/forgot-password/forgot-password.component.ts");









// import { ErrorInterceptor } from "./error-interceptor";












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
                _user_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_16__["EditProfileComponent"],
                _user_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_17__["ChangePasswordComponent"],
                _user_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_20__["ForgotPasswordComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_10__["AngularMaterialModule"],
                _posts_posts_module__WEBPACK_IMPORTED_MODULE_11__["PostsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                // StoreModule.forRoot(reducers),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forRoot(_store_app_states__WEBPACK_IMPORTED_MODULE_13__["reducers"], {}),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__["EffectsModule"].forRoot([_store_effects_auth_effects__WEBPACK_IMPORTED_MODULE_18__["AuthEffects"]]),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument({
                    maxAge: 50
                })
            ],
            exports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"]],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_8__["AuthInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.authService.getToken();
        var authRequest = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + authToken)
        });
        return next.handle(authRequest);
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_app_states__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/app.states */ "./src/app/store/app.states.ts");






var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router, store) {
        this.authService = authService;
        this.router = router;
        this.store = store;
        this.getState = this.store.select(_store_app_states__WEBPACK_IMPORTED_MODULE_5__["selectAuthState"]);
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        this.getState.subscribe(function (state) {
            _this.isAuth = state.isAuthenticated;
        });
        if (!this.isAuth) {
            this.router.navigate(['/login']);
        }
        return this.isAuth;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");








var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + "/user/";
var AuthService = /** @class */ (function () {
    function AuthService(http, router, store) {
        this.http = http;
        this.router = router;
        this.store = store;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getUserId = function () {
        return this.userId;
    };
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthService.prototype.createUser = function (name, email, password) {
        var authData = { name: name, email: email, password: password };
        return this.http.post(BACKEND_URL + "/signup", authData);
    };
    AuthService.prototype.updateUser = function (id, name, email, image) {
        var userData;
        if (typeof image === "object") {
            userData = new FormData();
            userData.append("id", id);
            userData.append("name", name);
            userData.append("email", email);
            userData.append("image", image, name);
        }
        console.log(userData);
        return this.http.put(BACKEND_URL + id, userData);
    };
    AuthService.prototype.login = function (email, password) {
        var authData = { email: email, password: password };
        return this.http
            .post(BACKEND_URL + "/login", authData);
    };
    AuthService.prototype.changePassword = function (resetData) {
        return this.http.post(BACKEND_URL + "/reset", resetData);
    };
    AuthService.prototype.loggedIn = function (response) {
        var token = response.token;
        this.token = token;
        if (token) {
            var expiresInDuration = response.expiresIn;
            this.setAuthTimer(expiresInDuration);
            this.userId = response.userId;
            this.authStatusListener.next(true);
            var now = new Date();
            var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
            this.saveAuthData(token, expirationDate, this.userId, response.name);
            this.router.navigate(["/"]);
        }
    };
    AuthService.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.store.dispatch(new _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_7__["AutoLogin"](authInformation));
            this.userId = authInformation.userId;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        this.authStatusListener.next(false);
        this.userId = null;
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(["/"]);
    };
    AuthService.prototype.sendEmailForRestorePass = function (email) {
        return this.http.post(BACKEND_URL + '/forgot', email);
    };
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    AuthService.prototype.saveAuthData = function (token, expirationDate, userId, name) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
        localStorage.setItem("userId", userId);
        localStorage.setItem("name", name);
    };
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
        localStorage.removeItem("userId");
        localStorage.removeItem("email");
    };
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem("token");
        var expirationDate = localStorage.getItem("expiration");
        var userId = localStorage.getItem("userId");
        var email = localStorage.getItem("email");
        var name = localStorage.getItem("name");
        var image = localStorage.getItem("image");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            userId: userId,
            email: email,
            name: name,
            image: image
        };
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



// import { Subscription } from "rxjs";
// import { ErrorService } from "./error.service";
var ErrorComponent = /** @class */ (function () {
    // data: { message: string };
    // private errorSub: Subscription;
    function ErrorComponent(data) {
        this.data = data;
    }
    ErrorComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html"),
            selector: "app-error",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: white;\n}\n\nul {\n  display: flex;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n.user-block button {\n  padding: 5px 15px;\n}\n\n.user-block img {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxudWwge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi51c2VyLWJsb2NrIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xufVxuXG4udXNlci1ibG9jayBpbWcge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_app_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/app.states */ "./src/app/store/app.states.ts");
/* harmony import */ var _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");






var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, store) {
        this.authService = authService;
        this.store = store;
        this.userIsAuthenticated = false;
        this.getState = this.store.select(_store_app_states__WEBPACK_IMPORTED_MODULE_4__["selectAuthState"]);
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getState.subscribe(function (state) {
            _this.userIsAuthenticated = state.isAuthenticated;
            _this.user = state.user;
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.store.dispatch(new _store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_5__["LogOut"]());
        this.authService.logout();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-header",
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-create/mime-type.validator.ts":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-create/mime-type.validator.ts ***!
  \**********************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var mimeType = function (control) {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    var file = control.value;
    var fileReader = new FileReader();
    var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        fileReader.addEventListener("loadend", function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = "";
            var isValid = false;
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    isValid = true;
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field,\ntextarea {\n  width: 100%;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\ninput[type=\"file\"] {\n  visibility: hidden;\n}\n\n.image-preview {\n  height: 5rem;\n  margin: 1rem 0;\n}\n\n.image-preview img {\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3QtY3JlYXRlL3Bvc3QtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCxcbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1zcGlubmVyIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmltYWdlLXByZXZpZXcge1xuICBoZWlnaHQ6IDVyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4uaW1hZ2UtcHJldmlldyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.ts ***!
  \************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mime-type.validator */ "./src/app/posts/post-create/mime-type.validator.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");







var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent(postsService, route, authService) {
        this.postsService = postsService;
        this.route = route;
        this.authService = authService;
        this.enteredTitle = "";
        this.enteredContent = "";
        this.isLoading = false;
        this.mode = "create";
    }
    PostCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (authStatus) {
            _this.isLoading = false;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_5__["mimeType"]]
            })
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("postId")) {
                _this.mode = "edit";
                _this.postId = paramMap.get("postId");
                _this.isLoading = true;
                _this.postsService.getPost(_this.postId).subscribe(function (postData) {
                    _this.isLoading = false;
                    _this.post = {
                        id: postData._id,
                        title: postData.title,
                        content: postData.content,
                        imagePath: postData.imagePath,
                        creator: postData.creator
                    };
                    _this.form.setValue({
                        title: _this.post.title,
                        content: _this.post.content,
                        image: _this.post.imagePath
                    });
                });
            }
            else {
                _this.mode = "create";
                _this.postId = null;
            }
        });
    };
    PostCreateComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get("image").updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    PostCreateComponent.prototype.onSavePost = function () {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === "create") {
            this.postsService.addPost(this.form.value.title, this.form.value.content, this.form.value.image);
        }
        else {
            this.postsService.updatePost(this.postId, this.form.value.title, this.form.value.content, this.form.value.image);
        }
        this.form.reset();
    };
    PostCreateComponent.prototype.ngOnDestroy = function () {
        this.authStatusSub.unsubscribe();
    };
    PostCreateComponent.ctorParameters = function () { return [
        { type: _posts_service__WEBPACK_IMPORTED_MODULE_4__["PostsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
    ]; };
    PostCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-post-create",
            template: __webpack_require__(/*! raw-loader!./post-create.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/post-create/post-create.component.html"),
            styles: [__webpack_require__(/*! ./post-create.component.css */ "./src/app/posts/post-create/post-create.component.css")]
        })
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin-top: 1rem;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\nmat-paginator {\n  margin-top: 1rem;\n}\n\n.info-text {\n  text-align: center;\n}\n\n.post-image {\n  width: 100%;\n}\n\n.post-image img {\n  width: auto;\n  max-width: 100%;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsMENBQTBDO0FBQzVDIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cblxubWF0LXNwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbm1hdC1wYWdpbmF0b3Ige1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uaW5mby10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9zdC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucG9zdC1pbWFnZSBpbWcge1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.ts ***!
  \********************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_store_app_states__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/app.states */ "./src/app/store/app.states.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");






var PostListComponent = /** @class */ (function () {
    function PostListComponent(postsService, authService, store) {
        this.postsService = postsService;
        this.authService = authService;
        this.store = store;
        this.posts = [];
        this.isLoading = false;
        this.totalPosts = 0;
        this.postsPerPage = 5;
        this.currentPage = 1;
        this.pageSizeOptions = [1, 2, 5, 10];
        this.userIsAuthenticated = false;
        this.getState = this.store.select(src_app_store_app_states__WEBPACK_IMPORTED_MODULE_4__["selectAuthState"]);
    }
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.postsService.getPosts(this.postsPerPage, this.currentPage);
        this.userId = this.authService.getUserId();
        this.postsSub = this.postsService
            .getPostUpdateListener()
            .subscribe(function (postData) {
            _this.isLoading = false;
            _this.totalPosts = postData.postCount;
            _this.posts = postData.posts;
        });
        this.getState.subscribe(function (state) {
            _this.userIsAuthenticated = state.isAuthenticated;
            _this.userId = _this.authService.getUserId();
        });
    };
    PostListComponent.prototype.onChangedPage = function (pageData) {
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.postsPerPage = pageData.pageSize;
        this.postsService.getPosts(this.postsPerPage, this.currentPage);
    };
    PostListComponent.prototype.onDelete = function (postId) {
        var _this = this;
        this.isLoading = true;
        this.postsService.deletePost(postId).subscribe(function () {
            _this.postsService.getPosts(_this.postsPerPage, _this.currentPage);
        }, function () {
            _this.isLoading = false;
        });
    };
    PostListComponent.prototype.ngOnDestroy = function () {
        this.postsSub.unsubscribe();
    };
    PostListComponent.ctorParameters = function () { return [
        { type: _posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }
    ]; };
    PostListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-post-list",
            template: __webpack_require__(/*! raw-loader!./post-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/posts/post-list/post-list.component.html"),
            styles: [__webpack_require__(/*! ./post-list.component.css */ "./src/app/posts/post-list/post-list.component.css")]
        })
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.module.ts":
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../angular-material.module */ "./src/app/angular-material.module.ts");








var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_5__["PostCreateComponent"], _post_list_post_list_component__WEBPACK_IMPORTED_MODULE_6__["PostListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ]
        })
    ], PostsModule);
    return PostsModule;
}());



/***/ }),

/***/ "./src/app/posts/posts.service.ts":
/*!****************************************!*\
  !*** ./src/app/posts/posts.service.ts ***!
  \****************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");








var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/posts/";
var PostsService = /** @class */ (function () {
    function PostsService(http, router, _snackBar) {
        this.http = http;
        this.router = router;
        this._snackBar = _snackBar;
        this.posts = [];
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    PostsService.prototype.getPosts = function (postsPerPage, currentPage) {
        var _this = this;
        var queryParams = "?pagesize=" + postsPerPage + "&page=" + currentPage;
        this.http
            .get(BACKEND_URL + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (postData) {
            return {
                posts: postData.posts.map(function (post) {
                    return {
                        title: post.title,
                        content: post.content,
                        id: post._id,
                        imagePath: post.imagePath,
                        creator: post.creator,
                        creatorEmail: post.creatorEmail
                    };
                }),
                maxPosts: postData.maxPosts
            };
        }))
            .subscribe(function (transformedPostData) {
            _this.posts = transformedPostData.posts;
            _this.postsUpdated.next({
                posts: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_this.posts),
                postCount: transformedPostData.maxPosts
            });
        });
    };
    PostsService.prototype.getPostUpdateListener = function () {
        return this.postsUpdated.asObservable();
    };
    PostsService.prototype.getPost = function (id) {
        return this.http.get(BACKEND_URL + id);
    };
    PostsService.prototype.addPost = function (title, content, image) {
        var _this = this;
        var postData = new FormData();
        postData.append("title", title);
        postData.append("content", content);
        postData.append("image", image, title);
        this.http
            .post(BACKEND_URL, postData)
            .subscribe(function (responseData) {
            _this._snackBar.open('Post created succesfully', null, {
                duration: 2000,
            });
            _this.router.navigate(["/"]);
        });
    };
    PostsService.prototype.updatePost = function (id, title, content, image) {
        var _this = this;
        var postData;
        if (typeof image === "object") {
            postData = new FormData();
            postData.append("id", id);
            postData.append("title", title);
            postData.append("content", content);
            postData.append("image", image, title);
        }
        else {
            postData = {
                id: id,
                title: title,
                content: content,
                imagePath: image,
                creator: null
            };
        }
        this.http
            .put(BACKEND_URL + id, postData)
            .subscribe(function (response) {
            _this._snackBar.open('Post updated succesfully', null, {
                duration: 2000,
            });
            _this.router.navigate(["/"]);
        });
    };
    PostsService.prototype.deletePost = function (postId) {
        return this.http.delete(BACKEND_URL + postId);
    };
    PostsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
    ]; };
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: "root" })
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/store/actions/auth.actions.ts":
/*!***********************************************!*\
  !*** ./src/app/store/actions/auth.actions.ts ***!
  \***********************************************/
/*! exports provided: AuthActionTypes, LogIn, LogInSuccess, LogInFailure, SignUp, SignUpSuccess, SignUpFailure, LogOut, AutoLogin, UpdateUser, UpdateUserSuccess, UpdateUserFailure, ChangePassword, ChangePasswordSuccess, ChangePasswordFailed, GetStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogIn", function() { return LogIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInSuccess", function() { return LogInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInFailure", function() { return LogInFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpSuccess", function() { return SignUpSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpFailure", function() { return SignUpFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogOut", function() { return LogOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoLogin", function() { return AutoLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return UpdateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserSuccess", function() { return UpdateUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserFailure", function() { return UpdateUserFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePassword", function() { return ChangePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordSuccess", function() { return ChangePasswordSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordFailed", function() { return ChangePasswordFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStatus", function() { return GetStatus; });
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["LOGIN"] = "[Auth] Login";
    AuthActionTypes["LOGIN_SUCCESS"] = "[Auth] Login Success";
    AuthActionTypes["LOGIN_FAILURE"] = "[Auth] Login Failure";
    AuthActionTypes["SIGNUP"] = "[Auth] Signup";
    AuthActionTypes["SIGNUP_SUCCESS"] = "[Auth] Signup Success";
    AuthActionTypes["SIGNUP_FAILURE"] = "[Auth] Signup Failure";
    AuthActionTypes["LOGOUT"] = "[Auth] Logout";
    AuthActionTypes["GET_STATUS"] = "[Auth] GetStatus";
    AuthActionTypes["AUTO_LOGIN"] = "[Auth] Auto Login";
    AuthActionTypes["CHANGE_PASSWORD"] = "[User] Change Password";
    AuthActionTypes["CHANGE_PASSWORD_SUCCESS"] = "[User] Change Password Success";
    AuthActionTypes["CHANGE_PASSWORD_FAILED"] = "[User] Change Password Failed";
    AuthActionTypes["UPDATE_USER_DATA"] = "[User] Update User";
    AuthActionTypes["UPDATE_USER_DATA_SUCCESS"] = "[User] Update User Success";
    AuthActionTypes["UPDATE_USER_DATA_FAILURE"] = "[User] Update User Failure";
})(AuthActionTypes || (AuthActionTypes = {}));
var LogIn = /** @class */ (function () {
    function LogIn(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN;
    }
    LogIn.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LogIn;
}());

var LogInSuccess = /** @class */ (function () {
    function LogInSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_SUCCESS;
    }
    LogInSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LogInSuccess;
}());

var LogInFailure = /** @class */ (function () {
    function LogInFailure(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_FAILURE;
    }
    LogInFailure.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LogInFailure;
}());

var SignUp = /** @class */ (function () {
    function SignUp(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SIGNUP;
    }
    SignUp.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SignUp;
}());

var SignUpSuccess = /** @class */ (function () {
    function SignUpSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SIGNUP_SUCCESS;
    }
    SignUpSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SignUpSuccess;
}());

var SignUpFailure = /** @class */ (function () {
    function SignUpFailure(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SIGNUP_FAILURE;
    }
    SignUpFailure.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SignUpFailure;
}());

var LogOut = /** @class */ (function () {
    function LogOut() {
        this.type = AuthActionTypes.LOGOUT;
    }
    return LogOut;
}());

var AutoLogin = /** @class */ (function () {
    function AutoLogin(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.AUTO_LOGIN;
    }
    AutoLogin.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AutoLogin;
}());

var UpdateUser = /** @class */ (function () {
    function UpdateUser(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UPDATE_USER_DATA;
    }
    UpdateUser.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateUser;
}());

var UpdateUserSuccess = /** @class */ (function () {
    function UpdateUserSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UPDATE_USER_DATA_SUCCESS;
    }
    UpdateUserSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateUserSuccess;
}());

var UpdateUserFailure = /** @class */ (function () {
    function UpdateUserFailure(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.UPDATE_USER_DATA_FAILURE;
    }
    UpdateUserFailure.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateUserFailure;
}());

var ChangePassword = /** @class */ (function () {
    function ChangePassword(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.CHANGE_PASSWORD;
    }
    ChangePassword.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ChangePassword;
}());

var ChangePasswordSuccess = /** @class */ (function () {
    function ChangePasswordSuccess(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.CHANGE_PASSWORD_SUCCESS;
    }
    ChangePasswordSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ChangePasswordSuccess;
}());

var ChangePasswordFailed = /** @class */ (function () {
    function ChangePasswordFailed(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.CHANGE_PASSWORD_FAILED;
    }
    ChangePasswordFailed.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ChangePasswordFailed;
}());

var GetStatus = /** @class */ (function () {
    function GetStatus() {
        this.type = AuthActionTypes.GET_STATUS;
    }
    return GetStatus;
}());



/***/ }),

/***/ "./src/app/store/app.states.ts":
/*!*************************************!*\
  !*** ./src/app/store/app.states.ts ***!
  \*************************************/
/*! exports provided: reducers, selectAuthState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthState", function() { return selectAuthState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers_auth_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers/auth.reducers */ "./src/app/store/reducers/auth.reducers.ts");


var reducers = {
    auth: _reducers_auth_reducers__WEBPACK_IMPORTED_MODULE_1__["reducer"],
};
var selectAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');


/***/ }),

/***/ "./src/app/store/effects/auth.effects.ts":
/*!***********************************************!*\
  !*** ./src/app/store/effects/auth.effects.ts ***!
  \***********************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions, authService, _snackBar, router) {
        var _this = this;
        this.actions = actions;
        this.authService = authService;
        this._snackBar = _snackBar;
        this.router = router;
        this.LogIn = this.actions
            .pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"].LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) {
            return _this.authService.login(payload.email, payload.password)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
                return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["LogInSuccess"]({ user: user, email: payload.email });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["LogInFailure"]({ error: error });
            }));
        }));
        this.LogInSuccess = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"].LOGIN_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            _this._snackBar.open('Login succesfully', null, {
                duration: 2000,
            });
            localStorage.setItem("email", user.payload.email);
            _this.authService.loggedIn(user.payload.user);
        }));
        this.LogInFailure = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"].LOGIN_FAILURE));
        this.SignUp = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"].SIGNUP), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) {
            return _this.authService.createUser(payload.name, payload.email, payload.password)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
                return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SignUpSuccess"]({ name: payload.name, password: payload.password, email: payload.email });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SignUpFailure"]({ error: error });
            }));
        }));
        this.SignUpSuccess = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"].SIGNUP_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            return _this.authService.login(user.payload.email, user.payload.password)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
                _this._snackBar.open('Sign up succesfully', null, {
                    duration: 2000,
                });
                _this.authService.loggedIn(response);
            }));
        }));
        this.SignUpFailure = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"].SIGNUP_FAILURE));
        this.LogOut = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"].LOGOUT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            _this._snackBar.open('Logout succesfully', null, {
                duration: 2000,
            });
            _this.authService.logout();
        }));
        this.AutoLogin = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"].AUTO_LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }));
        this.ChangePassword = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"].CHANGE_PASSWORD), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            return _this.authService.changePassword(user)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
                return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["ChangePasswordSuccess"](result);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SignUpFailure"]({ error: error });
            }));
        }));
        this.ChangePasswordSuccess = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"].CHANGE_PASSWORD_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (loggedInData) {
            _this.authService.loggedIn(loggedInData);
        }));
        this.UpdateUser = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"].UPDATE_USER_DATA), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) {
            return _this.authService.updateUser(payload.id, payload.name, payload.email, payload.image)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
                return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateUserSuccess"]({ name: payload.name, email: payload.email, image: user.result.imagePath });
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                return new _actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["SignUpFailure"]({ error: error });
            }));
        }));
        this.UpdateUserSuccess = this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"].UPDATE_USER_DATA_SUCCESS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (user) {
            _this._snackBar.open('User updated succesfully', null, {
                duration: 2000,
            });
            localStorage.setItem("name", user.payload.name);
            localStorage.setItem("image", user.payload.image);
        }));
    }
    AuthEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], AuthEffects.prototype, "LogIn", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
    ], AuthEffects.prototype, "LogInSuccess", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
    ], AuthEffects.prototype, "LogInFailure", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], AuthEffects.prototype, "SignUp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
    ], AuthEffects.prototype, "SignUpSuccess", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
    ], AuthEffects.prototype, "SignUpFailure", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
    ], AuthEffects.prototype, "LogOut", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
    ], AuthEffects.prototype, "AutoLogin", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], AuthEffects.prototype, "ChangePassword", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
    ], AuthEffects.prototype, "ChangePasswordSuccess", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])()
    ], AuthEffects.prototype, "UpdateUser", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false })
    ], AuthEffects.prototype, "UpdateUserSuccess", void 0);
    AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/store/reducers/auth.reducers.ts":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/auth.reducers.ts ***!
  \*************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");


var initialState = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGIN_SUCCESS: {
            console.log(action);
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isAuthenticated: true, user: {
                    email: action.payload.email,
                    token: action.payload.token,
                    expiresIn: action.payload.expiresIn,
                    id: action.payload.userId,
                    name: action.payload.user.name,
                    image: action.payload.user.image
                }, errorMessage: null });
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGIN_FAILURE: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { errorMessage: 'Incorrect email and/or password.' });
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].SIGNUP_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isAuthenticated: true, user: {
                    token: action.payload.token,
                    email: action.payload.email,
                    name: action.payload.name
                }, errorMessage: null });
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].SIGNUP_FAILURE: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { errorMessage: 'That email is already in use.' });
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].LOGOUT: {
            return initialState;
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].AUTO_LOGIN: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isAuthenticated: true, user: {
                    email: action.payload.email,
                    name: action.payload.name,
                    image: action.payload.image
                } });
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].UPDATE_USER_DATA_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    image: action.payload.image
                } });
        }
        case _actions_auth_actions__WEBPACK_IMPORTED_MODULE_1__["AuthActionTypes"].CHANGE_PASSWORD_SUCCESS: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { isAuthenticated: true, user: {
                    email: action.payload.email,
                    token: action.payload.token,
                    expiresIn: action.payload.expiresIn,
                    id: action.payload.userId,
                    name: action.payload.name,
                    image: action.payload.user.image
                }, errorMessage: null });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/user/change-password/change-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n    margin: auto;\r\n}\r\n\r\n.changePasswordForm {\r\n    position: relative;\r\n}\r\n\r\n.changePasswordForm button {\r\n    margin-top: 20px;\r\n}\r\n\r\n.form-errors {\r\n    position: absolute;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    color: red;\r\n    font-size: 11px;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC91c2VyL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtc3Bpbm5lciB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jaGFuZ2VQYXNzd29yZEZvcm0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2hhbmdlUGFzc3dvcmRGb3JtIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1lcnJvcnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/user/change-password/change-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/change-password/change-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(store, activateRoute) {
        this.store = store;
        this.activateRoute = activateRoute;
        this.isLoading = false;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.changePasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)),
            repeatPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3))
        }, this.pwdMatchValidator);
    };
    ChangePasswordComponent.prototype.pwdMatchValidator = function (form) {
        return form.get('password').value === form.get('repeatPassword').value
            ? null : { 'mismatch': true };
    };
    ChangePasswordComponent.prototype.cheangePassword = function () {
        if (this.changePasswordForm.invalid) {
            return;
        }
        var payload = {
            newPassword: this.changePasswordForm.value.password,
            token: this.activateRoute.snapshot.params.id
        };
        this.store.dispatch(new src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["ChangePassword"](payload));
    };
    ChangePasswordComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/user/change-password/change-password.component.css")]
        })
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/user/edit-profile/edit-profile.component.css":
/*!**************************************************************!*\
  !*** ./src/app/user/edit-profile/edit-profile.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n  width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n  margin: auto;\r\n}\r\n\r\n.change-image {\r\n  margin-bottom: 10px;\r\n}\r\n\r\ninput[type=\"file\"] {\r\n  visibility: hidden;\r\n}\r\n\r\n.image-preview {\r\n  height: 5rem;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.image-preview img {\r\n  height: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1hdC1zcGlubmVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jaGFuZ2UtaW1hZ2Uge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IHtcclxuICBoZWlnaHQ6IDVyZW07XHJcbiAgbWFyZ2luOiAxcmVtIDA7XHJcbn1cclxuXHJcbi5pbWFnZS1wcmV2aWV3IGltZyB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/edit-profile/edit-profile.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/user/edit-profile/edit-profile.component.ts ***!
  \*************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/store/actions/auth.actions */ "./src/app/store/actions/auth.actions.ts");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var src_app_store_app_states__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/store/app.states */ "./src/app/store/app.states.ts");
/* harmony import */ var src_app_posts_post_create_mime_type_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/posts/post-create/mime-type.validator */ "./src/app/posts/post-create/mime-type.validator.ts");








var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(store, authService) {
        this.store = store;
        this.authService = authService;
        this.isLoading = false;
        this.getState = this.store.select(src_app_store_app_states__WEBPACK_IMPORTED_MODULE_6__["selectAuthState"]);
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getState.subscribe(function (state) {
            _this.user = state.user;
            _this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this.user.name),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_this.user.email),
                image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, {
                    validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    asyncValidators: [src_app_posts_post_create_mime_type_validator__WEBPACK_IMPORTED_MODULE_7__["mimeType"]]
                })
                // password: new FormControl(''),
            });
            _this.imagePreview = _this.user.image;
        });
    };
    EditProfileComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.userForm.patchValue({ image: file });
        this.userForm.get("image").updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    EditProfileComponent.prototype.saveUserData = function () {
        var payload = {
            id: this.authService.getUserId(),
            name: this.userForm.value.name,
            email: this.userForm.value.email,
            image: this.userForm.value.image
        };
        this.store.dispatch(new src_app_store_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateUser"](payload));
    };
    EditProfileComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
    ]; };
    EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/user/edit-profile/edit-profile.component.css")]
        })
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n    margin: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubWF0LXNwaW5uZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/user/forgot-password/forgot-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");




var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        this.forgotForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    };
    ForgotPasswordComponent.prototype.sendEmailForRestorePass = function () {
        var _this = this;
        this.isLoading = true;
        var payload = {
            email: this.forgotForm.value.email
        };
        this.authService.sendEmailForRestorePass(payload)
            .subscribe(function (response) {
            _this.isLoading = false;
            _this.responseMessage = response.message;
        }, function (error) {
            console.log(error);
        });
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/user/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/user/forgot-password/forgot-password.component.css")]
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "https://ngtravelapp.herokuapp.com/api" // https://ngtravelapp.herokuapp.com/api
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vsevolod.kuznietsov\study\repo\sevikk.github.io\travel-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map