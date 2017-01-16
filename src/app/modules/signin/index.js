import {SigninConfig} from "./signin.config";
import {SigninController} from "./signin.controller";

angular.module("Signin")
    .config(SigninConfig)
    .controller("SigninController", SigninController);

