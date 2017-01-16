export function MainAppRun(MainAppConstant, $rootScope, $state, AuthService) {
    "ngInject";

    // change page title based on state
    $rootScope.$on('$stateChangeSuccess', (event, next, toState) => {
        $rootScope.setPageTitle(toState.title);
    });

    // Helper method for setting the page's title
    $rootScope.setPageTitle = (title) => {
        $rootScope.pageTitle = '';
        if (title) {
            $rootScope.pageTitle += title;
            $rootScope.pageTitle += ' \u2014 ';
        }
        $rootScope.pageTitle += MainAppConstant.appName;
    };

    $rootScope.isUserLoggedIn = () => {
        return AuthService.isSignedIn();
    };
};
