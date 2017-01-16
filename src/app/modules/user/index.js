//import {UserConfig} from "./user.config";
import {UserService} from "./user.service";
//import {UserController} from "./user.controller";

angular.module("User")
    //.config(UserConfig)
    .factory("UserService", UserService)
    //.controller("UserController", UserController);
