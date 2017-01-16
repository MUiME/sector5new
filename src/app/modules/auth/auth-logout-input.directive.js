export function authLogoutInput() {
    "ngInject";

    return {
        restrict: 'A',
        require: "ngModel",
        link: function(scope, elem, attrs, ctrl) {
            elem.on('keydown', function(event){
                if(event.keyCode != 13){
                    scope.auth.error.logout = false;
                }
            });
        }
    };
}
