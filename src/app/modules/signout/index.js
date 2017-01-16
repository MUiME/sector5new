import {SignoutConfig} from "./signout.config";
import {SignoutController} from "./signout.controller";

angular.module("Signout")
    .config(SignoutConfig)
    .controller("SignoutController", SignoutController);

