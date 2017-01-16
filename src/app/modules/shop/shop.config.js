export function ShopConfig($stateProvider) {
    "ngInject";

    $stateProvider
        .state("main.shop", {
            url: "/shop",
            title: "Shop",
            data: {
                            css: "/css/shop/shop.css",
                            authenticate: true,
                            //permissions: ["restricted"]
                        },
            views :{
                 "top" :{
                        templateUrl: "modules/shop/shop-top.html",
                        controller: "ShopTopController",
                        controllerAs: "shop",


                 },
                "left" :{
                        templateUrl: "modules/shop/shop-left.html",
                        controller: "ShopLeftController",
                        controllerAs: "shop",


                 },
                "center" :{
                        templateUrl: "modules/shop/shop-center.html",
                        controller: "ShopCenterController",
                        controllerAs: "shop",


                 },
//                "right" :{
//                        templateUrl: "modules/shop/shop-right.html",
//                        controller: "ShopRightController",
//                        controllerAs: "shop",
//
//
//                 }
                "right":{
                    templateUrl: "modules/chat/chat.html",
                    controller: "ChatController",
                    controllerAs: "chat"
                }

            }

        });
};
