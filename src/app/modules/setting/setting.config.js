export function SettingConfig($stateProvider) {
    "ngInject";

    $stateProvider
        .state("main.setting", {
            url: "/setting",
            title: "Setting",
            data: {
                            css: "/css/setting/setting.css",
                            authenticate: true,
                            permissions: ["restricted"]
                        },
            views :{

                "top" :{
                        templateUrl: "modules/setting/setting-top.html",
                        controller: "SettingTopController",
                        controllerAs: "setting",


                },
                "left" :{
                        templateUrl: "modules/setting/setting-left.html",
                        controller: "SettingLeftController",
                        controllerAs: "setting",

                },
                "center" :{
                        templateUrl: "modules/setting/setting-center.html",
                        controller: "SettingCenterController",
                        controllerAs: "setting",

                },
//                "right" :{
//                        templateUrl: "modules/setting/setting-right.html",
//                        controller: "SettingRightController",
//                        controllerAs: "setting",
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
