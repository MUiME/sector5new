export function authRegisterBirthday(AuthService) {
    "ngInject";

    return {
        restrict: 'AC',
//        require: 'AuthController',
//        require: 'ngModel',
        controller: "AuthController",
        link: function (scope, elem, attrs, ctrl) {
            console.log();


            console.log($('abcd'));


//            console.log(ctrl.user.byear);

//            elem.bind("change", () => {
//                //console.log(ctrl.user.byear);
//                console.log(this.user);
//            });

//            console.log(AuthService);

            //console.log("ss => "+ctrl.user.byear);


            scope.$watch(elem.value, (value) => {
//                format = value;
//                updateTime();

                console.log(ctrl);

                console.log(attrs);
            });
}
    };



//    return {
//        restrict: 'AC',
//        require: 'ngModel',
//        link: function(scope, elem, attrs, ctrl) {
//            let _$timeout;
//
//            elem.bind('keyup', () => {
//                // If timer is already running, kill it
//                if(timer) cancelTimer();
//
//                _$timeout =
//
//            })
//        }
//    };
}
