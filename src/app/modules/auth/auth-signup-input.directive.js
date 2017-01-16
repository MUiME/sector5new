export function authSignupInput($timeout) {
    "ngInject";

    return {
        restrict: 'A',
        require: "ngModel",
        link: function(scope, elem, attrs, ctrl) {
            let _$timeout;

            function updateFirstInputError() {
                if(_$timeout){
                    $timeout.cancel(_$timeout);
                }
                _$timeout = $timeout(() => {
                    let elInputError = $(".auth .signup .signup-input-block.err *[auth-signup-input]");
                    if(elInputError.length){
                        let inputName = elInputError.attr("name");
                        scope.auth.firstInputError = inputName;
                    }
                    else{
                        scope.auth.firstInputError = null;
                    }
                }, ctrl.$options.debounce);
            }

            if(elem.prop("tagName") == "INPUT"){
                elem.bind('keyup', () => {
                    updateFirstInputError();
                });
            }
            else if(elem.prop("tagName") == "SELECT"){
                elem.bind('change', () => {
                    updateFirstInputError();
                });
            }
        }
    };
}
