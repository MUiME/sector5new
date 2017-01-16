import {MainAppConstant} from "./main-app.constant";
import {MainController} from "./main-app.controller";
import {MainAppConfig} from "./main-app.config";
import {MainAppRun} from "./main-app.run";

/**
 * @ngdoc overview
 * @name MainApp
 *
 * @description
 * #Description
 * Top-level module of application.
 */
angular.module("MainApp")
    .constant("MainAppConstant", MainAppConstant)
    .config(MainAppConfig)
    .controller("MainController", MainController)
    .run(MainAppRun);

//$(function () {
//    $('a[href="#search"]').on('click', function(event) {
//        event.preventDefault();
//        $('#search').addClass('open');
//        $('#search > form > input[type="search"]').focus();
//    });
//
//    $('#search, #search button.close').on('click keyup', function(event) {
//        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
//            $(this).removeClass('open');
//        }
//    });
//
//
//    //Do not include! This prevents the form from submitting for DEMO purposes only!
//    $('form').submit(function(event) {
//        event.preventDefault();
//        return false;
//    })
//});
