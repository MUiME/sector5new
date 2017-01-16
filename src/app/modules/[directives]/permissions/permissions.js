export function permissions(AuthService) {
    return {
        restrict: 'A',
        scope: {
            permissions: '='
        },

        link: function (scope, elem, attrs) {
            if (AuthService.userHasPermission(scope.permissions)) {
                elem.removeClass("ng-hide");
            }
            else {
                elem.addClass("ng-hide");
            }
        }
    }
};
