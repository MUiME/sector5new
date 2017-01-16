export function DowntownConfig($stateProvider) {
    "ngInject";

    $stateProvider
        .state("main.downtown", {
            url: "/downtown",
            title: "Downtown",
            data: {
                css: "/css/downtown/downtown.css",
                authenticate: false,
                //permissions: ["restricted"]
            },
            views :{
                "top":{
                    templateUrl: "modules/downtown/downtown-top.html",
                    controller: "DowntownTopController",
                    controllerAs: "downtown",

                },
                "left":{
                    templateUrl: "modules/downtown/downtown-left.html",
                    controller: "DowntownLeftController",
                    controllerAs: "downtown",

                },
                "center":{
                    templateUrl: "modules/downtown/downtown-center.html",
                    controller: "DowntownCenterController",
                    controllerAs: "downtown",
                },
//                "right":{
//                    templateUrl: "modules/downtown/downtown-right.html",
//                    controller: "DowntownRightController",
//                    controllerAs: "downtown",
//                }
                "right":{
                    templateUrl: "modules/chat/chat.html",
                    controller: "ChatController",
                    controllerAs: "chat"
                }
            }

        })
        .state("main.downtown.bank",{
            url: "/bank",
            views: {
                "center@main":{
                    templateUrl: "modules/downtown/downtown-center-bank.html",
                    controller: "DowntownCenterBankController",
                    controllerAs: "downtown",
                }
            }
        })
        .state("main.downtown.shop",{
            url: "/shop",
            views: {
                "center@main":{
                    templateUrl: "modules/downtown/downtown-center-shop.html",
                    controller: "DowntownCenterShopController",
                    controllerAs: "downtown",
                }
            }
        })
        .state("main.downtown.catalog",{
                url: "/catalog",
                views: {
                    "center@main":{
                        templateUrl: "modules/downtown/downtown-center-catalog.html",
                        controller: "DowntownCenterCatalogController",
                        controllerAs: "downtown",
                    }
                }
            })
        .state("main.downtown.item",{
            url: "/item",
            views: {
                "center@main":{
                    templateUrl: "modules/downtown/downtown-center-item.html",
                    controller: "DowntownCenterItemController",
                    controllerAs: "downtown",
                }
            }
        });
};
