import {AuthConfig} from "./auth.config";
import {AuthService} from "./auth.service";
import {authInterceptor} from "./auth.interceptor";
import {AuthController} from "./auth.controller";
import {authScroll} from "./auth-scroll.directive";
import {authSigninInput} from "./auth-signin-input.directive";
import {authSignupInput} from "./auth-signup-input.directive";
import {authLogoutInput} from "./auth-logout-input.directive";
import {authRightsideSignin} from "./auth-rightside-signin.directive";
import {authRightsideSignup} from "./auth-rightside-signup.directive";
import {AuthRun} from "./auth.run";

/**
 * @ngdoc overview
 * @name Auth
 *
 * @description
 * #Description
 * Module for Auth page.
 */
angular.module("Auth")
    .config(AuthConfig)
    .service("AuthService", AuthService)
    .factory("authInterceptor", authInterceptor)
    .controller("AuthController", AuthController)
    .directive("authScroll", authScroll)
    .directive("authSigninInput", authSigninInput)
    .directive("authSignupInput", authSignupInput)
    .directive("authLogoutInput", authLogoutInput)
    .directive("authRightsideSignin", authRightsideSignin)
    .directive("authRightsideSignup", authRightsideSignup)
    .run(AuthRun);
