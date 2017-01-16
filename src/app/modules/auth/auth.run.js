export function AuthRun($rootScope, $state, AuthService, authManager, Idle) {
    "ngInject";

    authManager.redirectWhenUnauthenticated();

    // change page title based on state
    $rootScope.$on('$stateChangeSuccess', (event, next, toState) => {
        if (AuthService.isSignedIn()) {
            if(AuthService.isLoggedOut()){
                AuthService.popupLogout();

                Idle.unwatch();
            }
            else{
                Idle.watch();
            }
        }

        if(AuthService.isRequireAuthenForView(next)){
            if(!AuthService.isSignedIn()){
                $state.go("auth");
            }
            else if(!AuthService.hasPermissionForView(next)){
                $state.go("forbidden");
            }
        }
    });

//    $rootScope.$on('IdleStart', function () {
//    });

    $rootScope.$on('IdleTimeout', function () {
        AuthService.popupLogout();
    });

    $rootScope.popupLogout = () => {
        AuthService.popupLogout();

        Idle.unwatch();
    };

    $rootScope.userLogout = () => {
        return AuthService.profile.first_name+" "+AuthService.profile.last_name;
    };
}
