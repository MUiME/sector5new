export function HelpConfig($stateProvider) {
    "ngInject";

    $stateProvider
        .state("main.help", {
            url: "/help",
            title: "Help",
            data: {
                        css: "/css/help/help.css",
                        authenticate: false,
                        //permissions: ["restricted"]
                    },
            views :{

                "top":{
                    templateUrl: "modules/help/help-top.html",
                    controller: "HelpTopController",
                    controllerAs: "help",
                },
                "left":{
                    templateUrl: "modules/help/help-left.html",
                    controller: "HelpLeftController",
                    controllerAs: "help",
                },
                "center":{
                    templateUrl: "modules/help/help-center.html",
                    controller: "HelpCenterController",
                    controllerAs: "help",

                },
//                "right":{
//                    templateUrl: "modules/help/help-right.html",
//                    controller: "HelpRightController",
//                    controllerAs: "help",
//
//                }
                "right":{
                    templateUrl: "modules/chat/chat.html",
                    controller: "ChatController",
                    controllerAs: "chat"
                }

            }

        });
};
