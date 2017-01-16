export class SignoutController {
    constructor($window, $location) {
        "ngInject";

        delete $window.localStorage.token;

        $location.path("/downtown");
    }
}
