import {permissions} from "./permissions/permissions";
import {slideToggleHorizontal} from "./slide/slide-toggle-horizontal";

/**
 * @ngdoc directive
 * @name Directives.directive:permissions
 *
 * @description
 * Restricting access to page content
 */
angular.module("Directives")
    .directive("permissions", ["AuthService", permissions])
    .directive("slideToggleHorizontal", slideToggleHorizontal);
