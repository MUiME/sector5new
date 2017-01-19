export function ChatRun($rootScope, $state, AuthService) {
    "ngInject";

    $rootScope.$on('$stateChangeSuccess', (event, next, toState) => {
        $rootScope.chatModuleSwitch = AuthService.isSignedIn()? "active": "inactive";
    });
}
