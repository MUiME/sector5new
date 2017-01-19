export function AuthConfig($stateProvider, $httpProvider, jwtOptionsProvider, IdleProvider, TitleProvider) {
    "ngInject";

    IdleProvider.idle(475); // x seconds idle
    IdleProvider.timeout(5); // after x seconds idle, time the user out
    TitleProvider.enabled(false);

    jwtOptionsProvider.config({
        tokenGetter($http, $window, jwtHelper) {
            "ngInject";

            if($window.localStorage.token){
                if(jwtHelper.isTokenExpired($window.localStorage.token)){
                    return null;
                }
                else{
                    return $http({
                        //url: MainAppConstant.apiPath+'/refreshToken',
                        //url: 'http://192.168.2.10:8000/refreshToken',
                        url: 'http://muime.ddns.net:8000/refreshToken',
                        // This will not send the JWT for this call
                        skipAuthorization: true,
                        method: 'POST',
                        data: { token: $window.localStorage.token }
                    }).then((respond) => {
                        $window.localStorage.token = respond.data.token;

                        return $window.localStorage.token;
                    });
                }
            }
            else{
                return null;
            }
        },
        unauthenticatedRedirector($window, $state, AuthService) {
            "ngInject";

            if(Auth.isSignedIn()){
                delete $window.localStorage.token;
                delete $window.localStorage.isLoggedOut;

                $state.go("auth");
            }
        },
        whiteListedDomains: ["localhost", "192.168.10.1", "192.168.2.10"]
    });

    $httpProvider.interceptors.push("jwtInterceptor");

    $stateProvider
        .state("auth", {
            templateUrl: "modules/auth/auth.html",
            controller: "AuthController",
            controllerAs: "auth",
            title: "Authentication",
            data: {
                authenticate: false,
                //css: "/css/auth/auth.css"
            },
//            resolve: {
//                deps: function ($q, $rootScope, $ocLazyLoad) {
//                    "ngInject";
//
//                    var deferred = $q.defer();
//
//                    $ocLazyLoad.load("/js/auth/index.js").then(function () {
//                        deferred.resolve();
//
//                        //$rootScope.$apply(function () { deferred.resolve(); });
//                    });
//
//                    return deferred.promise;
//
//                    // you can lazy load files for an existing module
//                    //return $ocLazyLoad.load(["/libs/jquery/jquery.min.js", "/js/auth/index.js"]);
//                }
//            }


            //js: "/js/auth/index.js"
        })
        .state("forbidden", {
            templateUrl: "modules/auth/forbidden.html",
            data: {
                authenticate: true
            }
        })
        .state("activate", {
            templateUrl: "modules/auth/activate.html",
            url: "/activate",
            controller: "AuthController",
            controllerAs: "auth",
            title: "Authentication",
            data: {
                authenticate: false,
                css: "/css/auth/auth.css"
            }
        });
};
