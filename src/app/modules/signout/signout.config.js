export function SignoutConfig($stateProvider) {
    "ngInject";

    $stateProvider
        .state("signout", {
            url: "/signout",
            templateUrl: "modules/signout/signout.html",
            controller: "SignoutController",
            controllerAs: "signout",
            title: "Signin",
            data: {
                css: "/css/signout/signout.css",
                authenticate: true,
               // permissions: ["restricted"]

            }
        });
};
