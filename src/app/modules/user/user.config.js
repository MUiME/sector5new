export function UserConfig($stateProvider) {
    "ngInject";

    $stateProvider
        .state("user", {
            url: "/user",
            templateUrl: "modules/user/user.html",
            controller: "UserController as $ctrl",
            title: "User Page",
            data: {
                css: "/css/user.css"
            }
        });
};
