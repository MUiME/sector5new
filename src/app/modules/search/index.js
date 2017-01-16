import {SearchConfig} from "./search.config";
import {SearchController} from "./search.controller";

angular.module("Search")
    .config(SearchConfig)
    .controller("SearchController", SearchController);

//$(document).ready(function() {
//
//  var $searchc = $(".searchc"),
//      $input = $(".searchc-input"),
//      $close = $(".searchc-close"),
//      $svg = $(".searchc-svg"),
//      $path = $(".searchc-svg__path")[0],
//      initD = $svg.data("init"),
//      midD = $svg.data("mid"),
//      finalD = $svg.data("active"),
//      backDelay = 400,
//      midAnim = 200,
//      bigAnim = 400,
//      animating = false;
//
//  $(document).on("click", ".searchc:not(.active)", function() {
//    if (animating) return;
//    animating = true;
//    $searchc.addClass("active");
//
//    Snap($path).animate({"path": midD}, midAnim, mina.backin, function() {
//      Snap($path).animate({"path": finalD}, bigAnim, mina.easeinout, function() {
//        $input.addClass("visible");
//        $input.focus();
//        $close.addClass("visible");
//        animating = false;
//      });
//    });
//
//  });
//
//  $(document).on("click", ".searchc-close", function() {
//    if (animating) return;
//    animating = true;
//    $input.removeClass("visible");
//    $close.removeClass("visible");
//    $searchc.removeClass("active");
//
//    setTimeout(function() {
//      Snap($path).animate({"path": midD}, bigAnim, mina.easeinout, function() {
//        Snap($path).animate({"path": initD}, midAnim, mina.easeinout, function() {
//          animating = false;
//        });
//      });
//    }, backDelay);
//  });
//
//});
//
