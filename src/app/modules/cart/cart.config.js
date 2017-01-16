export function CartConfig($stateProvider) {
    "ngInject";

    $stateProvider
        .state("main.cart", {
            url: "/order",
            title: "Order",
            data: {
                            css: "/css/cart/cart.css",
                            authenticate: true,
                            permissions: ["restricted"]
                        },
            views :{
                 "top" :{
                        templateUrl: "modules/cart/cart-top.html",
                        controller: "CartTopController",
                        controllerAs: "cart",


                 },
                "left" :{
                        templateUrl: "modules/cart/cart-left.html",
                        controller: "CartLeftController",
                        controllerAs: "cart",


                 },
                "center" :{
                        templateUrl: "modules/cart/cart-center.html",
                        controller: "CartCenterController",
                        controllerAs: "cart",


                 },
//                "right" :{
//                        templateUrl: "modules/cart/cart-right.html",
//                        controller: "CartRightController",
//                        controllerAs: "cart",
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
