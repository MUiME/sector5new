export function MainAppConfig($urlRouterProvider, $stateProvider, $locationProvider) {
    "ngInject";

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/downtown");

    $stateProvider
        .state("main", {
           // url: "/",
            templateUrl: "modules/(main-app)/main.html",
            controller: "MainController",
            controllerAs: "main",

            data: {
               // css: "/css/cart/cart.css",
                //authenticate: true,
            //
            }
        });
};
