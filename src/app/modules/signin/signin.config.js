export function SigninConfig($stateProvider) {
    "ngInject";

    $stateProvider
        .state("signin", {
            url: "/signin",
            templateUrl: "modules/auth/auth.html",
            controller: "AuthController",
            controllerAs: "auth",
            title: "Signin",
            data: {
                //css: "/css/signin/signin.css",
                authenticate: false,
                //permissions: ["restricted"]

            }
        });
};
